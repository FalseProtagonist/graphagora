// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.graph');
goog.require('cljs.core');
demo.graph.getrandomnodes = (function demo$graph$getrandomnodes(n,width,height){
return cljs.core.clj__GT_js.call(null,cljs.core.take.call(null,n,cljs.core.repeatedly.call(null,(function (){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand.call(null,width),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.rand.call(null,height),new cljs.core.Keyword(null,"graph","graph",1558099509),cljs.core.rand_int.call(null,(5))], null));
}))));
});
demo.graph.getrandomlinks = (function demo$graph$getrandomlinks(n){
return cljs.core.clj__GT_js.call(null,(function (){var iter__29678__auto__ = (function demo$graph$getrandomlinks_$_iter__30288(s__30289){
return (new cljs.core.LazySeq(null,(function (){
var s__30289__$1 = s__30289;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30289__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var source = cljs.core.first.call(null,xs__4977__auto__);
var iterys__29674__auto__ = ((function (s__30289__$1,source,xs__4977__auto__,temp__4425__auto__){
return (function demo$graph$getrandomlinks_$_iter__30288_$_iter__30290(s__30291){
return (new cljs.core.LazySeq(null,((function (s__30289__$1,source,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__30291__$1 = s__30291;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__30291__$1);
if(temp__4425__auto____$1){
var s__30291__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30291__$2)){
var c__29676__auto__ = cljs.core.chunk_first.call(null,s__30291__$2);
var size__29677__auto__ = cljs.core.count.call(null,c__29676__auto__);
var b__30293 = cljs.core.chunk_buffer.call(null,size__29677__auto__);
if((function (){var i__30292 = (0);
while(true){
if((i__30292 < size__29677__auto__)){
var target = cljs.core._nth.call(null,c__29676__auto__,i__30292);
if(cljs.core._EQ_.call(null,(0),cljs.core.rand_int.call(null,(10)))){
cljs.core.chunk_append.call(null,b__30293,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"target","target",253001721),target], null)));

var G__30294 = (i__30292 + (1));
i__30292 = G__30294;
continue;
} else {
var G__30295 = (i__30292 + (1));
i__30292 = G__30295;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30293),demo$graph$getrandomlinks_$_iter__30288_$_iter__30290.call(null,cljs.core.chunk_rest.call(null,s__30291__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30293),null);
}
} else {
var target = cljs.core.first.call(null,s__30291__$2);
if(cljs.core._EQ_.call(null,(0),cljs.core.rand_int.call(null,(10)))){
return cljs.core.cons.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"target","target",253001721),target], null)),demo$graph$getrandomlinks_$_iter__30288_$_iter__30290.call(null,cljs.core.rest.call(null,s__30291__$2)));
} else {
var G__30296 = cljs.core.rest.call(null,s__30291__$2);
s__30291__$1 = G__30296;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__30289__$1,source,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__30289__$1,source,xs__4977__auto__,temp__4425__auto__))
;
var fs__29675__auto__ = cljs.core.seq.call(null,iterys__29674__auto__.call(null,cljs.core.range.call(null,n)));
if(fs__29675__auto__){
return cljs.core.concat.call(null,fs__29675__auto__,demo$graph$getrandomlinks_$_iter__30288.call(null,cljs.core.rest.call(null,s__30289__$1)));
} else {
var G__30297 = cljs.core.rest.call(null,s__30289__$1);
s__30289__$1 = G__30297;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__29678__auto__.call(null,cljs.core.range.call(null,n));
})());
});
demo.graph.clear_command = (function demo$graph$clear_command(){
return d3.select("svg").remove();
});
demo.graph.force_layout = (function demo$graph$force_layout(){
var width = (1000);
var height = (1000);
var nodes = demo.graph.getrandomnodes.call(null,(20),(1000),(1000));
var links = demo.graph.getrandomlinks.call(null,(20));
var animationstep = (400);
var counter = cljs.core.atom.call(null,(10));
var colourmap = new cljs.core.PersistentArrayMap(null, 5, [(0),"green",(1),"red",(2),"blue",(3),"blue",(4),"blue"], null);
var svg = d3.select("div").append("svg").attr("width",width).attr("height",height);
var link = svg.selectAll("line").data(links).enter().append("line").attr("x1",((function (width,height,nodes,links,animationstep,counter,colourmap,svg){
return (function (p1__30298_SHARP_){
return cljs.core.get.call(null,nodes,p1__30298_SHARP_.source).x;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg))
).attr("x2",((function (width,height,nodes,links,animationstep,counter,colourmap,svg){
return (function (p1__30299_SHARP_){
return cljs.core.get.call(null,nodes,p1__30299_SHARP_.target).x;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg))
).attr("y1",((function (width,height,nodes,links,animationstep,counter,colourmap,svg){
return (function (p1__30300_SHARP_){
return cljs.core.get.call(null,nodes,p1__30300_SHARP_.source).y;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg))
).attr("y2",((function (width,height,nodes,links,animationstep,counter,colourmap,svg){
return (function (p1__30301_SHARP_){
return cljs.core.get.call(null,nodes,p1__30301_SHARP_.target).y;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg))
).attr("stroke-width",(1)).attr("stroke","red");
var node = svg.selectAll("circle").data(nodes).enter().append("circle").attr("r",(width / (100))).attr("cx",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link){
return (function (p1__30302_SHARP_){
return p1__30302_SHARP_.x;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link))
).attr("cy",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link){
return (function (p1__30303_SHARP_){
return p1__30303_SHARP_.y;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link))
).on("click",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link){
return (function (){
return alert("clicked");
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link))
);
var updatenode = ((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node){
return (function (){
return node.attr("cx",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node){
return (function (p1__30304_SHARP_){
return p1__30304_SHARP_.x;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node))
).attr("cy",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node){
return (function (p1__30305_SHARP_){
return p1__30305_SHARP_.y;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node))
).attr("fill",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node){
return (function (p1__30306_SHARP_){
return cljs.core.get.call(null,colourmap,p1__30306_SHARP_.graph);
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node))
);
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node))
;
var updatelink = ((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode){
return (function (){
return link.attr("x1",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode){
return (function (p1__30307_SHARP_){
return p1__30307_SHARP_.source.x;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode))
).attr("y1",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode){
return (function (p1__30308_SHARP_){
return p1__30308_SHARP_.source.y;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode))
).attr("x2",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode){
return (function (p1__30309_SHARP_){
return p1__30309_SHARP_.target.x;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode))
).attr("y2",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode){
return (function (p1__30310_SHARP_){
return p1__30310_SHARP_.target.y;
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

//# sourceMappingURL=graph.js.map