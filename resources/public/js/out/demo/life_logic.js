// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.life_logic');
goog.require('cljs.core');
goog.require('demo.util');
demo.life_logic.states = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dead","dead",-1946604091),null,new cljs.core.Keyword(null,"live","live",-1610148039),null], null), null);
demo.life_logic.alive = (function demo$life_logic$alive(num_neighbours,current_state){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [(3),new cljs.core.Keyword(null,"live","live",-1610148039),(4),current_state], null),num_neighbours,new cljs.core.Keyword(null,"dead","dead",-1946604091));
});
demo.life_logic.get_circle_coordinates = (function demo$life_logic$get_circle_coordinates(nx,ny,r,colormap){
var individual_coords = (function (){var iter__29678__auto__ = (function demo$life_logic$get_circle_coordinates_$_iter__47566(s__47567){
return (new cljs.core.LazySeq(null,(function (){
var s__47567__$1 = s__47567;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__47567__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x = cljs.core.first.call(null,xs__4977__auto__);
var iterys__29674__auto__ = ((function (s__47567__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function demo$life_logic$get_circle_coordinates_$_iter__47566_$_iter__47568(s__47569){
return (new cljs.core.LazySeq(null,((function (s__47567__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__47569__$1 = s__47569;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__47569__$1);
if(temp__4425__auto____$1){
var s__47569__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47569__$2)){
var c__29676__auto__ = cljs.core.chunk_first.call(null,s__47569__$2);
var size__29677__auto__ = cljs.core.count.call(null,c__29676__auto__);
var b__47571 = cljs.core.chunk_buffer.call(null,size__29677__auto__);
if((function (){var i__47570 = (0);
while(true){
if((i__47570 < size__29677__auto__)){
var y = cljs.core._nth.call(null,c__29676__auto__,i__47570);
cljs.core.chunk_append.call(null,b__47571,(function (){var alive = cljs.core.rand_nth.call(null,cljs.core.seq.call(null,demo.life_logic.states));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * r) * (x + 0.5)),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * r) * (y + 0.5)),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"alive","alive",1424929930),alive,new cljs.core.Keyword(null,"color","color",1011675173),alive.call(null,colormap)], null);
})());

var G__47572 = (i__47570 + (1));
i__47570 = G__47572;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47571),demo$life_logic$get_circle_coordinates_$_iter__47566_$_iter__47568.call(null,cljs.core.chunk_rest.call(null,s__47569__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47571),null);
}
} else {
var y = cljs.core.first.call(null,s__47569__$2);
return cljs.core.cons.call(null,(function (){var alive = cljs.core.rand_nth.call(null,cljs.core.seq.call(null,demo.life_logic.states));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * r) * (x + 0.5)),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * r) * (y + 0.5)),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"alive","alive",1424929930),alive,new cljs.core.Keyword(null,"color","color",1011675173),alive.call(null,colormap)], null);
})(),demo$life_logic$get_circle_coordinates_$_iter__47566_$_iter__47568.call(null,cljs.core.rest.call(null,s__47569__$2)));
}
} else {
return null;
}
break;
}
});})(s__47567__$1,x,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__47567__$1,x,xs__4977__auto__,temp__4425__auto__))
;
var fs__29675__auto__ = cljs.core.seq.call(null,iterys__29674__auto__.call(null,cljs.core.range.call(null,ny)));
if(fs__29675__auto__){
return cljs.core.concat.call(null,fs__29675__auto__,demo$life_logic$get_circle_coordinates_$_iter__47566.call(null,cljs.core.rest.call(null,s__47567__$1)));
} else {
var G__47573 = cljs.core.rest.call(null,s__47567__$1);
s__47567__$1 = G__47573;
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
demo.life_logic.update_visuals = (function demo$life_logic$update_visuals(circles,color_map,size_map){
return cljs.core.map.call(null,(function (circle){
return demo.util.alter_map.call(null,circle,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),(function (p1__47574_SHARP_){
return color_map.call(null,new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(p1__47574_SHARP_));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r","r",-471384190),(function (p1__47575_SHARP_){
return size_map.call(null,new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(p1__47575_SHARP_));
})], null)], null));
}),circles);
});
demo.life_logic.update_visuals_main = (function demo$life_logic$update_visuals_main(circle_data,color_map,size_map){
return cljs.core.update.call(null,circle_data,new cljs.core.Keyword(null,"circles","circles",-1947060917),(function (p1__47576_SHARP_){
return demo.life_logic.update_visuals.call(null,p1__47576_SHARP_,color_map,size_map);
}));
});
demo.life_logic.neighbours = (function demo$life_logic$neighbours(var_args){
var args__29971__auto__ = [];
var len__29964__auto___47590 = arguments.length;
var i__29965__auto___47591 = (0);
while(true){
if((i__29965__auto___47591 < len__29964__auto___47590)){
args__29971__auto__.push((arguments[i__29965__auto___47591]));

var G__47592 = (i__29965__auto___47591 + (1));
i__29965__auto___47591 = G__47592;
continue;
} else {
}
break;
}

var argseq__29972__auto__ = ((((3) < args__29971__auto__.length))?(new cljs.core.IndexedSeq(args__29971__auto__.slice((3)),(0))):null);
return demo.life_logic.neighbours.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29972__auto__);
});

