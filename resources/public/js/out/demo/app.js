// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.app');
goog.require('cljs.core');
goog.require('demo.core');
goog.require('weasel.repl');
goog.require('figwheel.client');
demo.app.dev_mode = (cljs.core.truth_(cljs.core.first.call(null,cljs.core.first.call(null,d3.select(".is-dev"))))?true:false);
demo.app.main = (function demo$app$main(){
return demo.core.main.call(null);
});
demo.app.main.call(null);

//# sourceMappingURL=app.js.map