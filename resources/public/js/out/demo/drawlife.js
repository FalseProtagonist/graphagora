// Compiled by ClojureScript 1.7.48 {}
goog.provide('demo.drawlife');
goog.require('cljs.core');
demo.drawlife.clear_stuff = (function demo$drawlife$clear_stuff(){
return d3.selectAll("svg").remove();
});
demo.drawlife.color_circles = (function demo$drawlife$color_circles(){
return d3.selectAll("circle").transition().duration((3000)).attr("fill","blue");
});
demo.drawlife.draw_svg = (function demo$drawlife$draw_svg(width,height){
return d3.select("div").append("svg").attr("width",width).attr("height",height);
});
demo.drawlife.draw_circles = (function demo$drawlife$draw_circles(info){
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
demo.drawlife.modify_circles = (function demo$drawlife$modify_circles(info,color){
return d3.select("svg").selectAll("circle").data(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(info))).attr("fill",color).attr("cy",(function (d_){
return d_.y;
})).attr("cx",(function (d_){
return d_.x;
})).attr("r",(function (d_){
return d_.r;
}));
});
demo.drawlife.update_circles = (function demo$drawlife$update_circles(info,color){
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

//# sourceMappingURL=drawlife.js.map