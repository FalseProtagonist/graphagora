// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.life_logic');
goog.require('cljs.core');
demo.life_logic.states = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dead","dead",-1946604091),null,new cljs.core.Keyword(null,"live","live",-1610148039),null], null), null);
demo.life_logic.alive = (function demo$life_logic$alive(num_neighbours,current_state){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [(3),new cljs.core.Keyword(null,"live","live",-1610148039),(4),current_state], null),num_neighbours,new cljs.core.Keyword(null,"dead","dead",-1946604091));
});
demo.life_logic.select_values = cljs.core.comp.call(null,cljs.core.vals,cljs.core.select_keys);
demo.life_logic.get_circle_coordinates = (function demo$life_logic$get_circle_coordinates(nx,ny,r,colormap){
var individual_coords = (function (){var iter__29678__auto__ = (function demo$life_logic$get_circle_coordinates_$_iter__46753(s__46754){
return (new cljs.core.LazySeq(null,(function (){
var s__46754__$1 = s__46754;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__46754__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x = cljs.core.first.call(null,xs__4977__auto__);
var iterys__29674__auto__ = ((function (s__46754__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function demo$life_logic$get_circle_coordinates_$_iter__46753_$_iter__46755(s__46756){
return (new cljs.core.LazySeq(null,((function (s__46754__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__46756__$1 = s__46756;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__46756__$1);
if(temp__4425__auto____$1){
var s__46756__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46756__$2)){
var c__29676__auto__ = cljs.core.chunk_first.call(null,s__46756__$2);
var size__29677__auto__ = cljs.core.count.call(null,c__29676__auto__);
var b__46758 = cljs.core.chunk_buffer.call(null,size__29677__auto__);
if((function (){var i__46757 = (0);
while(true){
if((i__46757 < size__29677__auto__)){
var y = cljs.core._nth.call(null,c__29676__auto__,i__46757);
cljs.core.chunk_append.call(null,b__46758,(function (){var alive = cljs.core.rand_nth.call(null,cljs.core.seq.call(null,demo.life_logic.states));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * r) * (x + 0.5)),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * r) * (y + 0.5)),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"alive","alive",1424929930),alive,new cljs.core.Keyword(null,"color","color",1011675173),alive.call(null,colormap)], null);
})());

var G__46759 = (i__46757 + (1));
i__46757 = G__46759;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46758),demo$life_logic$get_circle_coordinates_$_iter__46753_$_iter__46755.call(null,cljs.core.chunk_rest.call(null,s__46756__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46758),null);
}
} else {
var y = cljs.core.first.call(null,s__46756__$2);
return cljs.core.cons.call(null,(function (){var alive = cljs.core.rand_nth.call(null,cljs.core.seq.call(null,demo.life_logic.states));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * r) * (x + 0.5)),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * r) * (y + 0.5)),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"alive","alive",1424929930),alive,new cljs.core.Keyword(null,"color","color",1011675173),alive.call(null,colormap)], null);
})(),demo$life_logic$get_circle_coordinates_$_iter__46753_$_iter__46755.call(null,cljs.core.rest.call(null,s__46756__$2)));
}
} else {
return null;
}
break;
}
});})(s__46754__$1,x,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__46754__$1,x,xs__4977__auto__,temp__4425__auto__))
;
var fs__29675__auto__ = cljs.core.seq.call(null,iterys__29674__auto__.call(null,cljs.core.range.call(null,ny)));
if(fs__29675__auto__){
return cljs.core.concat.call(null,fs__29675__auto__,demo$life_logic$get_circle_coordinates_$_iter__46753.call(null,cljs.core.rest.call(null,s__46754__$1)));
} else {
var G__46760 = cljs.core.rest.call(null,s__46754__$1);
s__46754__$1 = G__46760;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29678__auto__.call(null,cljs.core.range.call(null,nx));
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"circles","circles",-1947060917),individual_coords,new cljs.core.Keyword(null,"width","width",-384071477),((r * nx) * (2)),new cljs.core.Keyword(null,"height","height",1025178622),((r * ny) * (2))], null);
});
demo.life_logic.update_color = (function demo$life_logic$update_color(circles,color_map){
return cljs.core.map.call(null,(function (p1__46761_SHARP_){
return cljs.core.assoc.call(null,p1__46761_SHARP_,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(p1__46761_SHARP_).call(null,color_map));
}),circles);
});
demo.life_logic.update_color_main = (function demo$life_logic$update_color_main(circle_data,color_map){
return cljs.core.assoc.call(null,circle_data,new cljs.core.Keyword(null,"circles","circles",-1947060917),demo.life_logic.update_color.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(circle_data),color_map));
});
demo.life_logic.neighbours = (function demo$life_logic$neighbours(var_args){
var args__29971__auto__ = [];
var len__29964__auto___46775 = arguments.length;
var i__29965__auto___46776 = (0);
while(true){
if((i__29965__auto___46776 < len__29964__auto___46775)){
args__29971__auto__.push((arguments[i__29965__auto___46776]));

var G__46777 = (i__29965__auto___46776 + (1));
i__29965__auto___46776 = G__46777;
continue;
} else {
}
break;
}

var argseq__29972__auto__ = ((((3) < args__29971__auto__.length))?(new cljs.core.IndexedSeq(args__29971__auto__.slice((3)),(0))):null);
return demo.life_logic.neighbours.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29972__auto__);
});