demo.life_logic.neighbours.cljs$core$IFn$_invoke$arity$variadic = (function (nx,ny,pos,p__47581){
var map__47582 = p__47581;
var map__47582__$1 = ((((!((map__47582 == null)))?((((map__47582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47582):map__47582);
var wrap = cljs.core.get.call(null,map__47582__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987));
var x_init = cljs.core.mod.call(null,pos,nx);
var y_init = cljs.core.quot.call(null,pos,nx);
var iter__29678__auto__ = ((function (x_init,y_init,map__47582,map__47582__$1,wrap){
return (function demo$life_logic$iter__47584(s__47585){
return (new cljs.core.LazySeq(null,((function (x_init,y_init,map__47582,map__47582__$1,wrap){
return (function (){
var s__47585__$1 = s__47585;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__47585__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x_delta = cljs.core.first.call(null,xs__4977__auto__);
var iterys__29674__auto__ = ((function (s__47585__$1,x_delta,xs__4977__auto__,temp__4425__auto__,x_init,y_init,map__47582,map__47582__$1,wrap){
return (function demo$life_logic$iter__47584_$_iter__47586(s__47587){
return (new cljs.core.LazySeq(null,((function (s__47585__$1,x_delta,xs__4977__auto__,temp__4425__auto__,x_init,y_init,map__47582,map__47582__$1,wrap){
return (function (){
var s__47587__$1 = s__47587;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__47587__$1);
if(temp__4425__auto____$1){
var s__47587__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__47587__$2)){
var c__29676__auto__ = cljs.core.chunk_first.call(null,s__47587__$2);
var size__29677__auto__ = cljs.core.count.call(null,c__29676__auto__);
var b__47589 = cljs.core.chunk_buffer.call(null,size__29677__auto__);
if((function (){var i__47588 = (0);
while(true){
if((i__47588 < size__29677__auto__)){
var y_delta = cljs.core._nth.call(null,c__29676__auto__,i__47588);
var x_new = (x_init + x_delta);
var y_new = (y_init + y_delta);
if(cljs.core.truth_((function (){var or__28906__auto__ = wrap;
if(cljs.core.truth_(or__28906__auto__)){
return or__28906__auto__;
} else {
return ((x_new < nx)) && ((y_new < ny)) && (((0) <= x_new)) && (((0) <= y_new));
}
})())){
cljs.core.chunk_append.call(null,b__47589,(cljs.core.mod.call(null,x_new,nx) + (cljs.core.mod.call(null,y_new,ny) * nx)));

var G__47593 = (i__47588 + (1));
i__47588 = G__47593;
continue;
} else {
var G__47594 = (i__47588 + (1));
i__47588 = G__47594;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47589),demo$life_logic$iter__47584_$_iter__47586.call(null,cljs.core.chunk_rest.call(null,s__47587__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47589),null);
}
} else {
var y_delta = cljs.core.first.call(null,s__47587__$2);
var x_new = (x_init + x_delta);
var y_new = (y_init + y_delta);
if(cljs.core.truth_((function (){var or__28906__auto__ = wrap;
if(cljs.core.truth_(or__28906__auto__)){
return or__28906__auto__;
} else {
return ((x_new < nx)) && ((y_new < ny)) && (((0) <= x_new)) && (((0) <= y_new));
}
})())){
return cljs.core.cons.call(null,(cljs.core.mod.call(null,x_new,nx) + (cljs.core.mod.call(null,y_new,ny) * nx)),demo$life_logic$iter__47584_$_iter__47586.call(null,cljs.core.rest.call(null,s__47587__$2)));
} else {
var G__47595 = cljs.core.rest.call(null,s__47587__$2);
s__47587__$1 = G__47595;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__47585__$1,x_delta,xs__4977__auto__,temp__4425__auto__,x_init,y_init,map__47582,map__47582__$1,wrap))
,null,null));
});})(s__47585__$1,x_delta,xs__4977__auto__,temp__4425__auto__,x_init,y_init,map__47582,map__47582__$1,wrap))
;
var fs__29675__auto__ = cljs.core.seq.call(null,iterys__29674__auto__.call(null,cljs.core.range.call(null,(-1),(2))));
if(fs__29675__auto__){
return cljs.core.concat.call(null,fs__29675__auto__,demo$life_logic$iter__47584.call(null,cljs.core.rest.call(null,s__47585__$1)));
} else {
var G__47596 = cljs.core.rest.call(null,s__47585__$1);
s__47585__$1 = G__47596;
continue;
}
} else {
return null;
}
break;
}
});})(x_init,y_init,map__47582,map__47582__$1,wrap))
,null,null));
});})(x_init,y_init,map__47582,map__47582__$1,wrap))
;
return iter__29678__auto__.call(null,cljs.core.range.call(null,(-1),(2)));
});

demo.life_logic.neighbours.cljs$lang$maxFixedArity = (3);

demo.life_logic.neighbours.cljs$lang$applyTo = (function (seq47577){
var G__47578 = cljs.core.first.call(null,seq47577);
var seq47577__$1 = cljs.core.next.call(null,seq47577);
var G__47579 = cljs.core.first.call(null,seq47577__$1);
var seq47577__$2 = cljs.core.next.call(null,seq47577__$1);
var G__47580 = cljs.core.first.call(null,seq47577__$2);
var seq47577__$3 = cljs.core.next.call(null,seq47577__$2);
return demo.life_logic.neighbours.cljs$core$IFn$_invoke$arity$variadic(G__47578,G__47579,G__47580,seq47577__$3);
});
demo.life_logic.init_neighbours = (function demo$life_logic$init_neighbours(var_args){
var args__29971__auto__ = [];
var len__29964__auto___47603 = arguments.length;
var i__29965__auto___47604 = (0);
while(true){
if((i__29965__auto___47604 < len__29964__auto___47603)){
args__29971__auto__.push((arguments[i__29965__auto___47604]));

var G__47605 = (i__29965__auto___47604 + (1));
i__29965__auto___47604 = G__47605;
continue;
} else {
}
break;
}

var argseq__29972__auto__ = ((((2) < args__29971__auto__.length))?(new cljs.core.IndexedSeq(args__29971__auto__.slice((2)),(0))):null);
return demo.life_logic.init_neighbours.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29972__auto__);
});

demo.life_logic.init_neighbours.cljs$core$IFn$_invoke$arity$variadic = (function (nx,ny,p__47600){
var map__47601 = p__47600;
var map__47601__$1 = ((((!((map__47601 == null)))?((((map__47601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47601):map__47601);
var wrap = cljs.core.get.call(null,map__47601__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987));
return ((function (map__47601,map__47601__$1,wrap){
return (function (pos){
return demo.life_logic.neighbours.call(null,nx,ny,pos,new cljs.core.Keyword(null,"wrap","wrap",851669987),wrap);
});
;})(map__47601,map__47601__$1,wrap))
});

demo.life_logic.init_neighbours.cljs$lang$maxFixedArity = (2);

demo.life_logic.init_neighbours.cljs$lang$applyTo = (function (seq47597){
var G__47598 = cljs.core.first.call(null,seq47597);
var seq47597__$1 = cljs.core.next.call(null,seq47597);
var G__47599 = cljs.core.first.call(null,seq47597__$1);
var seq47597__$2 = cljs.core.next.call(null,seq47597__$1);
return demo.life_logic.init_neighbours.cljs$core$IFn$_invoke$arity$variadic(G__47598,G__47599,seq47597__$2);
});
demo.life_logic.count_live_neighbours = (function demo$life_logic$count_live_neighbours(circles,neighbours,pos){
return cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__47606_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"live","live",-1610148039),new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(p1__47606_SHARP_));
}),demo.util.select_values.call(null,cljs.core.vec.call(null,circles),neighbours.call(null,pos))));
});
demo.life_logic.iterate_life_main = (function demo$life_logic$iterate_life_main(var_args){
var args__29971__auto__ = [];
var len__29964__auto___47616 = arguments.length;
var i__29965__auto___47617 = (0);
while(true){
if((i__29965__auto___47617 < len__29964__auto___47616)){
args__29971__auto__.push((arguments[i__29965__auto___47617]));

var G__47618 = (i__29965__auto___47617 + (1));
i__29965__auto___47617 = G__47618;
continue;
} else {
}
break;
}

var argseq__29972__auto__ = ((((3) < args__29971__auto__.length))?(new cljs.core.IndexedSeq(args__29971__auto__.slice((3)),(0))):null);
return demo.life_logic.iterate_life_main.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29972__auto__);
});

demo.life_logic.iterate_life_main.cljs$core$IFn$_invoke$arity$variadic = (function (data,nx,ny,p__47613){
var map__47614 = p__47613;
var map__47614__$1 = ((((!((map__47614 == null)))?((((map__47614.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47614.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47614):map__47614);
var wrap = cljs.core.get.call(null,map__47614__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987));
var neighbours_fixed = demo.life_logic.init_neighbours.call(null,nx,ny,new cljs.core.Keyword(null,"wrap","wrap",851669987),wrap);
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.map_indexed.call(null,((function (neighbours_fixed,map__47614,map__47614__$1,wrap){
return (function (p1__47608_SHARP_,p2__47607_SHARP_){
return cljs.core.assoc.call(null,p2__47607_SHARP_,new cljs.core.Keyword(null,"alive","alive",1424929930),demo.life_logic.alive.call(null,demo.life_logic.count_live_neighbours.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(data),neighbours_fixed,p1__47608_SHARP_),new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(p2__47607_SHARP_)));
});})(neighbours_fixed,map__47614,map__47614__$1,wrap))
,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(data)));
});

demo.life_logic.iterate_life_main.cljs$lang$maxFixedArity = (3);

demo.life_logic.iterate_life_main.cljs$lang$applyTo = (function (seq47609){
var G__47610 = cljs.core.first.call(null,seq47609);
var seq47609__$1 = cljs.core.next.call(null,seq47609);
var G__47611 = cljs.core.first.call(null,seq47609__$1);
var seq47609__$2 = cljs.core.next.call(null,seq47609__$1);
var G__47612 = cljs.core.first.call(null,seq47609__$2);
var seq47609__$3 = cljs.core.next.call(null,seq47609__$2);
return demo.life_logic.iterate_life_main.cljs$core$IFn$_invoke$arity$variadic(G__47610,G__47611,G__47612,seq47609__$3);
});

//# sourceMappingURL=life_logic.js.map