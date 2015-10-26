// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.core');
goog.require('cljs.core');
goog.require('demo.life_logic');
goog.require('demo.life_draw');
goog.require('om.dom');
goog.require('reagent.core');
goog.require('demo.routes');
goog.require('cljs.core.async');
goog.require('demo.db');
goog.require('demo.life_core');
goog.require('om.core');
demo.core.main = (function demo$core$main(dev_mode){
demo.life_core.main.call(null,dev_mode);

demo.routes.app_routes.call(null);

if(cljs.core.truth_(dev_mode)){
return alert([cljs.core.str("dev mode"),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"hello","hello",-245025397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,demo.db.db)))].join(''));
} else {
return null;
}
});

//# sourceMappingURL=core.js.map