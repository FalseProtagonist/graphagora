// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.util');
goog.require('cljs.core');
demo.util.select_values = cljs.core.comp.call(null,cljs.core.vals,cljs.core.select_keys);
/**
 * returns map with new values functions of old values
 *   given list of k-fn pairs
 */
demo.util.alter_map = (function demo$util$alter_map(m,k_fns){
return cljs.core.reduce.call(null,(function (p1__33130_SHARP_,p2__33131_SHARP_){
return cljs.core.assoc.call(null,p1__33130_SHARP_,cljs.core.first.call(null,p2__33131_SHARP_),cljs.core.second.call(null,p2__33131_SHARP_).call(null,p1__33130_SHARP_));
}),m,k_fns);
});

//# sourceMappingURL=util.js.map