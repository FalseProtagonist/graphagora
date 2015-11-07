// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.life_draw');
goog.require('cljs.core');
demo.life_draw.clear_stuff = (function demo$life_draw$clear_stuff(){
return d3.selectAll("svg").remove();
});
demo.life_draw.draw_svg = (function demo$life_draw$draw_svg(width,height){
return d3.select("#life").append("svg").attr("width",width).attr("height",height);
});
demo.life_draw.update_elements = (function demo$life_draw$update_elements(data,time_taken){
return d3.select("svg").selectAll("circle").data(data).transition().duration(time_taken).attr("cy",(function (d_){
return d_.y;
})).attr("cx",(function (d_){
return d_.x;
})).attr("fill",(function (d_){
return d_.color;
})).attr("r",(function (d_){
return d_.r;
}));
});
demo.life_draw.create_elements = (function demo$life_draw$create_elements(data,time_taken){
return d3.select("svg").selectAll("circle").data(data).enter().append("circle").attr("cy",(function (d_){
return d_.y;
})).attr("cx",(function (d_){
return d_.x;
})).attr("fill",(function (d_){
return d_.color;
})).attr("r",(function (d_){
return d_.r;
}));
});
demo.life_draw.draw_update_circles = (function demo$life_draw$draw_update_circles(data,transition){
var datajs = cljs.core.clj__GT_js.call(null,data);
demo.life_draw.create_elements.call(null,datajs,transition);

return demo.life_draw.update_elements.call(null,datajs,transition);
});

//# sourceMappingURL=life_draw.js.map