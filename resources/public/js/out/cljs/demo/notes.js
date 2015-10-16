// Compiled by ClojureScript 1.7.48 {}
goog.provide('demo.notes');
goog.require('cljs.core');
demo.notes.select_values = cljs.core.comp.call(null,cljs.core.vals,cljs.core.select_keys);
demo.notes.states = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dead","dead",-1946604091),null,new cljs.core.Keyword(null,"live","live",-1610148039),null], null), null);
demo.notes.color_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"live","live",-1610148039),"green",new cljs.core.Keyword(null,"dead","dead",-1946604091),"red"], null);
demo.notes.alive = (function demo$notes$alive(num_neighbours,current_state){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [(3),new cljs.core.Keyword(null,"live","live",-1610148039),(4),current_state], null),num_neighbours,new cljs.core.Keyword(null,"dead","dead",-1946604091));
});
demo.notes.iterate_life = (function demo$notes$iterate_life(circle_data,nx,ny,neighbours){
return cljs.core.map_indexed.call(null,(function (p1__48406_SHARP_,p2__48405_SHARP_){
return cljs.core.assoc.call(null,p2__48405_SHARP_,new cljs.core.Keyword(null,"alive","alive",1424929930),demo.notes.alive.call(null,cljs.core.count.call(null,neighbours.call(null,nx,ny,p1__48406_SHARP_)),new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(p2__48405_SHARP_)));
}),circle_data);
});
demo.notes.update_color = (function demo$notes$update_color(circle_data){
return cljs.core.map.call(null,(function (p1__48407_SHARP_){
return cljs.core.assoc.call(null,p1__48407_SHARP_,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(p1__48407_SHARP_).call(null,demo.notes.color_map));
}),circle_data);
});
demo.notes.play_life = (function demo$notes$play_life(circle_data,n,timeout,nx,ny,neighbours){
var lives = cljs.core.iterate.call(null,(function (p1__48408_SHARP_){
return demo.notes.update_color.call(null,demo.notes.iterate_life.call(null,p1__48408_SHARP_,nx,ny,neighbours));
}),circle_data);
var iter__29597__auto__ = ((function (lives){
return (function demo$notes$play_life_$_iter__48413(s__48414){
return (new cljs.core.LazySeq(null,((function (lives){
return (function (){
var s__48414__$1 = s__48414;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__48414__$1);
if(temp__4425__auto__){
var s__48414__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48414__$2)){
var c__29595__auto__ = cljs.core.chunk_first.call(null,s__48414__$2);
var size__29596__auto__ = cljs.core.count.call(null,c__29595__auto__);
var b__48416 = cljs.core.chunk_buffer.call(null,size__29596__auto__);
if((function (){var i__48415 = (0);
while(true){
if((i__48415 < size__29596__auto__)){
var life = cljs.core._nth.call(null,c__29595__auto__,i__48415);
cljs.core.chunk_append.call(null,b__48416,setTimeout(((function (i__48415,life,c__29595__auto__,size__29596__auto__,b__48416,s__48414__$2,temp__4425__auto__,lives){
return (function (){
return demo.notes.update_circles.call(null,life,"red");
});})(i__48415,life,c__29595__auto__,size__29596__auto__,b__48416,s__48414__$2,temp__4425__auto__,lives))
,(3000)));

var G__48417 = (i__48415 + (1));
i__48415 = G__48417;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48416),demo$notes$play_life_$_iter__48413.call(null,cljs.core.chunk_rest.call(null,s__48414__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48416),null);
}
} else {
var life = cljs.core.first.call(null,s__48414__$2);
return cljs.core.cons.call(null,setTimeout(((function (life,s__48414__$2,temp__4425__auto__,lives){
return (function (){
return demo.notes.update_circles.call(null,life,"red");
});})(life,s__48414__$2,temp__4425__auto__,lives))
,(3000)),demo$notes$play_life_$_iter__48413.call(null,cljs.core.rest.call(null,s__48414__$2)));
}
} else {
return null;
}
break;
}
});})(lives))
,null,null));
});})(lives))
;
return iter__29597__auto__.call(null,lives);
});
demo.notes.neighbours = (function demo$notes$neighbours(){
var args__29890__auto__ = [];
var len__29883__auto___48431 = arguments.length;
var i__29884__auto___48432 = (0);
while(true){
if((i__29884__auto___48432 < len__29883__auto___48431)){
args__29890__auto__.push((arguments[i__29884__auto___48432]));

var G__48433 = (i__29884__auto___48432 + (1));
i__29884__auto___48432 = G__48433;
continue;
} else {
}
break;
}

var argseq__29891__auto__ = ((((3) < args__29890__auto__.length))?(new cljs.core.IndexedSeq(args__29890__auto__.slice((3)),(0))):null);
return demo.notes.neighbours.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__29891__auto__);
});

