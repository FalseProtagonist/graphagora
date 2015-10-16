// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.notes');
goog.require('cljs.core');
demo.notes.select_values = cljs.core.comp.call(null,cljs.core.vals,cljs.core.select_keys);
demo.notes.iterate_life.call(null,demo.notes.circles,(6),(6),demo.notes.neighbours);
cljs.core.swap_BANG_.call(null,demo.notes.circle_state,logic.iterate_life_main);
cljs.core.reset_BANG_.call(null,demo.notes.circle_state,demo.notes.circle_data);
demo.notes.iterate_life = (function demo$notes$iterate_life(circles,nx,ny,neighbours){
return cljs.core.map_indexed.call(null,(function (p1__45696_SHARP_,p2__45695_SHARP_){
return cljs.core.assoc.call(null,p2__45695_SHARP_,new cljs.core.Keyword(null,"alive","alive",1424929930),demo.notes.alive.call(null,cljs.core.count.call(null,demo.notes.count_live_neighbours.call(null,circles,nx,ny,p1__45696_SHARP_)),new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(p2__45695_SHARP_)));
}),circles);
});

//# sourceMappingURL=notes.js.map