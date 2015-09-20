// Compiled by ClojureScript 0.0-3058 {}
goog.provide('graphagora.graph');
goog.require('cljs.core');
graphagora.graph.getrandomnodes = (function graphagora$graph$getrandomnodes(n,width,height){
return cljs.core.clj__GT_js.call(null,cljs.core.take.call(null,n,cljs.core.repeatedly.call(null,(function (){
return cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.rand.call(null,width),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.rand.call(null,height),new cljs.core.Keyword(null,"graph","graph",1558099509),cljs.core.rand_int.call(null,(5))], null));
}))));
});
graphagora.graph.dummy = (function graphagora$graph$dummy(){
return alert("don't call");
});
graphagora.graph.getrandomlinks = (function graphagora$graph$getrandomlinks(n){
return cljs.core.clj__GT_js.call(null,(function (){var iter__28914__auto__ = (function graphagora$graph$getrandomlinks_$_iter__34408(s__34409){
return (new cljs.core.LazySeq(null,(function (){
var s__34409__$1 = s__34409;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__34409__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var source = cljs.core.first.call(null,xs__4977__auto__);
var iterys__28910__auto__ = ((function (s__34409__$1,source,xs__4977__auto__,temp__4425__auto__){
return (function graphagora$graph$getrandomlinks_$_iter__34408_$_iter__34410(s__34411){
return (new cljs.core.LazySeq(null,((function (s__34409__$1,source,xs__4977__auto__,temp__4425__auto__){
return (function (){
var s__34411__$1 = s__34411;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__34411__$1);
if(temp__4425__auto____$1){
var s__34411__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34411__$2)){
var c__28912__auto__ = cljs.core.chunk_first.call(null,s__34411__$2);
var size__28913__auto__ = cljs.core.count.call(null,c__28912__auto__);
var b__34413 = cljs.core.chunk_buffer.call(null,size__28913__auto__);
if((function (){var i__34412 = (0);
while(true){
if((i__34412 < size__28913__auto__)){
var target = cljs.core._nth.call(null,c__28912__auto__,i__34412);
if(cljs.core._EQ_.call(null,(0),cljs.core.rand_int.call(null,(20)))){
cljs.core.chunk_append.call(null,b__34413,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"target","target",253001721),target], null)));

var G__34414 = (i__34412 + (1));
i__34412 = G__34414;
continue;
} else {
var G__34415 = (i__34412 + (1));
i__34412 = G__34415;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34413),graphagora$graph$getrandomlinks_$_iter__34408_$_iter__34410.call(null,cljs.core.chunk_rest.call(null,s__34411__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34413),null);
}
} else {
var target = cljs.core.first.call(null,s__34411__$2);
if(cljs.core._EQ_.call(null,(0),cljs.core.rand_int.call(null,(20)))){
return cljs.core.cons.call(null,cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"source","source",-433931539),source,new cljs.core.Keyword(null,"target","target",253001721),target], null)),graphagora$graph$getrandomlinks_$_iter__34408_$_iter__34410.call(null,cljs.core.rest.call(null,s__34411__$2)));
} else {
var G__34416 = cljs.core.rest.call(null,s__34411__$2);
s__34411__$1 = G__34416;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__34409__$1,source,xs__4977__auto__,temp__4425__auto__))
,null,null));
});})(s__34409__$1,source,xs__4977__auto__,temp__4425__auto__))
;
var fs__28911__auto__ = cljs.core.seq.call(null,iterys__28910__auto__.call(null,cljs.core.range.call(null,n)));
if(fs__28911__auto__){
return cljs.core.concat.call(null,fs__28911__auto__,graphagora$graph$getrandomlinks_$_iter__34408.call(null,cljs.core.rest.call(null,s__34409__$1)));
} else {
var G__34417 = cljs.core.rest.call(null,s__34409__$1);
s__34409__$1 = G__34417;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__28914__auto__.call(null,cljs.core.range.call(null,n));
})());
});
graphagora.graph.clear_command = (function graphagora$graph$clear_command(){
return d3.select("svg").remove();
});
graphagora.graph.force_layout = (function graphagora$graph$force_layout(){
var width = (1000);
var height = (1000);
var nodes = graphagora.graph.getrandomnodes.call(null,(30),(1000),(1000));
var links = graphagora.graph.getrandomlinks.call(null,(30));
var animationstep = (400);
var counter = cljs.core.atom.call(null,(10));
var colourmap = new cljs.core.PersistentArrayMap(null, 2, [(0),"green",(1),"red"], null);
var svg = d3.select("div").append("svg").attr("width",width).attr("height",height);
var link = svg.selectAll("line").data(links).enter().append("line").attr("x1",((function (width,height,nodes,links,animationstep,counter,colourmap,svg){
return (function (p1__34418_SHARP_){
return cljs.core.get.call(null,nodes,p1__34418_SHARP_.source).x;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg))
).attr("x2",((function (width,height,nodes,links,animationstep,counter,colourmap,svg){
return (function (p1__34419_SHARP_){
return cljs.core.get.call(null,nodes,p1__34419_SHARP_.target).x;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg))
).attr("y1",((function (width,height,nodes,links,animationstep,counter,colourmap,svg){
return (function (p1__34420_SHARP_){
return cljs.core.get.call(null,nodes,p1__34420_SHARP_.source).y;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg))
).attr("y2",((function (width,height,nodes,links,animationstep,counter,colourmap,svg){
return (function (p1__34421_SHARP_){
return cljs.core.get.call(null,nodes,p1__34421_SHARP_.target).y;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg))
).attr("stroke-width",(1)).attr("stroke","red");
var node = svg.selectAll("circle").data(nodes).enter().append("circle").attr("r",(width / (100))).attr("cx",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link){
return (function (p1__34422_SHARP_){
return p1__34422_SHARP_.x;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link))
).attr("cy",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link){
return (function (p1__34423_SHARP_){
return p1__34423_SHARP_.y;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link))
);
var updatenode = ((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node){
return (function (){
return node.attr("cx",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node){
return (function (p1__34424_SHARP_){
return p1__34424_SHARP_.x;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node))
).attr("cy",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node){
return (function (p1__34425_SHARP_){
return p1__34425_SHARP_.y;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node))
).attr("fill",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node){
return (function (p1__34426_SHARP_){
return cljs.core.get.call(null,colourmap,((cljs.core._EQ_.call(null,(0),p1__34426_SHARP_.graph))?(0):(1)));
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node))
);
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node))
;
var updatelink = ((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode){
return (function (){
return link.attr("x1",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode){
return (function (p1__34427_SHARP_){
return p1__34427_SHARP_.source.x;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode))
).attr("y1",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode){
return (function (p1__34428_SHARP_){
return p1__34428_SHARP_.source.y;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode))
).attr("x2",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode){
return (function (p1__34429_SHARP_){
return p1__34429_SHARP_.target.x;
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode))
).attr("y2",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode){
return (function (p1__34430_SHARP_){
return p1__34430_SHARP_.target.y;
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
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [(0),(1000),(1),(-1000)], null),n.graph);
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode,updatelink,updateall,chilledupdate))
).on("end",((function (width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode,updatelink,updateall,chilledupdate){
return (function (){
graphagora.graph.clear_command.call(null);

return graphagora$graph$force_layout.call(null);
});})(width,height,nodes,links,animationstep,counter,colourmap,svg,link,node,updatenode,updatelink,updateall,chilledupdate))
).on("tick",updateall).start();
return null;
});

//# sourceMappingURL=graph.js.map