// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.routes');
goog.require('cljs.core');
goog.require('clojure.set');
goog.require('domkm.silk');
goog.require('pushy.core');
goog.require('re_frame.core');
demo.routes.routes = domkm.silk.routes.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"home","home",-74557309),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"about","about",1423892543),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["about"], null)], null)], null)], null));
demo.routes.sanitize_silk_keywords = (function demo$routes$sanitize_silk_keywords(matched_route){
return clojure.set.rename_keys.call(null,matched_route,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("domkm.silk","name","domkm.silk/name",607245322),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword("domkm.silk","pattern","domkm.silk/pattern",-593943136),new cljs.core.Keyword(null,"pattern","pattern",242135423),new cljs.core.Keyword("domkm.silk","routes","domkm.silk/routes",626824359),new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.Keyword("domkm.silk","url","domkm.silk/url",1456306613),new cljs.core.Keyword(null,"url","url",276297046)], null));
});
demo.routes.parse_url = (function demo$routes$parse_url(url){
return domkm.silk.arrive.call(null,demo.routes.routes,url);
});
demo.routes.dispatch_route = (function demo$routes$dispatch_route(matched_route){
var matched_route__$1 = demo.routes.sanitize_silk_keywords.call(null,matched_route);
var panel_name = cljs.core.keyword.call(null,[cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(matched_route__$1))),cljs.core.str("-panel")].join(''));
return alert([cljs.core.str(panel_name)].join(''));
});
demo.routes.app_routes = (function demo$routes$app_routes(){
return pushy.core.start_BANG_.call(null,pushy.core.pushy.call(null,demo.routes.dispatch_route,demo.routes.parse_url));
});

//# sourceMappingURL=routes.js.map