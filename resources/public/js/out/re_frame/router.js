// Compiled by ClojureScript 1.7.145 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.handlers');
goog.require('re_frame.utils');
goog.require('cljs.core.async');
goog.require('goog.async.nextTick');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
/**
 * Yields control to the browser. Faster than (timeout 0).
 *   See http://dev.clojure.org/jira/browse/ASYNC-137
 */
re_frame.router.yield$ = (function re_frame$router$yield(){
var ch = cljs.core.async.chan.call(null);
goog.async.nextTick(((function (ch){
return (function (){
return cljs.core.async.close_BANG_.call(null,ch);
});})(ch))
);

return ch;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__32665__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32665__auto__){
return (function (){
var f__32666__auto__ = (function (){var switch__32644__auto__ = ((function (c__32665__auto__){
return (function (state_33942){
var state_val_33943 = (state_33942[(1)]);
if((state_val_33943 === (7))){
var inst_33927 = (state_33942[(2)]);
var state_33942__$1 = (function (){var statearr_33944 = state_33942;
(statearr_33944[(7)] = inst_33927);

return statearr_33944;
})();
var statearr_33945_33965 = state_33942__$1;
(statearr_33945_33965[(2)] = null);

(statearr_33945_33965[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (1))){
var state_33942__$1 = state_33942;
var statearr_33946_33966 = state_33942__$1;
(statearr_33946_33966[(2)] = null);

(statearr_33946_33966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (4))){
var inst_33914 = (state_33942[(8)]);
var inst_33914__$1 = (state_33942[(2)]);
var inst_33915 = cljs.core.meta.call(null,inst_33914__$1);
var inst_33916 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_33915);
var state_33942__$1 = (function (){var statearr_33947 = state_33942;
(statearr_33947[(8)] = inst_33914__$1);

return statearr_33947;
})();
if(cljs.core.truth_(inst_33916)){
var statearr_33948_33967 = state_33942__$1;
(statearr_33948_33967[(1)] = (5));

} else {
var statearr_33949_33968 = state_33942__$1;
(statearr_33949_33968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (6))){
var inst_33923 = re_frame.router.yield$.call(null);
var state_33942__$1 = state_33942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33942__$1,(9),inst_33923);
} else {
if((state_val_33943 === (3))){
var inst_33940 = (state_33942[(2)]);
var state_33942__$1 = state_33942;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33942__$1,inst_33940);
} else {
if((state_val_33943 === (12))){
var inst_33914 = (state_33942[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33942,(11),Object,null,(10));
var inst_33935 = re_frame.handlers.handle.call(null,inst_33914);
var state_33942__$1 = state_33942;
var statearr_33950_33969 = state_33942__$1;
(statearr_33950_33969[(2)] = inst_33935);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33942__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (2))){
var state_33942__$1 = state_33942;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33942__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_33943 === (11))){
var inst_33928 = (state_33942[(2)]);
var inst_33929 = re_frame.router.purge_chan.call(null);
var inst_33930 = re_frame$router$router_loop.call(null);
var inst_33931 = (function(){throw inst_33928})();
var state_33942__$1 = (function (){var statearr_33951 = state_33942;
(statearr_33951[(9)] = inst_33930);

(statearr_33951[(10)] = inst_33929);

return statearr_33951;
})();
var statearr_33952_33970 = state_33942__$1;
(statearr_33952_33970[(2)] = inst_33931);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33942__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (9))){
var inst_33925 = (state_33942[(2)]);
var state_33942__$1 = state_33942;
var statearr_33953_33971 = state_33942__$1;
(statearr_33953_33971[(2)] = inst_33925);

(statearr_33953_33971[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (5))){
var inst_33918 = reagent.core.flush.call(null);
var inst_33919 = cljs.core.async.timeout.call(null,(20));
var state_33942__$1 = (function (){var statearr_33954 = state_33942;
(statearr_33954[(11)] = inst_33918);

return statearr_33954;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33942__$1,(8),inst_33919);
} else {
if((state_val_33943 === (10))){
var inst_33937 = (state_33942[(2)]);
var state_33942__$1 = (function (){var statearr_33955 = state_33942;
(statearr_33955[(12)] = inst_33937);

return statearr_33955;
})();
var statearr_33956_33972 = state_33942__$1;
(statearr_33956_33972[(2)] = null);

(statearr_33956_33972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33943 === (8))){
var inst_33921 = (state_33942[(2)]);
var state_33942__$1 = state_33942;
var statearr_33957_33973 = state_33942__$1;
(statearr_33957_33973[(2)] = inst_33921);

(statearr_33957_33973[(1)] = (7));


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
});})(c__32665__auto__))
;
return ((function (switch__32644__auto__,c__32665__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__32645__auto__ = null;
var re_frame$router$router_loop_$_state_machine__32645__auto____0 = (function (){
var statearr_33961 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33961[(0)] = re_frame$router$router_loop_$_state_machine__32645__auto__);

(statearr_33961[(1)] = (1));

return statearr_33961;
});
var re_frame$router$router_loop_$_state_machine__32645__auto____1 = (function (state_33942){
while(true){
var ret_value__32646__auto__ = (function (){try{while(true){
var result__32647__auto__ = switch__32644__auto__.call(null,state_33942);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32647__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32647__auto__;
}
break;
}
}catch (e33962){if((e33962 instanceof Object)){
var ex__32648__auto__ = e33962;
var statearr_33963_33974 = state_33942;
(statearr_33963_33974[(5)] = ex__32648__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33942);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33962;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32646__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33975 = state_33942;
state_33942 = G__33975;
continue;
} else {
return ret_value__32646__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__32645__auto__ = function(state_33942){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__32645__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__32645__auto____1.call(this,state_33942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__32645__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__32645__auto____0;
re_frame$router$router_loop_$_state_machine__32645__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__32645__auto____1;
return re_frame$router$router_loop_$_state_machine__32645__auto__;
})()
;})(switch__32644__auto__,c__32665__auto__))
})();
var state__32667__auto__ = (function (){var statearr_33964 = f__32666__auto__.call(null);
(statearr_33964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32665__auto__);

return statearr_33964;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32667__auto__);
});})(c__32665__auto__))
);

return c__32665__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 *   Usage example:
 *   (dispatch [:delete-item 42])
 *   
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 *   use of core.async/chan.
 * 
 *   Usage example:
 *   (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map