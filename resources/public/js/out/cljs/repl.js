// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__35136_35140 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35137_35141 = null;
var count__35138_35142 = (0);
var i__35139_35143 = (0);
while(true){
if((i__35139_35143 < count__35138_35142)){
var f_35144 = cljs.core._nth.call(null,chunk__35137_35141,i__35139_35143);
cljs.core.println.call(null,"  ",f_35144);

var G__35145 = seq__35136_35140;
var G__35146 = chunk__35137_35141;
var G__35147 = count__35138_35142;
var G__35148 = (i__35139_35143 + (1));
seq__35136_35140 = G__35145;
chunk__35137_35141 = G__35146;
count__35138_35142 = G__35147;
i__35139_35143 = G__35148;
continue;
} else {
var temp__4425__auto___35149 = cljs.core.seq.call(null,seq__35136_35140);
if(temp__4425__auto___35149){
var seq__35136_35150__$1 = temp__4425__auto___35149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35136_35150__$1)){
var c__28450__auto___35151 = cljs.core.chunk_first.call(null,seq__35136_35150__$1);
var G__35152 = cljs.core.chunk_rest.call(null,seq__35136_35150__$1);
var G__35153 = c__28450__auto___35151;
var G__35154 = cljs.core.count.call(null,c__28450__auto___35151);
var G__35155 = (0);
seq__35136_35140 = G__35152;
chunk__35137_35141 = G__35153;
count__35138_35142 = G__35154;
i__35139_35143 = G__35155;
continue;
} else {
var f_35156 = cljs.core.first.call(null,seq__35136_35150__$1);
cljs.core.println.call(null,"  ",f_35156);

var G__35157 = cljs.core.next.call(null,seq__35136_35150__$1);
var G__35158 = null;
var G__35159 = (0);
var G__35160 = (0);
seq__35136_35140 = G__35157;
chunk__35137_35141 = G__35158;
count__35138_35142 = G__35159;
i__35139_35143 = G__35160;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
if(cljs.core.truth_((function (){var or__27663__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__27663__auto__)){
return or__27663__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m));
} else {
cljs.core.prn.call(null,cljs.core.second.call(null,new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m)));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

return cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));
}
});

//# sourceMappingURL=repl.js.map