// Compiled by ClojureScript 1.7.145 {}
goog.provide('re_frame.core');
goog.require('cljs.core');
goog.require('re_frame.subs');
goog.require('re_frame.router');
goog.require('re_frame.utils');
goog.require('re_frame.handlers');
goog.require('re_frame.middleware');
re_frame.core.dispatch = re_frame.router.dispatch;
re_frame.core.dispatch_sync = re_frame.router.dispatch_sync;
re_frame.core.register_sub = re_frame.subs.register;
re_frame.core.clear_sub_handlers_BANG_ = re_frame.subs.clear_handlers_BANG_;
re_frame.core.subscribe = re_frame.subs.subscribe;
re_frame.core.clear_event_handlers_BANG_ = re_frame.handlers.clear_handlers_BANG_;
re_frame.core.pure = re_frame.middleware.pure;
re_frame.core.debug = re_frame.middleware.debug;
re_frame.core.undoable = re_frame.middleware.undoable;
re_frame.core.path = re_frame.middleware.path;
re_frame.core.enrich = re_frame.middleware.enrich;
re_frame.core.trim_v = re_frame.middleware.trim_v;
re_frame.core.after = re_frame.middleware.after;
re_frame.core.log_ex = re_frame.middleware.log_ex;
re_frame.core.on_changes = re_frame.middleware.on_changes;
re_frame.core.set_loggers_BANG_ = re_frame.utils.set_loggers_BANG_;
re_frame.core.register_handler = (function re_frame$core$register_handler(var_args){
var args33732 = [];
var len__31484__auto___33735 = arguments.length;
var i__31485__auto___33736 = (0);
while(true){
if((i__31485__auto___33736 < len__31484__auto___33735)){
args33732.push((arguments[i__31485__auto___33736]));

var G__33737 = (i__31485__auto___33736 + (1));
i__31485__auto___33736 = G__33737;
continue;
} else {
}
break;
}

var G__33734 = args33732.length;
switch (G__33734) {
case 2:
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33732.length)].join('')));

}
});

re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$2 = (function (id,handler){
return re_frame.handlers.register_base.call(null,id,re_frame.core.pure,handler);
});

re_frame.core.register_handler.cljs$core$IFn$_invoke$arity$3 = (function (id,middleware,handler){
return re_frame.handlers.register_base.call(null,id,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.pure,middleware], null),handler);
});

re_frame.core.register_handler.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=core.js.map