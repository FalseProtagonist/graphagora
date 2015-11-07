// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.graph');
goog.require('cljs.core');
goog.require('demo.util');
goog.require('reagent.core');
demo.graph.getrandomnodes = (function demo$graph$getrandomnodes(n,width,height){
return cljs.core.clj__GT_js.call(null,cljs.core.take.call(null,n,cljs.core.repeatedly.call(null,(function (){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand.call(null,width),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.rand.call(null,height),new cljs.core.Keyword(null,"graph","graph",1558099509),cljs.core.rand_int.call(null,(5))], null));
}))));
});
demo.graph.getrandomlinks = (function demo$graph$getrandomlinks(n){
return cljs.core.clj__GT_js.call(null,(function (){var iter__31200__auto__ = (function demo$graph$getrandomlinks_$_iter__34793(s__34794){
return (new cljs.core.LazySeq(null,(function (){
var s__34794__$1 = s__34794;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34794__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var source = cljs.core.first.call(null,xs__4977__auto__);
var iterys__31196__auto__ = ((function (s__34794__$1,source,xs__4977__auto__,temp__4425__auto__){
return (function demo$graph$getrandomlinks_$_iter__34793_$_iter__34795(s__34796){
return (new cljs.core.LazySeq(null,((function (s__34794__$1,source,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__34796__$1 = s__34796;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__34796__$1);
if(temp__4425__auto____$1){
var s__34796__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34796__$2)){
var c__31198__auto__ = cljs.core.chunk_first.call(null,s__34796__$2);
var size__31199__auto__ = cljs.core.count.call(null,c__31198__auto__);
var b__34798 = cljs.core.chunk_buffer.call(null,size__31199__auto__);
if((function (){var i__34797 = (0);
while(true){
if((i__34797 < size__31199__auto__)){
var target = cljs.core._nth.call(null,c__31198__auto__,i__34797);
if(cljs.core._EQ_.call(null,(0),cljs.core.rand_int.call(null,(20)))){
cljs.core.chunk_append.call(null,b__34798,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"target","target",253001721),target], null)));

var G__34799 = (i__34797 + (1));
i__34797 = G__34799;
continue;
} else {
var G__34800 = (i__34797 + (1));
i__34797 = G__34800;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34798),demo$graph$getrandomlinks_$_iter__34793_$_iter__34795.call(null,cljs.core.chunk_rest.call(null,s__34796__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34798),null);
}
} else {
var target = cljs.core.first.call(null,s__34796__$2);
if(cljs.core._EQ_.call(null,(0),cljs.core.rand_int.call(null,(20)))){
return cljs.core.cons.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"target","target",253001721),target], null)),demo$graph$getrandomlinks_$_iter__34793_$_iter__34795.call(null,cljs.core.rest.call(null,s__34796__$2)));
} else {
var G__34801 = cljs.core.rest.call(null,s__34796__$2);
s__34796__$1 = G__34801;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34794__$1,source,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__34794__$1,source,xs__4977__auto__,temp__4425__auto__))
;
var fs__31197__auto__ = cljs.core.seq.call(null,iterys__31196__auto__.call(null,cljs.core.range.call(null,n)));
if(fs__31197__auto__){
return cljs.core.concat.call(null,fs__31197__auto__,demo$graph$getrandomlinks_$_iter__34793.call(null,cljs.core.rest.call(null,s__34794__$1)));
} else {
var G__34802 = cljs.core.rest.call(null,s__34794__$1);
s__34794__$1 = G__34802;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31200__auto__.call(null,cljs.core.range.call(null,n));
})());
});
demo.graph.clear_command = (function demo$graph$clear_command(){
return d3.select("svg").remove();
});
demo.graph.force_layout = (function demo$graph$force_layout(){
var width = demo.util.avail_width;
var height = demo.util.avail_height;
var nodes = demo.graph.getrandomnodes.call(null,(30),(1000),(1000));
var links = demo.graph.getrandomlinks.call(null,(30));
var animationstep = (400);
var counter = cljs.core.atom.call(null,(10));
var colourmap = new cljs.core.PersistentArrayMap(null, 5, [(0),"green",(1),"red",(2),"blue",(3),"blue",(4),"blue"], null);
var svg = d3.select("div").append("svg").attr("width",width).attr("height",height);
var link = svg.selectAll("line").data(links).enter().append("line").attr("x1",((function (width,height,nodes,links,animationstep,counter,colourmap,svg){
return (function (p1__34803_SHARP_){
return cljs.core.get.call(null,nodes,p1__34803_SHARP_.source).x;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg))
).attr("x2",((function (width,height,nodes,links,animationstep,counter,colourmap,svg){
return (function (p1__34804_SHARP_){
return cljs.core.get.call(null,nodes,p1__34804_SHARP_.target).x;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg))
).attr("y1",((function (width,height,nodes,links,animationstep,counter,colourmap,svg){
return (function (p1__34805_SHARP_){
return cljs.core.get.call(null,nodes,p1__34805_SHARP_.source).y;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg))
).attr("y2",((function (width,height,nodes,links,animationstep,counter,colourmap,svg){
return (function (p1__34806_SHARP_){
return cljs.core.get.call(null,nodes,p1__34806_SHARP_.target).y;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg))
).attr("stroke-width",(1)).attr("stroke","red");
var node = svg.selectAll("circle").data(nodes).enter().append("circle").attr("r",(width / (80))).attr("cx",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link){
return (function (p1__34807_SHARP_){
return p1__34807_SHARP_.x;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link))
).attr("cy",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link){
return (function (p1__34808_SHARP_){
return p1__34808_SHARP_.y;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link))
).on("click",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link){
return (function (){
return alert("clicked");
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link))
);
var updatenode = ((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node){
return (function (){
return node.attr("cx",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node){
return (function (p1__34809_SHARP_){
return p1__34809_SHARP_.x;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node))
).attr("cy",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node){
return (function (p1__34810_SHARP_){
return p1__34810_SHARP_.y;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node))
).attr("fill",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node){
return (function (p1__34811_SHARP_){
return cljs.core.get.call(null,colourmap,p1__34811_SHARP_.graph);
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node))
);
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node))
;
var updatelink = ((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode){
return (function (){
return link.attr("x1",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode){
return (function (p1__34812_SHARP_){
return p1__34812_SHARP_.source.x;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode))
).attr("y1",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode){
return (function (p1__34813_SHARP_){
return p1__34813_SHARP_.source.y;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode))
).attr("x2",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode){
return (function (p1__34814_SHARP_){
return p1__34814_SHARP_.target.x;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode))
).attr("y2",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode){
return (function (p1__34815_SHARP_){
return p1__34815_SHARP_.target.y;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode))
);
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode))
;
var updateall = ((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode,updatelink){
return (function (){
updatenode.call(null);

return updatelink.call(null);
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode,updatelink))
;
var chilledupdate = ((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode,updatelink,updateall){
return (function (){
updateall.call(null);

cljs.core.force.stop();

return setTimeout(cljs.core.force.start(),animationstep);
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode,updatelink,updateall))
;
var force = d3.layout.force().size([width,height]).nodes(nodes).links(links).linkDistance((width / (5))).charge(((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode,updatelink,updateall,chilledupdate){
return (function (n){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 5, [(0),(500),(1),(-500),(2),(0),(3),(0),(4),(0)], null),n.graph);
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode,updatelink,updateall,chilledupdate))
).on("end",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode,updatelink,updateall,chilledupdate){
return (function (){
demo.graph.clear_command.call(null);

return demo$graph$force_layout.call(null);
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode,updatelink,updateall,chilledupdate))
).on("tick",updateall).start();
return null;
});
demo.graph.draw_svg = (function demo$graph$draw_svg(){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#dancing","div#dancing",-1316697155)], null);
});
demo.graph.force_component = (function demo$graph$force_component(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),demo.graph.draw_svg,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),demo.graph.force_layout], null));
});

//# sourceMappingURL=graph.js.map