// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.util');
goog.require('cljs.core');
demo.util.select_values = cljs.core.comp.call(null,cljs.core.vals,cljs.core.select_keys);
/**
 * returns map with new values functions of old values
 *   given list of k-fn pairs
 */
demo.util.alter_map = (function demo$util$alter_map(m,k_fns){
return cljs.core.reduce.call(null,(function (p1__34395_SHARP_,p2__34396_SHARP_){
return cljs.core.assoc.call(null,p1__34395_SHARP_,cljs.core.first.call(null,p2__34396_SHARP_),cljs.core.second.call(null,p2__34396_SHARP_).call(null,p1__34395_SHARP_));
}),m,k_fns);
});
demo.util.log = (function demo$util$log(var_args){
var args__31493__auto__ = [];
var len__31486__auto___34399 = arguments.length;
var i__31487__auto___34400 = (0);
while(true){
if((i__31487__auto___34400 < len__31486__auto___34399)){
args__31493__auto__.push((arguments[i__31487__auto___34400]));

var G__34401 = (i__31487__auto___34400 + (1));
i__31487__auto___34400 = G__34401;
continue;
} else {
}
break;
}

var argseq__31494__auto__ = ((((1) < args__31493__auto__.length))?(new cljs.core.IndexedSeq(args__31493__auto__.slice((1)),(0))):null);
return demo.util.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31494__auto__);
});

demo.util.log.cljs$core$IFn$_invoke$arity$variadic = (function (msg,rest){
return console.log([cljs.core.str(msg),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,rest))].join(''));
});

demo.util.log.cljs$lang$maxFixedArity = (1);

demo.util.log.cljs$lang$applyTo = (function (seq34397){
var G__34398 = cljs.core.first.call(null,seq34397);
var seq34397__$1 = cljs.core.next.call(null,seq34397);
return demo.util.log.cljs$core$IFn$_invoke$arity$variadic(G__34398,seq34397__$1);
});
demo.util.clear_component = (function demo$util$clear_component(){
return null;
});
demo.util.avail_height = document.documentElement.clientHeight;
demo.util.avail_width = document.documentElement.clientWidth;

//# sourceMappingURL=util.js.map