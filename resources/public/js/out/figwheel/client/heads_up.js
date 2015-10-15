// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.clojure_symbol_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__29971__auto__ = [];
var len__29964__auto___41728 = arguments.length;
var i__29965__auto___41729 = (0);
while(true){
if((i__29965__auto___41729 < len__29964__auto___41728)){
args__29971__auto__.push((arguments[i__29965__auto___41729]));

var G__41730 = (i__29965__auto___41729 + (1));
i__29965__auto___41729 = G__41730;
continue;
} else {
}
break;
}

var argseq__29972__auto__ = ((((2) < args__29971__auto__.length))?(new cljs.core.IndexedSeq(args__29971__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29972__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__41720_41731 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__41721_41732 = null;
var count__41722_41733 = (0);
var i__41723_41734 = (0);
while(true){
if((i__41723_41734 < count__41722_41733)){
var k_41735 = cljs.core._nth.call(null,chunk__41721_41732,i__41723_41734);
e.setAttribute(cljs.core.name.call(null,k_41735),cljs.core.get.call(null,attrs,k_41735));

var G__41736 = seq__41720_41731;
var G__41737 = chunk__41721_41732;
var G__41738 = count__41722_41733;
var G__41739 = (i__41723_41734 + (1));
seq__41720_41731 = G__41736;
chunk__41721_41732 = G__41737;
count__41722_41733 = G__41738;
i__41723_41734 = G__41739;
continue;
} else {
var temp__4425__auto___41740 = cljs.core.seq.call(null,seq__41720_41731);
if(temp__4425__auto___41740){
var seq__41720_41741__$1 = temp__4425__auto___41740;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41720_41741__$1)){
var c__29709__auto___41742 = cljs.core.chunk_first.call(null,seq__41720_41741__$1);
var G__41743 = cljs.core.chunk_rest.call(null,seq__41720_41741__$1);
var G__41744 = c__29709__auto___41742;
var G__41745 = cljs.core.count.call(null,c__29709__auto___41742);
var G__41746 = (0);
seq__41720_41731 = G__41743;
chunk__41721_41732 = G__41744;
count__41722_41733 = G__41745;
i__41723_41734 = G__41746;
continue;
} else {
var k_41747 = cljs.core.first.call(null,seq__41720_41741__$1);
e.setAttribute(cljs.core.name.call(null,k_41747),cljs.core.get.call(null,attrs,k_41747));

var G__41748 = cljs.core.next.call(null,seq__41720_41741__$1);
var G__41749 = null;
var G__41750 = (0);
var G__41751 = (0);
seq__41720_41731 = G__41748;
chunk__41721_41732 = G__41749;
count__41722_41733 = G__41750;
i__41723_41734 = G__41751;
continue;
}
} else {
}
}
break;
}

var seq__41724_41752 = cljs.core.seq.call(null,children);
var chunk__41725_41753 = null;
var count__41726_41754 = (0);
var i__41727_41755 = (0);
while(true){
if((i__41727_41755 < count__41726_41754)){
var ch_41756 = cljs.core._nth.call(null,chunk__41725_41753,i__41727_41755);
e.appendChild(ch_41756);

var G__41757 = seq__41724_41752;
var G__41758 = chunk__41725_41753;
var G__41759 = count__41726_41754;
var G__41760 = (i__41727_41755 + (1));
seq__41724_41752 = G__41757;
chunk__41725_41753 = G__41758;
count__41726_41754 = G__41759;
i__41727_41755 = G__41760;
continue;
} else {
var temp__4425__auto___41761 = cljs.core.seq.call(null,seq__41724_41752);
if(temp__4425__auto___41761){
var seq__41724_41762__$1 = temp__4425__auto___41761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41724_41762__$1)){
var c__29709__auto___41763 = cljs.core.chunk_first.call(null,seq__41724_41762__$1);
var G__41764 = cljs.core.chunk_rest.call(null,seq__41724_41762__$1);
var G__41765 = c__29709__auto___41763;
var G__41766 = cljs.core.count.call(null,c__29709__auto___41763);
var G__41767 = (0);
seq__41724_41752 = G__41764;
chunk__41725_41753 = G__41765;
count__41726_41754 = G__41766;
i__41727_41755 = G__41767;
continue;
} else {
var ch_41768 = cljs.core.first.call(null,seq__41724_41762__$1);
e.appendChild(ch_41768);

var G__41769 = cljs.core.next.call(null,seq__41724_41762__$1);
var G__41770 = null;
var G__41771 = (0);
var G__41772 = (0);
seq__41724_41752 = G__41769;
chunk__41725_41753 = G__41770;
count__41726_41754 = G__41771;
i__41727_41755 = G__41772;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq41717){
var G__41718 = cljs.core.first.call(null,seq41717);
var seq41717__$1 = cljs.core.next.call(null,seq41717);
var G__41719 = cljs.core.first.call(null,seq41717__$1);
var seq41717__$2 = cljs.core.next.call(null,seq41717__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__41718,G__41719,seq41717__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__29819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29821__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29822__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29823__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__29819__auto__,prefer_table__29820__auto__,method_cache__29821__auto__,cached_hierarchy__29822__auto__,hierarchy__29823__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__29819__auto__,prefer_table__29820__auto__,method_cache__29821__auto__,cached_hierarchy__29822__auto__,hierarchy__29823__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29823__auto__,method_table__29819__auto__,prefer_table__29820__auto__,method_cache__29821__auto__,cached_hierarchy__29822__auto__));
})();
}
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
var el_41773 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_41773.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_41773.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_41773.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_41773);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__41774,st_map){
var map__41779 = p__41774;
var map__41779__$1 = ((((!((map__41779 == null)))?((((map__41779.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41779.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41779):map__41779);
var container_el = cljs.core.get.call(null,map__41779__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__41779,map__41779__$1,container_el){
return (function (p__41781){
var vec__41782 = p__41781;
var k = cljs.core.nth.call(null,vec__41782,(0),null);
var v = cljs.core.nth.call(null,vec__41782,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__41779,map__41779__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__41783,dom_str){
var map__41786 = p__41783;
var map__41786__$1 = ((((!((map__41786 == null)))?((((map__41786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41786):map__41786);
var c = map__41786__$1;
var content_area_el = cljs.core.get.call(null,map__41786__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__41788){
var map__41791 = p__41788;
var map__41791__$1 = ((((!((map__41791 == null)))?((((map__41791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41791):map__41791);
var content_area_el = cljs.core.get.call(null,map__41791__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__32217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32217__auto__){
return (function (){
var f__32218__auto__ = (function (){var switch__32152__auto__ = ((function (c__32217__auto__){
return (function (state_41834){
var state_val_41835 = (state_41834[(1)]);
if((state_val_41835 === (1))){
var inst_41819 = (state_41834[(7)]);
var inst_41819__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_41820 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_41821 = ["10px","10px","100%","68px","1.0"];
var inst_41822 = cljs.core.PersistentHashMap.fromArrays(inst_41820,inst_41821);
var inst_41823 = cljs.core.merge.call(null,inst_41822,style);
var inst_41824 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41819__$1,inst_41823);
var inst_41825 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_41819__$1,msg);
var inst_41826 = cljs.core.async.timeout.call(null,(300));
var state_41834__$1 = (function (){var statearr_41836 = state_41834;
(statearr_41836[(8)] = inst_41825);

(statearr_41836[(7)] = inst_41819__$1);

(statearr_41836[(9)] = inst_41824);

return statearr_41836;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41834__$1,(2),inst_41826);
} else {
if((state_val_41835 === (2))){
var inst_41819 = (state_41834[(7)]);
var inst_41828 = (state_41834[(2)]);
var inst_41829 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_41830 = ["auto"];
var inst_41831 = cljs.core.PersistentHashMap.fromArrays(inst_41829,inst_41830);
var inst_41832 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41819,inst_41831);
var state_41834__$1 = (function (){var statearr_41837 = state_41834;
(statearr_41837[(10)] = inst_41828);

return statearr_41837;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41834__$1,inst_41832);
} else {
return null;
}
}
});})(c__32217__auto__))
;
return ((function (switch__32152__auto__,c__32217__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__32153__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__32153__auto____0 = (function (){
var statearr_41841 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41841[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__32153__auto__);

(statearr_41841[(1)] = (1));

return statearr_41841;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__32153__auto____1 = (function (state_41834){
while(true){
var ret_value__32154__auto__ = (function (){try{while(true){
var result__32155__auto__ = switch__32152__auto__.call(null,state_41834);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32155__auto__;
}
break;
}
}catch (e41842){if((e41842 instanceof Object)){
var ex__32156__auto__ = e41842;
var statearr_41843_41845 = state_41834;
(statearr_41843_41845[(5)] = ex__32156__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41834);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41846 = state_41834;
state_41834 = G__41846;
continue;
} else {
return ret_value__32154__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__32153__auto__ = function(state_41834){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__32153__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__32153__auto____1.call(this,state_41834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__32153__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__32153__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__32153__auto__;
})()
;})(switch__32152__auto__,c__32217__auto__))
})();
var state__32219__auto__ = (function (){var statearr_41844 = f__32218__auto__.call(null);
(statearr_41844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32217__auto__);

return statearr_41844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32219__auto__);
});})(c__32217__auto__))
);

return c__32217__auto__;
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
var vec__41848 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__41848,(0),null);
var ln = cljs.core.nth.call(null,vec__41848,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages){
var vec__41851 = cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages));
var file_name = cljs.core.nth.call(null,vec__41851,(0),null);
var file_line = cljs.core.nth.call(null,vec__41851,(1),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__41851,file_name,file_line){
return (function (p1__41849_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(p1__41849_SHARP_),cljs.core.str("</div>")].join('');
});})(vec__41851,file_name,file_line))
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
var map__41854 = figwheel.client.heads_up.ensure_container.call(null);
var map__41854__$1 = ((((!((map__41854 == null)))?((((map__41854.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41854.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41854):map__41854);
var content_area_el = cljs.core.get.call(null,map__41854__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__32217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32217__auto__){
return (function (){
var f__32218__auto__ = (function (){var switch__32152__auto__ = ((function (c__32217__auto__){
return (function (state_41902){
var state_val_41903 = (state_41902[(1)]);
if((state_val_41903 === (1))){
var inst_41885 = (state_41902[(7)]);
var inst_41885__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_41886 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_41887 = ["0.0"];
var inst_41888 = cljs.core.PersistentHashMap.fromArrays(inst_41886,inst_41887);
var inst_41889 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41885__$1,inst_41888);
var inst_41890 = cljs.core.async.timeout.call(null,(300));
var state_41902__$1 = (function (){var statearr_41904 = state_41902;
(statearr_41904[(8)] = inst_41889);

(statearr_41904[(7)] = inst_41885__$1);

return statearr_41904;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41902__$1,(2),inst_41890);
} else {
if((state_val_41903 === (2))){
var inst_41885 = (state_41902[(7)]);
var inst_41892 = (state_41902[(2)]);
var inst_41893 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_41894 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_41895 = cljs.core.PersistentHashMap.fromArrays(inst_41893,inst_41894);
var inst_41896 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_41885,inst_41895);
var inst_41897 = cljs.core.async.timeout.call(null,(200));
var state_41902__$1 = (function (){var statearr_41905 = state_41902;
(statearr_41905[(9)] = inst_41892);

(statearr_41905[(10)] = inst_41896);

return statearr_41905;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41902__$1,(3),inst_41897);
} else {
if((state_val_41903 === (3))){
var inst_41885 = (state_41902[(7)]);
var inst_41899 = (state_41902[(2)]);
var inst_41900 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_41885,"");
var state_41902__$1 = (function (){var statearr_41906 = state_41902;
(statearr_41906[(11)] = inst_41899);

return statearr_41906;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41902__$1,inst_41900);
} else {
return null;
}
}
}
});})(c__32217__auto__))
;
return ((function (switch__32152__auto__,c__32217__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__32153__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__32153__auto____0 = (function (){
var statearr_41910 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41910[(0)] = figwheel$client$heads_up$clear_$_state_machine__32153__auto__);

(statearr_41910[(1)] = (1));

return statearr_41910;
});
var figwheel$client$heads_up$clear_$_state_machine__32153__auto____1 = (function (state_41902){
while(true){
var ret_value__32154__auto__ = (function (){try{while(true){
var result__32155__auto__ = switch__32152__auto__.call(null,state_41902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32155__auto__;
}
break;
}
}catch (e41911){if((e41911 instanceof Object)){
var ex__32156__auto__ = e41911;
var statearr_41912_41914 = state_41902;
(statearr_41912_41914[(5)] = ex__32156__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41911;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41915 = state_41902;
state_41902 = G__41915;
continue;
} else {
return ret_value__32154__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__32153__auto__ = function(state_41902){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__32153__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__32153__auto____1.call(this,state_41902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__32153__auto____0;
figwheel$client$heads_up$clear_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__32153__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__32153__auto__;
})()
;})(switch__32152__auto__,c__32217__auto__))
})();
var state__32219__auto__ = (function (){var statearr_41913 = f__32218__auto__.call(null);
(statearr_41913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32217__auto__);

return statearr_41913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32219__auto__);
});})(c__32217__auto__))
);

return c__32217__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__32217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32217__auto__){
return (function (){
var f__32218__auto__ = (function (){var switch__32152__auto__ = ((function (c__32217__auto__){
return (function (state_41947){
var state_val_41948 = (state_41947[(1)]);
if((state_val_41948 === (1))){
var inst_41937 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_41947__$1 = state_41947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41947__$1,(2),inst_41937);
} else {
if((state_val_41948 === (2))){
var inst_41939 = (state_41947[(2)]);
var inst_41940 = cljs.core.async.timeout.call(null,(400));
var state_41947__$1 = (function (){var statearr_41949 = state_41947;
(statearr_41949[(7)] = inst_41939);

return statearr_41949;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41947__$1,(3),inst_41940);
} else {
if((state_val_41948 === (3))){
var inst_41942 = (state_41947[(2)]);
var inst_41943 = figwheel.client.heads_up.clear.call(null);
var state_41947__$1 = (function (){var statearr_41950 = state_41947;
(statearr_41950[(8)] = inst_41942);

return statearr_41950;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41947__$1,(4),inst_41943);
} else {
if((state_val_41948 === (4))){
var inst_41945 = (state_41947[(2)]);
var state_41947__$1 = state_41947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41947__$1,inst_41945);
} else {
return null;
}
}
}
}
});})(c__32217__auto__))
;
return ((function (switch__32152__auto__,c__32217__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__32153__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__32153__auto____0 = (function (){
var statearr_41954 = [null,null,null,null,null,null,null,null,null];
(statearr_41954[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__32153__auto__);

(statearr_41954[(1)] = (1));

return statearr_41954;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__32153__auto____1 = (function (state_41947){
while(true){
var ret_value__32154__auto__ = (function (){try{while(true){
var result__32155__auto__ = switch__32152__auto__.call(null,state_41947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32155__auto__;
}
break;
}
}catch (e41955){if((e41955 instanceof Object)){
var ex__32156__auto__ = e41955;
var statearr_41956_41958 = state_41947;
(statearr_41956_41958[(5)] = ex__32156__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41959 = state_41947;
state_41947 = G__41959;
continue;
} else {
return ret_value__32154__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__32153__auto__ = function(state_41947){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__32153__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__32153__auto____1.call(this,state_41947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__32153__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__32153__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__32153__auto__;
})()
;})(switch__32152__auto__,c__32217__auto__))
})();
var state__32219__auto__ = (function (){var statearr_41957 = f__32218__auto__.call(null);
(statearr_41957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32217__auto__);

return statearr_41957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32219__auto__);
});})(c__32217__auto__))
);

return c__32217__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map