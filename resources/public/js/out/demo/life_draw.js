// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.life_draw');
goog.require('cljs.core');
demo.life_draw.clear_stuff = (function demo$life_draw$clear_stuff(){
return d3.selectAll("svg").remove();
});
demo.life_draw.color_circles = (function demo$life_draw$color_circles(){
return d3.selectAll("circle").transition().duration((3000)).attr("fill","blue");
});
demo.life_draw.draw_svg = (function demo$life_draw$draw_svg(width,height){
return d3.select("div").append("svg").attr("width",width).attr("height",height);
});
demo.life_draw.draw_circles = (function demo$life_draw$draw_circles(info){
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
demo.life_draw.modify_circles = (function demo$life_draw$modify_circles(info,color){
return d3.select("svg").selectAll("circle").data(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(info))).attr("fill",color).attr("cy",(function (d_){
return d_.y;
})).attr("cx",(function (d_){
return d_.x;
})).attr("r",(function (d_){
return d_.r;
}));
});
demo.life_draw.update_circles = (function demo$life_draw$update_circles(info){
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

//# sourceMappingURL=life_draw.js.map