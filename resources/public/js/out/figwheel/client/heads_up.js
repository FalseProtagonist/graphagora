// Compiled by ClojureScript 0.0-3058 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');

/**
 * @param {...*} var_args
 */
figwheel.client.heads_up.node = (function() { 
var figwheel$client$heads_up$node__delegate = function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__34899_34907 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__34900_34908 = null;
var count__34901_34909 = (0);
var i__34902_34910 = (0);
while(true){
if((i__34902_34910 < count__34901_34909)){
var k_34911 = cljs.core._nth.call(null,chunk__34900_34908,i__34902_34910);
e.setAttribute(cljs.core.name.call(null,k_34911),cljs.core.get.call(null,attrs,k_34911));

var G__34912 = seq__34899_34907;
var G__34913 = chunk__34900_34908;
var G__34914 = count__34901_34909;
var G__34915 = (i__34902_34910 + (1));
seq__34899_34907 = G__34912;
chunk__34900_34908 = G__34913;
count__34901_34909 = G__34914;
i__34902_34910 = G__34915;
continue;
} else {
var temp__4425__auto___34916 = cljs.core.seq.call(null,seq__34899_34907);
if(temp__4425__auto___34916){
var seq__34899_34917__$1 = temp__4425__auto___34916;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34899_34917__$1)){
var c__28450__auto___34918 = cljs.core.chunk_first.call(null,seq__34899_34917__$1);
var G__34919 = cljs.core.chunk_rest.call(null,seq__34899_34917__$1);
var G__34920 = c__28450__auto___34918;
var G__34921 = cljs.core.count.call(null,c__28450__auto___34918);
var G__34922 = (0);
seq__34899_34907 = G__34919;
chunk__34900_34908 = G__34920;
count__34901_34909 = G__34921;
i__34902_34910 = G__34922;
continue;
} else {
var k_34923 = cljs.core.first.call(null,seq__34899_34917__$1);
e.setAttribute(cljs.core.name.call(null,k_34923),cljs.core.get.call(null,attrs,k_34923));

var G__34924 = cljs.core.next.call(null,seq__34899_34917__$1);
var G__34925 = null;
var G__34926 = (0);
var G__34927 = (0);
seq__34899_34907 = G__34924;
chunk__34900_34908 = G__34925;
count__34901_34909 = G__34926;
i__34902_34910 = G__34927;
continue;
}
} else {
}
}
break;
}

var seq__34903_34928 = cljs.core.seq.call(null,children);
var chunk__34904_34929 = null;
var count__34905_34930 = (0);
var i__34906_34931 = (0);
while(true){
if((i__34906_34931 < count__34905_34930)){
var ch_34932 = cljs.core._nth.call(null,chunk__34904_34929,i__34906_34931);
e.appendChild(ch_34932);

var G__34933 = seq__34903_34928;
var G__34934 = chunk__34904_34929;
var G__34935 = count__34905_34930;
var G__34936 = (i__34906_34931 + (1));
seq__34903_34928 = G__34933;
chunk__34904_34929 = G__34934;
count__34905_34930 = G__34935;
i__34906_34931 = G__34936;
continue;
} else {
var temp__4425__auto___34937 = cljs.core.seq.call(null,seq__34903_34928);
if(temp__4425__auto___34937){
var seq__34903_34938__$1 = temp__4425__auto___34937;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34903_34938__$1)){
var c__28450__auto___34939 = cljs.core.chunk_first.call(null,seq__34903_34938__$1);
var G__34940 = cljs.core.chunk_rest.call(null,seq__34903_34938__$1);
var G__34941 = c__28450__auto___34939;
var G__34942 = cljs.core.count.call(null,c__28450__auto___34939);
var G__34943 = (0);
seq__34903_34928 = G__34940;
chunk__34904_34929 = G__34941;
count__34905_34930 = G__34942;
i__34906_34931 = G__34943;
continue;
} else {
var ch_34944 = cljs.core.first.call(null,seq__34903_34938__$1);
e.appendChild(ch_34944);

var G__34945 = cljs.core.next.call(null,seq__34903_34938__$1);
var G__34946 = null;
var G__34947 = (0);
var G__34948 = (0);
seq__34903_34928 = G__34945;
chunk__34904_34929 = G__34946;
count__34905_34930 = G__34947;
i__34906_34931 = G__34948;
continue;
}
} else {
}
}
break;
}