demo.notes.neighbours.cljs$core$IFn$_invoke$arity$variadic = (function (nx,ny,pos,p__48422){
var map__48423 = p__48422;
var map__48423__$1 = ((((!((map__48423 == null)))?((((map__48423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48423):map__48423);
var wrap = cljs.core.get.call(null,map__48423__$1,new cljs.core.Keyword(null,"wrap","wrap",851669987));
var x_init = cljs.core.mod.call(null,pos,nx);
var y_init = cljs.core.quot.call(null,pos,nx);
var iter__29597__auto__ = ((function (x_init,y_init,map__48423,map__48423__$1,wrap){
return (function demo$notes$iter__48425(s__48426){
return (new cljs.core.LazySeq(null,((function (x_init,y_init,map__48423,map__48423__$1,wrap){
return (function (){
var s__48426__$1 = s__48426;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__48426__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x_delta = cljs.core.first.call(null,xs__4977__auto__);
var iterys__29593__auto__ = ((function (s__48426__$1,x_delta,xs__4977__auto__,temp__4425__auto__,x_init,y_init,map__48423,map__48423__$1,wrap){
return (function demo$notes$iter__48425_$_iter__48427(s__48428){
return (new cljs.core.LazySeq(null,((function (s__48426__$1,x_delta,xs__4977__auto__,temp__4425__auto__,x_init,y_init,map__48423,map__48423__$1,wrap){
return (function (){
var s__48428__$1 = s__48428;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__48428__$1);
if(temp__4425__auto____$1){
var s__48428__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48428__$2)){
var c__29595__auto__ = cljs.core.chunk_first.call(null,s__48428__$2);
var size__29596__auto__ = cljs.core.count.call(null,c__29595__auto__);
var b__48430 = cljs.core.chunk_buffer.call(null,size__29596__auto__);
if((function (){var i__48429 = (0);
while(true){
if((i__48429 < size__29596__auto__)){
var y_delta = cljs.core._nth.call(null,c__29595__auto__,i__48429);
var x_new = (x_init + x_delta);
var y_new = (y_init + y_delta);
if(cljs.core.truth_((function (){var or__28844__auto__ = wrap;
if(cljs.core.truth_(or__28844__auto__)){
return or__28844__auto__;
} else {
return ((x_new < nx)) && ((y_new < ny)) && (((0) <= x_new)) && (((0) <= y_new));
}
})())){
cljs.core.chunk_append.call(null,b__48430,(cljs.core.mod.call(null,x_new,nx) + (cljs.core.mod.call(null,y_new,ny) * nx)));

var G__48434 = (i__48429 + (1));
i__48429 = G__48434;
continue;
} else {
var G__48435 = (i__48429 + (1));
i__48429 = G__48435;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48430),demo$notes$iter__48425_$_iter__48427.call(null,cljs.core.chunk_rest.call(null,s__48428__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48430),null);
}
} else {
var y_delta = cljs.core.first.call(null,s__48428__$2);
var x_new = (x_init + x_delta);
var y_new = (y_init + y_delta);
if(cljs.core.truth_((function (){var or__28844__auto__ = wrap;
if(cljs.core.truth_(or__28844__auto__)){
return or__28844__auto__;
} else {
return ((x_new < nx)) && ((y_new < ny)) && (((0) <= x_new)) && (((0) <= y_new));
}
})())){
return cljs.core.cons.call(null,(cljs.core.mod.call(null,x_new,nx) + (cljs.core.mod.call(null,y_new,ny) * nx)),demo$notes$iter__48425_$_iter__48427.call(null,cljs.core.rest.call(null,s__48428__$2)));
} else {
var G__48436 = cljs.core.rest.call(null,s__48428__$2);
s__48428__$1 = G__48436;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__48426__$1,x_delta,xs__4977__auto__,temp__4425__auto__,x_init,y_init,map__48423,map__48423__$1,wrap))
,null,null));
});})(s__48426__$1,x_delta,xs__4977__auto__,temp__4425__auto__,x_init,y_init,map__48423,map__48423__$1,wrap))
;
var fs__29594__auto__ = cljs.core.seq.call(null,iterys__29593__auto__.call(null,cljs.core.range.call(null,(-1),(2))));
if(fs__29594__auto__){
return cljs.core.concat.call(null,fs__29594__auto__,demo$notes$iter__48425.call(null,cljs.core.rest.call(null,s__48426__$1)));
} else {
var G__48437 = cljs.core.rest.call(null,s__48426__$1);
s__48426__$1 = G__48437;
continue;
}
} else {
return null;
}
break;
}
});})(x_init,y_init,map__48423,map__48423__$1,wrap))
,null,null));
});})(x_init,y_init,map__48423,map__48423__$1,wrap))
;
return iter__29597__auto__.call(null,cljs.core.range.call(null,(-1),(2)));
});

demo.notes.neighbours.cljs$lang$maxFixedArity = (3);

demo.notes.neighbours.cljs$lang$applyTo = (function (seq48418){
var G__48419 = cljs.core.first.call(null,seq48418);
var seq48418__$1 = cljs.core.next.call(null,seq48418);
var G__48420 = cljs.core.first.call(null,seq48418__$1);
var seq48418__$2 = cljs.core.next.call(null,seq48418__$1);
var G__48421 = cljs.core.first.call(null,seq48418__$2);
var seq48418__$3 = cljs.core.next.call(null,seq48418__$2);
return demo.notes.neighbours.cljs$core$IFn$_invoke$arity$variadic(G__48419,G__48420,G__48421,seq48418__$3);
});
demo.notes.clear_stuff = (function demo$notes$clear_stuff(){
return d3.selectAll("svg").remove();
});
demo.notes.color_circles = (function demo$notes$color_circles(){
return d3.selectAll("circle").transition().duration((3000)).attr("fill","blue");
});
demo.notes.get_circle_coordinates = (function demo$notes$get_circle_coordinates(nx,ny,r){
var individual_coords = (function (){var iter__29597__auto__ = (function demo$notes$get_circle_coordinates_$_iter__48444(s__48445){
return (new cljs.core.LazySeq(null,(function (){
var s__48445__$1 = s__48445;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__48445__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var x = cljs.core.first.call(null,xs__4977__auto__);
var iterys__29593__auto__ = ((function (s__48445__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function demo$notes$get_circle_coordinates_$_iter__48444_$_iter__48446(s__48447){
return (new cljs.core.LazySeq(null,((function (s__48445__$1,x,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__48447__$1 = s__48447;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__48447__$1);
if(temp__4425__auto____$1){
var s__48447__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__48447__$2)){
var c__29595__auto__ = cljs.core.chunk_first.call(null,s__48447__$2);
var size__29596__auto__ = cljs.core.count.call(null,c__29595__auto__);
var b__48449 = cljs.core.chunk_buffer.call(null,size__29596__auto__);
if((function (){var i__48448 = (0);
while(true){
if((i__48448 < size__29596__auto__)){
var y = cljs.core._nth.call(null,c__29595__auto__,i__48448);
cljs.core.chunk_append.call(null,b__48449,(function (){var alive = cljs.core.rand_nth.call(null,cljs.core.seq.call(null,demo.notes.states));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * r) * (x + 0.5)),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * r) * (y + 0.5)),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"alive","alive",1424929930),alive,new cljs.core.Keyword(null,"color","color",1011675173),alive.call(null,demo.notes.colormap)], null);
})());

var G__48450 = (i__48448 + (1));
i__48448 = G__48450;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48449),demo$notes$get_circle_coordinates_$_iter__48444_$_iter__48446.call(null,cljs.core.chunk_rest.call(null,s__48447__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__48449),null);
}
} else {
var y = cljs.core.first.call(null,s__48447__$2);
return cljs.core.cons.call(null,(function (){var alive = cljs.core.rand_nth.call(null,cljs.core.seq.call(null,demo.notes.states));
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(((2) * r) * (x + 0.5)),new cljs.core.Keyword(null,"y","y",-1757859776),(((2) * r) * (y + 0.5)),new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"alive","alive",1424929930),alive,new cljs.core.Keyword(null,"color","color",1011675173),alive.call(null,demo.notes.colormap)], null);
})(),demo$notes$get_circle_coordinates_$_iter__48444_$_iter__48446.call(null,cljs.core.rest.call(null,s__48447__$2)));
}
} else {
return null;
}
break;
}
});})(s__48445__$1,x,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__48445__$1,x,xs__4977__auto__,temp__4425__auto__))
;
var fs__29594__auto__ = cljs.core.seq.call(null,iterys__29593__auto__.call(null,cljs.core.range.call(null,ny)));
if(fs__29594__auto__){
return cljs.core.concat.call(null,fs__29594__auto__,demo$notes$get_circle_coordinates_$_iter__48444.call(null,cljs.core.rest.call(null,s__48445__$1)));
} else {
var G__48451 = cljs.core.rest.call(null,s__48445__$1);
s__48445__$1 = G__48451;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29597__auto__.call(null,cljs.core.range.call(null,nx));
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"circles","circles",-1947060917),individual_coords,new cljs.core.Keyword(null,"width","width",-384071477),((r * nx) * (2)),new cljs.core.Keyword(null,"height","height",1025178622),((r * ny) * (2))], null);
});
demo.notes.draw_svg = (function demo$notes$draw_svg(width,height){
return d3.select("div").append("svg").attr("width",width).attr("height",height);
});
demo.notes.draw_circles = (function demo$notes$draw_circles(info){
return d3.select("svg").selectAll("circle").data(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(info))).enter().append("circle").attr("cy",(function (d_){
return d_.y;
})).attr("cx",(function (d_){
return d_.x;
})).attr("r",(function (d_){
return d_.r;
})).attr("fill",(function (d_){
return d_.color;
}));
});
var n__29728__auto___48452 = (10);
var n_48453 = (0);
while(true){
if((n_48453 < n__29728__auto___48452)){
cljs.core.List.EMPTY;

var G__48454 = (n_48453 + (1));
n_48453 = G__48454;
continue;
} else {
}
break;
}
demo.notes.modify_circles = (function demo$notes$modify_circles(info,color){
return d3.select("svg").selectAll("circle").data(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(info))).attr("fill",color).attr("cy",(function (d_){
return d_.y;
})).attr("cx",(function (d_){
return d_.x;
})).attr("r",(function (d_){
return d_.r;
}));
});
demo.notes.update_circles = (function demo$notes$update_circles(info,color){
return d3.select("svg").selectAll("circle").data(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(info))).attr("fill",(function (d_){
return d_.color;
})).attr("cy",(function (d_){
return d_.y;
})).attr("cx",(function (d_){
return d_.x;
})).attr("r",(function (d_){
return d_.r;
}));
});
demo.notes.circle_data = demo.notes.get_circle_coordinates.call(null,(6),(6),(100));
demo.notes.refresh_stuff = (function demo$notes$refresh_stuff(){
demo.notes.clear_stuff.call(null);

demo.notes.draw_svg.call(null,(1000),(1000));

return demo.notes.draw_circles.call(null,demo.notes.circle_data);
});
demo.notes.refresh_stuff.call(null);

//# sourceMappingURL=notes.js.map