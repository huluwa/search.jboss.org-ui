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
 * @fileoverview Utility method to help generate search results pagination data.
 *
 * @author lvlcek@redhat.com (Lukas Vlcek)
 */

goog.provide('org.jboss.search.util.paginationGenerator');

goog.require('org.jboss.search.Variables');


/**
 * Returns array with simple data structure that can be easily used to generate
 * pagination element.
 *
 * @param {number} actual_page
 * @param {number} search_total_hits
 * @return {{total_pages: number, array: !Array.<{page: number, symbol: string}>}}
 */
org.jboss.search.util.paginationGenerator.generate = function(actual_page, search_total_hits) {
  var array = [];
  var result = { total_pages: 0, array: array};

  if (goog.isNumber(search_total_hits) && search_total_hits > 0) {

    var generateItem_ = function(page) {
      return {
        'page': page,
        'symbol': page.toString(10)
      };
    };

    var hits_per_page = org.jboss.search.Variables.SEARCH_RESULTS_PER_PAGE;
    var pagination_size = org.jboss.search.Variables.PAGINATION_MAX_ITEMS_COUNT;
    var total_pages = Math.ceil(search_total_hits / hits_per_page);
    result.total_pages = total_pages;

    // We grow the array from both sides (if possible), push is used as a flag
    // to determine whether we grow the array from the `left` (unshift) or `right` (push) hand-side.
    // Trying to start from the left-hand side.
    var push = false;
    while (
        result.array.length < pagination_size &&
        result.array.length < total_pages &&
        total_pages > 1
    ) {
      // we assume the array is always sorted (thanks to the way it is created)
      var max = (result.array.length > 0 ? result.array[result.array.length - 1].page : (actual_page > total_pages ? total_pages : actual_page));
      var min = (result.array.length > 0 ? result.array[0].page : (actual_page > total_pages ? total_pages : actual_page));
      var page;
      if (push) {
        // can we add next page?
        if (max < total_pages) {
          page = (result.array.length > 0 ? max + 1 : max);
          result.array.push(generateItem_(page));
        }
        push = !push;
      } else {
        // can we add previous page?
        if (min > 1) {
          page = (result.array.length > 0 ? min - 1 : min);
          result.array.unshift(generateItem_(page));
        }
        push = !push;
      }
      // 'symbol' : "&#9668;",  // <
      // 'symbol' : "&#9654;",  // >
    }
  }

  return result;
};
