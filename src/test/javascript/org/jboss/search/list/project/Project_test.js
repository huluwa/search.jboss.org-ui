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

goog.require('org.jboss.search.list.project.Project');

goog.require('goog.json');
goog.require('goog.async.Deferred');
goog.require('goog.testing.ContinuationTestCase');
goog.require('goog.testing.jsunit');


var testCase = new goog.testing.ContinuationTestCase('Continuation Test Case');
testCase.autoDiscoverTests();

// Standalone Closure Test Runner.
if (typeof G_testRunner != 'undefined') {
    G_testRunner.initialize(testCase);
}

var sample_response_data = '{"total":111,"hits":[{"id":"aerogear","data":{"code":"aerogear","name":"Aerogear"}},{"id":"apiviz","data":{"code":"apiviz","name":"APIviz"}},{"id":"arquillian","data":{"code":"arquillian","name":"Arquillian"}},{"id":"beanvalidation","data":{"code":"beanvalidation","name":"Bean Validation"}},{"id":"blacktie","data":{"code":"blacktie","name":"Blacktie"}},{"id":"boxgrinder","data":{"code":"boxgrinder","name":"BoxGrinder"}},{"id":"byteman","data":{"code":"byteman","name":"Byteman"}},{"id":"capedwarf","data":{"code":"capedwarf","name":"CapeDwarf"}},{"id":"cdi","data":{"code":"cdi","name":"CDI"}},{"id":"cloudtm","data":{"code":"cloudtm","name":"CloudTM"}},{"id":"davcache","data":{"code":"davcache","name":"DavCache"}},{"id":"dna","data":{"code":"dna","name":"DNA"}},{"id":"drools","data":{"code":"drools","name":"Drools"}},{"id":"ejb3","data":{"code":"ejb3","name":"EJB3"}},{"id":"embjopr","data":{"code":"embjopr","name":"Embedded Jopr"}},{"id":"envers","data":{"code":"envers","name":"Envers"}},{"id":"errai","data":{"code":"errai","name":"Errai"}},{"id":"exojcr","data":{"code":"exojcr","name":"eXo JCR"}},{"id":"forge","data":{"code":"forge","name":"Forge"}},{"id":"gatein_portletcontainer","data":{"code":"gatein_portletcontainer","name":"GateIn Portlet Container"}},{"id":"gatein","data":{"code":"gatein","name":"GateIn"}},{"id":"gravel","data":{"code":"gravel","name":"Gravel"}},{"id":"guvnor","data":{"code":"guvnor","name":"Guvnor"}},{"id":"hibernate_jpamodelgen","data":{"code":"hibernate_jpamodelgen","name":"Hibernate Metamodel Generator"}},{"id":"hibernate_ogm","data":{"code":"hibernate_ogm","name":"Hibernate OGM"}},{"id":"hibernate","data":{"code":"hibernate","name":"Hibernate"}},{"id":"hibernate_search","data":{"code":"hibernate_search","name":"Hibernate Search"}},{"id":"hibernate_shards","data":{"code":"hibernate_shards","name":"Hibernate Shards"}},{"id":"hibernate_tools","data":{"code":"hibernate_tools","name":"Hibernate Tools"}},{"id":"hibernate_validator","data":{"code":"hibernate_validator","name":"Hibernate Validator"}},{"id":"hornetq","data":{"code":"hornetq","name":"HornetQ"}},{"id":"immutant","data":{"code":"immutant","name":"Immutant"}},{"id":"infinispan","data":{"code":"infinispan","name":"Infinispan"}},{"id":"ironjacamar","data":{"code":"ironjacamar","name":"IronJacamar"}},{"id":"javassist","data":{"code":"javassist","name":"Javassist"}},{"id":"jbossaop","data":{"code":"jbossaop","name":"JBoss AOP"}},{"id":"jbossas_osgi","data":{"code":"jbossas_osgi","name":"OSGi"}},{"id":"jbossas","data":{"code":"jbossas","name":"JBoss Application Server 7"}},{"id":"jbossblog","data":{"code":"jbossblog","name":"JBoss Blog"}},{"id":"jbossbuild","data":{"code":"jbossbuild","name":"JBoss Build"}},{"id":"jbosscache","data":{"code":"jbosscache","name":"JBoss Cache"}},{"id":"jbossclustering","data":{"code":"jbossclustering","name":"JBoss Clustering"}},{"id":"jbosscommon","data":{"code":"jbosscommon","name":""}},{"id":"jbossdtf","data":{"code":"jbossdtf","name":"JBoss DTF"}},{"id":"jbossesb","data":{"code":"jbossesb","name":"JBoss ESB"}},{"id":"jbossforums","data":{"code":"jbossforums","name":"JBoss Forums"}},{"id":"jbossidentity","data":{"code":"jbossidentity","name":"JBoss Identity"}},{"id":"jbossiiop","data":{"code":"jbossiiop","name":"JBoss IIOP"}},{"id":"jbossjmx","data":{"code":"jbossjmx","name":"JBoss JMX"}},{"id":"jbossmarshalling","data":{"code":"jbossmarshalling","name":"JBoss Marshalling"}},{"id":"jbossmc","data":{"code":"jbossmc","name":"Microcontainer"}},{"id":"jbossmessaging","data":{"code":"jbossmessaging","name":"JBoss Messaging"}},{"id":"jbossportal","data":{"code":"jbossportal","name":"JBoss Portal"}},{"id":"jbossprofiler","data":{"code":"jbossprofiler","name":"JBoss Profiler"}},{"id":"jbossremoting","data":{"code":"jbossremoting","name":"JBoss Remoting"}},{"id":"jbosssso","data":{"code":"jbosssso","name":"JBoss SSO"}},{"id":"jbosstm","data":{"code":"jbosstm","name":"JBoss Transactions"}},{"id":"jbosstools","data":{"code":"jbosstools","name":"JBoss Tools"}},{"id":"jbossweb","data":{"code":"jbossweb","name":"JBoss Web"}},{"id":"jbosswiki","data":{"code":"jbosswiki","name":"JBoss Wiki"}},{"id":"jbossws","data":{"code":"jbossws","name":"JBoss Web Services"}},{"id":"jbpm","data":{"code":"jbpm","name":"jBPM"}},{"id":"jca","data":{"code":"jca","name":"JCA"}},{"id":"jdcom","data":{"code":"jdcom","name":"jDCOM"}},{"id":"jgroups","data":{"code":"jgroups","name":"JGroups"}},{"id":"jopr","data":{"code":"jopr","name":"RHQ"}},{"id":"jrunit","data":{"code":"jrunit","name":""}},{"id":"jsfunit","data":{"code":"jsfunit","name":"JSFUnit"}},{"id":"kosmos","data":{"code":"kosmos","name":"Kosmos"}},{"id":"mass","data":{"code":"mass","name":"Mass"}},{"id":"maven-buildmagic-thirdparty-plugin","data":{"code":"maven-buildmagic-thirdparty-plugin","name":"Maven Buildmagic Thirdparty Plugin"}},{"id":"maven-jboss-deploy-plugin","data":{"code":"maven-jboss-deploy-plugin","name":"Maven jBoss-deploy Plugin"}},{"id":"maven-jboss-retro-plugin","data":{"code":"maven-jboss-retro-plugin","name":"Maven jBoss-retro Plugin"}},{"id":"maven-jdocbook-plugin","data":{"code":"maven-jdocbook-plugin","name":"Maven jDocBook Plugin"}},{"id":"maven-jdocbook-style-plugin","data":{"code":"maven-jdocbook-style-plugin","name":"Maven jDocBook Style Plugin"}},{"id":"metajizer","data":{"code":"metajizer","name":"Metajizer"}},{"id":"mobicents","data":{"code":"mobicents","name":"Mobicents"}},{"id":"mod_cluster","data":{"code":"mod_cluster","name":"mod_cluster"}},{"id":"modeshape","data":{"code":"modeshape","name":"ModeShape"}},{"id":"narayana","data":{"code":"narayana","name":"Narayana"}},{"id":"netty","data":{"code":"netty","name":"Netty"}},{"id":"overlord","data":{"code":"overlord","name":"Overlord"}},{"id":"picketbox","data":{"code":"picketbox","name":"PicketBox"}},{"id":"picketlink","data":{"code":"picketlink","name":"PicketLink"}},{"id":"portletbridge","data":{"code":"portletbridge","name":"Portlet Bridge"}},{"id":"portletcontainer","data":{"code":"portletcontainer","name":"Portlet Container"}},{"id":"portletswap","data":{"code":"portletswap","name":"Portlet Swap"}},{"id":"pressgang","data":{"code":"pressgang","name":"PressGang"}},{"id":"reportingservices","data":{"code":"reportingservices","name":"Reporting Services"}},{"id":"resteasy","data":{"code":"resteasy","name":"RESTEasy"}},{"id":"rhq","data":{"code":"rhq","name":"RHQ"}},{"id":"richfaces","data":{"code":"richfaces","name":"RichFaces"}},{"id":"riftsaw","data":{"code":"riftsaw","name":"RiftSaw Open Source BPEL"}},{"id":"savara","data":{"code":"savara","name":"Savara"}},{"id":"scribble","data":{"code":"scribble","name":"Scribble"}},{"id":"seam","data":{"code":"seam","name":"Seam"}},{"id":"serialization","data":{"code":"serialization","name":"Serialization"}},{"id":"shotoku","data":{"code":"shotoku","name":"Shotoku"}},{"id":"shrinkwrap","data":{"code":"shrinkwrap","name":"Shrinkwrap"}},{"id":"snowdrop","data":{"code":"snowdrop","name":"Snowdrop"}},{"id":"stormgrind_cirras","data":{"code":"stormgrind_cirras","name":"CirrAS"}},{"id":"stormgrind","data":{"code":"stormgrind","name":"StormGrind"}},{"id":"switchyard","data":{"code":"switchyard","name":"SwitchYard"}},{"id":"tattletale","data":{"code":"tattletale","name":"Tattletale"}},{"id":"teiiddesigner","data":{"code":"teiiddesigner","name":"Teiid Designer"}},{"id":"teiid","data":{"code":"teiid","name":"Teiid"}},{"id":"tohu","data":{"code":"tohu","name":"Tohu"}},{"id":"torquebox","data":{"code":"torquebox","name":"TorqueBox"}},{"id":"weld","data":{"code":"weld","name":"Weld"}},{"id":"wise","data":{"code":"wise","name":"Wise"}},{"id":"xnio","data":{"code":"xnio","name":"XNIO"}}]}';

function testProject() {

    var json = goog.json.unsafeParse(sample_response_data);

    var deferred = new goog.async.Deferred();
    var project = new org.jboss.search.list.project.Project(deferred);

    project
        .addCallback(function(){
            // data available now, your logic goes here...
            assertEquals('CDI', project.getDcpProjectName('cdi'));
        });

    setTimeout(function(){deferred.callback(json)}, 20);

    waitForCondition(
        function() {
            return project.hasFired();
        },
        function() {
            // noop, tests happen in project.addCallback()
        }
    );

};