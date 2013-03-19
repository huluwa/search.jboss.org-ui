// This file was autogenerated by calcdeps.py
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/App.js", ['org.jboss.search.App'], ['org.jboss.search.LookUp', 'org.jboss.search.page.filter.ProjectFilter', 'org.jboss.search.list.project.Project', 'org.jboss.search.page.element.Status', 'org.jboss.search.page.SearchPage', 'org.jboss.search.util.fragmentParser', 'org.jboss.search.util.fragmentParser.INTERNAL_param', 'org.jboss.search.util.fragmentParser.UI_param_suffix', 'org.jboss.search.suggestions.event.EventType', 'org.jboss.search.Constants', 'goog.async.Deferred', 'goog.events', 'goog.events.EventType', 'goog.dom', 'goog.dom.classes', 'goog.Disposable', 'goog.History', 'goog.Uri', 'goog.debug.Logger', 'goog.net.XhrLite', 'goog.debug.ErrorHandler']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/Constants.js", ['org.jboss.search.Constants'], []);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/LookUp.js", ['org.jboss.search.LookUp'], ['goog.History', 'goog.net.XhrManager']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/list/project/Project.js", ['org.jboss.search.list.project.Project'], ['goog.string', 'goog.object', 'goog.array', 'goog.async.Deferred']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/logging/Logging.js", ['org.jboss.search.logging.Logging', 'org.jboss.search.logging.Logging.Type'], ['org.jboss.search.util.fragmentParser', 'org.jboss.search.util.fragmentParser.INTERNAL_param', 'org.jboss.search.LookUp', 'goog.events', 'goog.history.EventType', 'goog.Disposable', 'goog.debug', 'goog.debug.Console', 'goog.debug.FancyWindow', 'goog.debug.Logger']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/page/SearchPage.js", ['org.jboss.search.page.SearchPage'], ['org.jboss.search.LookUp', 'org.jboss.search.util.urlGenerator', 'org.jboss.search.response', 'org.jboss.search.page.templates', 'org.jboss.search.page.SearchPageElements', 'org.jboss.search.page.UserIdle', 'org.jboss.search.Constants', 'org.jboss.search.SearchFieldHandler', 'org.jboss.search.suggestions.query.view.View', 'org.jboss.search.suggestions.event.EventType', 'org.jboss.search.page.event.QuerySubmitted', 'goog.async.Delay', 'goog.dom', 'goog.dom.classes', 'goog.events', 'goog.events.KeyCodes', 'goog.events.KeyEvent', 'goog.events.EventType', 'goog.events.EventTarget', 'goog.object', 'goog.string', 'goog.Uri', 'goog.debug.Logger']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/page/SearchPageElements.js", ['org.jboss.search.page.SearchPageElements'], ['goog.Disposable']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/page/UserIdle.js", ['org.jboss.search.page.UserIdle'], ['org.jboss.search.LookUp', 'goog.dom', 'goog.Disposable']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/page/element/SearchFieldHandler.js", ['org.jboss.search.page.element.SearchFieldHandler'], ['goog.async.Delay', 'goog.Disposable', 'goog.events', 'goog.events.EventType', 'goog.events.KeyCodes', 'goog.events.KeyHandler', 'goog.events.InputHandler', 'goog.debug.Logger']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/page/element/Status.js", ['org.jboss.search.page.element.Status'], ['org.jboss.search.Constants', 'goog.dom', 'goog.dom.classes', 'goog.Disposable']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/page/event/EventType.js", ['org.jboss.search.page.event.EventType'], ['goog.events']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/page/event/QuerySubmitted.js", ['org.jboss.search.page.event.QuerySubmitted'], ['org.jboss.search.page.event.EventType', 'goog.events.Event']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/page/filter/ProjectFilter.js", ['org.jboss.search.page.filter.ProjectFilter'], ['org.jboss.search.page.filter.templates', 'org.jboss.search.Constants', 'goog.string', 'goog.events', 'goog.events.KeyHandler', 'goog.events.KeyHandler.EventType', 'goog.dom', 'goog.Uri', 'goog.Disposable']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/response/normalize.js", ['org.jboss.search.response'], ['org.jboss.search.Constants', 'org.jboss.search.util.paginationGenerator', 'org.jboss.search.LookUp', 'goog.date', 'goog.date.DateTime', 'goog.object', 'goog.array', 'goog.string', 'goog.format.EmailAddress', 'goog.crypt', 'goog.crypt.Md5', 'goog.memoize']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/suggestions/event/EventType.js", ['org.jboss.search.suggestions.event.EventType'], ['goog.events']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/suggestions/event/SearchFinish.js", ['org.jboss.search.suggestions.event.SearchFinish'], ['org.jboss.search.suggestions.event.EventType', 'goog.events.Event']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/suggestions/event/SearchStart.js", ['org.jboss.search.suggestions.event.SearchStart'], ['org.jboss.search.suggestions.event.EventType', 'goog.events.Event']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/suggestions/query/model/Model.js", ['org.jboss.search.suggestions.query.model.Model', 'org.jboss.search.suggestions.query.model.Search', 'org.jboss.search.suggestions.query.model.Suggestion'], ['goog.object']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/suggestions/query/view/View.js", ['org.jboss.search.suggestions.query.view.View'], ['org.jboss.search.suggestions.templates', 'goog.Disposable', 'goog.dom', 'goog.dom.classes', 'goog.object', 'goog.string', 'goog.debug.Logger']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/util/fragmentParser.js", ['org.jboss.search.util.fragmentParser', 'org.jboss.search.util.fragmentParser.UI_param', 'org.jboss.search.util.fragmentParser.UI_param_suffix', 'org.jboss.search.util.fragmentParser.INTERNAL_param'], ['goog.array', 'goog.string']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/util/paginationGenerator.js", ['org.jboss.search.util.paginationGenerator'], ['org.jboss.search.Constants']);
goog.addDependency("../../../src/main/javascript_source/org/jboss/search/util/urlGenerator.js", ['org.jboss.search.util.urlGenerator', 'org.jboss.search.util.urlGenerator.QueryParams'], ['goog.Uri', 'org.jboss.search.Constants']);
goog.addDependency("../../../src/test/javascript/org/jboss/search/page/SearchPageElements_test.js", [], ['org.jboss.search.page.SearchPageElements', 'goog.dom', 'goog.testing.jsunit']);
goog.addDependency("../../../src/test/javascript/org/jboss/search/page/element/Status_test.js", [], ['org.jboss.search.page.element.Status', 'goog.dom', 'goog.testing.jsunit']);
goog.addDependency("../../../src/test/javascript/org/jboss/search/page/element/StatusAsync_test.js", [], ['org.jboss.search.page.element.Status', 'goog.dom', 'goog.testing.ContinuationTestCase', 'goog.testing.jsunit']);
