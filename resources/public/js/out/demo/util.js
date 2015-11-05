// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.util');
goog.require('cljs.core');
demo.util.select_values = cljs.core.comp.call(null,cljs.core.vals,cljs.core.select_keys);
/**
 * returns map with new values functions of old values
 *   given list of k-fn pairs
 */
demo.util.alter_map = (function demo$util$alter_map(m,k_fns){
return cljs.core.reduce.call(null,(function (p1__34404_SHARP_,p2__34405_SHARP_){
return cljs.core.assoc.call(null,p1__34404_SHARP_,cljs.core.first.call(null,p2__34405_SHARP_),cljs.core.second.call(null,p2__34405_SHARP_).call(null,p1__34404_SHARP_));
}),m,k_fns);
});
demo.util.log = (function demo$util$log(var_args){
var args__31493__auto__ = [];
var len__31486__auto___34408 = arguments.length;
var i__31487__auto___34409 = (0);
while(true){
if((i__31487__auto___34409 < len__31486__auto___34408)){
args__31493__auto__.push((arguments[i__31487__auto___34409]));

var G__34410 = (i__31487__auto___34409 + (1));
i__31487__auto___34409 = G__34410;
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

demo.util.log.cljs$lang$applyTo = (function (seq34406){
var G__34407 = cljs.core.first.call(null,seq34406);
var seq34406__$1 = cljs.core.next.call(null,seq34406);
return demo.util.log.cljs$core$IFn$_invoke$arity$variadic(G__34407,seq34406__$1);
});

//# sourceMappingURL=util.js.map