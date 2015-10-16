// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.life_logic');
goog.require('cljs.core');
demo.life_logic.states = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dead","dead",-1946604091),null,new cljs.core.Keyword(null,"live","live",-1610148039),null], null), null);
demo.life_logic.color_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"live","live",-1610148039),"green",new cljs.core.Keyword(null,"dead","dead",-1946604091),"red"], null);
demo.life_logic.hello = "world";
demo.life_logic.select_values = cljs.core.comp.call(null,cljs.core.vals,cljs.core.select_keys);
demo.life_logic.get_circle_coordinates = (function demo$life_logic$get_circle_coordinates(nx,ny,r,colormap){
var individual_coords = (function (){var iter__29678__auto__ = (function demo$life_logic$get_circle_coordinates_$_iter__45454(s__45455){
return (new cljs.core.LazySeq(null,(function (){
var s__45455__$1 = s__45455;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__45455__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x = cljs.core.first.call(null,xs__4977__auto__);
var iterys__29674__auto__ = ((function (s__45455__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function demo$life_logic$get_circle_coordinates_$_iter__45454_$_iter__45456(s__45457){
return (new cljs.core.LazySeq(null,((function (s__45455__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__45457__$1 = s__45457;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__45457__$1);
if(temp__4425__auto____$1){
var s__45457__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45457__$2)){
var c__29676__auto__ = cljs.core.chunk_first.call(null,s__45457__$2);
var size__29677__auto__ = cljs.core.count.call(null,c__29676__auto__);
var b__45459 = cljs.core.chunk_buffer.call(null,size__29677__auto__);
if((function (){var i__45458 = (0);
while(true){
if((i__45458 < size__29677__auto__)){
var y = cljs.core._nth.call(null,c__29676__auto__,i__45458);
cljs.core.chunk_append.call(null,b__45459,(function (){var alive = cljs.core.rand_nth.call(null,cljs.core.seq.call(null,demo.life_logic.states));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * r) * (x + 0.5)),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * r) * (y + 0.5)),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"alive","alive",1424929930),alive,new cljs.core.Keyword(null,"color","color",1011675173),alive.call(null,colormap)], null);
})());

var G__45460 = (i__45458 + (1));
i__45458 = G__45460;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45459),demo$life_logic$get_circle_coordinates_$_iter__45454_$_iter__45456.call(null,cljs.core.chunk_rest.call(null,s__45457__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45459),null);
}
} else {
var y = cljs.core.first.call(null,s__45457__$2);
return cljs.core.cons.call(null,(function (){var alive = cljs.core.rand_nth.call(null,cljs.core.seq.call(null,demo.life_logic.states));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * r) * (x + 0.5)),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * r) * (y + 0.5)),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"alive","alive",1424929930),alive,new cljs.core.Keyword(null,"color","color",1011675173),alive.call(null,colormap)], null);
})(),demo$life_logic$get_circle_coordinates_$_iter__45454_$_iter__45456.call(null,cljs.core.rest.call(null,s__45457__$2)));
}
} else {
return null;
}
break;
}
});})(s__45455__$1,x,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__45455__$1,x,xs__4977__auto__,temp__4425__auto__))
;
var fs__29675__auto__ = cljs.core.seq.call(null,iterys__29674__auto__.call(null,cljs.core.range.call(null,ny)));
if(fs__29675__auto__){
return cljs.core.concat.call(null,fs__29675__auto__,demo$life_logic$get_circle_coordinates_$_iter__45454.call(null,cljs.core.rest.call(null,s__45455__$1)));
} else {
var G__45461 = cljs.core.rest.call(null,s__45455__$1);
s__45455__$1 = G__45461;
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
demo.life_logic.alive = (function demo$life_logic$alive(num_neighbours,current_state){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [(3),new cljs.core.Keyword(null,"live","live",-1610148039),(4),current_state], null),num_neighbours,new cljs.core.Keyword(null,"dead","dead",-1946604091));
});
demo.life_logic.swap_color = (function demo$life_logic$swap_color(circle_data){
var colors = new cljs.core.PersistentArrayMap(null, 2, ["green","red","red","green"], null);
var current_color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(circle_data)));
return cljs.core.assoc.call(null,circle_data,new cljs.core.Keyword(null,"circles","circles",-1947060917),cljs.core.map.call(null,((function (colors,current_color){
return (function (circle){
return cljs.core.assoc.call(null,circle,new cljs.core.Keyword(null,"color","color",1011675173),colors.call(null,current_color));
});})(colors,current_color))
,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(circle_data)));
});
demo.life_logic.update_color = (function demo$life_logic$update_color(circles){
return cljs.core.map.call(null,(function (p1__45462_SHARP_){
return cljs.core.assoc.call(null,p1__45462_SHARP_,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(p1__45462_SHARP_).call(null,demo.life_logic.color_map));
}),circles);
});
demo.life_logic.update_color_main = (function demo$life_logic$update_color_main(circle_data){
return cljs.core.assoc.call(null,circle_data,new cljs.core.Keyword(null,"circles","circles",-1947060917),demo.life_logic.update_color.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(circle_data)));
});
demo.life_logic.neighbours = (function demo$life_logic$neighbours(var_args){
var args__29971__auto__ = [];
var len__29964__auto___45476 = arguments.length;
var i__29965__auto___45477 = (0);
while(true){
if((i__29965__auto___45477 < len__29964__auto___45476)){
args__29971__auto__.push((arguments[i__29965__auto___45477]));

var G__45478 = (i__29965__auto___45477 + (1));
i__29965__auto___45477 = G__45478;
continue;
} else {
}
break;
}

var argseq__29972__auto__ = ((((3) < args__29971__auto__.length))?(new cljs.core.IndexedSeq(args__29971__auto__.slice((3)),(0))):null);
return demo.life_logic.neighbours.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29972__auto__);
});

