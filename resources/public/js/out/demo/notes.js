// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.notes');
goog.require('cljs.core');
demo.notes.swap_life = (function demo$notes$swap_life(circle_state){
return cljs.core.List.EMPTY;
});
demo.notes.draw_circles = (function demo$notes$draw_circles(info){
return d3.select("svg").selectAll("circle").data(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(info))).enter().append("circle").attr("cy",(function (d_){
return d_.y;
})).attr("cx",(function (d_){
return d_.x;
})).attr("fill",(function (d_){
return d_.color;
})).attr("r",(function (d_){
return d_.r;
}));
});

//# sourceMappingURL=notes.js.map