/*
 * JBoss, Home of Professional Open Source
 * Copyright 2012 Red Hat Inc. and/or its affiliates and other contributors
 * as indicated by the @authors tag. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Implementation of QueryService that is using XHR manager. This class is expected to be used in production code.
 * One fundamental aspect of this service is that client can rely on the fact that only a single request of given "type" can run
 * at a time. For example if a new userQuery request is about to be fired then it makes sure that any existing (prior) requests
 * are aborted first (and of course relevant events are dispatched according to this).
 * @author Lukas Vlcek (lvlcek@redhat.com)
 */

goog.provide('org.jboss.profile.service.query.QueryServiceXHR');

goog.require('org.jboss.core.context.RequestParams');
goog.require('org.jboss.core.context.RequestParams.Order');
goog.require('org.jboss.core.context.RequestParamsFactory');
goog.require('org.jboss.core.service.Locator');
goog.require('org.jboss.core.service.query.QueryService');
goog.require('org.jboss.core.service.query.QueryServiceDispatcher');
goog.require('org.jboss.core.util.urlGenerator');
goog.require('org.jboss.core.Constants');
goog.require('org.jboss.profile.Constants');
goog.require('goog.array');
goog.require('goog.net.XhrManager');
goog.require('goog.Uri');
goog.require('goog.Disposable');

/**
 * Create a new instance.
 *
 * @param {!org.jboss.core.service.query.QueryServiceDispatcher} dispatcher
 * @constructor
 * @implements {org.jboss.core.service.query.QueryService}
 * @extends {goog.Disposable}
 */
org.jboss.profile.service.query.QueryServiceXHR = function(dispatcher) {

	goog.Disposable.call(this);

	/**
	 * @type {!org.jboss.core.service.query.QueryServiceDispatcher}
	 * @private
	 */
	this.dispatcher_ = dispatcher;

	/**
	 * @type {!goog.Uri}
	 * @private
	 */
	this.searchURI_ = goog.Uri.parse(org.jboss.profile.Constants.API_URL_SEARCH_QUERY);

};
goog.inherits(org.jboss.profile.service.query.QueryServiceXHR, goog.Disposable);

/** @inheritDoc */
org.jboss.profile.service.query.QueryServiceXHR.prototype.disposeInternal = function() {
	// Call the superclass's disposeInternal() method.
	org.jboss.profile.service.query.QueryServiceXHR.superClass_.disposeInternal.call(this);

	delete this.dispatcher_;
	delete this.searchURI_;
//	delete this.searchSuggestionsURI_;
};

/** @inheritDoc */
org.jboss.profile.service.query.QueryServiceXHR.prototype.userQuery = function (requestParams) {

	var ids = this.getXHRManager_().getOutstandingRequestIds();
	if (goog.array.contains(ids, org.jboss.profile.Constants.SEARCH_QUERY_REQUEST_ID)) {
		this.getXHRManager_().abort(org.jboss.profile.Constants.SEARCH_QUERY_REQUEST_ID, true);
		this.dispatcher_.dispatchUserQueryAbort();
	}

	// sanitize requestParams
	var rp_ = org.jboss.core.context.RequestParamsFactory.getInstance().reset().copy(requestParams)
		.setFrom(null).setTo(null).setPage(1).setDefaultOrder().build();

	var searchURI_ = this.searchURI_.clone();
	var query_url_string_ = org.jboss.core.util.urlGenerator.searchUrl(searchURI_, rp_, 0,
		{ fields: [], highlighting: false, size: 0});

};

/**
 * @override
 */
org.jboss.profile.service.query.QueryServiceXHR.prototype.userSuggestionQuery = function (query_string) {
	// noop, move this method to different interface (SuggestionsService)
};

/**
 * @return {!goog.net.XhrManager}
 * @private
 */
org.jboss.profile.service.query.QueryServiceXHR.prototype.getXHRManager_ = function() {
	return org.jboss.core.service.Locator.getInstance().getLookup().getXhrManager();
};