demo.life_logic.neighbours.cljs$core$IFn$_invoke$arity$variadic = (function (nx,ny,pos,p__45467){
var map__45468 = p__45467;
var map__45468__$1 = ((((!((map__45468 == null)))?((((map__45468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__45468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45468):map__45468);
var wrap = cljs.core.get.call(null,map__45468__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987));
var x_init = cljs.core.mod.call(null,pos,nx);
var y_init = cljs.core.quot.call(null,pos,nx);
var iter__29678__auto__ = ((function (x_init,y_init,map__45468,map__45468__$1,wrap){
return (function demo$life_logic$iter__45470(s__45471){
return (new cljs.core.LazySeq(null,((function (x_init,y_init,map__45468,map__45468__$1,wrap){
return (function (){
var s__45471__$1 = s__45471;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__45471__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x_delta = cljs.core.first.call(null,xs__4977__auto__);
var iterys__29674__auto__ = ((function (s__45471__$1,x_delta,xs__4977__auto__,temp__4425__auto__,x_init,y_init,map__45468,map__45468__$1,wrap){
return (function demo$life_logic$iter__45470_$_iter__45472(s__45473){
return (new cljs.core.LazySeq(null,((function (s__45471__$1,x_delta,xs__4977__auto__,temp__4425__auto__,x_init,y_init,map__45468,map__45468__$1,wrap){
return (function (){
var s__45473__$1 = s__45473;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__45473__$1);
if(temp__4425__auto____$1){
var s__45473__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45473__$2)){
var c__29676__auto__ = cljs.core.chunk_first.call(null,s__45473__$2);
var size__29677__auto__ = cljs.core.count.call(null,c__29676__auto__);
var b__45475 = cljs.core.chunk_buffer.call(null,size__29677__auto__);
if((function (){var i__45474 = (0);
while(true){
if((i__45474 < size__29677__auto__)){
var y_delta = cljs.core._nth.call(null,c__29676__auto__,i__45474);
var x_new = (x_init + x_delta);
var y_new = (y_init + y_delta);
if(cljs.core.truth_((function (){var or__28906__auto__ = wrap;
if(cljs.core.truth_(or__28906__auto__)){
return or__28906__auto__;
} else {
return ((x_new < nx)) && ((y_new < ny)) && (((0) <= x_new)) && (((0) <= y_new));
}
})())){
cljs.core.chunk_append.call(null,b__45475,(cljs.core.mod.call(null,x_new,nx) + (cljs.core.mod.call(null,y_new,ny) * nx)));

var G__45479 = (i__45474 + (1));
i__45474 = G__45479;
continue;
} else {
var G__45480 = (i__45474 + (1));
i__45474 = G__45480;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45475),demo$life_logic$iter__45470_$_iter__45472.call(null,cljs.core.chunk_rest.call(null,s__45473__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45475),null);
}
} else {
var y_delta = cljs.core.first.call(null,s__45473__$2);
var x_new = (x_init + x_delta);
var y_new = (y_init + y_delta);
if(cljs.core.truth_((function (){var or__28906__auto__ = wrap;
if(cljs.core.truth_(or__28906__auto__)){
return or__28906__auto__;
} else {
return ((x_new < nx)) && ((y_new < ny)) && (((0) <= x_new)) && (((0) <= y_new));
}
})())){
return cljs.core.cons.call(null,(cljs.core.mod.call(null,x_new,nx) + (cljs.core.mod.call(null,y_new,ny) * nx)),demo$life_logic$iter__45470_$_iter__45472.call(null,cljs.core.rest.call(null,s__45473__$2)));
} else {
var G__45481 = cljs.core.rest.call(null,s__45473__$2);
s__45473__$1 = G__45481;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__45471__$1,x_delta,xs__4977__auto__,temp__4425__auto__,x_init,y_init,map__45468,map__45468__$1,wrap))
,null,null));
});})(s__45471__$1,x_delta,xs__4977__auto__,temp__4425__auto__,x_init,y_init,map__45468,map__45468__$1,wrap))
;
var fs__29675__auto__ = cljs.core.seq.call(null,iterys__29674__auto__.call(null,cljs.core.range.call(null,(-1),(2))));
if(fs__29675__auto__){
return cljs.core.concat.call(null,fs__29675__auto__,demo$life_logic$iter__45470.call(null,cljs.core.rest.call(null,s__45471__$1)));
} else {
var G__45482 = cljs.core.rest.call(null,s__45471__$1);
s__45471__$1 = G__45482;
continue;
}
} else {
return null;
}
break;
}
});})(x_init,y_init,map__45468,map__45468__$1,wrap))
,null,null));
});})(x_init,y_init,map__45468,map__45468__$1,wrap))
;
return iter__29678__auto__.call(null,cljs.core.range.call(null,(-1),(2)));
});

demo.life_logic.neighbours.cljs$lang$maxFixedArity = (3);

demo.life_logic.neighbours.cljs$lang$applyTo = (function (seq45463){
var G__45464 = cljs.core.first.call(null,seq45463);
var seq45463__$1 = cljs.core.next.call(null,seq45463);
var G__45465 = cljs.core.first.call(null,seq45463__$1);
var seq45463__$2 = cljs.core.next.call(null,seq45463__$1);
var G__45466 = cljs.core.first.call(null,seq45463__$2);
var seq45463__$3 = cljs.core.next.call(null,seq45463__$2);
return demo.life_logic.neighbours.cljs$core$IFn$_invoke$arity$variadic(G__45464,G__45465,G__45466,seq45463__$3);
});
demo.life_logic.get_neighbours = (function demo$life_logic$get_neighbours(circles,nx,ny,pos){
return demo.life_logic.select_values.call(null,cljs.core.vec.call(null,circles),demo.life_logic.neighbours.call(null,nx,ny,pos,new cljs.core.Keyword(null,"wrap","wrap",851669987),new cljs.core.Keyword(null,"true","true",-1114210334)));
});
demo.life_logic.count_live_neighbours = (function demo$life_logic$count_live_neighbours(circles,nx,ny,pos){
return cljs.core.count.call(null,cljs.core.filter.call(null,(function (p1__45483_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"live","live",-1610148039),new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(p1__45483_SHARP_));
}),demo.life_logic.get_neighbours.call(null,circles,nx,ny,pos)));
});
demo.life_logic.iterate_life = (function demo$life_logic$iterate_life(circles,nx,ny,neighbours){
return cljs.core.map_indexed.call(null,(function (p1__45485_SHARP_,p2__45484_SHARP_){
return cljs.core.assoc.call(null,p2__45484_SHARP_,new cljs.core.Keyword(null,"alive","alive",1424929930),demo.life_logic.alive.call(null,demo.life_logic.count_live_neighbours.call(null,circles,nx,ny,p1__45485_SHARP_),new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(p2__45484_SHARP_)));
}),circles);
});
demo.life_logic.iterate_life_fixed = (function demo$life_logic$iterate_life_fixed(circles){
return demo.life_logic.iterate_life.call(null,circles,(6),(6),demo.life_logic.neighbours);
});
demo.life_logic.iterate_life_main = (function demo$life_logic$iterate_life_main(data){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"circles","circles",-1947060917),demo.life_logic.iterate_life_fixed.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(data)));
});

//# sourceMappingURL=life_logic.js.map