// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.util');
goog.require('cljs.core');
demo.util.select_values = cljs.core.comp.call(null,cljs.core.vals,cljs.core.select_keys);
demo.util.get_jskeys = null;
/**
 * returns map with new values functions of old values
 *   given list of k-fn pairs
 */
demo.util.alter_map = (function demo$util$alter_map(m,k_fns){
return cljs.core.reduce.call(null,(function (p1__32760_SHARP_,p2__32761_SHARP_){
return cljs.core.assoc.call(null,p1__32760_SHARP_,cljs.core.first.call(null,p2__32761_SHARP_),cljs.core.second.call(null,p2__32761_SHARP_).call(null,p1__32760_SHARP_));
}),m,k_fns);
});
demo.util.log = (function demo$util$log(var_args){
var args__31509__auto__ = [];
var len__31502__auto___32764 = arguments.length;
var i__31503__auto___32765 = (0);
while(true){
if((i__31503__auto___32765 < len__31502__auto___32764)){
args__31509__auto__.push((arguments[i__31503__auto___32765]));

var G__32766 = (i__31503__auto___32765 + (1));
i__31503__auto___32765 = G__32766;
continue;
} else {
}
break;
}

var argseq__31510__auto__ = ((((1) < args__31509__auto__.length))?(new cljs.core.IndexedSeq(args__31509__auto__.slice((1)),(0))):null);
return demo.util.log.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31510__auto__);
});

demo.util.log.cljs$core$IFn$_invoke$arity$variadic = (function (msg,rest){
return console.log([cljs.core.str(msg),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,rest))].join(''));
});

demo.util.log.cljs$lang$maxFixedArity = (1);

demo.util.log.cljs$lang$applyTo = (function (seq32762){
var G__32763 = cljs.core.first.call(null,seq32762);
var seq32762__$1 = cljs.core.next.call(null,seq32762);
return demo.util.log.cljs$core$IFn$_invoke$arity$variadic(G__32763,seq32762__$1);
});
demo.util.clear_component = (function demo$util$clear_component(){
return null;
});
demo.util.avail_height = document.documentElement.clientHeight;
demo.util.avail_width = document.documentElement.clientWidth;
demo.util.d3_select = (function demo$util$d3_select(thing){
return d3.select(thing);
});

//# sourceMappingURL=util.js.map