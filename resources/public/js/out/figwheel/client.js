// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__41042__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__41042 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41043__i = 0, G__41043__a = new Array(arguments.length -  0);
while (G__41043__i < G__41043__a.length) {G__41043__a[G__41043__i] = arguments[G__41043__i + 0]; ++G__41043__i;}
  args = new cljs.core.IndexedSeq(G__41043__a,0);
} 
return G__41042__delegate.call(this,args);};
G__41042.cljs$lang$maxFixedArity = 0;
G__41042.cljs$lang$applyTo = (function (arglist__41044){
var args = cljs.core.seq(arglist__41044);
return G__41042__delegate(args);
});
G__41042.cljs$core$IFn$_invoke$arity$variadic = G__41042__delegate;
return G__41042;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__41045){
var map__41048 = p__41045;
var map__41048__$1 = ((((!((map__41048 == null)))?((((map__41048.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41048.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41048):map__41048);
var message = cljs.core.get.call(null,map__41048__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__41048__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28906__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28906__auto__)){
return or__28906__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28894__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28894__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28894__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32217__auto___41178 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32217__auto___41178,ch){
return (function (){
var f__32218__auto__ = (function (){var switch__32152__auto__ = ((function (c__32217__auto___41178,ch){
return (function (state_41152){
var state_val_41153 = (state_41152[(1)]);
if((state_val_41153 === (7))){
var inst_41148 = (state_41152[(2)]);
var state_41152__$1 = state_41152;
var statearr_41154_41179 = state_41152__$1;
(statearr_41154_41179[(2)] = inst_41148);

(statearr_41154_41179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41153 === (1))){
var state_41152__$1 = state_41152;
var statearr_41155_41180 = state_41152__$1;
(statearr_41155_41180[(2)] = null);

(statearr_41155_41180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41153 === (4))){
var inst_41116 = (state_41152[(7)]);
var inst_41116__$1 = (state_41152[(2)]);
var state_41152__$1 = (function (){var statearr_41156 = state_41152;
(statearr_41156[(7)] = inst_41116__$1);

return statearr_41156;
})();
if(cljs.core.truth_(inst_41116__$1)){
var statearr_41157_41181 = state_41152__$1;
(statearr_41157_41181[(1)] = (5));

} else {
var statearr_41158_41182 = state_41152__$1;
(statearr_41158_41182[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41153 === (13))){
var state_41152__$1 = state_41152;
var statearr_41159_41183 = state_41152__$1;
(statearr_41159_41183[(2)] = null);

(statearr_41159_41183[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41153 === (6))){
var state_41152__$1 = state_41152;
var statearr_41160_41184 = state_41152__$1;
(statearr_41160_41184[(2)] = null);

(statearr_41160_41184[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41153 === (3))){
var inst_41150 = (state_41152[(2)]);
var state_41152__$1 = state_41152;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41152__$1,inst_41150);
} else {
if((state_val_41153 === (12))){
var inst_41123 = (state_41152[(8)]);
var inst_41136 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_41123);
var inst_41137 = cljs.core.first.call(null,inst_41136);
var inst_41138 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_41137);
var inst_41139 = console.warn("Figwheel: Not loading code with warnings - ",inst_41138);
var state_41152__$1 = state_41152;
var statearr_41161_41185 = state_41152__$1;
(statearr_41161_41185[(2)] = inst_41139);

(statearr_41161_41185[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41153 === (2))){
var state_41152__$1 = state_41152;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41152__$1,(4),ch);
} else {
if((state_val_41153 === (11))){
var inst_41132 = (state_41152[(2)]);
var state_41152__$1 = state_41152;
var statearr_41162_41186 = state_41152__$1;
(statearr_41162_41186[(2)] = inst_41132);

(statearr_41162_41186[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41153 === (9))){
var inst_41122 = (state_41152[(9)]);
var inst_41134 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_41122,opts);
var state_41152__$1 = state_41152;
if(cljs.core.truth_(inst_41134)){
var statearr_41163_41187 = state_41152__$1;
(statearr_41163_41187[(1)] = (12));

} else {
var statearr_41164_41188 = state_41152__$1;
(statearr_41164_41188[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41153 === (5))){
var inst_41122 = (state_41152[(9)]);
var inst_41116 = (state_41152[(7)]);
var inst_41118 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_41119 = (new cljs.core.PersistentArrayMap(null,2,inst_41118,null));
var inst_41120 = (new cljs.core.PersistentHashSet(null,inst_41119,null));
var inst_41121 = figwheel.client.focus_msgs.call(null,inst_41120,inst_41116);
var inst_41122__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_41121);
var inst_41123 = cljs.core.first.call(null,inst_41121);
var inst_41124 = figwheel.client.reload_file_state_QMARK_.call(null,inst_41122__$1,opts);
var state_41152__$1 = (function (){var statearr_41165 = state_41152;
(statearr_41165[(9)] = inst_41122__$1);

(statearr_41165[(8)] = inst_41123);

return statearr_41165;
})();
if(cljs.core.truth_(inst_41124)){
var statearr_41166_41189 = state_41152__$1;
(statearr_41166_41189[(1)] = (8));

} else {
var statearr_41167_41190 = state_41152__$1;
(statearr_41167_41190[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41153 === (14))){
var inst_41142 = (state_41152[(2)]);
var state_41152__$1 = state_41152;
var statearr_41168_41191 = state_41152__$1;
(statearr_41168_41191[(2)] = inst_41142);

(statearr_41168_41191[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41153 === (10))){
var inst_41144 = (state_41152[(2)]);
var state_41152__$1 = (function (){var statearr_41169 = state_41152;
(statearr_41169[(10)] = inst_41144);

return statearr_41169;
})();
var statearr_41170_41192 = state_41152__$1;
(statearr_41170_41192[(2)] = null);

(statearr_41170_41192[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41153 === (8))){
var inst_41123 = (state_41152[(8)]);
var inst_41126 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41127 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_41123);
var inst_41128 = cljs.core.async.timeout.call(null,(1000));
var inst_41129 = [inst_41127,inst_41128];
var inst_41130 = (new cljs.core.PersistentVector(null,2,(5),inst_41126,inst_41129,null));
var state_41152__$1 = state_41152;
return cljs.core.async.ioc_alts_BANG_.call(null,state_41152__$1,(11),inst_41130);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32217__auto___41178,ch))
;
return ((function (switch__32152__auto__,c__32217__auto___41178,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32153__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32153__auto____0 = (function (){
var statearr_41174 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41174[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32153__auto__);

(statearr_41174[(1)] = (1));

return statearr_41174;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32153__auto____1 = (function (state_41152){
while(true){
var ret_value__32154__auto__ = (function (){try{while(true){
var result__32155__auto__ = switch__32152__auto__.call(null,state_41152);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32155__auto__;
}
break;
}
}catch (e41175){if((e41175 instanceof Object)){
var ex__32156__auto__ = e41175;
var statearr_41176_41193 = state_41152;
(statearr_41176_41193[(5)] = ex__32156__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41152);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41194 = state_41152;
state_41152 = G__41194;
continue;
} else {
return ret_value__32154__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32153__auto__ = function(state_41152){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32153__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32153__auto____1.call(this,state_41152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32153__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32153__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32153__auto__;
})()
;})(switch__32152__auto__,c__32217__auto___41178,ch))
})();
var state__32219__auto__ = (function (){var statearr_41177 = f__32218__auto__.call(null);
(statearr_41177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32217__auto___41178);

return statearr_41177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32219__auto__);
});})(c__32217__auto___41178,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__41195_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__41195_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_41204 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__41197_SHARP_,p2__41196_SHARP_){
return [cljs.core.str(p2__41196_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_41204){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_41202 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_41203 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_41202,_STAR_print_newline_STAR_41203,base_path_41204){
return (function() { 
var G__41205__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__41205 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__41206__i = 0, G__41206__a = new Array(arguments.length -  0);
while (G__41206__i < G__41206__a.length) {G__41206__a[G__41206__i] = arguments[G__41206__i + 0]; ++G__41206__i;}
  args = new cljs.core.IndexedSeq(G__41206__a,0);
} 
return G__41205__delegate.call(this,args);};
G__41205.cljs$lang$maxFixedArity = 0;
G__41205.cljs$lang$applyTo = (function (arglist__41207){
var args = cljs.core.seq(arglist__41207);
return G__41205__delegate(args);
});
G__41205.cljs$core$IFn$_invoke$arity$variadic = G__41205__delegate;
return G__41205;
})()
;})(_STAR_print_fn_STAR_41202,_STAR_print_newline_STAR_41203,base_path_41204))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_41203;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_41202;
}}catch (e41201){if((e41201 instanceof Error)){
var e = e41201;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_41204], null));
} else {
var e = e41201;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_41204))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__41208){
var map__41215 = p__41208;
var map__41215__$1 = ((((!((map__41215 == null)))?((((map__41215.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41215.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41215):map__41215);
var opts = map__41215__$1;
var build_id = cljs.core.get.call(null,map__41215__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__41215,map__41215__$1,opts,build_id){
return (function (p__41217){
var vec__41218 = p__41217;
var map__41219 = cljs.core.nth.call(null,vec__41218,(0),null);
var map__41219__$1 = ((((!((map__41219 == null)))?((((map__41219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41219):map__41219);
var msg = map__41219__$1;
var msg_name = cljs.core.get.call(null,map__41219__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41218,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__41218,map__41219,map__41219__$1,msg,msg_name,_,map__41215,map__41215__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__41218,map__41219,map__41219__$1,msg,msg_name,_,map__41215,map__41215__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__41215,map__41215__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__41225){
var vec__41226 = p__41225;
var map__41227 = cljs.core.nth.call(null,vec__41226,(0),null);
var map__41227__$1 = ((((!((map__41227 == null)))?((((map__41227.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41227.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41227):map__41227);
var msg = map__41227__$1;
var msg_name = cljs.core.get.call(null,map__41227__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41226,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__41229){
var map__41239 = p__41229;
var map__41239__$1 = ((((!((map__41239 == null)))?((((map__41239.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41239.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41239):map__41239);
var on_compile_warning = cljs.core.get.call(null,map__41239__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__41239__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__41239,map__41239__$1,on_compile_warning,on_compile_fail){
return (function (p__41241){
var vec__41242 = p__41241;
var map__41243 = cljs.core.nth.call(null,vec__41242,(0),null);
var map__41243__$1 = ((((!((map__41243 == null)))?((((map__41243.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41243.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41243):map__41243);
var msg = map__41243__$1;
var msg_name = cljs.core.get.call(null,map__41243__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__41242,(1));
var pred__41245 = cljs.core._EQ_;
var expr__41246 = msg_name;
if(cljs.core.truth_(pred__41245.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__41246))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__41245.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__41246))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__41239,map__41239__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32217__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32218__auto__ = (function (){var switch__32152__auto__ = ((function (c__32217__auto__,msg_hist,msg_names,msg){
return (function (state_41443){
var state_val_41444 = (state_41443[(1)]);
if((state_val_41444 === (7))){
var inst_41379 = (state_41443[(2)]);
var state_41443__$1 = state_41443;
var statearr_41445_41486 = state_41443__$1;
(statearr_41445_41486[(2)] = inst_41379);

(statearr_41445_41486[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (20))){
var inst_41405 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_41443__$1 = state_41443;
if(cljs.core.truth_(inst_41405)){
var statearr_41446_41487 = state_41443__$1;
(statearr_41446_41487[(1)] = (22));

} else {
var statearr_41447_41488 = state_41443__$1;
(statearr_41447_41488[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (27))){
var inst_41417 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41418 = figwheel.client.heads_up.display_warning.call(null,inst_41417);
var state_41443__$1 = state_41443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41443__$1,(30),inst_41418);
} else {
if((state_val_41444 === (1))){
var inst_41367 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_41443__$1 = state_41443;
if(cljs.core.truth_(inst_41367)){
var statearr_41448_41489 = state_41443__$1;
(statearr_41448_41489[(1)] = (2));

} else {
var statearr_41449_41490 = state_41443__$1;
(statearr_41449_41490[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (24))){
var inst_41433 = (state_41443[(2)]);
var state_41443__$1 = state_41443;
var statearr_41450_41491 = state_41443__$1;
(statearr_41450_41491[(2)] = inst_41433);

(statearr_41450_41491[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (4))){
var inst_41441 = (state_41443[(2)]);
var state_41443__$1 = state_41443;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41443__$1,inst_41441);
} else {
if((state_val_41444 === (15))){
var inst_41394 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41395 = figwheel.client.format_messages.call(null,inst_41394);
var inst_41396 = figwheel.client.heads_up.display_error.call(null,inst_41395);
var state_41443__$1 = state_41443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41443__$1,(18),inst_41396);
} else {
if((state_val_41444 === (21))){
var inst_41435 = (state_41443[(2)]);
var state_41443__$1 = state_41443;
var statearr_41451_41492 = state_41443__$1;
(statearr_41451_41492[(2)] = inst_41435);

(statearr_41451_41492[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (31))){
var inst_41424 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41443__$1 = state_41443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41443__$1,(34),inst_41424);
} else {
if((state_val_41444 === (32))){
var state_41443__$1 = state_41443;
var statearr_41452_41493 = state_41443__$1;
(statearr_41452_41493[(2)] = null);

(statearr_41452_41493[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (33))){
var inst_41429 = (state_41443[(2)]);
var state_41443__$1 = state_41443;
var statearr_41453_41494 = state_41443__$1;
(statearr_41453_41494[(2)] = inst_41429);

(statearr_41453_41494[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (13))){
var inst_41385 = (state_41443[(2)]);
var inst_41386 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41387 = figwheel.client.format_messages.call(null,inst_41386);
var inst_41388 = figwheel.client.heads_up.display_error.call(null,inst_41387);
var state_41443__$1 = (function (){var statearr_41454 = state_41443;
(statearr_41454[(7)] = inst_41385);

return statearr_41454;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41443__$1,(14),inst_41388);
} else {
if((state_val_41444 === (22))){
var inst_41407 = figwheel.client.heads_up.clear.call(null);
var state_41443__$1 = state_41443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41443__$1,(25),inst_41407);
} else {
if((state_val_41444 === (29))){
var inst_41431 = (state_41443[(2)]);
var state_41443__$1 = state_41443;
var statearr_41455_41495 = state_41443__$1;
(statearr_41455_41495[(2)] = inst_41431);

(statearr_41455_41495[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (6))){
var inst_41375 = figwheel.client.heads_up.clear.call(null);
var state_41443__$1 = state_41443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41443__$1,(9),inst_41375);
} else {
if((state_val_41444 === (28))){
var inst_41422 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_41443__$1 = state_41443;
if(cljs.core.truth_(inst_41422)){
var statearr_41456_41496 = state_41443__$1;
(statearr_41456_41496[(1)] = (31));

} else {
var statearr_41457_41497 = state_41443__$1;
(statearr_41457_41497[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (25))){
var inst_41409 = (state_41443[(2)]);
var inst_41410 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41411 = figwheel.client.heads_up.display_warning.call(null,inst_41410);
var state_41443__$1 = (function (){var statearr_41458 = state_41443;
(statearr_41458[(8)] = inst_41409);

return statearr_41458;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41443__$1,(26),inst_41411);
} else {
if((state_val_41444 === (34))){
var inst_41426 = (state_41443[(2)]);
var state_41443__$1 = state_41443;
var statearr_41459_41498 = state_41443__$1;
(statearr_41459_41498[(2)] = inst_41426);

(statearr_41459_41498[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (17))){
var inst_41437 = (state_41443[(2)]);
var state_41443__$1 = state_41443;
var statearr_41460_41499 = state_41443__$1;
(statearr_41460_41499[(2)] = inst_41437);

(statearr_41460_41499[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (3))){
var inst_41381 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_41443__$1 = state_41443;
if(cljs.core.truth_(inst_41381)){
var statearr_41461_41500 = state_41443__$1;
(statearr_41461_41500[(1)] = (10));

} else {
var statearr_41462_41501 = state_41443__$1;
(statearr_41462_41501[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (12))){
var inst_41439 = (state_41443[(2)]);
var state_41443__$1 = state_41443;
var statearr_41463_41502 = state_41443__$1;
(statearr_41463_41502[(2)] = inst_41439);

(statearr_41463_41502[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (2))){
var inst_41369 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_41443__$1 = state_41443;
if(cljs.core.truth_(inst_41369)){
var statearr_41464_41503 = state_41443__$1;
(statearr_41464_41503[(1)] = (5));

} else {
var statearr_41465_41504 = state_41443__$1;
(statearr_41465_41504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (23))){
var inst_41415 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_41443__$1 = state_41443;
if(cljs.core.truth_(inst_41415)){
var statearr_41466_41505 = state_41443__$1;
(statearr_41466_41505[(1)] = (27));

} else {
var statearr_41467_41506 = state_41443__$1;
(statearr_41467_41506[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (19))){
var inst_41402 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_41403 = figwheel.client.heads_up.append_message.call(null,inst_41402);
var state_41443__$1 = state_41443;
var statearr_41468_41507 = state_41443__$1;
(statearr_41468_41507[(2)] = inst_41403);

(statearr_41468_41507[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (11))){
var inst_41392 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_41443__$1 = state_41443;
if(cljs.core.truth_(inst_41392)){
var statearr_41469_41508 = state_41443__$1;
(statearr_41469_41508[(1)] = (15));

} else {
var statearr_41470_41509 = state_41443__$1;
(statearr_41470_41509[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (9))){
var inst_41377 = (state_41443[(2)]);
var state_41443__$1 = state_41443;
var statearr_41471_41510 = state_41443__$1;
(statearr_41471_41510[(2)] = inst_41377);

(statearr_41471_41510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (5))){
var inst_41371 = figwheel.client.heads_up.flash_loaded.call(null);
var state_41443__$1 = state_41443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41443__$1,(8),inst_41371);
} else {
if((state_val_41444 === (14))){
var inst_41390 = (state_41443[(2)]);
var state_41443__$1 = state_41443;
var statearr_41472_41511 = state_41443__$1;
(statearr_41472_41511[(2)] = inst_41390);

(statearr_41472_41511[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (26))){
var inst_41413 = (state_41443[(2)]);
var state_41443__$1 = state_41443;
var statearr_41473_41512 = state_41443__$1;
(statearr_41473_41512[(2)] = inst_41413);

(statearr_41473_41512[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (16))){
var inst_41400 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_41443__$1 = state_41443;
if(cljs.core.truth_(inst_41400)){
var statearr_41474_41513 = state_41443__$1;
(statearr_41474_41513[(1)] = (19));

} else {
var statearr_41475_41514 = state_41443__$1;
(statearr_41475_41514[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (30))){
var inst_41420 = (state_41443[(2)]);
var state_41443__$1 = state_41443;
var statearr_41476_41515 = state_41443__$1;
(statearr_41476_41515[(2)] = inst_41420);

(statearr_41476_41515[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (10))){
var inst_41383 = figwheel.client.heads_up.clear.call(null);
var state_41443__$1 = state_41443;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41443__$1,(13),inst_41383);
} else {
if((state_val_41444 === (18))){
var inst_41398 = (state_41443[(2)]);
var state_41443__$1 = state_41443;
var statearr_41477_41516 = state_41443__$1;
(statearr_41477_41516[(2)] = inst_41398);

(statearr_41477_41516[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41444 === (8))){
var inst_41373 = (state_41443[(2)]);
var state_41443__$1 = state_41443;
var statearr_41478_41517 = state_41443__$1;
(statearr_41478_41517[(2)] = inst_41373);

(statearr_41478_41517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32217__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32152__auto__,c__32217__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32153__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32153__auto____0 = (function (){
var statearr_41482 = [null,null,null,null,null,null,null,null,null];
(statearr_41482[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32153__auto__);

(statearr_41482[(1)] = (1));

return statearr_41482;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32153__auto____1 = (function (state_41443){
while(true){
var ret_value__32154__auto__ = (function (){try{while(true){
var result__32155__auto__ = switch__32152__auto__.call(null,state_41443);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32155__auto__;
}
break;
}
}catch (e41483){if((e41483 instanceof Object)){
var ex__32156__auto__ = e41483;
var statearr_41484_41518 = state_41443;
(statearr_41484_41518[(5)] = ex__32156__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41443);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41483;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41519 = state_41443;
state_41443 = G__41519;
continue;
} else {
return ret_value__32154__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32153__auto__ = function(state_41443){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32153__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32153__auto____1.call(this,state_41443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32153__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32153__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32153__auto__;
})()
;})(switch__32152__auto__,c__32217__auto__,msg_hist,msg_names,msg))
})();
var state__32219__auto__ = (function (){var statearr_41485 = f__32218__auto__.call(null);
(statearr_41485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32217__auto__);

return statearr_41485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32219__auto__);
});})(c__32217__auto__,msg_hist,msg_names,msg))
);

return c__32217__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32217__auto___41582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32217__auto___41582,ch){
return (function (){
var f__32218__auto__ = (function (){var switch__32152__auto__ = ((function (c__32217__auto___41582,ch){
return (function (state_41565){
var state_val_41566 = (state_41565[(1)]);
if((state_val_41566 === (1))){
var state_41565__$1 = state_41565;
var statearr_41567_41583 = state_41565__$1;
(statearr_41567_41583[(2)] = null);

(statearr_41567_41583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (2))){
var state_41565__$1 = state_41565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41565__$1,(4),ch);
} else {
if((state_val_41566 === (3))){
var inst_41563 = (state_41565[(2)]);
var state_41565__$1 = state_41565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41565__$1,inst_41563);
} else {
if((state_val_41566 === (4))){
var inst_41553 = (state_41565[(7)]);
var inst_41553__$1 = (state_41565[(2)]);
var state_41565__$1 = (function (){var statearr_41568 = state_41565;
(statearr_41568[(7)] = inst_41553__$1);

return statearr_41568;
})();
if(cljs.core.truth_(inst_41553__$1)){
var statearr_41569_41584 = state_41565__$1;
(statearr_41569_41584[(1)] = (5));

} else {
var statearr_41570_41585 = state_41565__$1;
(statearr_41570_41585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (5))){
var inst_41553 = (state_41565[(7)]);
var inst_41555 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_41553);
var state_41565__$1 = state_41565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41565__$1,(8),inst_41555);
} else {
if((state_val_41566 === (6))){
var state_41565__$1 = state_41565;
var statearr_41571_41586 = state_41565__$1;
(statearr_41571_41586[(2)] = null);

(statearr_41571_41586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (7))){
var inst_41561 = (state_41565[(2)]);
var state_41565__$1 = state_41565;
var statearr_41572_41587 = state_41565__$1;
(statearr_41572_41587[(2)] = inst_41561);

(statearr_41572_41587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41566 === (8))){
var inst_41557 = (state_41565[(2)]);
var state_41565__$1 = (function (){var statearr_41573 = state_41565;
(statearr_41573[(8)] = inst_41557);

return statearr_41573;
})();
var statearr_41574_41588 = state_41565__$1;
(statearr_41574_41588[(2)] = null);

(statearr_41574_41588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__32217__auto___41582,ch))
;
return ((function (switch__32152__auto__,c__32217__auto___41582,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32153__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32153__auto____0 = (function (){
var statearr_41578 = [null,null,null,null,null,null,null,null,null];
(statearr_41578[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32153__auto__);

(statearr_41578[(1)] = (1));

return statearr_41578;
});
var figwheel$client$heads_up_plugin_$_state_machine__32153__auto____1 = (function (state_41565){
while(true){
var ret_value__32154__auto__ = (function (){try{while(true){
var result__32155__auto__ = switch__32152__auto__.call(null,state_41565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32155__auto__;
}
break;
}
}catch (e41579){if((e41579 instanceof Object)){
var ex__32156__auto__ = e41579;
var statearr_41580_41589 = state_41565;
(statearr_41580_41589[(5)] = ex__32156__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41590 = state_41565;
state_41565 = G__41590;
continue;
} else {
return ret_value__32154__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32153__auto__ = function(state_41565){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32153__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32153__auto____1.call(this,state_41565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32153__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32153__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32153__auto__;
})()
;})(switch__32152__auto__,c__32217__auto___41582,ch))
})();
var state__32219__auto__ = (function (){var statearr_41581 = f__32218__auto__.call(null);
(statearr_41581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32217__auto___41582);

return statearr_41581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32219__auto__);
});})(c__32217__auto___41582,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32217__auto__){
return (function (){
var f__32218__auto__ = (function (){var switch__32152__auto__ = ((function (c__32217__auto__){
return (function (state_41611){
var state_val_41612 = (state_41611[(1)]);
if((state_val_41612 === (1))){
var inst_41606 = cljs.core.async.timeout.call(null,(3000));
var state_41611__$1 = state_41611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41611__$1,(2),inst_41606);
} else {
if((state_val_41612 === (2))){
var inst_41608 = (state_41611[(2)]);
var inst_41609 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_41611__$1 = (function (){var statearr_41613 = state_41611;
(statearr_41613[(7)] = inst_41608);

return statearr_41613;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41611__$1,inst_41609);
} else {
return null;
}
}
});})(c__32217__auto__))
;
return ((function (switch__32152__auto__,c__32217__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32153__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32153__auto____0 = (function (){
var statearr_41617 = [null,null,null,null,null,null,null,null];
(statearr_41617[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32153__auto__);

(statearr_41617[(1)] = (1));

return statearr_41617;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32153__auto____1 = (function (state_41611){
while(true){
var ret_value__32154__auto__ = (function (){try{while(true){
var result__32155__auto__ = switch__32152__auto__.call(null,state_41611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32155__auto__;
}
break;
}
}catch (e41618){if((e41618 instanceof Object)){
var ex__32156__auto__ = e41618;
var statearr_41619_41621 = state_41611;
(statearr_41619_41621[(5)] = ex__32156__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41622 = state_41611;
state_41611 = G__41622;
continue;
} else {
return ret_value__32154__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32153__auto__ = function(state_41611){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32153__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32153__auto____1.call(this,state_41611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32153__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32153__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32153__auto__;
})()
;})(switch__32152__auto__,c__32217__auto__))
})();
var state__32219__auto__ = (function (){var statearr_41620 = f__32218__auto__.call(null);
(statearr_41620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32217__auto__);

return statearr_41620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32219__auto__);
});})(c__32217__auto__))
);

return c__32217__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__28894__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__28894__auto__)){
return ("CustomEvent" in window);
} else {
return and__28894__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj41626 = {"detail":url};
return obj41626;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__41627){
var map__41634 = p__41627;
var map__41634__$1 = ((((!((map__41634 == null)))?((((map__41634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41634):map__41634);
var ed = map__41634__$1;
var formatted_exception = cljs.core.get.call(null,map__41634__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__41634__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__41636_41640 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__41637_41641 = null;
var count__41638_41642 = (0);
var i__41639_41643 = (0);
while(true){
if((i__41639_41643 < count__41638_41642)){
var msg_41644 = cljs.core._nth.call(null,chunk__41637_41641,i__41639_41643);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41644);

var G__41645 = seq__41636_41640;
var G__41646 = chunk__41637_41641;
var G__41647 = count__41638_41642;
var G__41648 = (i__41639_41643 + (1));
seq__41636_41640 = G__41645;
chunk__41637_41641 = G__41646;
count__41638_41642 = G__41647;
i__41639_41643 = G__41648;
continue;
} else {
var temp__4425__auto___41649 = cljs.core.seq.call(null,seq__41636_41640);
if(temp__4425__auto___41649){
var seq__41636_41650__$1 = temp__4425__auto___41649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41636_41650__$1)){
var c__29709__auto___41651 = cljs.core.chunk_first.call(null,seq__41636_41650__$1);
var G__41652 = cljs.core.chunk_rest.call(null,seq__41636_41650__$1);
var G__41653 = c__29709__auto___41651;
var G__41654 = cljs.core.count.call(null,c__29709__auto___41651);
var G__41655 = (0);
seq__41636_41640 = G__41652;
chunk__41637_41641 = G__41653;
count__41638_41642 = G__41654;
i__41639_41643 = G__41655;
continue;
} else {
var msg_41656 = cljs.core.first.call(null,seq__41636_41650__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_41656);

var G__41657 = cljs.core.next.call(null,seq__41636_41650__$1);
var G__41658 = null;
var G__41659 = (0);
var G__41660 = (0);
seq__41636_41640 = G__41657;
chunk__41637_41641 = G__41658;
count__41638_41642 = G__41659;
i__41639_41643 = G__41660;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__41661){
var map__41664 = p__41661;
var map__41664__$1 = ((((!((map__41664 == null)))?((((map__41664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41664):map__41664);
var w = map__41664__$1;
var message = cljs.core.get.call(null,map__41664__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,goog.inHtmlDocument_()))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__28894__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28894__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28894__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__41672 = cljs.core.seq.call(null,plugins);
var chunk__41673 = null;
var count__41674 = (0);
var i__41675 = (0);
while(true){
if((i__41675 < count__41674)){
var vec__41676 = cljs.core._nth.call(null,chunk__41673,i__41675);
var k = cljs.core.nth.call(null,vec__41676,(0),null);
var plugin = cljs.core.nth.call(null,vec__41676,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41678 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41672,chunk__41673,count__41674,i__41675,pl_41678,vec__41676,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_41678.call(null,msg_hist);
});})(seq__41672,chunk__41673,count__41674,i__41675,pl_41678,vec__41676,k,plugin))
);
} else {
}

var G__41679 = seq__41672;
var G__41680 = chunk__41673;
var G__41681 = count__41674;
var G__41682 = (i__41675 + (1));
seq__41672 = G__41679;
chunk__41673 = G__41680;
count__41674 = G__41681;
i__41675 = G__41682;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__41672);
if(temp__4425__auto__){
var seq__41672__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41672__$1)){
var c__29709__auto__ = cljs.core.chunk_first.call(null,seq__41672__$1);
var G__41683 = cljs.core.chunk_rest.call(null,seq__41672__$1);
var G__41684 = c__29709__auto__;
var G__41685 = cljs.core.count.call(null,c__29709__auto__);
var G__41686 = (0);
seq__41672 = G__41683;
chunk__41673 = G__41684;
count__41674 = G__41685;
i__41675 = G__41686;
continue;
} else {
var vec__41677 = cljs.core.first.call(null,seq__41672__$1);
var k = cljs.core.nth.call(null,vec__41677,(0),null);
var plugin = cljs.core.nth.call(null,vec__41677,(1),null);
if(cljs.core.truth_(plugin)){
var pl_41687 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__41672,chunk__41673,count__41674,i__41675,pl_41687,vec__41677,k,plugin,seq__41672__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_41687.call(null,msg_hist);
});})(seq__41672,chunk__41673,count__41674,i__41675,pl_41687,vec__41677,k,plugin,seq__41672__$1,temp__4425__auto__))
);
} else {
}

var G__41688 = cljs.core.next.call(null,seq__41672__$1);
var G__41689 = null;
var G__41690 = (0);
var G__41691 = (0);
seq__41672 = G__41688;
chunk__41673 = G__41689;
count__41674 = G__41690;
i__41675 = G__41691;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args41692 = [];
var len__29964__auto___41695 = arguments.length;
var i__29965__auto___41696 = (0);
while(true){
if((i__29965__auto___41696 < len__29964__auto___41695)){
args41692.push((arguments[i__29965__auto___41696]));

var G__41697 = (i__29965__auto___41696 + (1));
i__29965__auto___41696 = G__41697;
continue;
} else {
}
break;
}

var G__41694 = args41692.length;
switch (G__41694) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args41692.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29971__auto__ = [];
var len__29964__auto___41703 = arguments.length;
var i__29965__auto___41704 = (0);
while(true){
if((i__29965__auto___41704 < len__29964__auto___41703)){
args__29971__auto__.push((arguments[i__29965__auto___41704]));

var G__41705 = (i__29965__auto___41704 + (1));
i__29965__auto___41704 = G__41705;
continue;
} else {
}
break;
}

var argseq__29972__auto__ = ((((0) < args__29971__auto__.length))?(new cljs.core.IndexedSeq(args__29971__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29972__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__41700){
var map__41701 = p__41700;
var map__41701__$1 = ((((!((map__41701 == null)))?((((map__41701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41701):map__41701);
var opts = map__41701__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq41699){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41699));
});

//# sourceMappingURL=client.js.map