// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.notes');
goog.require('cljs.core');
demo.notes.clear_stuff_here = (function demo$notes$clear_stuff_here(){
return d3.selectAll("circle").remove();
});
demo.notes.play = (function demo$notes$play(){
demo.notes.clear_stuff_here.call(null);

draw.draw_svg.call(null,(1000),(1000));

return draw.draw_circles.call(null,demo.notes.rand_circle_data.call(null));
});
demo.notes.play2 = (function demo$notes$play2(){
draw.draw_svg.call(null,(1000),(1000));

return draw.draw_circles.call(null,demo.notes.rand_circle_data.call(null));
});
demo.notes.draw_circles = (function demo$notes$draw_circles(info){
return d3.select("svg").selectAll("circle").data(cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(demo.notes.rand_circle_data.call(null)))).enter().append("circle").attr("cy",(function (d_){
return d_.y;
})).attr("cx",(function (d_){
return d_.x;
})).attr("fill",(function (d_){
return d_.color;
})).attr("r",(function (d_){
return d_.r;
}));
});
demo.notes.get_data = (function demo$notes$get_data(){
return cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(demo.notes.rand_circle_data.call(null)));
});
demo.notes.update_elements = (function demo$notes$update_elements(data,transition){
return d3.select("svg").selectAll("circle").data(data).transition().duration(transition).attr("cy",(function (d_){
return d_.y;
})).attr("cx",(function (d_){
return d_.x;
})).attr("fill",(function (d_){
return d_.color;
})).attr("r",(function (d_){
return d_.r;
}));
});
demo.notes.create_elements = (function demo$notes$create_elements(data,transition){
return d3.select("svg").selectAll("circle").data(data).enter().append("circle").transition().duration(transition).attr("cy",(function (d_){
return d_.y;
})).attr("cx",(function (d_){
return d_.x;
})).attr("fill",(function (d_){
return d_.color;
})).attr("r",(function (d_){
return d_.r;
}));
});
demo.notes.play3 = (function demo$notes$play3(){
var data = demo.notes.get_data.call(null);
demo.notes.create_elements.call(null,data,(3000));

return demo.notes.update_elements.call(null,data,(3000));
});

//# sourceMappingURL=notes.js.map