demo.life_logic.neighbours.cljs$core$IFn$_invoke$arity$variadic = (function (nx,ny,pos,p__46766){
var map__46767 = p__46766;
var map__46767__$1 = ((((!((map__46767 == null)))?((((map__46767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46767):map__46767);
var wrap = cljs.core.get.call(null,map__46767__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987));
var x_init = cljs.core.mod.call(null,pos,nx);
var y_init = cljs.core.quot.call(null,pos,nx);
var iter__29678__auto__ = ((function (x_init,y_init,map__46767,map__46767__$1,wrap){
return (function demo$life_logic$iter__46769(s__46770){
return (new cljs.core.LazySeq(null,((function (x_init,y_init,map__46767,map__46767__$1,wrap){
return (function (){
var s__46770__$1 = s__46770;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__46770__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x_delta = cljs.core.first.call(null,xs__4977__auto__);
var iterys__29674__auto__ = ((function (s__46770__$1,x_delta,xs__4977__auto__,temp__4425__auto__,x_init,y_init,map__46767,map__46767__$1,wrap){
return (function demo$life_logic$iter__46769_$_iter__46771(s__46772){
return (new cljs.core.LazySeq(null,((function (s__46770__$1,x_delta,xs__4977__auto__,temp__4425__auto__,x_init,y_init,map__46767,map__46767__$1,wrap){
return (function (){
var s__46772__$1 = s__46772;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__46772__$1);
if(temp__4425__auto____$1){
var s__46772__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__46772__$2)){
var c__29676__auto__ = cljs.core.chunk_first.call(null,s__46772__$2);
var size__29677__auto__ = cljs.core.count.call(null,c__29676__auto__);
var b__46774 = cljs.core.chunk_buffer.call(null,size__29677__auto__);
if((function (){var i__46773 = (0);
while(true){
if((i__46773 < size__29677__auto__)){
var y_delta = cljs.core._nth.call(null,c__29676__auto__,i__46773);
var x_new = (x_init + x_delta);
var y_new = (y_init + y_delta);
if(cljs.core.truth_((function (){var or__28906__auto__ = wrap;
if(cljs.core.truth_(or__28906__auto__)){
return or__28906__auto__;
} else {
return ((x_new < nx)) && ((y_new < ny)) && (((0) <= x_new)) && (((0) <= y_new));
}
})())){
cljs.core.chunk_append.call(null,b__46774,(cljs.core.mod.call(null,x_new,nx) + (cljs.core.mod.call(null,y_new,ny) * nx)));

var G__46778 = (i__46773 + (1));
i__46773 = G__46778;
continue;
} else {
var G__46779 = (i__46773 + (1));
i__46773 = G__46779;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46774),demo$life_logic$iter__46769_$_iter__46771.call(null,cljs.core.chunk_rest.call(null,s__46772__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46774),null);
}
} else {
var y_delta = cljs.core.first.call(null,s__46772__$2);
var x_new = (x_init + x_delta);
var y_new = (y_init + y_delta);
if(cljs.core.truth_((function (){var or__28906__auto__ = wrap;
if(cljs.core.truth_(or__28906__auto__)){
return or__28906__auto__;
} else {
return ((x_new < nx)) && ((y_new < ny)) && (((0) <= x_new)) && (((0) <= y_new));
}
})())){
return cljs.core.cons.call(null,(cljs.core.mod.call(null,x_new,nx) + (cljs.core.mod.call(null,y_new,ny) * nx)),demo$life_logic$iter__46769_$_iter__46771.call(null,cljs.core.rest.call(null,s__46772__$2)));
} else {
var G__46780 = cljs.core.rest.call(null,s__46772__$2);
s__46772__$1 = G__46780;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__46770__$1,x_delta,xs__4977__auto__,temp__4425__auto__,x_init,y_init,map__46767,map__46767__$1,wrap))
,null,null));
});})(s__46770__$1,x_delta,xs__4977__auto__,temp__4425__auto__,x_init,y_init,map__46767,map__46767__$1,wrap))
;
var fs__29675__auto__ = cljs.core.seq.call(null,iterys__29674__auto__.call(null,cljs.core.range.call(null,(-1),(2))));
if(fs__29675__auto__){
return cljs.core.concat.call(null,fs__29675__auto__,demo$life_logic$iter__46769.call(null,cljs.core.rest.call(null,s__46770__$1)));
} else {
var G__46781 = cljs.core.rest.call(null,s__46770__$1);
s__46770__$1 = G__46781;
continue;
}
} else {
return null;
}
break;
}
});})(x_init,y_init,map__46767,map__46767__$1,wrap))
,null,null));
});})(x_init,y_init,map__46767,map__46767__$1,wrap))
;
return iter__29678__auto__.call(null,cljs.core.range.call(null,(-1),(2)));
});

demo.life_logic.neighbours.cljs$lang$maxFixedArity = (3);

demo.life_logic.neighbours.cljs$lang$applyTo = (function (seq46762){
var G__46763 = cljs.core.first.call(null,seq46762);
var seq46762__$1 = cljs.core.next.call(null,seq46762);
var G__46764 = cljs.core.first.call(null,seq46762__$1);
var seq46762__$2 = cljs.core.next.call(null,seq46762__$1);
var G__46765 = cljs.core.first.call(null,seq46762__$2);
var seq46762__$3 = cljs.core.next.call(null,seq46762__$2);
return demo.life_logic.neighbours.cljs$core$IFn$_invoke$arity$variadic(G__46763,G__46764,G__46765,seq46762__$3);
});
demo.life_logic.init_neighbours = (function demo$life_logic$init_neighbours(var_args){
var args__29971__auto__ = [];
var len__29964__auto___46788 = arguments.length;
var i__29965__auto___46789 = (0);
while(true){
if((i__29965__auto___46789 < len__29964__auto___46788)){
args__29971__auto__.push((arguments[i__29965__auto___46789]));

var G__46790 = (i__29965__auto___46789 + (1));
i__29965__auto___46789 = G__46790;
continue;
} else {
}
break;
}

var argseq__29972__auto__ = ((((2) < args__29971__auto__.length))?(new cljs.core.IndexedSeq(args__29971__auto__.slice((2)),(0))):null);
return demo.life_logic.init_neighbours.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29972__auto__);
});

demo.life_logic.init_neighbours.cljs$core$IFn$_invoke$arity$variadic = (function (nx,ny,p__46785){
var map__46786 = p__46785;
var map__46786__$1 = ((((!((map__46786 == null)))?((((map__46786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46786):map__46786);
var wrap = cljs.core.get.call(null,map__46786__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987));
return ((function (map__46786,map__46786__$1,wrap){
return (function (pos){
return demo.life_logic.neighbours.call(null,nx,ny,pos,new cljs.core.Keyword(null,"wrap","wrap",851669987),wrap);
});
;})(map__46786,map__46786__$1,wrap))
});

demo.life_logic.init_neighbours.cljs$lang$maxFixedArity = (2);

demo.life_logic.init_neighbours.cljs$lang$applyTo = (function (seq46782){
var G__46783 = cljs.core.first.call(null,seq46782);
var seq46782__$1 = cljs.core.next.call(null,seq46782);
var G__46784 = cljs.core.first.call(null,seq46782__$1);
var seq46782__$2 = cljs.core.next.call(null,seq46782__$1);
return demo.life_logic.init_neighbours.cljs$core$IFn$_invoke$arity$variadic(G__46783,G__46784,seq46782__$2);
});
demo.life_logic.count_live_neighbours = (function demo$life_logic$count_live_neighbours(circles,neighbours,pos){
return cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__46791_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"live","live",-1610148039),new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(p1__46791_SHARP_));
}),demo.life_logic.select_values.call(null,cljs.core.vec.call(null,circles),neighbours.call(null,pos))));
});
demo.life_logic.iterate_life_main = (function demo$life_logic$iterate_life_main(var_args){
var args__29971__auto__ = [];
var len__29964__auto___46801 = arguments.length;
var i__29965__auto___46802 = (0);
while(true){
if((i__29965__auto___46802 < len__29964__auto___46801)){
args__29971__auto__.push((arguments[i__29965__auto___46802]));

var G__46803 = (i__29965__auto___46802 + (1));
i__29965__auto___46802 = G__46803;
continue;
} else {
}
break;
}

var argseq__29972__auto__ = ((((3) < args__29971__auto__.length))?(new cljs.core.IndexedSeq(args__29971__auto__.slice((3)),(0))):null);
return demo.life_logic.iterate_life_main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29972__auto__);
});

demo.life_logic.iterate_life_main.cljs$core$IFn$_invoke$arity$variadic = (function (data,nx,ny,p__46798){
var map__46799 = p__46798;
var map__46799__$1 = ((((!((map__46799 == null)))?((((map__46799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__46799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46799):map__46799);
var wrap = cljs.core.get.call(null,map__46799__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987));
var neighbours_fixed = demo.life_logic.init_neighbours.call(null,nx,ny,new cljs.core.Keyword(null,"wrap","wrap",851669987),wrap);
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.map_indexed.call(null,((function (neighbours_fixed,map__46799,map__46799__$1,wrap){
return (function (p1__46793_SHARP_,p2__46792_SHARP_){
return cljs.core.assoc.call(null,p2__46792_SHARP_,new cljs.core.Keyword(null,"alive","alive",1424929930),demo.life_logic.alive.call(null,demo.life_logic.count_live_neighbours.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(data),neighbours_fixed,p1__46793_SHARP_),new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(p2__46792_SHARP_)));
});})(neighbours_fixed,map__46799,map__46799__$1,wrap))
,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(data)));
});

demo.life_logic.iterate_life_main.cljs$lang$maxFixedArity = (3);

demo.life_logic.iterate_life_main.cljs$lang$applyTo = (function (seq46794){
var G__46795 = cljs.core.first.call(null,seq46794);
var seq46794__$1 = cljs.core.next.call(null,seq46794);
var G__46796 = cljs.core.first.call(null,seq46794__$1);
var seq46794__$2 = cljs.core.next.call(null,seq46794__$1);
var G__46797 = cljs.core.first.call(null,seq46794__$2);
var seq46794__$3 = cljs.core.next.call(null,seq46794__$2);
return demo.life_logic.iterate_life_main.cljs$core$IFn$_invoke$arity$variadic(G__46795,G__46796,G__46797,seq46794__$3);
});

//# sourceMappingURL=life_logic.js.map