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

goog.require('org.jboss.search.response');

goog.require('goog.testing.jsunit');

var testNormalizer = function() {

    var response = {
        timed_out: false,
        hits: {
            hits : []
        }
    };

    var data = org.jboss.search.response.normalize(response,'test');

    assertEquals('user_query = "test"', 'test', data['user_query']);
    assertFalse('', data['timed_out']);
    assertTrue('', goog.isDefAndNotNull(data['hits']));
    assertTrue('', goog.isDefAndNotNull(data['hits']['hits']));
};

var testGravatarEmailHash = function() {

    assertEquals('', '6029b8a70a9e305525aa8f750d2a01c4', org.jboss.search.response.gravatarEmailHash('LKRZYZAN@redhat.com'));
    assertEquals('', '6029b8a70a9e305525aa8f750d2a01c4', org.jboss.search.response.gravatarEmailHash('lkrzyzan@redhat.com'));
    assertEquals('', '6029b8a70a9e305525aa8f750d2a01c4', org.jboss.search.response.gravatarEmailHash('  <lkrzyzan@redhat.com>'));
    assertEquals('', '6029b8a70a9e305525aa8f750d2a01c4', org.jboss.search.response.gravatarEmailHash('Libor Krzyzanek <lkrzyzan@redhat.com>'));

};

var testGravatarURI = function() {

    var url;

    url = org.jboss.search.response.gravatarURI('lkrzyzan@redhat.com');
    assertEquals('Should be equal', 'http://www.gravatar.com/avatar/6029b8a70a9e305525aa8f750d2a01c4?s=40', url.toString());
    assertTrue('By default the image size is 40', goog.string.caseInsensitiveEndsWith(url,'40'));

    url = org.jboss.search.response.gravatarURI('lkrzyzan@redhat.com', 100);
    assertEquals('Should be equal', 'http://www.gravatar.com/avatar/6029b8a70a9e305525aa8f750d2a01c4?s=100', url.toString());
    assertTrue('By default the image size is 100', goog.string.caseInsensitiveEndsWith(url,'100'));

    // if the opt_size is not a number, still return the default value
    url = org.jboss.search.response.gravatarURI('lkrzyzan@redhat.com', 'xx');
    assertEquals('Should be equal', 'http://www.gravatar.com/avatar/6029b8a70a9e305525aa8f750d2a01c4?s=40', url.toString());
    assertTrue('By default the image size is 40', goog.string.caseInsensitiveEndsWith(url,'40'));
};

var testGravatarURI_Memoized = function() {

    var memo1 = org.jboss.search.response.gravatarURI_Memo;
    var memo2 = org.jboss.search.response.gravatarURI_Memo;
    assertTrue('It returns a function', memo1 instanceof Function);
    assertTrue('Always return the same function', memo1 === memo2);

    var url1 = memo1('lkrzyzan@redhat.com');
    var url2 = memo2('lkrzyzan@redhat.com');
    assertTrue('Gives the same result', url1 === url2);


    var nomemo1 = org.jboss.search.response.gravatarURI;
    var nomemo2 = org.jboss.search.response.gravatarURI;
    assertTrue('It returns a function', nomemo1 instanceof Function);
    assertTrue('Always return the same function', nomemo1 === nomemo2);

    var url1 = nomemo1('lkrzyzan@redhat.com');
    var url2 = nomemo2('lkrzyzan@redhat.com');
    assertTrue('Different String instances', url1 !== url2);
    assertTrue('But same content', url1.valueOf() == url2.valueOf());
};