return e;
};
var figwheel$client$heads_up$node = function (t,attrs,var_args){
var children = null;
if (arguments.length > 2) {
var G__34949__i = 0, G__34949__a = new Array(arguments.length -  2);
while (G__34949__i < G__34949__a.length) {G__34949__a[G__34949__i] = arguments[G__34949__i + 2]; ++G__34949__i;}
  children = new cljs.core.IndexedSeq(G__34949__a,0);
} 
return figwheel$client$heads_up$node__delegate.call(this,t,attrs,children);};
figwheel$client$heads_up$node.cljs$lang$maxFixedArity = 2;
figwheel$client$heads_up$node.cljs$lang$applyTo = (function (arglist__34950){
var t = cljs.core.first(arglist__34950);
arglist__34950 = cljs.core.next(arglist__34950);
var attrs = cljs.core.first(arglist__34950);
var children = cljs.core.rest(arglist__34950);
return figwheel$client$heads_up$node__delegate(t,attrs,children);
});
figwheel$client$heads_up$node.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$heads_up$node__delegate;
return figwheel$client$heads_up$node;
})()
;
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__28560__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28561__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28562__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28564__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__28560__auto__,prefer_table__28561__auto__,method_cache__28562__auto__,cached_hierarchy__28563__auto__,hierarchy__28564__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__28560__auto__,prefer_table__28561__auto__,method_cache__28562__auto__,cached_hierarchy__28563__auto__,hierarchy__28564__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28564__auto__,method_table__28560__auto__,prefer_table__28561__auto__,method_cache__28562__auto__,cached_hierarchy__28563__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_34951 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_34951.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_34951.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_34951.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_34951);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__34952,st_map){
var map__34956 = p__34952;
var map__34956__$1 = ((cljs.core.seq_QMARK_.call(null,map__34956))?cljs.core.apply.call(null,cljs.core.hash_map,map__34956):map__34956);
var container_el = cljs.core.get.call(null,map__34956__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__34956,map__34956__$1,container_el){
return (function (p__34957){
var vec__34958 = p__34957;
var k = cljs.core.nth.call(null,vec__34958,(0),null);
var v = cljs.core.nth.call(null,vec__34958,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__34956,map__34956__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__34959,dom_str){
var map__34961 = p__34959;
var map__34961__$1 = ((cljs.core.seq_QMARK_.call(null,map__34961))?cljs.core.apply.call(null,cljs.core.hash_map,map__34961):map__34961);
var c = map__34961__$1;
var content_area_el = cljs.core.get.call(null,map__34961__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__34962){
var map__34964 = p__34962;
var map__34964__$1 = ((cljs.core.seq_QMARK_.call(null,map__34964))?cljs.core.apply.call(null,cljs.core.hash_map,map__34964):map__34964);
var content_area_el = cljs.core.get.call(null,map__34964__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__30074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto__){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto__){
return (function (state_35006){
var state_val_35007 = (state_35006[(1)]);
if((state_val_35007 === (1))){
var inst_34991 = (state_35006[(7)]);
var inst_34991__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_34992 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_34993 = ["10px","10px","100%","68px","1.0"];
var inst_34994 = cljs.core.PersistentHashMap.fromArrays(inst_34992,inst_34993);
var inst_34995 = cljs.core.merge.call(null,inst_34994,style);
var inst_34996 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34991__$1,inst_34995);
var inst_34997 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_34991__$1,msg);
var inst_34998 = cljs.core.async.timeout.call(null,(300));
var state_35006__$1 = (function (){var statearr_35008 = state_35006;
(statearr_35008[(8)] = inst_34997);

(statearr_35008[(7)] = inst_34991__$1);

(statearr_35008[(9)] = inst_34996);

return statearr_35008;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35006__$1,(2),inst_34998);
} else {
if((state_val_35007 === (2))){
var inst_34991 = (state_35006[(7)]);
var inst_35000 = (state_35006[(2)]);
var inst_35001 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_35002 = ["auto"];
var inst_35003 = cljs.core.PersistentHashMap.fromArrays(inst_35001,inst_35002);
var inst_35004 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_34991,inst_35003);
var state_35006__$1 = (function (){var statearr_35009 = state_35006;
(statearr_35009[(10)] = inst_35000);

return statearr_35009;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35006__$1,inst_35004);
} else {
return null;
}
}
});})(c__30074__auto__))
;
return ((function (switch__30018__auto__,c__30074__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__30019__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__30019__auto____0 = (function (){
var statearr_35013 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35013[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__30019__auto__);

(statearr_35013[(1)] = (1));

return statearr_35013;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__30019__auto____1 = (function (state_35006){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_35006);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e35014){if((e35014 instanceof Object)){
var ex__30022__auto__ = e35014;
var statearr_35015_35017 = state_35006;
(statearr_35015_35017[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35006);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35014;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35018 = state_35006;
state_35006 = G__35018;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__30019__auto__ = function(state_35006){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__30019__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__30019__auto____1.call(this,state_35006);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__30019__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__30019__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto__))
})();
var state__30076__auto__ = (function (){var statearr_35016 = f__30075__auto__.call(null);
(statearr_35016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto__);

return statearr_35016;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto__))
);

return c__30074__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__35020 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__35020,(0),null);
var ln = cljs.core.nth.call(null,vec__35020,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__35023 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__35023,(0),null);
var file_line = cljs.core.nth.call(null,vec__35023,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__35023,file_name,file_line){
return (function (p1__35021_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__35021_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__35023,file_name,file_line))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,file_line,msg))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__35025 = figwheel.client.heads_up.ensure_container.call(null);
var map__35025__$1 = ((cljs.core.seq_QMARK_.call(null,map__35025))?cljs.core.apply.call(null,cljs.core.hash_map,map__35025):map__35025);
var content_area_el = cljs.core.get.call(null,map__35025__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__30074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto__){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto__){
return (function (state_35072){
var state_val_35073 = (state_35072[(1)]);
if((state_val_35073 === (1))){
var inst_35055 = (state_35072[(7)]);
var inst_35055__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_35056 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_35057 = ["0.0"];
var inst_35058 = cljs.core.PersistentHashMap.fromArrays(inst_35056,inst_35057);
var inst_35059 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35055__$1,inst_35058);
var inst_35060 = cljs.core.async.timeout.call(null,(300));
var state_35072__$1 = (function (){var statearr_35074 = state_35072;
(statearr_35074[(7)] = inst_35055__$1);

(statearr_35074[(8)] = inst_35059);

return statearr_35074;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35072__$1,(2),inst_35060);
} else {
if((state_val_35073 === (2))){
var inst_35055 = (state_35072[(7)]);
var inst_35062 = (state_35072[(2)]);
var inst_35063 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_35064 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_35065 = cljs.core.PersistentHashMap.fromArrays(inst_35063,inst_35064);
var inst_35066 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_35055,inst_35065);
var inst_35067 = cljs.core.async.timeout.call(null,(200));
var state_35072__$1 = (function (){var statearr_35075 = state_35072;
(statearr_35075[(9)] = inst_35062);

(statearr_35075[(10)] = inst_35066);

return statearr_35075;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35072__$1,(3),inst_35067);
} else {
if((state_val_35073 === (3))){
var inst_35055 = (state_35072[(7)]);
var inst_35069 = (state_35072[(2)]);
var inst_35070 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_35055,"");
var state_35072__$1 = (function (){var statearr_35076 = state_35072;
(statearr_35076[(11)] = inst_35069);

return statearr_35076;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35072__$1,inst_35070);
} else {
return null;
}
}
}
});})(c__30074__auto__))
;
return ((function (switch__30018__auto__,c__30074__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__30019__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__30019__auto____0 = (function (){
var statearr_35080 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35080[(0)] = figwheel$client$heads_up$clear_$_state_machine__30019__auto__);

(statearr_35080[(1)] = (1));

return statearr_35080;
});
var figwheel$client$heads_up$clear_$_state_machine__30019__auto____1 = (function (state_35072){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_35072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e35081){if((e35081 instanceof Object)){
var ex__30022__auto__ = e35081;
var statearr_35082_35084 = state_35072;
(statearr_35082_35084[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35081;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35085 = state_35072;
state_35072 = G__35085;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__30019__auto__ = function(state_35072){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__30019__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__30019__auto____1.call(this,state_35072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__30019__auto____0;
figwheel$client$heads_up$clear_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__30019__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto__))
})();
var state__30076__auto__ = (function (){var statearr_35083 = f__30075__auto__.call(null);
(statearr_35083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto__);

return statearr_35083;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto__))
);

return c__30074__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__30074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto__){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto__){
return (function (state_35117){
var state_val_35118 = (state_35117[(1)]);
if((state_val_35118 === (1))){
var inst_35107 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_35117__$1 = state_35117;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35117__$1,(2),inst_35107);
} else {
if((state_val_35118 === (2))){
var inst_35109 = (state_35117[(2)]);
var inst_35110 = cljs.core.async.timeout.call(null,(400));
var state_35117__$1 = (function (){var statearr_35119 = state_35117;
(statearr_35119[(7)] = inst_35109);

return statearr_35119;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35117__$1,(3),inst_35110);
} else {
if((state_val_35118 === (3))){
var inst_35112 = (state_35117[(2)]);
var inst_35113 = figwheel.client.heads_up.clear.call(null);
var state_35117__$1 = (function (){var statearr_35120 = state_35117;
(statearr_35120[(8)] = inst_35112);

return statearr_35120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35117__$1,(4),inst_35113);
} else {
if((state_val_35118 === (4))){
var inst_35115 = (state_35117[(2)]);
var state_35117__$1 = state_35117;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35117__$1,inst_35115);
} else {
return null;
}
}
}
}
});})(c__30074__auto__))
;
return ((function (switch__30018__auto__,c__30074__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__30019__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__30019__auto____0 = (function (){
var statearr_35124 = [null,null,null,null,null,null,null,null,null];
(statearr_35124[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__30019__auto__);

(statearr_35124[(1)] = (1));

return statearr_35124;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__30019__auto____1 = (function (state_35117){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_35117);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e35125){if((e35125 instanceof Object)){
var ex__30022__auto__ = e35125;
var statearr_35126_35128 = state_35117;
(statearr_35126_35128[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35117);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35125;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35129 = state_35117;
state_35117 = G__35129;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__30019__auto__ = function(state_35117){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__30019__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__30019__auto____1.call(this,state_35117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__30019__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__30019__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto__))
})();
var state__30076__auto__ = (function (){var statearr_35127 = f__30075__auto__.call(null);
(statearr_35127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto__);

return statearr_35127;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto__))
);

return c__30074__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map