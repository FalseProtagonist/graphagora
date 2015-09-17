// Compiled by ClojureScript 0.0-3058 {}
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
var G__34223__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34223 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34224__i = 0, G__34224__a = new Array(arguments.length -  0);
while (G__34224__i < G__34224__a.length) {G__34224__a[G__34224__i] = arguments[G__34224__i + 0]; ++G__34224__i;}
  args = new cljs.core.IndexedSeq(G__34224__a,0);
} 
return G__34223__delegate.call(this,args);};
G__34223.cljs$lang$maxFixedArity = 0;
G__34223.cljs$lang$applyTo = (function (arglist__34225){
var args = cljs.core.seq(arglist__34225);
return G__34223__delegate(args);
});
G__34223.cljs$core$IFn$_invoke$arity$variadic = G__34223__delegate;
return G__34223;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34226){
var map__34228 = p__34226;
var map__34228__$1 = ((cljs.core.seq_QMARK_.call(null,map__34228))?cljs.core.apply.call(null,cljs.core.hash_map,map__34228):map__34228);
var message = cljs.core.get.call(null,map__34228__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34228__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__27663__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__27663__auto__)){
return or__27663__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__27651__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__27651__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__27651__auto__;
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
var c__30074__auto___34357 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto___34357,ch){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto___34357,ch){
return (function (state_34331){
var state_val_34332 = (state_34331[(1)]);
if((state_val_34332 === (7))){
var inst_34327 = (state_34331[(2)]);
var state_34331__$1 = state_34331;
var statearr_34333_34358 = state_34331__$1;
(statearr_34333_34358[(2)] = inst_34327);

(statearr_34333_34358[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (1))){
var state_34331__$1 = state_34331;
var statearr_34334_34359 = state_34331__$1;
(statearr_34334_34359[(2)] = null);

(statearr_34334_34359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (4))){
var inst_34295 = (state_34331[(7)]);
var inst_34295__$1 = (state_34331[(2)]);
var state_34331__$1 = (function (){var statearr_34335 = state_34331;
(statearr_34335[(7)] = inst_34295__$1);

return statearr_34335;
})();
if(cljs.core.truth_(inst_34295__$1)){
var statearr_34336_34360 = state_34331__$1;
(statearr_34336_34360[(1)] = (5));

} else {
var statearr_34337_34361 = state_34331__$1;
(statearr_34337_34361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (13))){
var state_34331__$1 = state_34331;
var statearr_34338_34362 = state_34331__$1;
(statearr_34338_34362[(2)] = null);

(statearr_34338_34362[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (6))){
var state_34331__$1 = state_34331;
var statearr_34339_34363 = state_34331__$1;
(statearr_34339_34363[(2)] = null);

(statearr_34339_34363[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (3))){
var inst_34329 = (state_34331[(2)]);
var state_34331__$1 = state_34331;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34331__$1,inst_34329);
} else {
if((state_val_34332 === (12))){
var inst_34302 = (state_34331[(8)]);
var inst_34315 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34302);
var inst_34316 = cljs.core.first.call(null,inst_34315);
var inst_34317 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34316);
var inst_34318 = console.warn("Figwheel: Not loading code with warnings - ",inst_34317);
var state_34331__$1 = state_34331;
var statearr_34340_34364 = state_34331__$1;
(statearr_34340_34364[(2)] = inst_34318);

(statearr_34340_34364[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (2))){
var state_34331__$1 = state_34331;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34331__$1,(4),ch);
} else {
if((state_val_34332 === (11))){
var inst_34311 = (state_34331[(2)]);
var state_34331__$1 = state_34331;
var statearr_34341_34365 = state_34331__$1;
(statearr_34341_34365[(2)] = inst_34311);

(statearr_34341_34365[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (9))){
var inst_34301 = (state_34331[(9)]);
var inst_34313 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34301,opts);
var state_34331__$1 = state_34331;
if(inst_34313){
var statearr_34342_34366 = state_34331__$1;
(statearr_34342_34366[(1)] = (12));

} else {
var statearr_34343_34367 = state_34331__$1;
(statearr_34343_34367[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (5))){
var inst_34301 = (state_34331[(9)]);
var inst_34295 = (state_34331[(7)]);
var inst_34297 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34298 = (new cljs.core.PersistentArrayMap(null,2,inst_34297,null));
var inst_34299 = (new cljs.core.PersistentHashSet(null,inst_34298,null));
var inst_34300 = figwheel.client.focus_msgs.call(null,inst_34299,inst_34295);
var inst_34301__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34300);
var inst_34302 = cljs.core.first.call(null,inst_34300);
var inst_34303 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34301__$1,opts);
var state_34331__$1 = (function (){var statearr_34344 = state_34331;
(statearr_34344[(9)] = inst_34301__$1);

(statearr_34344[(8)] = inst_34302);

return statearr_34344;
})();
if(cljs.core.truth_(inst_34303)){
var statearr_34345_34368 = state_34331__$1;
(statearr_34345_34368[(1)] = (8));

} else {
var statearr_34346_34369 = state_34331__$1;
(statearr_34346_34369[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (14))){
var inst_34321 = (state_34331[(2)]);
var state_34331__$1 = state_34331;
var statearr_34347_34370 = state_34331__$1;
(statearr_34347_34370[(2)] = inst_34321);

(statearr_34347_34370[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (10))){
var inst_34323 = (state_34331[(2)]);
var state_34331__$1 = (function (){var statearr_34348 = state_34331;
(statearr_34348[(10)] = inst_34323);

return statearr_34348;
})();
var statearr_34349_34371 = state_34331__$1;
(statearr_34349_34371[(2)] = null);

(statearr_34349_34371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34332 === (8))){
var inst_34302 = (state_34331[(8)]);
var inst_34305 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34306 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34302);
var inst_34307 = cljs.core.async.timeout.call(null,(1000));
var inst_34308 = [inst_34306,inst_34307];
var inst_34309 = (new cljs.core.PersistentVector(null,2,(5),inst_34305,inst_34308,null));
var state_34331__$1 = state_34331;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34331__$1,(11),inst_34309);
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
});})(c__30074__auto___34357,ch))
;
return ((function (switch__30018__auto__,c__30074__auto___34357,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30019__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30019__auto____0 = (function (){
var statearr_34353 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34353[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30019__auto__);

(statearr_34353[(1)] = (1));

return statearr_34353;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30019__auto____1 = (function (state_34331){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_34331);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e34354){if((e34354 instanceof Object)){
var ex__30022__auto__ = e34354;
var statearr_34355_34372 = state_34331;
(statearr_34355_34372[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34331);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34373 = state_34331;
state_34331 = G__34373;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30019__auto__ = function(state_34331){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30019__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30019__auto____1.call(this,state_34331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30019__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30019__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto___34357,ch))
})();
var state__30076__auto__ = (function (){var statearr_34356 = f__30075__auto__.call(null);
(statearr_34356[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto___34357);

return statearr_34356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto___34357,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34374_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34374_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_34383 = clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__34376_SHARP_,p2__34375_SHARP_){
return [cljs.core.str(p2__34375_SHARP_)].join('');
}));
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34383){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,result_handler){
try{var _STAR_print_fn_STAR_34381 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_34382 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_34381,_STAR_print_newline_STAR_34382,base_path_34383){
return (function() { 
var G__34384__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__34384 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34385__i = 0, G__34385__a = new Array(arguments.length -  0);
while (G__34385__i < G__34385__a.length) {G__34385__a[G__34385__i] = arguments[G__34385__i + 0]; ++G__34385__i;}
  args = new cljs.core.IndexedSeq(G__34385__a,0);
} 
return G__34384__delegate.call(this,args);};
G__34384.cljs$lang$maxFixedArity = 0;
G__34384.cljs$lang$applyTo = (function (arglist__34386){
var args = cljs.core.seq(arglist__34386);
return G__34384__delegate(args);
});
G__34384.cljs$core$IFn$_invoke$arity$variadic = G__34384__delegate;
return G__34384;
})()
;})(_STAR_print_fn_STAR_34381,_STAR_print_newline_STAR_34382,base_path_34383))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(eval(code))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34382;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34381;
}}catch (e34380){if((e34380 instanceof Error)){
var e = e34380;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34383], null));
} else {
var e = e34380;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34383))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34387){
var map__34392 = p__34387;
var map__34392__$1 = ((cljs.core.seq_QMARK_.call(null,map__34392))?cljs.core.apply.call(null,cljs.core.hash_map,map__34392):map__34392);
var opts = map__34392__$1;
var build_id = cljs.core.get.call(null,map__34392__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34392,map__34392__$1,opts,build_id){
return (function (p__34393){
var vec__34394 = p__34393;
var map__34395 = cljs.core.nth.call(null,vec__34394,(0),null);
var map__34395__$1 = ((cljs.core.seq_QMARK_.call(null,map__34395))?cljs.core.apply.call(null,cljs.core.hash_map,map__34395):map__34395);
var msg = map__34395__$1;
var msg_name = cljs.core.get.call(null,map__34395__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34394,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),((function (vec__34394,map__34395,map__34395__$1,msg,msg_name,_,map__34392,map__34392__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34394,map__34395,map__34395__$1,msg,msg_name,_,map__34392,map__34392__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34392,map__34392__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34399){
var vec__34400 = p__34399;
var map__34401 = cljs.core.nth.call(null,vec__34400,(0),null);
var map__34401__$1 = ((cljs.core.seq_QMARK_.call(null,map__34401))?cljs.core.apply.call(null,cljs.core.hash_map,map__34401):map__34401);
var msg = map__34401__$1;
var msg_name = cljs.core.get.call(null,map__34401__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34400,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34402){
var map__34410 = p__34402;
var map__34410__$1 = ((cljs.core.seq_QMARK_.call(null,map__34410))?cljs.core.apply.call(null,cljs.core.hash_map,map__34410):map__34410);
var on_compile_warning = cljs.core.get.call(null,map__34410__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34410__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34410,map__34410__$1,on_compile_warning,on_compile_fail){
return (function (p__34411){
var vec__34412 = p__34411;
var map__34413 = cljs.core.nth.call(null,vec__34412,(0),null);
var map__34413__$1 = ((cljs.core.seq_QMARK_.call(null,map__34413))?cljs.core.apply.call(null,cljs.core.hash_map,map__34413):map__34413);
var msg = map__34413__$1;
var msg_name = cljs.core.get.call(null,map__34413__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__34412,(1));
var pred__34414 = cljs.core._EQ_;
var expr__34415 = msg_name;
if(cljs.core.truth_(pred__34414.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34415))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34414.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34415))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34410,map__34410__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto__,msg_hist,msg_names,msg){
return (function (state_34612){
var state_val_34613 = (state_34612[(1)]);
if((state_val_34613 === (7))){
var inst_34548 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34614_34655 = state_34612__$1;
(statearr_34614_34655[(2)] = inst_34548);

(statearr_34614_34655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (20))){
var inst_34574 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34612__$1 = state_34612;
if(inst_34574){
var statearr_34615_34656 = state_34612__$1;
(statearr_34615_34656[(1)] = (22));

} else {
var statearr_34616_34657 = state_34612__$1;
(statearr_34616_34657[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (27))){
var inst_34586 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34587 = figwheel.client.heads_up.display_warning.call(null,inst_34586);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34612__$1,(30),inst_34587);
} else {
if((state_val_34613 === (1))){
var inst_34536 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34612__$1 = state_34612;
if(cljs.core.truth_(inst_34536)){
var statearr_34617_34658 = state_34612__$1;
(statearr_34617_34658[(1)] = (2));

} else {
var statearr_34618_34659 = state_34612__$1;
(statearr_34618_34659[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (24))){
var inst_34602 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34619_34660 = state_34612__$1;
(statearr_34619_34660[(2)] = inst_34602);

(statearr_34619_34660[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (4))){
var inst_34610 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34612__$1,inst_34610);
} else {
if((state_val_34613 === (15))){
var inst_34563 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34564 = figwheel.client.format_messages.call(null,inst_34563);
var inst_34565 = figwheel.client.heads_up.display_error.call(null,inst_34564);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34612__$1,(18),inst_34565);
} else {
if((state_val_34613 === (21))){
var inst_34604 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34620_34661 = state_34612__$1;
(statearr_34620_34661[(2)] = inst_34604);

(statearr_34620_34661[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (31))){
var inst_34593 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34612__$1,(34),inst_34593);
} else {
if((state_val_34613 === (32))){
var state_34612__$1 = state_34612;
var statearr_34621_34662 = state_34612__$1;
(statearr_34621_34662[(2)] = null);

(statearr_34621_34662[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (33))){
var inst_34598 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34622_34663 = state_34612__$1;
(statearr_34622_34663[(2)] = inst_34598);

(statearr_34622_34663[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (13))){
var inst_34554 = (state_34612[(2)]);
var inst_34555 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34556 = figwheel.client.format_messages.call(null,inst_34555);
var inst_34557 = figwheel.client.heads_up.display_error.call(null,inst_34556);
var state_34612__$1 = (function (){var statearr_34623 = state_34612;
(statearr_34623[(7)] = inst_34554);

return statearr_34623;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34612__$1,(14),inst_34557);
} else {
if((state_val_34613 === (22))){
var inst_34576 = figwheel.client.heads_up.clear.call(null);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34612__$1,(25),inst_34576);
} else {
if((state_val_34613 === (29))){
var inst_34600 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34624_34664 = state_34612__$1;
(statearr_34624_34664[(2)] = inst_34600);

(statearr_34624_34664[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (6))){
var inst_34544 = figwheel.client.heads_up.clear.call(null);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34612__$1,(9),inst_34544);
} else {
if((state_val_34613 === (28))){
var inst_34591 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34612__$1 = state_34612;
if(inst_34591){
var statearr_34625_34665 = state_34612__$1;
(statearr_34625_34665[(1)] = (31));

} else {
var statearr_34626_34666 = state_34612__$1;
(statearr_34626_34666[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (25))){
var inst_34578 = (state_34612[(2)]);
var inst_34579 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34580 = figwheel.client.heads_up.display_warning.call(null,inst_34579);
var state_34612__$1 = (function (){var statearr_34627 = state_34612;
(statearr_34627[(8)] = inst_34578);

return statearr_34627;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34612__$1,(26),inst_34580);
} else {
if((state_val_34613 === (34))){
var inst_34595 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34628_34667 = state_34612__$1;
(statearr_34628_34667[(2)] = inst_34595);

(statearr_34628_34667[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (17))){
var inst_34606 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34629_34668 = state_34612__$1;
(statearr_34629_34668[(2)] = inst_34606);

(statearr_34629_34668[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (3))){
var inst_34550 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34612__$1 = state_34612;
if(inst_34550){
var statearr_34630_34669 = state_34612__$1;
(statearr_34630_34669[(1)] = (10));

} else {
var statearr_34631_34670 = state_34612__$1;
(statearr_34631_34670[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (12))){
var inst_34608 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34632_34671 = state_34612__$1;
(statearr_34632_34671[(2)] = inst_34608);

(statearr_34632_34671[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (2))){
var inst_34538 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34612__$1 = state_34612;
if(cljs.core.truth_(inst_34538)){
var statearr_34633_34672 = state_34612__$1;
(statearr_34633_34672[(1)] = (5));

} else {
var statearr_34634_34673 = state_34612__$1;
(statearr_34634_34673[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (23))){
var inst_34584 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34612__$1 = state_34612;
if(inst_34584){
var statearr_34635_34674 = state_34612__$1;
(statearr_34635_34674[(1)] = (27));

} else {
var statearr_34636_34675 = state_34612__$1;
(statearr_34636_34675[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (19))){
var inst_34571 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34572 = figwheel.client.heads_up.append_message.call(null,inst_34571);
var state_34612__$1 = state_34612;
var statearr_34637_34676 = state_34612__$1;
(statearr_34637_34676[(2)] = inst_34572);

(statearr_34637_34676[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (11))){
var inst_34561 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34612__$1 = state_34612;
if(inst_34561){
var statearr_34638_34677 = state_34612__$1;
(statearr_34638_34677[(1)] = (15));

} else {
var statearr_34639_34678 = state_34612__$1;
(statearr_34639_34678[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (9))){
var inst_34546 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34640_34679 = state_34612__$1;
(statearr_34640_34679[(2)] = inst_34546);

(statearr_34640_34679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (5))){
var inst_34540 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34612__$1,(8),inst_34540);
} else {
if((state_val_34613 === (14))){
var inst_34559 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34641_34680 = state_34612__$1;
(statearr_34641_34680[(2)] = inst_34559);

(statearr_34641_34680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (26))){
var inst_34582 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34642_34681 = state_34612__$1;
(statearr_34642_34681[(2)] = inst_34582);

(statearr_34642_34681[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (16))){
var inst_34569 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34612__$1 = state_34612;
if(inst_34569){
var statearr_34643_34682 = state_34612__$1;
(statearr_34643_34682[(1)] = (19));

} else {
var statearr_34644_34683 = state_34612__$1;
(statearr_34644_34683[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (30))){
var inst_34589 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34645_34684 = state_34612__$1;
(statearr_34645_34684[(2)] = inst_34589);

(statearr_34645_34684[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (10))){
var inst_34552 = figwheel.client.heads_up.clear.call(null);
var state_34612__$1 = state_34612;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34612__$1,(13),inst_34552);
} else {
if((state_val_34613 === (18))){
var inst_34567 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34646_34685 = state_34612__$1;
(statearr_34646_34685[(2)] = inst_34567);

(statearr_34646_34685[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34613 === (8))){
var inst_34542 = (state_34612[(2)]);
var state_34612__$1 = state_34612;
var statearr_34647_34686 = state_34612__$1;
(statearr_34647_34686[(2)] = inst_34542);

(statearr_34647_34686[(1)] = (7));


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
});})(c__30074__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30018__auto__,c__30074__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30019__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30019__auto____0 = (function (){
var statearr_34651 = [null,null,null,null,null,null,null,null,null];
(statearr_34651[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30019__auto__);

(statearr_34651[(1)] = (1));

return statearr_34651;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30019__auto____1 = (function (state_34612){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_34612);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e34652){if((e34652 instanceof Object)){
var ex__30022__auto__ = e34652;
var statearr_34653_34687 = state_34612;
(statearr_34653_34687[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34612);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34688 = state_34612;
state_34612 = G__34688;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30019__auto__ = function(state_34612){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30019__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30019__auto____1.call(this,state_34612);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30019__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30019__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto__,msg_hist,msg_names,msg))
})();
var state__30076__auto__ = (function (){var statearr_34654 = f__30075__auto__.call(null);
(statearr_34654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto__);

return statearr_34654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto__,msg_hist,msg_names,msg))
);

return c__30074__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30074__auto___34751 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto___34751,ch){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto___34751,ch){
return (function (state_34734){
var state_val_34735 = (state_34734[(1)]);
if((state_val_34735 === (1))){
var state_34734__$1 = state_34734;
var statearr_34736_34752 = state_34734__$1;
(statearr_34736_34752[(2)] = null);

(statearr_34736_34752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (2))){
var state_34734__$1 = state_34734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34734__$1,(4),ch);
} else {
if((state_val_34735 === (3))){
var inst_34732 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34734__$1,inst_34732);
} else {
if((state_val_34735 === (4))){
var inst_34722 = (state_34734[(7)]);
var inst_34722__$1 = (state_34734[(2)]);
var state_34734__$1 = (function (){var statearr_34737 = state_34734;
(statearr_34737[(7)] = inst_34722__$1);

return statearr_34737;
})();
if(cljs.core.truth_(inst_34722__$1)){
var statearr_34738_34753 = state_34734__$1;
(statearr_34738_34753[(1)] = (5));

} else {
var statearr_34739_34754 = state_34734__$1;
(statearr_34739_34754[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (5))){
var inst_34722 = (state_34734[(7)]);
var inst_34724 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34722);
var state_34734__$1 = state_34734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34734__$1,(8),inst_34724);
} else {
if((state_val_34735 === (6))){
var state_34734__$1 = state_34734;
var statearr_34740_34755 = state_34734__$1;
(statearr_34740_34755[(2)] = null);

(statearr_34740_34755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (7))){
var inst_34730 = (state_34734[(2)]);
var state_34734__$1 = state_34734;
var statearr_34741_34756 = state_34734__$1;
(statearr_34741_34756[(2)] = inst_34730);

(statearr_34741_34756[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34735 === (8))){
var inst_34726 = (state_34734[(2)]);
var state_34734__$1 = (function (){var statearr_34742 = state_34734;
(statearr_34742[(8)] = inst_34726);

return statearr_34742;
})();
var statearr_34743_34757 = state_34734__$1;
(statearr_34743_34757[(2)] = null);

(statearr_34743_34757[(1)] = (2));


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
});})(c__30074__auto___34751,ch))
;
return ((function (switch__30018__auto__,c__30074__auto___34751,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30019__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30019__auto____0 = (function (){
var statearr_34747 = [null,null,null,null,null,null,null,null,null];
(statearr_34747[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30019__auto__);

(statearr_34747[(1)] = (1));

return statearr_34747;
});
var figwheel$client$heads_up_plugin_$_state_machine__30019__auto____1 = (function (state_34734){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_34734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e34748){if((e34748 instanceof Object)){
var ex__30022__auto__ = e34748;
var statearr_34749_34758 = state_34734;
(statearr_34749_34758[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34748;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34759 = state_34734;
state_34734 = G__34759;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30019__auto__ = function(state_34734){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30019__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30019__auto____1.call(this,state_34734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30019__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30019__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto___34751,ch))
})();
var state__30076__auto__ = (function (){var statearr_34750 = f__30075__auto__.call(null);
(statearr_34750[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto___34751);

return statearr_34750;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto___34751,ch))
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
var c__30074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto__){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto__){
return (function (state_34780){
var state_val_34781 = (state_34780[(1)]);
if((state_val_34781 === (1))){
var inst_34775 = cljs.core.async.timeout.call(null,(3000));
var state_34780__$1 = state_34780;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34780__$1,(2),inst_34775);
} else {
if((state_val_34781 === (2))){
var inst_34777 = (state_34780[(2)]);
var inst_34778 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34780__$1 = (function (){var statearr_34782 = state_34780;
(statearr_34782[(7)] = inst_34777);

return statearr_34782;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34780__$1,inst_34778);
} else {
return null;
}
}
});})(c__30074__auto__))
;
return ((function (switch__30018__auto__,c__30074__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30019__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30019__auto____0 = (function (){
var statearr_34786 = [null,null,null,null,null,null,null,null];
(statearr_34786[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30019__auto__);

(statearr_34786[(1)] = (1));

return statearr_34786;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30019__auto____1 = (function (state_34780){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_34780);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e34787){if((e34787 instanceof Object)){
var ex__30022__auto__ = e34787;
var statearr_34788_34790 = state_34780;
(statearr_34788_34790[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34780);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34791 = state_34780;
state_34780 = G__34791;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30019__auto__ = function(state_34780){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30019__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30019__auto____1.call(this,state_34780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30019__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30019__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto__))
})();
var state__30076__auto__ = (function (){var statearr_34789 = f__30075__auto__.call(null);
(statearr_34789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto__);

return statearr_34789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto__))
);

return c__30074__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = (function figwheel$client$default_on_jsload(url){
if(cljs.core.truth_((function (){var and__27651__auto__ = figwheel.client.utils.html_env_QMARK_.call(null);
if(cljs.core.truth_(and__27651__auto__)){
return ("CustomEvent" in window);
} else {
return and__27651__auto__;
}
})())){
return document.body.dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj34795 = {"detail":url};
return obj34795;
})())));
} else {
return null;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34796){
var map__34802 = p__34796;
var map__34802__$1 = ((cljs.core.seq_QMARK_.call(null,map__34802))?cljs.core.apply.call(null,cljs.core.hash_map,map__34802):map__34802);
var ed = map__34802__$1;
var formatted_exception = cljs.core.get.call(null,map__34802__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__34802__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__34803_34807 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__34804_34808 = null;
var count__34805_34809 = (0);
var i__34806_34810 = (0);
while(true){
if((i__34806_34810 < count__34805_34809)){
var msg_34811 = cljs.core._nth.call(null,chunk__34804_34808,i__34806_34810);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34811);

var G__34812 = seq__34803_34807;
var G__34813 = chunk__34804_34808;
var G__34814 = count__34805_34809;
var G__34815 = (i__34806_34810 + (1));
seq__34803_34807 = G__34812;
chunk__34804_34808 = G__34813;
count__34805_34809 = G__34814;
i__34806_34810 = G__34815;
continue;
} else {
var temp__4425__auto___34816 = cljs.core.seq.call(null,seq__34803_34807);
if(temp__4425__auto___34816){
var seq__34803_34817__$1 = temp__4425__auto___34816;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34803_34817__$1)){
var c__28450__auto___34818 = cljs.core.chunk_first.call(null,seq__34803_34817__$1);
var G__34819 = cljs.core.chunk_rest.call(null,seq__34803_34817__$1);
var G__34820 = c__28450__auto___34818;
var G__34821 = cljs.core.count.call(null,c__28450__auto___34818);
var G__34822 = (0);
seq__34803_34807 = G__34819;
chunk__34804_34808 = G__34820;
count__34805_34809 = G__34821;
i__34806_34810 = G__34822;
continue;
} else {
var msg_34823 = cljs.core.first.call(null,seq__34803_34817__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_34823);

var G__34824 = cljs.core.next.call(null,seq__34803_34817__$1);
var G__34825 = null;
var G__34826 = (0);
var G__34827 = (0);
seq__34803_34807 = G__34824;
chunk__34804_34808 = G__34825;
count__34805_34809 = G__34826;
i__34806_34810 = G__34827;
continue;
}
} else {
}
}
break;
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34828){
var map__34830 = p__34828;
var map__34830__$1 = ((cljs.core.seq_QMARK_.call(null,map__34830))?cljs.core.apply.call(null,cljs.core.hash_map,map__34830):map__34830);
var w = map__34830__$1;
var message = cljs.core.get.call(null,map__34830__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__27651__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__27651__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__27651__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34837 = cljs.core.seq.call(null,plugins);
var chunk__34838 = null;
var count__34839 = (0);
var i__34840 = (0);
while(true){
if((i__34840 < count__34839)){
var vec__34841 = cljs.core._nth.call(null,chunk__34838,i__34840);
var k = cljs.core.nth.call(null,vec__34841,(0),null);
var plugin = cljs.core.nth.call(null,vec__34841,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34843 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34837,chunk__34838,count__34839,i__34840,pl_34843,vec__34841,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34843.call(null,msg_hist);
});})(seq__34837,chunk__34838,count__34839,i__34840,pl_34843,vec__34841,k,plugin))
);
} else {
}

var G__34844 = seq__34837;
var G__34845 = chunk__34838;
var G__34846 = count__34839;
var G__34847 = (i__34840 + (1));
seq__34837 = G__34844;
chunk__34838 = G__34845;
count__34839 = G__34846;
i__34840 = G__34847;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__34837);
if(temp__4425__auto__){
var seq__34837__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34837__$1)){
var c__28450__auto__ = cljs.core.chunk_first.call(null,seq__34837__$1);
var G__34848 = cljs.core.chunk_rest.call(null,seq__34837__$1);
var G__34849 = c__28450__auto__;
var G__34850 = cljs.core.count.call(null,c__28450__auto__);
var G__34851 = (0);
seq__34837 = G__34848;
chunk__34838 = G__34849;
count__34839 = G__34850;
i__34840 = G__34851;
continue;
} else {
var vec__34842 = cljs.core.first.call(null,seq__34837__$1);
var k = cljs.core.nth.call(null,vec__34842,(0),null);
var plugin = cljs.core.nth.call(null,vec__34842,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34852 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34837,chunk__34838,count__34839,i__34840,pl_34852,vec__34842,k,plugin,seq__34837__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34852.call(null,msg_hist);
});})(seq__34837,chunk__34838,count__34839,i__34840,pl_34852,vec__34842,k,plugin,seq__34837__$1,temp__4425__auto__))
);
} else {
}

var G__34853 = cljs.core.next.call(null,seq__34837__$1);
var G__34854 = null;
var G__34855 = (0);
var G__34856 = (0);
seq__34837 = G__34853;
chunk__34838 = G__34854;
count__34839 = G__34855;
i__34840 = G__34856;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function() {
var figwheel$client$start = null;
var figwheel$client$start__0 = (function (){
return figwheel$client$start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
var figwheel$client$start__1 = (function (opts){
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
figwheel$client$start = function(opts){
switch(arguments.length){
case 0:
return figwheel$client$start__0.call(this);
case 1:
return figwheel$client$start__1.call(this,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$start.cljs$core$IFn$_invoke$arity$0 = figwheel$client$start__0;
figwheel$client$start.cljs$core$IFn$_invoke$arity$1 = figwheel$client$start__1;
return figwheel$client$start;
})()
;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
/**
 * @param {...*} var_args
 */
figwheel.client.watch_and_reload = (function() { 
var figwheel$client$watch_and_reload__delegate = function (p__34857){
var map__34859 = p__34857;
var map__34859__$1 = ((cljs.core.seq_QMARK_.call(null,map__34859))?cljs.core.apply.call(null,cljs.core.hash_map,map__34859):map__34859);
var opts = map__34859__$1;
return figwheel.client.start.call(null,opts);
};
var figwheel$client$watch_and_reload = function (var_args){
var p__34857 = null;
if (arguments.length > 0) {
var G__34860__i = 0, G__34860__a = new Array(arguments.length -  0);
while (G__34860__i < G__34860__a.length) {G__34860__a[G__34860__i] = arguments[G__34860__i + 0]; ++G__34860__i;}
  p__34857 = new cljs.core.IndexedSeq(G__34860__a,0);
} 
return figwheel$client$watch_and_reload__delegate.call(this,p__34857);};
figwheel$client$watch_and_reload.cljs$lang$maxFixedArity = 0;
figwheel$client$watch_and_reload.cljs$lang$applyTo = (function (arglist__34861){
var p__34857 = cljs.core.seq(arglist__34861);
return figwheel$client$watch_and_reload__delegate(p__34857);
});
figwheel$client$watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = figwheel$client$watch_and_reload__delegate;
return figwheel$client$watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map