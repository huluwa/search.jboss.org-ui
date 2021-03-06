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
 * @fileoverview
 *
 * @author lvlcek@redhat.com (Lukas Vlcek)
 */

goog.provide('org.jboss.search.page.filter.DateRangeChanged');

goog.require('goog.events.Event');
goog.require('org.jboss.search.page.filter.DateFilterEventType');



/**
 * Event represents change in date filter caused by selection in InputDatePicker.
 * Granularity of both the from and to constructor parameters is kept up to days, anything below (hours, minutes,
 * seconds and millis) is dropped.
 *
 * @param {goog.date.DateTime|undefined} from
 * @param {goog.date.DateTime|undefined} to
 * @constructor
 * @extends {goog.events.Event}
 */
org.jboss.search.page.filter.DateRangeChanged = function(from, to) {
  goog.events.Event.call(this, org.jboss.search.page.filter.DateFilterEventType.DATE_RANGE_CHANGED);

  /**
   * @type {goog.date.DateTime}
   * @private
   */
  this.from_ = goog.isDef(from) ? from : null;

  /**
   * @type {goog.date.DateTime}
   * @private
   */
  this.to_ = goog.isDef(to) ? to : null;

  if (goog.isDefAndNotNull(this.from_)) {
    this.from_.setHours(0);
    this.from_.setMinutes(0);
    this.from_.setSeconds(0);
    this.from_.setMilliseconds(0);
  }

  if (goog.isDefAndNotNull(this.to_)) {
    this.to_.setHours(0);
    this.to_.setMinutes(0);
    this.to_.setSeconds(0);
    this.to_.setMilliseconds(0);
  }
};
goog.inherits(org.jboss.search.page.filter.DateRangeChanged, goog.events.Event);


/**
 * @return {goog.date.DateTime}
 */
org.jboss.search.page.filter.DateRangeChanged.prototype.getFrom = function() {
  return this.from_;
};


/**
 * @return {goog.date.DateTime}
 */
org.jboss.search.page.filter.DateRangeChanged.prototype.getTo = function() {
  return this.to_;
};
