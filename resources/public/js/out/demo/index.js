// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.index');
goog.require('cljs.core');
goog.require('demo.util');
goog.require('demo.routes');
goog.require('reagent.core');
demo.index.link_data = cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"className","className",-1983287057),"",new cljs.core.Keyword(null,"value","value",305978217),(0),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"Game of Lifee",new cljs.core.Keyword(null,"value","value",305978217),(2000),new cljs.core.Keyword(null,"link","link",-1769163468),"life",new cljs.core.Keyword(null,"packageName","packageName",267549922),"aa"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"Spam",new cljs.core.Keyword(null,"value","value",305978217),(200),new cljs.core.Keyword(null,"link","link",-1769163468),"spam",new cljs.core.Keyword(null,"packageName","packageName",267549922),"ee"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"About",new cljs.core.Keyword(null,"value","value",305978217),(400),new cljs.core.Keyword(null,"link","link",-1769163468),"about",new cljs.core.Keyword(null,"packageName","packageName",267549922),"bb"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"Blog",new cljs.core.Keyword(null,"value","value",305978217),(600),new cljs.core.Keyword(null,"link","link",-1769163468),"blog",new cljs.core.Keyword(null,"packageName","packageName",267549922),"cc"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"Dancing Graphs",new cljs.core.Keyword(null,"value","value",305978217),(800),new cljs.core.Keyword(null,"link","link",-1769163468),"dancing-graph",new cljs.core.Keyword(null,"packageName","packageName",267549922),"dd"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),"Clicky Graphs",new cljs.core.Keyword(null,"value","value",305978217),(1000),new cljs.core.Keyword(null,"link","link",-1769163468),"graph",new cljs.core.Keyword(null,"packageName","packageName",267549922),"ff"], null)], null)], null));
demo.index.r = (400);
demo.index.format = d3.format(",d");
demo.index.fill = d3.scale.category10();
demo.index.bubble = d3.layout.pack().sort(null).size(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.util.avail_width,demo.util.avail_height], null)));
demo.index.make_chart = (function demo$index$make_chart(){
demo.util.log.call(null,"make-chart called");

return d3.select("#index").append("svg:svg").attr("width",demo.util.avail_width).attr("height",demo.util.avail_height).attr("class","bubble");
});
demo.index.make_node = (function demo$index$make_node(link_data){
demo.util.log.call(null,"make-node called");

var chart = demo.index.make_chart.call(null);
return chart.selectAll("g.node").data(demo.index.bubble.nodes(link_data)).enter().append("svg:g").filter(((function (chart){
return (function (d){
return cljs.core.not.call(null,d.children);
});})(chart))
).attr("class","node").attr("transform",((function (chart){
return (function (d){
return [cljs.core.str("translate("),cljs.core.str(d.x),cljs.core.str(","),cljs.core.str(d.y),cljs.core.str(")")].join('');
});})(chart))
);
});
demo.index.daddy_index = (function demo$index$daddy_index(){
demo.util.log.call(null,"daddy index called");

var node = demo.index.make_node.call(null,demo.index.link_data);
node.append("svg:title").text(((function (node){
return (function (d){
return [cljs.core.str(d.className),cljs.core.str(":"),cljs.core.str(demo.index.format.call(null,d.value))].join('');
});})(node))
);

node.append("svg:circle").on("click",((function (node){
return (function (p1__32633_SHARP_){
return demo.routes.set_history.call(null,p1__32633_SHARP_.link);
});})(node))
).attr("r",((function (node){
return (function (d){
return d.r;
});})(node))
).style("fill",((function (node){
return (function (d){
return demo.index.fill.call(null,d.packageName);
});})(node))
);

node.append("text").on("click",((function (node){
return (function (p1__32634_SHARP_){
return demo.routes.set_history.call(null,p1__32634_SHARP_.link);
});})(node))
).attr("text-anchor","middle").attr("dy",".3em").attr("fill","white").text(((function (node){
return (function (d){
return d.className.substring((0),(d.r / (3)));
});})(node))
);

return ((function (node){
return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);
});
;})(node))
});
demo.index.draw_svg = (function demo$index$draw_svg(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#index","div#index",370340727)], null);
});
demo.index.index_component = (function demo$index$index_component(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),demo.index.draw_svg,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),demo.index.daddy_index], null));
});

//# sourceMappingURL=index.js.map