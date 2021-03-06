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
 * @fileoverview Variables that can vary depending on target deployment.
 *
 * @author lvlcek@redhat.com (Lukas Vlcek)
 */
goog.provide('org.jboss.profile.Variables');


/**
 * Variables.
 */
org.jboss.profile.Variables = {

  /**
   * Base URL of DCP API.
   * @type {string}
   * @const
   */
  // API_URL_BASE_DCP: 'http://10.34.2.178:8080',
  // API_URL_BASE_DCP: 'http://dcp-dev.jboss.org:8080',
  // API_URL_BASE_DCP: 'http://dcp-jbossorgdev.rhcloud.com'
  API_URL_BASE_DCP: 'http://dcp-stg.jboss.org'
//  API_URL_BASE_DCP: 'http://dcp.jboss.org'

};
