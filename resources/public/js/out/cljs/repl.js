// Compiled by ClojureScript 1.7.145 {}
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41976_41990 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41977_41991 = null;
var count__41978_41992 = (0);
var i__41979_41993 = (0);
while(true){
if((i__41979_41993 < count__41978_41992)){
var f_41994 = cljs.core._nth.call(null,chunk__41977_41991,i__41979_41993);
cljs.core.println.call(null,"  ",f_41994);

var G__41995 = seq__41976_41990;
var G__41996 = chunk__41977_41991;
var G__41997 = count__41978_41992;
var G__41998 = (i__41979_41993 + (1));
seq__41976_41990 = G__41995;
chunk__41977_41991 = G__41996;
count__41978_41992 = G__41997;
i__41979_41993 = G__41998;
continue;
} else {
var temp__4425__auto___41999 = cljs.core.seq.call(null,seq__41976_41990);
if(temp__4425__auto___41999){
var seq__41976_42000__$1 = temp__4425__auto___41999;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41976_42000__$1)){
var c__29709__auto___42001 = cljs.core.chunk_first.call(null,seq__41976_42000__$1);
var G__42002 = cljs.core.chunk_rest.call(null,seq__41976_42000__$1);
var G__42003 = c__29709__auto___42001;
var G__42004 = cljs.core.count.call(null,c__29709__auto___42001);
var G__42005 = (0);
seq__41976_41990 = G__42002;
chunk__41977_41991 = G__42003;
count__41978_41992 = G__42004;
i__41979_41993 = G__42005;
continue;
} else {
var f_42006 = cljs.core.first.call(null,seq__41976_42000__$1);
cljs.core.println.call(null,"  ",f_42006);

var G__42007 = cljs.core.next.call(null,seq__41976_42000__$1);
var G__42008 = null;
var G__42009 = (0);
var G__42010 = (0);
seq__41976_41990 = G__42007;
chunk__41977_41991 = G__42008;
count__41978_41992 = G__42009;
i__41979_41993 = G__42010;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42011 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28906__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28906__auto__)){
return or__28906__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42011);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42011)))?cljs.core.second.call(null,arglists_42011):arglists_42011));
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

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__41980 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41981 = null;
var count__41982 = (0);
var i__41983 = (0);
while(true){
if((i__41983 < count__41982)){
var vec__41984 = cljs.core._nth.call(null,chunk__41981,i__41983);
var name = cljs.core.nth.call(null,vec__41984,(0),null);
var map__41985 = cljs.core.nth.call(null,vec__41984,(1),null);
var map__41985__$1 = ((((!((map__41985 == null)))?((((map__41985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41985):map__41985);
var doc = cljs.core.get.call(null,map__41985__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__41985__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__42012 = seq__41980;
var G__42013 = chunk__41981;
var G__42014 = count__41982;
var G__42015 = (i__41983 + (1));
seq__41980 = G__42012;
chunk__41981 = G__42013;
count__41982 = G__42014;
i__41983 = G__42015;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__41980);
if(temp__4425__auto__){
var seq__41980__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41980__$1)){
var c__29709__auto__ = cljs.core.chunk_first.call(null,seq__41980__$1);
var G__42016 = cljs.core.chunk_rest.call(null,seq__41980__$1);
var G__42017 = c__29709__auto__;
var G__42018 = cljs.core.count.call(null,c__29709__auto__);
var G__42019 = (0);
seq__41980 = G__42016;
chunk__41981 = G__42017;
count__41982 = G__42018;
i__41983 = G__42019;
continue;
} else {
var vec__41987 = cljs.core.first.call(null,seq__41980__$1);
var name = cljs.core.nth.call(null,vec__41987,(0),null);
var map__41988 = cljs.core.nth.call(null,vec__41987,(1),null);
var map__41988__$1 = ((((!((map__41988 == null)))?((((map__41988.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41988.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41988):map__41988);
var doc = cljs.core.get.call(null,map__41988__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__41988__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__42020 = cljs.core.next.call(null,seq__41980__$1);
var G__42021 = null;
var G__42022 = (0);
var G__42023 = (0);
seq__41980 = G__42020;
chunk__41981 = G__42021;
count__41982 = G__42022;
i__41983 = G__42023;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map