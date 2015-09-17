// Compiled by ClojureScript 0.0-3058 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t35878 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35878 = (function (fn_handler,f,meta35879){
this.fn_handler = fn_handler;
this.f = f;
this.meta35879 = meta35879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35880,meta35879__$1){
var self__ = this;
var _35880__$1 = this;
return (new cljs.core.async.t35878(self__.fn_handler,self__.f,meta35879__$1));
});

cljs.core.async.t35878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35880){
var self__ = this;
var _35880__$1 = this;
return self__.meta35879;
});

cljs.core.async.t35878.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35878.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t35878.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t35878.cljs$lang$type = true;

cljs.core.async.t35878.cljs$lang$ctorStr = "cljs.core.async/t35878";

cljs.core.async.t35878.cljs$lang$ctorPrWriter = (function (this__28250__auto__,writer__28251__auto__,opt__28252__auto__){
return cljs.core._write.call(null,writer__28251__auto__,"cljs.core.async/t35878");
});

cljs.core.async.__GT_t35878 = (function cljs$core$async$fn_handler_$___GT_t35878(fn_handler__$1,f__$1,meta35879){
return (new cljs.core.async.t35878(fn_handler__$1,f__$1,meta35879));
});

}

return (new cljs.core.async.t35878(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__35882 = buff;
if(G__35882){
var bit__28344__auto__ = null;
if(cljs.core.truth_((function (){var or__27663__auto__ = bit__28344__auto__;
if(cljs.core.truth_(or__27663__auto__)){
return or__27663__auto__;
} else {
return G__35882.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__35882.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35882);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__35882);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function() {
var cljs$core$async$chan = null;
var cljs$core$async$chan__0 = (function (){
return cljs$core$async$chan.call(null,null);
});
var cljs$core$async$chan__1 = (function (buf_or_n){
return cljs$core$async$chan.call(null,buf_or_n,null,null);
});
var cljs$core$async$chan__2 = (function (buf_or_n,xform){
return cljs$core$async$chan.call(null,buf_or_n,xform,null);
});
var cljs$core$async$chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
cljs$core$async$chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return cljs$core$async$chan__0.call(this);
case 1:
return cljs$core$async$chan__1.call(this,buf_or_n);
case 2:
return cljs$core$async$chan__2.call(this,buf_or_n,xform);
case 3:
return cljs$core$async$chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$chan__0;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$chan__1;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$chan__2;
cljs$core$async$chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$chan__3;
return cljs$core$async$chan;
})()
;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function() {
var cljs$core$async$take_BANG_ = null;
var cljs$core$async$take_BANG___2 = (function (port,fn1){
return cljs$core$async$take_BANG_.call(null,port,fn1,true);
});
var cljs$core$async$take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35883 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35883);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35883,ret){
return (function (){
return fn1.call(null,val_35883);
});})(val_35883,ret))
);
}
} else {
}

return null;
});
cljs$core$async$take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$take_BANG___2.call(this,port,fn1);
case 3:
return cljs$core$async$take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take_BANG___2;
cljs$core$async$take_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take_BANG___3;
return cljs$core$async$take_BANG_;
})()
;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function() {
var cljs$core$async$put_BANG_ = null;
var cljs$core$async$put_BANG___2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var cljs$core$async$put_BANG___3 = (function (port,val,fn1){
return cljs$core$async$put_BANG_.call(null,port,val,fn1,true);
});
var cljs$core$async$put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});
cljs$core$async$put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$put_BANG___2.call(this,port,val);
case 3:
return cljs$core$async$put_BANG___3.call(this,port,val,fn1);
case 4:
return cljs$core$async$put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$put_BANG___2;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$put_BANG___3;
cljs$core$async$put_BANG_.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$put_BANG___4;
return cljs$core$async$put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__28550__auto___35884 = n;
var x_35885 = (0);
while(true){
if((x_35885 < n__28550__auto___35884)){
(a[x_35885] = (0));

var G__35886 = (x_35885 + (1));
x_35885 = G__35886;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__35887 = (i + (1));
i = G__35887;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t35891 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35891 = (function (alt_flag,flag,meta35892){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta35892 = meta35892;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35891.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35893,meta35892__$1){
var self__ = this;
var _35893__$1 = this;
return (new cljs.core.async.t35891(self__.alt_flag,self__.flag,meta35892__$1));
});})(flag))
;

cljs.core.async.t35891.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35893){
var self__ = this;
var _35893__$1 = this;
return self__.meta35892;
});})(flag))
;

cljs.core.async.t35891.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35891.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t35891.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t35891.cljs$lang$type = true;

cljs.core.async.t35891.cljs$lang$ctorStr = "cljs.core.async/t35891";

cljs.core.async.t35891.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__28250__auto__,writer__28251__auto__,opt__28252__auto__){
return cljs.core._write.call(null,writer__28251__auto__,"cljs.core.async/t35891");
});})(flag))
;

cljs.core.async.__GT_t35891 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t35891(alt_flag__$1,flag__$1,meta35892){
return (new cljs.core.async.t35891(alt_flag__$1,flag__$1,meta35892));
});})(flag))
;

}

return (new cljs.core.async.t35891(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t35897 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t35897 = (function (alt_handler,flag,cb,meta35898){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta35898 = meta35898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t35897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35899,meta35898__$1){
var self__ = this;
var _35899__$1 = this;
return (new cljs.core.async.t35897(self__.alt_handler,self__.flag,self__.cb,meta35898__$1));
});

cljs.core.async.t35897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35899){
var self__ = this;
var _35899__$1 = this;
return self__.meta35898;
});

cljs.core.async.t35897.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t35897.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t35897.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t35897.cljs$lang$type = true;

cljs.core.async.t35897.cljs$lang$ctorStr = "cljs.core.async/t35897";

cljs.core.async.t35897.cljs$lang$ctorPrWriter = (function (this__28250__auto__,writer__28251__auto__,opt__28252__auto__){
return cljs.core._write.call(null,writer__28251__auto__,"cljs.core.async/t35897");
});

cljs.core.async.__GT_t35897 = (function cljs$core$async$alt_handler_$___GT_t35897(alt_handler__$1,flag__$1,cb__$1,meta35898){
return (new cljs.core.async.t35897(alt_handler__$1,flag__$1,cb__$1,meta35898));
});

}

return (new cljs.core.async.t35897(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35900_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35900_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35901_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35901_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__27663__auto__ = wport;
if(cljs.core.truth_(or__27663__auto__)){
return or__27663__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35902 = (i + (1));
i = G__35902;
continue;
}
} else {
return null;
}
break;
}
})();
var or__27663__auto__ = ret;
if(cljs.core.truth_(or__27663__auto__)){
return or__27663__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__27651__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__27651__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__27651__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 * @param {...*} var_args
 */
cljs.core.async.alts_BANG_ = (function() { 
var cljs$core$async$alts_BANG___delegate = function (ports,p__35903){
var map__35905 = p__35903;
var map__35905__$1 = ((cljs.core.seq_QMARK_.call(null,map__35905))?cljs.core.apply.call(null,cljs.core.hash_map,map__35905):map__35905);
var opts = map__35905__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var cljs$core$async$alts_BANG_ = function (ports,var_args){
var p__35903 = null;
if (arguments.length > 1) {
var G__35906__i = 0, G__35906__a = new Array(arguments.length -  1);
while (G__35906__i < G__35906__a.length) {G__35906__a[G__35906__i] = arguments[G__35906__i + 1]; ++G__35906__i;}
  p__35903 = new cljs.core.IndexedSeq(G__35906__a,0);
} 
return cljs$core$async$alts_BANG___delegate.call(this,ports,p__35903);};
cljs$core$async$alts_BANG_.cljs$lang$maxFixedArity = 1;
cljs$core$async$alts_BANG_.cljs$lang$applyTo = (function (arglist__35907){
var ports = cljs.core.first(arglist__35907);
var p__35903 = cljs.core.rest(arglist__35907);
return cljs$core$async$alts_BANG___delegate(ports,p__35903);
});
cljs$core$async$alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$alts_BANG___delegate;
return cljs$core$async$alts_BANG_;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function() {
var cljs$core$async$pipe = null;
var cljs$core$async$pipe__2 = (function (from,to){
return cljs$core$async$pipe.call(null,from,to,true);
});
var cljs$core$async$pipe__3 = (function (from,to,close_QMARK_){
var c__30074__auto___36002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto___36002){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto___36002){
return (function (state_35978){
var state_val_35979 = (state_35978[(1)]);
if((state_val_35979 === (7))){
var inst_35974 = (state_35978[(2)]);
var state_35978__$1 = state_35978;
var statearr_35980_36003 = state_35978__$1;
(statearr_35980_36003[(2)] = inst_35974);

(statearr_35980_36003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (1))){
var state_35978__$1 = state_35978;
var statearr_35981_36004 = state_35978__$1;
(statearr_35981_36004[(2)] = null);

(statearr_35981_36004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (4))){
var inst_35957 = (state_35978[(7)]);
var inst_35957__$1 = (state_35978[(2)]);
var inst_35958 = (inst_35957__$1 == null);
var state_35978__$1 = (function (){var statearr_35982 = state_35978;
(statearr_35982[(7)] = inst_35957__$1);

return statearr_35982;
})();
if(cljs.core.truth_(inst_35958)){
var statearr_35983_36005 = state_35978__$1;
(statearr_35983_36005[(1)] = (5));

} else {
var statearr_35984_36006 = state_35978__$1;
(statearr_35984_36006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (13))){
var state_35978__$1 = state_35978;
var statearr_35985_36007 = state_35978__$1;
(statearr_35985_36007[(2)] = null);

(statearr_35985_36007[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (6))){
var inst_35957 = (state_35978[(7)]);
var state_35978__$1 = state_35978;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35978__$1,(11),to,inst_35957);
} else {
if((state_val_35979 === (3))){
var inst_35976 = (state_35978[(2)]);
var state_35978__$1 = state_35978;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35978__$1,inst_35976);
} else {
if((state_val_35979 === (12))){
var state_35978__$1 = state_35978;
var statearr_35986_36008 = state_35978__$1;
(statearr_35986_36008[(2)] = null);

(statearr_35986_36008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (2))){
var state_35978__$1 = state_35978;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35978__$1,(4),from);
} else {
if((state_val_35979 === (11))){
var inst_35967 = (state_35978[(2)]);
var state_35978__$1 = state_35978;
if(cljs.core.truth_(inst_35967)){
var statearr_35987_36009 = state_35978__$1;
(statearr_35987_36009[(1)] = (12));

} else {
var statearr_35988_36010 = state_35978__$1;
(statearr_35988_36010[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (9))){
var state_35978__$1 = state_35978;
var statearr_35989_36011 = state_35978__$1;
(statearr_35989_36011[(2)] = null);

(statearr_35989_36011[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (5))){
var state_35978__$1 = state_35978;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35990_36012 = state_35978__$1;
(statearr_35990_36012[(1)] = (8));

} else {
var statearr_35991_36013 = state_35978__$1;
(statearr_35991_36013[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (14))){
var inst_35972 = (state_35978[(2)]);
var state_35978__$1 = state_35978;
var statearr_35992_36014 = state_35978__$1;
(statearr_35992_36014[(2)] = inst_35972);

(statearr_35992_36014[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (10))){
var inst_35964 = (state_35978[(2)]);
var state_35978__$1 = state_35978;
var statearr_35993_36015 = state_35978__$1;
(statearr_35993_36015[(2)] = inst_35964);

(statearr_35993_36015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35979 === (8))){
var inst_35961 = cljs.core.async.close_BANG_.call(null,to);
var state_35978__$1 = state_35978;
var statearr_35994_36016 = state_35978__$1;
(statearr_35994_36016[(2)] = inst_35961);

(statearr_35994_36016[(1)] = (10));


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
});})(c__30074__auto___36002))
;
return ((function (switch__30018__auto__,c__30074__auto___36002){
return (function() {
var cljs$core$async$pipe_$_state_machine__30019__auto__ = null;
var cljs$core$async$pipe_$_state_machine__30019__auto____0 = (function (){
var statearr_35998 = [null,null,null,null,null,null,null,null];
(statearr_35998[(0)] = cljs$core$async$pipe_$_state_machine__30019__auto__);

(statearr_35998[(1)] = (1));

return statearr_35998;
});
var cljs$core$async$pipe_$_state_machine__30019__auto____1 = (function (state_35978){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_35978);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e35999){if((e35999 instanceof Object)){
var ex__30022__auto__ = e35999;
var statearr_36000_36017 = state_35978;
(statearr_36000_36017[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35978);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36018 = state_35978;
state_35978 = G__36018;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$pipe_$_state_machine__30019__auto__ = function(state_35978){
switch(arguments.length){
case 0:
return cljs$core$async$pipe_$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$pipe_$_state_machine__30019__auto____1.call(this,state_35978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipe_$_state_machine__30019__auto____0;
cljs$core$async$pipe_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipe_$_state_machine__30019__auto____1;
return cljs$core$async$pipe_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto___36002))
})();
var state__30076__auto__ = (function (){var statearr_36001 = f__30075__auto__.call(null);
(statearr_36001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto___36002);

return statearr_36001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto___36002))
);


return to;
});
cljs$core$async$pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$pipe__2.call(this,from,to);
case 3:
return cljs$core$async$pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pipe__2;
cljs$core$async$pipe.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pipe__3;
return cljs$core$async$pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__36202){
var vec__36203 = p__36202;
var v = cljs.core.nth.call(null,vec__36203,(0),null);
var p = cljs.core.nth.call(null,vec__36203,(1),null);
var job = vec__36203;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__30074__auto___36385 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto___36385,res,vec__36203,v,p,job,jobs,results){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto___36385,res,vec__36203,v,p,job,jobs,results){
return (function (state_36208){
var state_val_36209 = (state_36208[(1)]);
if((state_val_36209 === (1))){
var state_36208__$1 = state_36208;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36208__$1,(2),res,v);
} else {
if((state_val_36209 === (2))){
var inst_36205 = (state_36208[(2)]);
var inst_36206 = cljs.core.async.close_BANG_.call(null,res);
var state_36208__$1 = (function (){var statearr_36210 = state_36208;
(statearr_36210[(7)] = inst_36205);

return statearr_36210;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36208__$1,inst_36206);
} else {
return null;
}
}
});})(c__30074__auto___36385,res,vec__36203,v,p,job,jobs,results))
;
return ((function (switch__30018__auto__,c__30074__auto___36385,res,vec__36203,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____0 = (function (){
var statearr_36214 = [null,null,null,null,null,null,null,null];
(statearr_36214[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__);

(statearr_36214[(1)] = (1));

return statearr_36214;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____1 = (function (state_36208){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_36208);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e36215){if((e36215 instanceof Object)){
var ex__30022__auto__ = e36215;
var statearr_36216_36386 = state_36208;
(statearr_36216_36386[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36208);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36387 = state_36208;
state_36208 = G__36387;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__ = function(state_36208){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____1.call(this,state_36208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto___36385,res,vec__36203,v,p,job,jobs,results))
})();
var state__30076__auto__ = (function (){var statearr_36217 = f__30075__auto__.call(null);
(statearr_36217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto___36385);

return statearr_36217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto___36385,res,vec__36203,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__36218){
var vec__36219 = p__36218;
var v = cljs.core.nth.call(null,vec__36219,(0),null);
var p = cljs.core.nth.call(null,vec__36219,(1),null);
var job = vec__36219;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__28550__auto___36388 = n;
var __36389 = (0);
while(true){
if((__36389 < n__28550__auto___36388)){
var G__36220_36390 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__36220_36390) {
case "compute":
var c__30074__auto___36392 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36389,c__30074__auto___36392,G__36220_36390,n__28550__auto___36388,jobs,results,process,async){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (__36389,c__30074__auto___36392,G__36220_36390,n__28550__auto___36388,jobs,results,process,async){
return (function (state_36233){
var state_val_36234 = (state_36233[(1)]);
if((state_val_36234 === (1))){
var state_36233__$1 = state_36233;
var statearr_36235_36393 = state_36233__$1;
(statearr_36235_36393[(2)] = null);

(statearr_36235_36393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36234 === (2))){
var state_36233__$1 = state_36233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36233__$1,(4),jobs);
} else {
if((state_val_36234 === (3))){
var inst_36231 = (state_36233[(2)]);
var state_36233__$1 = state_36233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36233__$1,inst_36231);
} else {
if((state_val_36234 === (4))){
var inst_36223 = (state_36233[(2)]);
var inst_36224 = process.call(null,inst_36223);
var state_36233__$1 = state_36233;
if(cljs.core.truth_(inst_36224)){
var statearr_36236_36394 = state_36233__$1;
(statearr_36236_36394[(1)] = (5));

} else {
var statearr_36237_36395 = state_36233__$1;
(statearr_36237_36395[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36234 === (5))){
var state_36233__$1 = state_36233;
var statearr_36238_36396 = state_36233__$1;
(statearr_36238_36396[(2)] = null);

(statearr_36238_36396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36234 === (6))){
var state_36233__$1 = state_36233;
var statearr_36239_36397 = state_36233__$1;
(statearr_36239_36397[(2)] = null);

(statearr_36239_36397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36234 === (7))){
var inst_36229 = (state_36233[(2)]);
var state_36233__$1 = state_36233;
var statearr_36240_36398 = state_36233__$1;
(statearr_36240_36398[(2)] = inst_36229);

(statearr_36240_36398[(1)] = (3));


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
});})(__36389,c__30074__auto___36392,G__36220_36390,n__28550__auto___36388,jobs,results,process,async))
;
return ((function (__36389,switch__30018__auto__,c__30074__auto___36392,G__36220_36390,n__28550__auto___36388,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____0 = (function (){
var statearr_36244 = [null,null,null,null,null,null,null];
(statearr_36244[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__);

(statearr_36244[(1)] = (1));

return statearr_36244;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____1 = (function (state_36233){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_36233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e36245){if((e36245 instanceof Object)){
var ex__30022__auto__ = e36245;
var statearr_36246_36399 = state_36233;
(statearr_36246_36399[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36245;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36400 = state_36233;
state_36233 = G__36400;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__ = function(state_36233){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____1.call(this,state_36233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__;
})()
;})(__36389,switch__30018__auto__,c__30074__auto___36392,G__36220_36390,n__28550__auto___36388,jobs,results,process,async))
})();
var state__30076__auto__ = (function (){var statearr_36247 = f__30075__auto__.call(null);
(statearr_36247[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto___36392);

return statearr_36247;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(__36389,c__30074__auto___36392,G__36220_36390,n__28550__auto___36388,jobs,results,process,async))
);


break;
case "async":
var c__30074__auto___36401 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__36389,c__30074__auto___36401,G__36220_36390,n__28550__auto___36388,jobs,results,process,async){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (__36389,c__30074__auto___36401,G__36220_36390,n__28550__auto___36388,jobs,results,process,async){
return (function (state_36260){
var state_val_36261 = (state_36260[(1)]);
if((state_val_36261 === (1))){
var state_36260__$1 = state_36260;
var statearr_36262_36402 = state_36260__$1;
(statearr_36262_36402[(2)] = null);

(statearr_36262_36402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36261 === (2))){
var state_36260__$1 = state_36260;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36260__$1,(4),jobs);
} else {
if((state_val_36261 === (3))){
var inst_36258 = (state_36260[(2)]);
var state_36260__$1 = state_36260;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36260__$1,inst_36258);
} else {
if((state_val_36261 === (4))){
var inst_36250 = (state_36260[(2)]);
var inst_36251 = async.call(null,inst_36250);
var state_36260__$1 = state_36260;
if(cljs.core.truth_(inst_36251)){
var statearr_36263_36403 = state_36260__$1;
(statearr_36263_36403[(1)] = (5));

} else {
var statearr_36264_36404 = state_36260__$1;
(statearr_36264_36404[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36261 === (5))){
var state_36260__$1 = state_36260;
var statearr_36265_36405 = state_36260__$1;
(statearr_36265_36405[(2)] = null);

(statearr_36265_36405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36261 === (6))){
var state_36260__$1 = state_36260;
var statearr_36266_36406 = state_36260__$1;
(statearr_36266_36406[(2)] = null);

(statearr_36266_36406[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36261 === (7))){
var inst_36256 = (state_36260[(2)]);
var state_36260__$1 = state_36260;
var statearr_36267_36407 = state_36260__$1;
(statearr_36267_36407[(2)] = inst_36256);

(statearr_36267_36407[(1)] = (3));


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
});})(__36389,c__30074__auto___36401,G__36220_36390,n__28550__auto___36388,jobs,results,process,async))
;
return ((function (__36389,switch__30018__auto__,c__30074__auto___36401,G__36220_36390,n__28550__auto___36388,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____0 = (function (){
var statearr_36271 = [null,null,null,null,null,null,null];
(statearr_36271[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__);

(statearr_36271[(1)] = (1));

return statearr_36271;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____1 = (function (state_36260){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_36260);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e36272){if((e36272 instanceof Object)){
var ex__30022__auto__ = e36272;
var statearr_36273_36408 = state_36260;
(statearr_36273_36408[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36260);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36272;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36409 = state_36260;
state_36260 = G__36409;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__ = function(state_36260){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____1.call(this,state_36260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__;
})()
;})(__36389,switch__30018__auto__,c__30074__auto___36401,G__36220_36390,n__28550__auto___36388,jobs,results,process,async))
})();
var state__30076__auto__ = (function (){var statearr_36274 = f__30075__auto__.call(null);
(statearr_36274[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto___36401);

return statearr_36274;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(__36389,c__30074__auto___36401,G__36220_36390,n__28550__auto___36388,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__36410 = (__36389 + (1));
__36389 = G__36410;
continue;
} else {
}
break;
}

var c__30074__auto___36411 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto___36411,jobs,results,process,async){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto___36411,jobs,results,process,async){
return (function (state_36296){
var state_val_36297 = (state_36296[(1)]);
if((state_val_36297 === (1))){
var state_36296__$1 = state_36296;
var statearr_36298_36412 = state_36296__$1;
(statearr_36298_36412[(2)] = null);

(statearr_36298_36412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (2))){
var state_36296__$1 = state_36296;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36296__$1,(4),from);
} else {
if((state_val_36297 === (3))){
var inst_36294 = (state_36296[(2)]);
var state_36296__$1 = state_36296;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36296__$1,inst_36294);
} else {
if((state_val_36297 === (4))){
var inst_36277 = (state_36296[(7)]);
var inst_36277__$1 = (state_36296[(2)]);
var inst_36278 = (inst_36277__$1 == null);
var state_36296__$1 = (function (){var statearr_36299 = state_36296;
(statearr_36299[(7)] = inst_36277__$1);

return statearr_36299;
})();
if(cljs.core.truth_(inst_36278)){
var statearr_36300_36413 = state_36296__$1;
(statearr_36300_36413[(1)] = (5));

} else {
var statearr_36301_36414 = state_36296__$1;
(statearr_36301_36414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (5))){
var inst_36280 = cljs.core.async.close_BANG_.call(null,jobs);
var state_36296__$1 = state_36296;
var statearr_36302_36415 = state_36296__$1;
(statearr_36302_36415[(2)] = inst_36280);

(statearr_36302_36415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (6))){
var inst_36277 = (state_36296[(7)]);
var inst_36282 = (state_36296[(8)]);
var inst_36282__$1 = cljs.core.async.chan.call(null,(1));
var inst_36283 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36284 = [inst_36277,inst_36282__$1];
var inst_36285 = (new cljs.core.PersistentVector(null,2,(5),inst_36283,inst_36284,null));
var state_36296__$1 = (function (){var statearr_36303 = state_36296;
(statearr_36303[(8)] = inst_36282__$1);

return statearr_36303;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36296__$1,(8),jobs,inst_36285);
} else {
if((state_val_36297 === (7))){
var inst_36292 = (state_36296[(2)]);
var state_36296__$1 = state_36296;
var statearr_36304_36416 = state_36296__$1;
(statearr_36304_36416[(2)] = inst_36292);

(statearr_36304_36416[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36297 === (8))){
var inst_36282 = (state_36296[(8)]);
var inst_36287 = (state_36296[(2)]);
var state_36296__$1 = (function (){var statearr_36305 = state_36296;
(statearr_36305[(9)] = inst_36287);

return statearr_36305;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36296__$1,(9),results,inst_36282);
} else {
if((state_val_36297 === (9))){
var inst_36289 = (state_36296[(2)]);
var state_36296__$1 = (function (){var statearr_36306 = state_36296;
(statearr_36306[(10)] = inst_36289);

return statearr_36306;
})();
var statearr_36307_36417 = state_36296__$1;
(statearr_36307_36417[(2)] = null);

(statearr_36307_36417[(1)] = (2));


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
});})(c__30074__auto___36411,jobs,results,process,async))
;
return ((function (switch__30018__auto__,c__30074__auto___36411,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____0 = (function (){
var statearr_36311 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36311[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__);

(statearr_36311[(1)] = (1));

return statearr_36311;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____1 = (function (state_36296){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_36296);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e36312){if((e36312 instanceof Object)){
var ex__30022__auto__ = e36312;
var statearr_36313_36418 = state_36296;
(statearr_36313_36418[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36296);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36419 = state_36296;
state_36296 = G__36419;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__ = function(state_36296){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____1.call(this,state_36296);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto___36411,jobs,results,process,async))
})();
var state__30076__auto__ = (function (){var statearr_36314 = f__30075__auto__.call(null);
(statearr_36314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto___36411);

return statearr_36314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto___36411,jobs,results,process,async))
);


var c__30074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto__,jobs,results,process,async){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto__,jobs,results,process,async){
return (function (state_36352){
var state_val_36353 = (state_36352[(1)]);
if((state_val_36353 === (7))){
var inst_36348 = (state_36352[(2)]);
var state_36352__$1 = state_36352;
var statearr_36354_36420 = state_36352__$1;
(statearr_36354_36420[(2)] = inst_36348);

(statearr_36354_36420[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36353 === (20))){
var state_36352__$1 = state_36352;
var statearr_36355_36421 = state_36352__$1;
(statearr_36355_36421[(2)] = null);

(statearr_36355_36421[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36353 === (1))){
var state_36352__$1 = state_36352;
var statearr_36356_36422 = state_36352__$1;
(statearr_36356_36422[(2)] = null);

(statearr_36356_36422[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36353 === (4))){
var inst_36317 = (state_36352[(7)]);
var inst_36317__$1 = (state_36352[(2)]);
var inst_36318 = (inst_36317__$1 == null);
var state_36352__$1 = (function (){var statearr_36357 = state_36352;
(statearr_36357[(7)] = inst_36317__$1);

return statearr_36357;
})();
if(cljs.core.truth_(inst_36318)){
var statearr_36358_36423 = state_36352__$1;
(statearr_36358_36423[(1)] = (5));

} else {
var statearr_36359_36424 = state_36352__$1;
(statearr_36359_36424[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36353 === (15))){
var inst_36330 = (state_36352[(8)]);
var state_36352__$1 = state_36352;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36352__$1,(18),to,inst_36330);
} else {
if((state_val_36353 === (21))){
var inst_36343 = (state_36352[(2)]);
var state_36352__$1 = state_36352;
var statearr_36360_36425 = state_36352__$1;
(statearr_36360_36425[(2)] = inst_36343);

(statearr_36360_36425[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36353 === (13))){
var inst_36345 = (state_36352[(2)]);
var state_36352__$1 = (function (){var statearr_36361 = state_36352;
(statearr_36361[(9)] = inst_36345);

return statearr_36361;
})();
var statearr_36362_36426 = state_36352__$1;
(statearr_36362_36426[(2)] = null);

(statearr_36362_36426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36353 === (6))){
var inst_36317 = (state_36352[(7)]);
var state_36352__$1 = state_36352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36352__$1,(11),inst_36317);
} else {
if((state_val_36353 === (17))){
var inst_36338 = (state_36352[(2)]);
var state_36352__$1 = state_36352;
if(cljs.core.truth_(inst_36338)){
var statearr_36363_36427 = state_36352__$1;
(statearr_36363_36427[(1)] = (19));

} else {
var statearr_36364_36428 = state_36352__$1;
(statearr_36364_36428[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36353 === (3))){
var inst_36350 = (state_36352[(2)]);
var state_36352__$1 = state_36352;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36352__$1,inst_36350);
} else {
if((state_val_36353 === (12))){
var inst_36327 = (state_36352[(10)]);
var state_36352__$1 = state_36352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36352__$1,(14),inst_36327);
} else {
if((state_val_36353 === (2))){
var state_36352__$1 = state_36352;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36352__$1,(4),results);
} else {
if((state_val_36353 === (19))){
var state_36352__$1 = state_36352;
var statearr_36365_36429 = state_36352__$1;
(statearr_36365_36429[(2)] = null);

(statearr_36365_36429[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36353 === (11))){
var inst_36327 = (state_36352[(2)]);
var state_36352__$1 = (function (){var statearr_36366 = state_36352;
(statearr_36366[(10)] = inst_36327);

return statearr_36366;
})();
var statearr_36367_36430 = state_36352__$1;
(statearr_36367_36430[(2)] = null);

(statearr_36367_36430[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36353 === (9))){
var state_36352__$1 = state_36352;
var statearr_36368_36431 = state_36352__$1;
(statearr_36368_36431[(2)] = null);

(statearr_36368_36431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36353 === (5))){
var state_36352__$1 = state_36352;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36369_36432 = state_36352__$1;
(statearr_36369_36432[(1)] = (8));

} else {
var statearr_36370_36433 = state_36352__$1;
(statearr_36370_36433[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36353 === (14))){
var inst_36332 = (state_36352[(11)]);
var inst_36330 = (state_36352[(8)]);
var inst_36330__$1 = (state_36352[(2)]);
var inst_36331 = (inst_36330__$1 == null);
var inst_36332__$1 = cljs.core.not.call(null,inst_36331);
var state_36352__$1 = (function (){var statearr_36371 = state_36352;
(statearr_36371[(11)] = inst_36332__$1);

(statearr_36371[(8)] = inst_36330__$1);

return statearr_36371;
})();
if(inst_36332__$1){
var statearr_36372_36434 = state_36352__$1;
(statearr_36372_36434[(1)] = (15));

} else {
var statearr_36373_36435 = state_36352__$1;
(statearr_36373_36435[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36353 === (16))){
var inst_36332 = (state_36352[(11)]);
var state_36352__$1 = state_36352;
var statearr_36374_36436 = state_36352__$1;
(statearr_36374_36436[(2)] = inst_36332);

(statearr_36374_36436[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36353 === (10))){
var inst_36324 = (state_36352[(2)]);
var state_36352__$1 = state_36352;
var statearr_36375_36437 = state_36352__$1;
(statearr_36375_36437[(2)] = inst_36324);

(statearr_36375_36437[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36353 === (18))){
var inst_36335 = (state_36352[(2)]);
var state_36352__$1 = state_36352;
var statearr_36376_36438 = state_36352__$1;
(statearr_36376_36438[(2)] = inst_36335);

(statearr_36376_36438[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36353 === (8))){
var inst_36321 = cljs.core.async.close_BANG_.call(null,to);
var state_36352__$1 = state_36352;
var statearr_36377_36439 = state_36352__$1;
(statearr_36377_36439[(2)] = inst_36321);

(statearr_36377_36439[(1)] = (10));


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
});})(c__30074__auto__,jobs,results,process,async))
;
return ((function (switch__30018__auto__,c__30074__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____0 = (function (){
var statearr_36381 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36381[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__);

(statearr_36381[(1)] = (1));

return statearr_36381;
});
var cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____1 = (function (state_36352){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_36352);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e36382){if((e36382 instanceof Object)){
var ex__30022__auto__ = e36382;
var statearr_36383_36440 = state_36352;
(statearr_36383_36440[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36352);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36441 = state_36352;
state_36352 = G__36441;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__ = function(state_36352){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____1.call(this,state_36352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__30019__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto__,jobs,results,process,async))
})();
var state__30076__auto__ = (function (){var statearr_36384 = f__30075__auto__.call(null);
(statearr_36384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto__);

return statearr_36384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto__,jobs,results,process,async))
);

return c__30074__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function() {
var cljs$core$async$pipeline_async = null;
var cljs$core$async$pipeline_async__4 = (function (n,to,af,from){
return cljs$core$async$pipeline_async.call(null,n,to,af,from,true);
});
var cljs$core$async$pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
cljs$core$async$pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline_async__4.call(this,n,to,af,from);
case 5:
return cljs$core$async$pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline_async__4;
cljs$core$async$pipeline_async.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline_async__5;
return cljs$core$async$pipeline_async;
})()
;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function() {
var cljs$core$async$pipeline = null;
var cljs$core$async$pipeline__4 = (function (n,to,xf,from){
return cljs$core$async$pipeline.call(null,n,to,xf,from,true);
});
var cljs$core$async$pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return cljs$core$async$pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var cljs$core$async$pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
cljs$core$async$pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return cljs$core$async$pipeline__4.call(this,n,to,xf,from);
case 5:
return cljs$core$async$pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return cljs$core$async$pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$pipeline__4;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$5 = cljs$core$async$pipeline__5;
cljs$core$async$pipeline.cljs$core$IFn$_invoke$arity$6 = cljs$core$async$pipeline__6;
return cljs$core$async$pipeline;
})()
;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function() {
var cljs$core$async$split = null;
var cljs$core$async$split__2 = (function (p,ch){
return cljs$core$async$split.call(null,p,ch,null,null);
});
var cljs$core$async$split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__30074__auto___36542 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto___36542,tc,fc){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto___36542,tc,fc){
return (function (state_36517){
var state_val_36518 = (state_36517[(1)]);
if((state_val_36518 === (7))){
var inst_36513 = (state_36517[(2)]);
var state_36517__$1 = state_36517;
var statearr_36519_36543 = state_36517__$1;
(statearr_36519_36543[(2)] = inst_36513);

(statearr_36519_36543[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36518 === (1))){
var state_36517__$1 = state_36517;
var statearr_36520_36544 = state_36517__$1;
(statearr_36520_36544[(2)] = null);

(statearr_36520_36544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36518 === (4))){
var inst_36494 = (state_36517[(7)]);
var inst_36494__$1 = (state_36517[(2)]);
var inst_36495 = (inst_36494__$1 == null);
var state_36517__$1 = (function (){var statearr_36521 = state_36517;
(statearr_36521[(7)] = inst_36494__$1);

return statearr_36521;
})();
if(cljs.core.truth_(inst_36495)){
var statearr_36522_36545 = state_36517__$1;
(statearr_36522_36545[(1)] = (5));

} else {
var statearr_36523_36546 = state_36517__$1;
(statearr_36523_36546[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36518 === (13))){
var state_36517__$1 = state_36517;
var statearr_36524_36547 = state_36517__$1;
(statearr_36524_36547[(2)] = null);

(statearr_36524_36547[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36518 === (6))){
var inst_36494 = (state_36517[(7)]);
var inst_36500 = p.call(null,inst_36494);
var state_36517__$1 = state_36517;
if(cljs.core.truth_(inst_36500)){
var statearr_36525_36548 = state_36517__$1;
(statearr_36525_36548[(1)] = (9));

} else {
var statearr_36526_36549 = state_36517__$1;
(statearr_36526_36549[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36518 === (3))){
var inst_36515 = (state_36517[(2)]);
var state_36517__$1 = state_36517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36517__$1,inst_36515);
} else {
if((state_val_36518 === (12))){
var state_36517__$1 = state_36517;
var statearr_36527_36550 = state_36517__$1;
(statearr_36527_36550[(2)] = null);

(statearr_36527_36550[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36518 === (2))){
var state_36517__$1 = state_36517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36517__$1,(4),ch);
} else {
if((state_val_36518 === (11))){
var inst_36494 = (state_36517[(7)]);
var inst_36504 = (state_36517[(2)]);
var state_36517__$1 = state_36517;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36517__$1,(8),inst_36504,inst_36494);
} else {
if((state_val_36518 === (9))){
var state_36517__$1 = state_36517;
var statearr_36528_36551 = state_36517__$1;
(statearr_36528_36551[(2)] = tc);

(statearr_36528_36551[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36518 === (5))){
var inst_36497 = cljs.core.async.close_BANG_.call(null,tc);
var inst_36498 = cljs.core.async.close_BANG_.call(null,fc);
var state_36517__$1 = (function (){var statearr_36529 = state_36517;
(statearr_36529[(8)] = inst_36497);

return statearr_36529;
})();
var statearr_36530_36552 = state_36517__$1;
(statearr_36530_36552[(2)] = inst_36498);

(statearr_36530_36552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36518 === (14))){
var inst_36511 = (state_36517[(2)]);
var state_36517__$1 = state_36517;
var statearr_36531_36553 = state_36517__$1;
(statearr_36531_36553[(2)] = inst_36511);

(statearr_36531_36553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36518 === (10))){
var state_36517__$1 = state_36517;
var statearr_36532_36554 = state_36517__$1;
(statearr_36532_36554[(2)] = fc);

(statearr_36532_36554[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36518 === (8))){
var inst_36506 = (state_36517[(2)]);
var state_36517__$1 = state_36517;
if(cljs.core.truth_(inst_36506)){
var statearr_36533_36555 = state_36517__$1;
(statearr_36533_36555[(1)] = (12));

} else {
var statearr_36534_36556 = state_36517__$1;
(statearr_36534_36556[(1)] = (13));

}

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
});})(c__30074__auto___36542,tc,fc))
;
return ((function (switch__30018__auto__,c__30074__auto___36542,tc,fc){
return (function() {
var cljs$core$async$split_$_state_machine__30019__auto__ = null;
var cljs$core$async$split_$_state_machine__30019__auto____0 = (function (){
var statearr_36538 = [null,null,null,null,null,null,null,null,null];
(statearr_36538[(0)] = cljs$core$async$split_$_state_machine__30019__auto__);

(statearr_36538[(1)] = (1));

return statearr_36538;
});
var cljs$core$async$split_$_state_machine__30019__auto____1 = (function (state_36517){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_36517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e36539){if((e36539 instanceof Object)){
var ex__30022__auto__ = e36539;
var statearr_36540_36557 = state_36517;
(statearr_36540_36557[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36539;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36558 = state_36517;
state_36517 = G__36558;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$split_$_state_machine__30019__auto__ = function(state_36517){
switch(arguments.length){
case 0:
return cljs$core$async$split_$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$split_$_state_machine__30019__auto____1.call(this,state_36517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$split_$_state_machine__30019__auto____0;
cljs$core$async$split_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$split_$_state_machine__30019__auto____1;
return cljs$core$async$split_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto___36542,tc,fc))
})();
var state__30076__auto__ = (function (){var statearr_36541 = f__30075__auto__.call(null);
(statearr_36541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto___36542);

return statearr_36541;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto___36542,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
cljs$core$async$split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$split__2.call(this,p,ch);
case 4:
return cljs$core$async$split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$split.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$split__2;
cljs$core$async$split.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$split__4;
return cljs$core$async$split;
})()
;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__30074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto__){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto__){
return (function (state_36605){
var state_val_36606 = (state_36605[(1)]);
if((state_val_36606 === (1))){
var inst_36591 = init;
var state_36605__$1 = (function (){var statearr_36607 = state_36605;
(statearr_36607[(7)] = inst_36591);

return statearr_36607;
})();
var statearr_36608_36623 = state_36605__$1;
(statearr_36608_36623[(2)] = null);

(statearr_36608_36623[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (2))){
var state_36605__$1 = state_36605;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36605__$1,(4),ch);
} else {
if((state_val_36606 === (3))){
var inst_36603 = (state_36605[(2)]);
var state_36605__$1 = state_36605;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36605__$1,inst_36603);
} else {
if((state_val_36606 === (4))){
var inst_36594 = (state_36605[(8)]);
var inst_36594__$1 = (state_36605[(2)]);
var inst_36595 = (inst_36594__$1 == null);
var state_36605__$1 = (function (){var statearr_36609 = state_36605;
(statearr_36609[(8)] = inst_36594__$1);

return statearr_36609;
})();
if(cljs.core.truth_(inst_36595)){
var statearr_36610_36624 = state_36605__$1;
(statearr_36610_36624[(1)] = (5));

} else {
var statearr_36611_36625 = state_36605__$1;
(statearr_36611_36625[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (5))){
var inst_36591 = (state_36605[(7)]);
var state_36605__$1 = state_36605;
var statearr_36612_36626 = state_36605__$1;
(statearr_36612_36626[(2)] = inst_36591);

(statearr_36612_36626[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (6))){
var inst_36591 = (state_36605[(7)]);
var inst_36594 = (state_36605[(8)]);
var inst_36598 = f.call(null,inst_36591,inst_36594);
var inst_36591__$1 = inst_36598;
var state_36605__$1 = (function (){var statearr_36613 = state_36605;
(statearr_36613[(7)] = inst_36591__$1);

return statearr_36613;
})();
var statearr_36614_36627 = state_36605__$1;
(statearr_36614_36627[(2)] = null);

(statearr_36614_36627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36606 === (7))){
var inst_36601 = (state_36605[(2)]);
var state_36605__$1 = state_36605;
var statearr_36615_36628 = state_36605__$1;
(statearr_36615_36628[(2)] = inst_36601);

(statearr_36615_36628[(1)] = (3));


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
});})(c__30074__auto__))
;
return ((function (switch__30018__auto__,c__30074__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__30019__auto__ = null;
var cljs$core$async$reduce_$_state_machine__30019__auto____0 = (function (){
var statearr_36619 = [null,null,null,null,null,null,null,null,null];
(statearr_36619[(0)] = cljs$core$async$reduce_$_state_machine__30019__auto__);

(statearr_36619[(1)] = (1));

return statearr_36619;
});
var cljs$core$async$reduce_$_state_machine__30019__auto____1 = (function (state_36605){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_36605);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e36620){if((e36620 instanceof Object)){
var ex__30022__auto__ = e36620;
var statearr_36621_36629 = state_36605;
(statearr_36621_36629[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36605);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36620;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36630 = state_36605;
state_36605 = G__36630;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__30019__auto__ = function(state_36605){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__30019__auto____1.call(this,state_36605);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__30019__auto____0;
cljs$core$async$reduce_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__30019__auto____1;
return cljs$core$async$reduce_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto__))
})();
var state__30076__auto__ = (function (){var statearr_36622 = f__30075__auto__.call(null);
(statearr_36622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto__);

return statearr_36622;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto__))
);

return c__30074__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function() {
var cljs$core$async$onto_chan = null;
var cljs$core$async$onto_chan__2 = (function (ch,coll){
return cljs$core$async$onto_chan.call(null,ch,coll,true);
});
var cljs$core$async$onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__30074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto__){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto__){
return (function (state_36704){
var state_val_36705 = (state_36704[(1)]);
if((state_val_36705 === (7))){
var inst_36686 = (state_36704[(2)]);
var state_36704__$1 = state_36704;
var statearr_36706_36729 = state_36704__$1;
(statearr_36706_36729[(2)] = inst_36686);

(statearr_36706_36729[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (1))){
var inst_36680 = cljs.core.seq.call(null,coll);
var inst_36681 = inst_36680;
var state_36704__$1 = (function (){var statearr_36707 = state_36704;
(statearr_36707[(7)] = inst_36681);

return statearr_36707;
})();
var statearr_36708_36730 = state_36704__$1;
(statearr_36708_36730[(2)] = null);

(statearr_36708_36730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (4))){
var inst_36681 = (state_36704[(7)]);
var inst_36684 = cljs.core.first.call(null,inst_36681);
var state_36704__$1 = state_36704;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36704__$1,(7),ch,inst_36684);
} else {
if((state_val_36705 === (13))){
var inst_36698 = (state_36704[(2)]);
var state_36704__$1 = state_36704;
var statearr_36709_36731 = state_36704__$1;
(statearr_36709_36731[(2)] = inst_36698);

(statearr_36709_36731[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (6))){
var inst_36689 = (state_36704[(2)]);
var state_36704__$1 = state_36704;
if(cljs.core.truth_(inst_36689)){
var statearr_36710_36732 = state_36704__$1;
(statearr_36710_36732[(1)] = (8));

} else {
var statearr_36711_36733 = state_36704__$1;
(statearr_36711_36733[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (3))){
var inst_36702 = (state_36704[(2)]);
var state_36704__$1 = state_36704;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36704__$1,inst_36702);
} else {
if((state_val_36705 === (12))){
var state_36704__$1 = state_36704;
var statearr_36712_36734 = state_36704__$1;
(statearr_36712_36734[(2)] = null);

(statearr_36712_36734[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (2))){
var inst_36681 = (state_36704[(7)]);
var state_36704__$1 = state_36704;
if(cljs.core.truth_(inst_36681)){
var statearr_36713_36735 = state_36704__$1;
(statearr_36713_36735[(1)] = (4));

} else {
var statearr_36714_36736 = state_36704__$1;
(statearr_36714_36736[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (11))){
var inst_36695 = cljs.core.async.close_BANG_.call(null,ch);
var state_36704__$1 = state_36704;
var statearr_36715_36737 = state_36704__$1;
(statearr_36715_36737[(2)] = inst_36695);

(statearr_36715_36737[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (9))){
var state_36704__$1 = state_36704;
if(cljs.core.truth_(close_QMARK_)){
var statearr_36716_36738 = state_36704__$1;
(statearr_36716_36738[(1)] = (11));

} else {
var statearr_36717_36739 = state_36704__$1;
(statearr_36717_36739[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (5))){
var inst_36681 = (state_36704[(7)]);
var state_36704__$1 = state_36704;
var statearr_36718_36740 = state_36704__$1;
(statearr_36718_36740[(2)] = inst_36681);

(statearr_36718_36740[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (10))){
var inst_36700 = (state_36704[(2)]);
var state_36704__$1 = state_36704;
var statearr_36719_36741 = state_36704__$1;
(statearr_36719_36741[(2)] = inst_36700);

(statearr_36719_36741[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36705 === (8))){
var inst_36681 = (state_36704[(7)]);
var inst_36691 = cljs.core.next.call(null,inst_36681);
var inst_36681__$1 = inst_36691;
var state_36704__$1 = (function (){var statearr_36720 = state_36704;
(statearr_36720[(7)] = inst_36681__$1);

return statearr_36720;
})();
var statearr_36721_36742 = state_36704__$1;
(statearr_36721_36742[(2)] = null);

(statearr_36721_36742[(1)] = (2));


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
});})(c__30074__auto__))
;
return ((function (switch__30018__auto__,c__30074__auto__){
return (function() {
var cljs$core$async$onto_chan_$_state_machine__30019__auto__ = null;
var cljs$core$async$onto_chan_$_state_machine__30019__auto____0 = (function (){
var statearr_36725 = [null,null,null,null,null,null,null,null];
(statearr_36725[(0)] = cljs$core$async$onto_chan_$_state_machine__30019__auto__);

(statearr_36725[(1)] = (1));

return statearr_36725;
});
var cljs$core$async$onto_chan_$_state_machine__30019__auto____1 = (function (state_36704){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_36704);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e36726){if((e36726 instanceof Object)){
var ex__30022__auto__ = e36726;
var statearr_36727_36743 = state_36704;
(statearr_36727_36743[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36704);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36726;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36744 = state_36704;
state_36704 = G__36744;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$onto_chan_$_state_machine__30019__auto__ = function(state_36704){
switch(arguments.length){
case 0:
return cljs$core$async$onto_chan_$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$onto_chan_$_state_machine__30019__auto____1.call(this,state_36704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$onto_chan_$_state_machine__30019__auto____0;
cljs$core$async$onto_chan_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$onto_chan_$_state_machine__30019__auto____1;
return cljs$core$async$onto_chan_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto__))
})();
var state__30076__auto__ = (function (){var statearr_36728 = f__30075__auto__.call(null);
(statearr_36728[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto__);

return statearr_36728;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto__))
);

return c__30074__auto__;
});
cljs$core$async$onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$onto_chan__2.call(this,ch,coll);
case 3:
return cljs$core$async$onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$onto_chan__2;
cljs$core$async$onto_chan.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$onto_chan__3;
return cljs$core$async$onto_chan;
})()
;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj36746 = {};
return obj36746;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__27651__auto__ = _;
if(and__27651__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__27651__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__28307__auto__ = (((_ == null))?null:_);
return (function (){var or__27663__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__28307__auto__)]);
if(or__27663__auto__){
return or__27663__auto__;
} else {
var or__27663__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__27663__auto____$1){
return or__27663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj36748 = {};
return obj36748;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__27651__auto__ = m;
if(and__27651__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__27651__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__28307__auto__ = (((m == null))?null:m);
return (function (){var or__27663__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__28307__auto__)]);
if(or__27663__auto__){
return or__27663__auto__;
} else {
var or__27663__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__27663__auto____$1){
return or__27663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__27651__auto__ = m;
if(and__27651__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__27651__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__28307__auto__ = (((m == null))?null:m);
return (function (){var or__27663__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__28307__auto__)]);
if(or__27663__auto__){
return or__27663__auto__;
} else {
var or__27663__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__27663__auto____$1){
return or__27663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__27651__auto__ = m;
if(and__27651__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__27651__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__28307__auto__ = (((m == null))?null:m);
return (function (){var or__27663__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__28307__auto__)]);
if(or__27663__auto__){
return or__27663__auto__;
} else {
var or__27663__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__27663__auto____$1){
return or__27663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t36970 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t36970 = (function (mult,ch,cs,meta36971){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta36971 = meta36971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t36970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_36972,meta36971__$1){
var self__ = this;
var _36972__$1 = this;
return (new cljs.core.async.t36970(self__.mult,self__.ch,self__.cs,meta36971__$1));
});})(cs))
;

cljs.core.async.t36970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_36972){
var self__ = this;
var _36972__$1 = this;
return self__.meta36971;
});})(cs))
;

cljs.core.async.t36970.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t36970.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t36970.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t36970.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t36970.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t36970.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t36970.cljs$lang$type = true;

cljs.core.async.t36970.cljs$lang$ctorStr = "cljs.core.async/t36970";

cljs.core.async.t36970.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__28250__auto__,writer__28251__auto__,opt__28252__auto__){
return cljs.core._write.call(null,writer__28251__auto__,"cljs.core.async/t36970");
});})(cs))
;

cljs.core.async.__GT_t36970 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t36970(mult__$1,ch__$1,cs__$1,meta36971){
return (new cljs.core.async.t36970(mult__$1,ch__$1,cs__$1,meta36971));
});})(cs))
;

}

return (new cljs.core.async.t36970(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__30074__auto___37191 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto___37191,cs,m,dchan,dctr,done){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto___37191,cs,m,dchan,dctr,done){
return (function (state_37103){
var state_val_37104 = (state_37103[(1)]);
if((state_val_37104 === (7))){
var inst_37099 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
var statearr_37105_37192 = state_37103__$1;
(statearr_37105_37192[(2)] = inst_37099);

(statearr_37105_37192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (20))){
var inst_37004 = (state_37103[(7)]);
var inst_37014 = cljs.core.first.call(null,inst_37004);
var inst_37015 = cljs.core.nth.call(null,inst_37014,(0),null);
var inst_37016 = cljs.core.nth.call(null,inst_37014,(1),null);
var state_37103__$1 = (function (){var statearr_37106 = state_37103;
(statearr_37106[(8)] = inst_37015);

return statearr_37106;
})();
if(cljs.core.truth_(inst_37016)){
var statearr_37107_37193 = state_37103__$1;
(statearr_37107_37193[(1)] = (22));

} else {
var statearr_37108_37194 = state_37103__$1;
(statearr_37108_37194[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (27))){
var inst_37044 = (state_37103[(9)]);
var inst_36975 = (state_37103[(10)]);
var inst_37046 = (state_37103[(11)]);
var inst_37051 = (state_37103[(12)]);
var inst_37051__$1 = cljs.core._nth.call(null,inst_37044,inst_37046);
var inst_37052 = cljs.core.async.put_BANG_.call(null,inst_37051__$1,inst_36975,done);
var state_37103__$1 = (function (){var statearr_37109 = state_37103;
(statearr_37109[(12)] = inst_37051__$1);

return statearr_37109;
})();
if(cljs.core.truth_(inst_37052)){
var statearr_37110_37195 = state_37103__$1;
(statearr_37110_37195[(1)] = (30));

} else {
var statearr_37111_37196 = state_37103__$1;
(statearr_37111_37196[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (1))){
var state_37103__$1 = state_37103;
var statearr_37112_37197 = state_37103__$1;
(statearr_37112_37197[(2)] = null);

(statearr_37112_37197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (24))){
var inst_37004 = (state_37103[(7)]);
var inst_37021 = (state_37103[(2)]);
var inst_37022 = cljs.core.next.call(null,inst_37004);
var inst_36984 = inst_37022;
var inst_36985 = null;
var inst_36986 = (0);
var inst_36987 = (0);
var state_37103__$1 = (function (){var statearr_37113 = state_37103;
(statearr_37113[(13)] = inst_36984);

(statearr_37113[(14)] = inst_36985);

(statearr_37113[(15)] = inst_37021);

(statearr_37113[(16)] = inst_36987);

(statearr_37113[(17)] = inst_36986);

return statearr_37113;
})();
var statearr_37114_37198 = state_37103__$1;
(statearr_37114_37198[(2)] = null);

(statearr_37114_37198[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (39))){
var state_37103__$1 = state_37103;
var statearr_37118_37199 = state_37103__$1;
(statearr_37118_37199[(2)] = null);

(statearr_37118_37199[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (4))){
var inst_36975 = (state_37103[(10)]);
var inst_36975__$1 = (state_37103[(2)]);
var inst_36976 = (inst_36975__$1 == null);
var state_37103__$1 = (function (){var statearr_37119 = state_37103;
(statearr_37119[(10)] = inst_36975__$1);

return statearr_37119;
})();
if(cljs.core.truth_(inst_36976)){
var statearr_37120_37200 = state_37103__$1;
(statearr_37120_37200[(1)] = (5));

} else {
var statearr_37121_37201 = state_37103__$1;
(statearr_37121_37201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (15))){
var inst_36984 = (state_37103[(13)]);
var inst_36985 = (state_37103[(14)]);
var inst_36987 = (state_37103[(16)]);
var inst_36986 = (state_37103[(17)]);
var inst_37000 = (state_37103[(2)]);
var inst_37001 = (inst_36987 + (1));
var tmp37115 = inst_36984;
var tmp37116 = inst_36985;
var tmp37117 = inst_36986;
var inst_36984__$1 = tmp37115;
var inst_36985__$1 = tmp37116;
var inst_36986__$1 = tmp37117;
var inst_36987__$1 = inst_37001;
var state_37103__$1 = (function (){var statearr_37122 = state_37103;
(statearr_37122[(13)] = inst_36984__$1);

(statearr_37122[(14)] = inst_36985__$1);

(statearr_37122[(18)] = inst_37000);

(statearr_37122[(16)] = inst_36987__$1);

(statearr_37122[(17)] = inst_36986__$1);

return statearr_37122;
})();
var statearr_37123_37202 = state_37103__$1;
(statearr_37123_37202[(2)] = null);

(statearr_37123_37202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (21))){
var inst_37025 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
var statearr_37127_37203 = state_37103__$1;
(statearr_37127_37203[(2)] = inst_37025);

(statearr_37127_37203[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (31))){
var inst_37051 = (state_37103[(12)]);
var inst_37055 = done.call(null,null);
var inst_37056 = cljs.core.async.untap_STAR_.call(null,m,inst_37051);
var state_37103__$1 = (function (){var statearr_37128 = state_37103;
(statearr_37128[(19)] = inst_37055);

return statearr_37128;
})();
var statearr_37129_37204 = state_37103__$1;
(statearr_37129_37204[(2)] = inst_37056);

(statearr_37129_37204[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (32))){
var inst_37044 = (state_37103[(9)]);
var inst_37046 = (state_37103[(11)]);
var inst_37043 = (state_37103[(20)]);
var inst_37045 = (state_37103[(21)]);
var inst_37058 = (state_37103[(2)]);
var inst_37059 = (inst_37046 + (1));
var tmp37124 = inst_37044;
var tmp37125 = inst_37043;
var tmp37126 = inst_37045;
var inst_37043__$1 = tmp37125;
var inst_37044__$1 = tmp37124;
var inst_37045__$1 = tmp37126;
var inst_37046__$1 = inst_37059;
var state_37103__$1 = (function (){var statearr_37130 = state_37103;
(statearr_37130[(9)] = inst_37044__$1);

(statearr_37130[(11)] = inst_37046__$1);

(statearr_37130[(20)] = inst_37043__$1);

(statearr_37130[(21)] = inst_37045__$1);

(statearr_37130[(22)] = inst_37058);

return statearr_37130;
})();
var statearr_37131_37205 = state_37103__$1;
(statearr_37131_37205[(2)] = null);

(statearr_37131_37205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (40))){
var inst_37071 = (state_37103[(23)]);
var inst_37075 = done.call(null,null);
var inst_37076 = cljs.core.async.untap_STAR_.call(null,m,inst_37071);
var state_37103__$1 = (function (){var statearr_37132 = state_37103;
(statearr_37132[(24)] = inst_37075);

return statearr_37132;
})();
var statearr_37133_37206 = state_37103__$1;
(statearr_37133_37206[(2)] = inst_37076);

(statearr_37133_37206[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (33))){
var inst_37062 = (state_37103[(25)]);
var inst_37064 = cljs.core.chunked_seq_QMARK_.call(null,inst_37062);
var state_37103__$1 = state_37103;
if(inst_37064){
var statearr_37134_37207 = state_37103__$1;
(statearr_37134_37207[(1)] = (36));

} else {
var statearr_37135_37208 = state_37103__$1;
(statearr_37135_37208[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (13))){
var inst_36994 = (state_37103[(26)]);
var inst_36997 = cljs.core.async.close_BANG_.call(null,inst_36994);
var state_37103__$1 = state_37103;
var statearr_37136_37209 = state_37103__$1;
(statearr_37136_37209[(2)] = inst_36997);

(statearr_37136_37209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (22))){
var inst_37015 = (state_37103[(8)]);
var inst_37018 = cljs.core.async.close_BANG_.call(null,inst_37015);
var state_37103__$1 = state_37103;
var statearr_37137_37210 = state_37103__$1;
(statearr_37137_37210[(2)] = inst_37018);

(statearr_37137_37210[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (36))){
var inst_37062 = (state_37103[(25)]);
var inst_37066 = cljs.core.chunk_first.call(null,inst_37062);
var inst_37067 = cljs.core.chunk_rest.call(null,inst_37062);
var inst_37068 = cljs.core.count.call(null,inst_37066);
var inst_37043 = inst_37067;
var inst_37044 = inst_37066;
var inst_37045 = inst_37068;
var inst_37046 = (0);
var state_37103__$1 = (function (){var statearr_37138 = state_37103;
(statearr_37138[(9)] = inst_37044);

(statearr_37138[(11)] = inst_37046);

(statearr_37138[(20)] = inst_37043);

(statearr_37138[(21)] = inst_37045);

return statearr_37138;
})();
var statearr_37139_37211 = state_37103__$1;
(statearr_37139_37211[(2)] = null);

(statearr_37139_37211[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (41))){
var inst_37062 = (state_37103[(25)]);
var inst_37078 = (state_37103[(2)]);
var inst_37079 = cljs.core.next.call(null,inst_37062);
var inst_37043 = inst_37079;
var inst_37044 = null;
var inst_37045 = (0);
var inst_37046 = (0);
var state_37103__$1 = (function (){var statearr_37140 = state_37103;
(statearr_37140[(27)] = inst_37078);

(statearr_37140[(9)] = inst_37044);

(statearr_37140[(11)] = inst_37046);

(statearr_37140[(20)] = inst_37043);

(statearr_37140[(21)] = inst_37045);

return statearr_37140;
})();
var statearr_37141_37212 = state_37103__$1;
(statearr_37141_37212[(2)] = null);

(statearr_37141_37212[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (43))){
var state_37103__$1 = state_37103;
var statearr_37142_37213 = state_37103__$1;
(statearr_37142_37213[(2)] = null);

(statearr_37142_37213[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (29))){
var inst_37087 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
var statearr_37143_37214 = state_37103__$1;
(statearr_37143_37214[(2)] = inst_37087);

(statearr_37143_37214[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (44))){
var inst_37096 = (state_37103[(2)]);
var state_37103__$1 = (function (){var statearr_37144 = state_37103;
(statearr_37144[(28)] = inst_37096);

return statearr_37144;
})();
var statearr_37145_37215 = state_37103__$1;
(statearr_37145_37215[(2)] = null);

(statearr_37145_37215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (6))){
var inst_37035 = (state_37103[(29)]);
var inst_37034 = cljs.core.deref.call(null,cs);
var inst_37035__$1 = cljs.core.keys.call(null,inst_37034);
var inst_37036 = cljs.core.count.call(null,inst_37035__$1);
var inst_37037 = cljs.core.reset_BANG_.call(null,dctr,inst_37036);
var inst_37042 = cljs.core.seq.call(null,inst_37035__$1);
var inst_37043 = inst_37042;
var inst_37044 = null;
var inst_37045 = (0);
var inst_37046 = (0);
var state_37103__$1 = (function (){var statearr_37146 = state_37103;
(statearr_37146[(9)] = inst_37044);

(statearr_37146[(11)] = inst_37046);

(statearr_37146[(20)] = inst_37043);

(statearr_37146[(30)] = inst_37037);

(statearr_37146[(21)] = inst_37045);

(statearr_37146[(29)] = inst_37035__$1);

return statearr_37146;
})();
var statearr_37147_37216 = state_37103__$1;
(statearr_37147_37216[(2)] = null);

(statearr_37147_37216[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (28))){
var inst_37062 = (state_37103[(25)]);
var inst_37043 = (state_37103[(20)]);
var inst_37062__$1 = cljs.core.seq.call(null,inst_37043);
var state_37103__$1 = (function (){var statearr_37148 = state_37103;
(statearr_37148[(25)] = inst_37062__$1);

return statearr_37148;
})();
if(inst_37062__$1){
var statearr_37149_37217 = state_37103__$1;
(statearr_37149_37217[(1)] = (33));

} else {
var statearr_37150_37218 = state_37103__$1;
(statearr_37150_37218[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (25))){
var inst_37046 = (state_37103[(11)]);
var inst_37045 = (state_37103[(21)]);
var inst_37048 = (inst_37046 < inst_37045);
var inst_37049 = inst_37048;
var state_37103__$1 = state_37103;
if(cljs.core.truth_(inst_37049)){
var statearr_37151_37219 = state_37103__$1;
(statearr_37151_37219[(1)] = (27));

} else {
var statearr_37152_37220 = state_37103__$1;
(statearr_37152_37220[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (34))){
var state_37103__$1 = state_37103;
var statearr_37153_37221 = state_37103__$1;
(statearr_37153_37221[(2)] = null);

(statearr_37153_37221[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (17))){
var state_37103__$1 = state_37103;
var statearr_37154_37222 = state_37103__$1;
(statearr_37154_37222[(2)] = null);

(statearr_37154_37222[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (3))){
var inst_37101 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37103__$1,inst_37101);
} else {
if((state_val_37104 === (12))){
var inst_37030 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
var statearr_37155_37223 = state_37103__$1;
(statearr_37155_37223[(2)] = inst_37030);

(statearr_37155_37223[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (2))){
var state_37103__$1 = state_37103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37103__$1,(4),ch);
} else {
if((state_val_37104 === (23))){
var state_37103__$1 = state_37103;
var statearr_37156_37224 = state_37103__$1;
(statearr_37156_37224[(2)] = null);

(statearr_37156_37224[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (35))){
var inst_37085 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
var statearr_37157_37225 = state_37103__$1;
(statearr_37157_37225[(2)] = inst_37085);

(statearr_37157_37225[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (19))){
var inst_37004 = (state_37103[(7)]);
var inst_37008 = cljs.core.chunk_first.call(null,inst_37004);
var inst_37009 = cljs.core.chunk_rest.call(null,inst_37004);
var inst_37010 = cljs.core.count.call(null,inst_37008);
var inst_36984 = inst_37009;
var inst_36985 = inst_37008;
var inst_36986 = inst_37010;
var inst_36987 = (0);
var state_37103__$1 = (function (){var statearr_37158 = state_37103;
(statearr_37158[(13)] = inst_36984);

(statearr_37158[(14)] = inst_36985);

(statearr_37158[(16)] = inst_36987);

(statearr_37158[(17)] = inst_36986);

return statearr_37158;
})();
var statearr_37159_37226 = state_37103__$1;
(statearr_37159_37226[(2)] = null);

(statearr_37159_37226[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (11))){
var inst_36984 = (state_37103[(13)]);
var inst_37004 = (state_37103[(7)]);
var inst_37004__$1 = cljs.core.seq.call(null,inst_36984);
var state_37103__$1 = (function (){var statearr_37160 = state_37103;
(statearr_37160[(7)] = inst_37004__$1);

return statearr_37160;
})();
if(inst_37004__$1){
var statearr_37161_37227 = state_37103__$1;
(statearr_37161_37227[(1)] = (16));

} else {
var statearr_37162_37228 = state_37103__$1;
(statearr_37162_37228[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (9))){
var inst_37032 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
var statearr_37163_37229 = state_37103__$1;
(statearr_37163_37229[(2)] = inst_37032);

(statearr_37163_37229[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (5))){
var inst_36982 = cljs.core.deref.call(null,cs);
var inst_36983 = cljs.core.seq.call(null,inst_36982);
var inst_36984 = inst_36983;
var inst_36985 = null;
var inst_36986 = (0);
var inst_36987 = (0);
var state_37103__$1 = (function (){var statearr_37164 = state_37103;
(statearr_37164[(13)] = inst_36984);

(statearr_37164[(14)] = inst_36985);

(statearr_37164[(16)] = inst_36987);

(statearr_37164[(17)] = inst_36986);

return statearr_37164;
})();
var statearr_37165_37230 = state_37103__$1;
(statearr_37165_37230[(2)] = null);

(statearr_37165_37230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (14))){
var state_37103__$1 = state_37103;
var statearr_37166_37231 = state_37103__$1;
(statearr_37166_37231[(2)] = null);

(statearr_37166_37231[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (45))){
var inst_37093 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
var statearr_37167_37232 = state_37103__$1;
(statearr_37167_37232[(2)] = inst_37093);

(statearr_37167_37232[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (26))){
var inst_37035 = (state_37103[(29)]);
var inst_37089 = (state_37103[(2)]);
var inst_37090 = cljs.core.seq.call(null,inst_37035);
var state_37103__$1 = (function (){var statearr_37168 = state_37103;
(statearr_37168[(31)] = inst_37089);

return statearr_37168;
})();
if(inst_37090){
var statearr_37169_37233 = state_37103__$1;
(statearr_37169_37233[(1)] = (42));

} else {
var statearr_37170_37234 = state_37103__$1;
(statearr_37170_37234[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (16))){
var inst_37004 = (state_37103[(7)]);
var inst_37006 = cljs.core.chunked_seq_QMARK_.call(null,inst_37004);
var state_37103__$1 = state_37103;
if(inst_37006){
var statearr_37171_37235 = state_37103__$1;
(statearr_37171_37235[(1)] = (19));

} else {
var statearr_37172_37236 = state_37103__$1;
(statearr_37172_37236[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (38))){
var inst_37082 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
var statearr_37173_37237 = state_37103__$1;
(statearr_37173_37237[(2)] = inst_37082);

(statearr_37173_37237[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (30))){
var state_37103__$1 = state_37103;
var statearr_37174_37238 = state_37103__$1;
(statearr_37174_37238[(2)] = null);

(statearr_37174_37238[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (10))){
var inst_36985 = (state_37103[(14)]);
var inst_36987 = (state_37103[(16)]);
var inst_36993 = cljs.core._nth.call(null,inst_36985,inst_36987);
var inst_36994 = cljs.core.nth.call(null,inst_36993,(0),null);
var inst_36995 = cljs.core.nth.call(null,inst_36993,(1),null);
var state_37103__$1 = (function (){var statearr_37175 = state_37103;
(statearr_37175[(26)] = inst_36994);

return statearr_37175;
})();
if(cljs.core.truth_(inst_36995)){
var statearr_37176_37239 = state_37103__$1;
(statearr_37176_37239[(1)] = (13));

} else {
var statearr_37177_37240 = state_37103__$1;
(statearr_37177_37240[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (18))){
var inst_37028 = (state_37103[(2)]);
var state_37103__$1 = state_37103;
var statearr_37178_37241 = state_37103__$1;
(statearr_37178_37241[(2)] = inst_37028);

(statearr_37178_37241[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (42))){
var state_37103__$1 = state_37103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37103__$1,(45),dchan);
} else {
if((state_val_37104 === (37))){
var inst_37062 = (state_37103[(25)]);
var inst_36975 = (state_37103[(10)]);
var inst_37071 = (state_37103[(23)]);
var inst_37071__$1 = cljs.core.first.call(null,inst_37062);
var inst_37072 = cljs.core.async.put_BANG_.call(null,inst_37071__$1,inst_36975,done);
var state_37103__$1 = (function (){var statearr_37179 = state_37103;
(statearr_37179[(23)] = inst_37071__$1);

return statearr_37179;
})();
if(cljs.core.truth_(inst_37072)){
var statearr_37180_37242 = state_37103__$1;
(statearr_37180_37242[(1)] = (39));

} else {
var statearr_37181_37243 = state_37103__$1;
(statearr_37181_37243[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37104 === (8))){
var inst_36987 = (state_37103[(16)]);
var inst_36986 = (state_37103[(17)]);
var inst_36989 = (inst_36987 < inst_36986);
var inst_36990 = inst_36989;
var state_37103__$1 = state_37103;
if(cljs.core.truth_(inst_36990)){
var statearr_37182_37244 = state_37103__$1;
(statearr_37182_37244[(1)] = (10));

} else {
var statearr_37183_37245 = state_37103__$1;
(statearr_37183_37245[(1)] = (11));

}

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
});})(c__30074__auto___37191,cs,m,dchan,dctr,done))
;
return ((function (switch__30018__auto__,c__30074__auto___37191,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__30019__auto__ = null;
var cljs$core$async$mult_$_state_machine__30019__auto____0 = (function (){
var statearr_37187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37187[(0)] = cljs$core$async$mult_$_state_machine__30019__auto__);

(statearr_37187[(1)] = (1));

return statearr_37187;
});
var cljs$core$async$mult_$_state_machine__30019__auto____1 = (function (state_37103){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_37103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e37188){if((e37188 instanceof Object)){
var ex__30022__auto__ = e37188;
var statearr_37189_37246 = state_37103;
(statearr_37189_37246[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37247 = state_37103;
state_37103 = G__37247;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__30019__auto__ = function(state_37103){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__30019__auto____1.call(this,state_37103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__30019__auto____0;
cljs$core$async$mult_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__30019__auto____1;
return cljs$core$async$mult_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto___37191,cs,m,dchan,dctr,done))
})();
var state__30076__auto__ = (function (){var statearr_37190 = f__30075__auto__.call(null);
(statearr_37190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto___37191);

return statearr_37190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto___37191,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function() {
var cljs$core$async$tap = null;
var cljs$core$async$tap__2 = (function (mult,ch){
return cljs$core$async$tap.call(null,mult,ch,true);
});
var cljs$core$async$tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
cljs$core$async$tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return cljs$core$async$tap__2.call(this,mult,ch);
case 3:
return cljs$core$async$tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$tap__2;
cljs$core$async$tap.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$tap__3;
return cljs$core$async$tap;
})()
;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj37249 = {};
return obj37249;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__27651__auto__ = m;
if(and__27651__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__27651__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__28307__auto__ = (((m == null))?null:m);
return (function (){var or__27663__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__28307__auto__)]);
if(or__27663__auto__){
return or__27663__auto__;
} else {
var or__27663__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__27663__auto____$1){
return or__27663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__27651__auto__ = m;
if(and__27651__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__27651__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__28307__auto__ = (((m == null))?null:m);
return (function (){var or__27663__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__28307__auto__)]);
if(or__27663__auto__){
return or__27663__auto__;
} else {
var or__27663__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__27663__auto____$1){
return or__27663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__27651__auto__ = m;
if(and__27651__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__27651__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__28307__auto__ = (((m == null))?null:m);
return (function (){var or__27663__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__28307__auto__)]);
if(or__27663__auto__){
return or__27663__auto__;
} else {
var or__27663__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__27663__auto____$1){
return or__27663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__27651__auto__ = m;
if(and__27651__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__27651__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__28307__auto__ = (((m == null))?null:m);
return (function (){var or__27663__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__28307__auto__)]);
if(or__27663__auto__){
return or__27663__auto__;
} else {
var or__27663__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__27663__auto____$1){
return or__27663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__27651__auto__ = m;
if(and__27651__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__27651__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__28307__auto__ = (((m == null))?null:m);
return (function (){var or__27663__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__28307__auto__)]);
if(or__27663__auto__){
return or__27663__auto__;
} else {
var or__27663__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__27663__auto____$1){
return or__27663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
 * @param {...*} var_args
 */
cljs.core.async.ioc_alts_BANG_ = (function() { 
var cljs$core$async$ioc_alts_BANG___delegate = function (state,cont_block,ports,p__37250){
var map__37255 = p__37250;
var map__37255__$1 = ((cljs.core.seq_QMARK_.call(null,map__37255))?cljs.core.apply.call(null,cljs.core.hash_map,map__37255):map__37255);
var opts = map__37255__$1;
var statearr_37256_37259 = state;
(statearr_37256_37259[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__37255,map__37255__$1,opts){
return (function (val){
var statearr_37257_37260 = state;
(statearr_37257_37260[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__37255,map__37255__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_37258_37261 = state;
(statearr_37258_37261[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var cljs$core$async$ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__37250 = null;
if (arguments.length > 3) {
var G__37262__i = 0, G__37262__a = new Array(arguments.length -  3);
while (G__37262__i < G__37262__a.length) {G__37262__a[G__37262__i] = arguments[G__37262__i + 3]; ++G__37262__i;}
  p__37250 = new cljs.core.IndexedSeq(G__37262__a,0);
} 
return cljs$core$async$ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__37250);};
cljs$core$async$ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
cljs$core$async$ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__37263){
var state = cljs.core.first(arglist__37263);
arglist__37263 = cljs.core.next(arglist__37263);
var cont_block = cljs.core.first(arglist__37263);
arglist__37263 = cljs.core.next(arglist__37263);
var ports = cljs.core.first(arglist__37263);
var p__37250 = cljs.core.rest(arglist__37263);
return cljs$core$async$ioc_alts_BANG___delegate(state,cont_block,ports,p__37250);
});
cljs$core$async$ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = cljs$core$async$ioc_alts_BANG___delegate;
return cljs$core$async$ioc_alts_BANG_;
})()
;
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t37383 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37383 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta37384){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta37384 = meta37384;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37383.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37385,meta37384__$1){
var self__ = this;
var _37385__$1 = this;
return (new cljs.core.async.t37383(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta37384__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37383.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_37385){
var self__ = this;
var _37385__$1 = this;
return self__.meta37384;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37383.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37383.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37383.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t37383.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37383.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37383.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37383.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37383.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t37383.cljs$lang$type = true;

cljs.core.async.t37383.cljs$lang$ctorStr = "cljs.core.async/t37383";

cljs.core.async.t37383.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__28250__auto__,writer__28251__auto__,opt__28252__auto__){
return cljs.core._write.call(null,writer__28251__auto__,"cljs.core.async/t37383");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t37383 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t37383(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37384){
return (new cljs.core.async.t37383(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta37384));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t37383(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30074__auto___37502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto___37502,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto___37502,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_37455){
var state_val_37456 = (state_37455[(1)]);
if((state_val_37456 === (7))){
var inst_37399 = (state_37455[(7)]);
var inst_37404 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37399);
var state_37455__$1 = state_37455;
var statearr_37457_37503 = state_37455__$1;
(statearr_37457_37503[(2)] = inst_37404);

(statearr_37457_37503[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (20))){
var inst_37414 = (state_37455[(8)]);
var state_37455__$1 = state_37455;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37455__$1,(23),out,inst_37414);
} else {
if((state_val_37456 === (1))){
var inst_37389 = (state_37455[(9)]);
var inst_37389__$1 = calc_state.call(null);
var inst_37390 = cljs.core.seq_QMARK_.call(null,inst_37389__$1);
var state_37455__$1 = (function (){var statearr_37458 = state_37455;
(statearr_37458[(9)] = inst_37389__$1);

return statearr_37458;
})();
if(inst_37390){
var statearr_37459_37504 = state_37455__$1;
(statearr_37459_37504[(1)] = (2));

} else {
var statearr_37460_37505 = state_37455__$1;
(statearr_37460_37505[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (24))){
var inst_37407 = (state_37455[(10)]);
var inst_37399 = inst_37407;
var state_37455__$1 = (function (){var statearr_37461 = state_37455;
(statearr_37461[(7)] = inst_37399);

return statearr_37461;
})();
var statearr_37462_37506 = state_37455__$1;
(statearr_37462_37506[(2)] = null);

(statearr_37462_37506[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (4))){
var inst_37389 = (state_37455[(9)]);
var inst_37395 = (state_37455[(2)]);
var inst_37396 = cljs.core.get.call(null,inst_37395,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37397 = cljs.core.get.call(null,inst_37395,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37398 = cljs.core.get.call(null,inst_37395,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_37399 = inst_37389;
var state_37455__$1 = (function (){var statearr_37463 = state_37455;
(statearr_37463[(7)] = inst_37399);

(statearr_37463[(11)] = inst_37397);

(statearr_37463[(12)] = inst_37398);

(statearr_37463[(13)] = inst_37396);

return statearr_37463;
})();
var statearr_37464_37507 = state_37455__$1;
(statearr_37464_37507[(2)] = null);

(statearr_37464_37507[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (15))){
var state_37455__$1 = state_37455;
var statearr_37465_37508 = state_37455__$1;
(statearr_37465_37508[(2)] = null);

(statearr_37465_37508[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (21))){
var inst_37407 = (state_37455[(10)]);
var inst_37399 = inst_37407;
var state_37455__$1 = (function (){var statearr_37466 = state_37455;
(statearr_37466[(7)] = inst_37399);

return statearr_37466;
})();
var statearr_37467_37509 = state_37455__$1;
(statearr_37467_37509[(2)] = null);

(statearr_37467_37509[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (13))){
var inst_37451 = (state_37455[(2)]);
var state_37455__$1 = state_37455;
var statearr_37468_37510 = state_37455__$1;
(statearr_37468_37510[(2)] = inst_37451);

(statearr_37468_37510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (22))){
var inst_37449 = (state_37455[(2)]);
var state_37455__$1 = state_37455;
var statearr_37469_37511 = state_37455__$1;
(statearr_37469_37511[(2)] = inst_37449);

(statearr_37469_37511[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (6))){
var inst_37453 = (state_37455[(2)]);
var state_37455__$1 = state_37455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37455__$1,inst_37453);
} else {
if((state_val_37456 === (25))){
var state_37455__$1 = state_37455;
var statearr_37470_37512 = state_37455__$1;
(statearr_37470_37512[(2)] = null);

(statearr_37470_37512[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (17))){
var inst_37429 = (state_37455[(14)]);
var state_37455__$1 = state_37455;
var statearr_37471_37513 = state_37455__$1;
(statearr_37471_37513[(2)] = inst_37429);

(statearr_37471_37513[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (3))){
var inst_37389 = (state_37455[(9)]);
var state_37455__$1 = state_37455;
var statearr_37472_37514 = state_37455__$1;
(statearr_37472_37514[(2)] = inst_37389);

(statearr_37472_37514[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (12))){
var inst_37408 = (state_37455[(15)]);
var inst_37415 = (state_37455[(16)]);
var inst_37429 = (state_37455[(14)]);
var inst_37429__$1 = inst_37408.call(null,inst_37415);
var state_37455__$1 = (function (){var statearr_37473 = state_37455;
(statearr_37473[(14)] = inst_37429__$1);

return statearr_37473;
})();
if(cljs.core.truth_(inst_37429__$1)){
var statearr_37474_37515 = state_37455__$1;
(statearr_37474_37515[(1)] = (17));

} else {
var statearr_37475_37516 = state_37455__$1;
(statearr_37475_37516[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (2))){
var inst_37389 = (state_37455[(9)]);
var inst_37392 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37389);
var state_37455__$1 = state_37455;
var statearr_37476_37517 = state_37455__$1;
(statearr_37476_37517[(2)] = inst_37392);

(statearr_37476_37517[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (23))){
var inst_37440 = (state_37455[(2)]);
var state_37455__$1 = state_37455;
if(cljs.core.truth_(inst_37440)){
var statearr_37477_37518 = state_37455__$1;
(statearr_37477_37518[(1)] = (24));

} else {
var statearr_37478_37519 = state_37455__$1;
(statearr_37478_37519[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (19))){
var inst_37437 = (state_37455[(2)]);
var state_37455__$1 = state_37455;
if(cljs.core.truth_(inst_37437)){
var statearr_37479_37520 = state_37455__$1;
(statearr_37479_37520[(1)] = (20));

} else {
var statearr_37480_37521 = state_37455__$1;
(statearr_37480_37521[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (11))){
var inst_37414 = (state_37455[(8)]);
var inst_37420 = (inst_37414 == null);
var state_37455__$1 = state_37455;
if(cljs.core.truth_(inst_37420)){
var statearr_37481_37522 = state_37455__$1;
(statearr_37481_37522[(1)] = (14));

} else {
var statearr_37482_37523 = state_37455__$1;
(statearr_37482_37523[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (9))){
var inst_37407 = (state_37455[(10)]);
var inst_37407__$1 = (state_37455[(2)]);
var inst_37408 = cljs.core.get.call(null,inst_37407__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_37409 = cljs.core.get.call(null,inst_37407__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_37410 = cljs.core.get.call(null,inst_37407__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_37455__$1 = (function (){var statearr_37483 = state_37455;
(statearr_37483[(15)] = inst_37408);

(statearr_37483[(10)] = inst_37407__$1);

(statearr_37483[(17)] = inst_37409);

return statearr_37483;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_37455__$1,(10),inst_37410);
} else {
if((state_val_37456 === (5))){
var inst_37399 = (state_37455[(7)]);
var inst_37402 = cljs.core.seq_QMARK_.call(null,inst_37399);
var state_37455__$1 = state_37455;
if(inst_37402){
var statearr_37484_37524 = state_37455__$1;
(statearr_37484_37524[(1)] = (7));

} else {
var statearr_37485_37525 = state_37455__$1;
(statearr_37485_37525[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (14))){
var inst_37415 = (state_37455[(16)]);
var inst_37422 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_37415);
var state_37455__$1 = state_37455;
var statearr_37486_37526 = state_37455__$1;
(statearr_37486_37526[(2)] = inst_37422);

(statearr_37486_37526[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (26))){
var inst_37445 = (state_37455[(2)]);
var state_37455__$1 = state_37455;
var statearr_37487_37527 = state_37455__$1;
(statearr_37487_37527[(2)] = inst_37445);

(statearr_37487_37527[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (16))){
var inst_37425 = (state_37455[(2)]);
var inst_37426 = calc_state.call(null);
var inst_37399 = inst_37426;
var state_37455__$1 = (function (){var statearr_37488 = state_37455;
(statearr_37488[(7)] = inst_37399);

(statearr_37488[(18)] = inst_37425);

return statearr_37488;
})();
var statearr_37489_37528 = state_37455__$1;
(statearr_37489_37528[(2)] = null);

(statearr_37489_37528[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (10))){
var inst_37414 = (state_37455[(8)]);
var inst_37415 = (state_37455[(16)]);
var inst_37413 = (state_37455[(2)]);
var inst_37414__$1 = cljs.core.nth.call(null,inst_37413,(0),null);
var inst_37415__$1 = cljs.core.nth.call(null,inst_37413,(1),null);
var inst_37416 = (inst_37414__$1 == null);
var inst_37417 = cljs.core._EQ_.call(null,inst_37415__$1,change);
var inst_37418 = (inst_37416) || (inst_37417);
var state_37455__$1 = (function (){var statearr_37490 = state_37455;
(statearr_37490[(8)] = inst_37414__$1);

(statearr_37490[(16)] = inst_37415__$1);

return statearr_37490;
})();
if(cljs.core.truth_(inst_37418)){
var statearr_37491_37529 = state_37455__$1;
(statearr_37491_37529[(1)] = (11));

} else {
var statearr_37492_37530 = state_37455__$1;
(statearr_37492_37530[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (18))){
var inst_37408 = (state_37455[(15)]);
var inst_37415 = (state_37455[(16)]);
var inst_37409 = (state_37455[(17)]);
var inst_37432 = cljs.core.empty_QMARK_.call(null,inst_37408);
var inst_37433 = inst_37409.call(null,inst_37415);
var inst_37434 = cljs.core.not.call(null,inst_37433);
var inst_37435 = (inst_37432) && (inst_37434);
var state_37455__$1 = state_37455;
var statearr_37493_37531 = state_37455__$1;
(statearr_37493_37531[(2)] = inst_37435);

(statearr_37493_37531[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37456 === (8))){
var inst_37399 = (state_37455[(7)]);
var state_37455__$1 = state_37455;
var statearr_37494_37532 = state_37455__$1;
(statearr_37494_37532[(2)] = inst_37399);

(statearr_37494_37532[(1)] = (9));


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
});})(c__30074__auto___37502,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__30018__auto__,c__30074__auto___37502,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__30019__auto__ = null;
var cljs$core$async$mix_$_state_machine__30019__auto____0 = (function (){
var statearr_37498 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37498[(0)] = cljs$core$async$mix_$_state_machine__30019__auto__);

(statearr_37498[(1)] = (1));

return statearr_37498;
});
var cljs$core$async$mix_$_state_machine__30019__auto____1 = (function (state_37455){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_37455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e37499){if((e37499 instanceof Object)){
var ex__30022__auto__ = e37499;
var statearr_37500_37533 = state_37455;
(statearr_37500_37533[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37534 = state_37455;
state_37455 = G__37534;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__30019__auto__ = function(state_37455){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__30019__auto____1.call(this,state_37455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__30019__auto____0;
cljs$core$async$mix_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__30019__auto____1;
return cljs$core$async$mix_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto___37502,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__30076__auto__ = (function (){var statearr_37501 = f__30075__auto__.call(null);
(statearr_37501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto___37502);

return statearr_37501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto___37502,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj37536 = {};
return obj37536;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__27651__auto__ = p;
if(and__27651__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__27651__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__28307__auto__ = (((p == null))?null:p);
return (function (){var or__27663__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__28307__auto__)]);
if(or__27663__auto__){
return or__27663__auto__;
} else {
var or__27663__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__27663__auto____$1){
return or__27663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__27651__auto__ = p;
if(and__27651__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__27651__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__28307__auto__ = (((p == null))?null:p);
return (function (){var or__27663__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__28307__auto__)]);
if(or__27663__auto__){
return or__27663__auto__;
} else {
var or__27663__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__27663__auto____$1){
return or__27663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var cljs$core$async$unsub_all_STAR_ = null;
var cljs$core$async$unsub_all_STAR___1 = (function (p){
if((function (){var and__27651__auto__ = p;
if(and__27651__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__27651__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__28307__auto__ = (((p == null))?null:p);
return (function (){var or__27663__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28307__auto__)]);
if(or__27663__auto__){
return or__27663__auto__;
} else {
var or__27663__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__27663__auto____$1){
return or__27663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var cljs$core$async$unsub_all_STAR___2 = (function (p,v){
if((function (){var and__27651__auto__ = p;
if(and__27651__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__27651__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__28307__auto__ = (((p == null))?null:p);
return (function (){var or__27663__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__28307__auto__)]);
if(or__27663__auto__){
return or__27663__auto__;
} else {
var or__27663__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__27663__auto____$1){
return or__27663__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
cljs$core$async$unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all_STAR___1.call(this,p);
case 2:
return cljs$core$async$unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all_STAR___1;
cljs$core$async$unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all_STAR___2;
return cljs$core$async$unsub_all_STAR_;
})()
;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function() {
var cljs$core$async$pub = null;
var cljs$core$async$pub__2 = (function (ch,topic_fn){
return cljs$core$async$pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var cljs$core$async$pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__27663__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__27663__auto__)){
return or__27663__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__27663__auto__,mults){
return (function (p1__37537_SHARP_){
if(cljs.core.truth_(p1__37537_SHARP_.call(null,topic))){
return p1__37537_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__37537_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__27663__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t37660 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t37660 = (function (pub,ch,topic_fn,buf_fn,mults,ensure_mult,meta37661){
this.pub = pub;
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta37661 = meta37661;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t37660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_37662,meta37661__$1){
var self__ = this;
var _37662__$1 = this;
return (new cljs.core.async.t37660(self__.pub,self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta37661__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t37660.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_37662){
var self__ = this;
var _37662__$1 = this;
return self__.meta37661;
});})(mults,ensure_mult))
;

cljs.core.async.t37660.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t37660.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t37660.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t37660.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t37660.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t37660.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t37660.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t37660.cljs$lang$type = true;

cljs.core.async.t37660.cljs$lang$ctorStr = "cljs.core.async/t37660";

cljs.core.async.t37660.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__28250__auto__,writer__28251__auto__,opt__28252__auto__){
return cljs.core._write.call(null,writer__28251__auto__,"cljs.core.async/t37660");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t37660 = ((function (mults,ensure_mult){
return (function cljs$core$async$pub_$___GT_t37660(pub__$1,ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37661){
return (new cljs.core.async.t37660(pub__$1,ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta37661));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t37660(cljs$core$async$pub,ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__30074__auto___37782 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto___37782,mults,ensure_mult,p){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto___37782,mults,ensure_mult,p){
return (function (state_37734){
var state_val_37735 = (state_37734[(1)]);
if((state_val_37735 === (7))){
var inst_37730 = (state_37734[(2)]);
var state_37734__$1 = state_37734;
var statearr_37736_37783 = state_37734__$1;
(statearr_37736_37783[(2)] = inst_37730);

(statearr_37736_37783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (20))){
var state_37734__$1 = state_37734;
var statearr_37737_37784 = state_37734__$1;
(statearr_37737_37784[(2)] = null);

(statearr_37737_37784[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (1))){
var state_37734__$1 = state_37734;
var statearr_37738_37785 = state_37734__$1;
(statearr_37738_37785[(2)] = null);

(statearr_37738_37785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (24))){
var inst_37713 = (state_37734[(7)]);
var inst_37722 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_37713);
var state_37734__$1 = state_37734;
var statearr_37739_37786 = state_37734__$1;
(statearr_37739_37786[(2)] = inst_37722);

(statearr_37739_37786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (4))){
var inst_37665 = (state_37734[(8)]);
var inst_37665__$1 = (state_37734[(2)]);
var inst_37666 = (inst_37665__$1 == null);
var state_37734__$1 = (function (){var statearr_37740 = state_37734;
(statearr_37740[(8)] = inst_37665__$1);

return statearr_37740;
})();
if(cljs.core.truth_(inst_37666)){
var statearr_37741_37787 = state_37734__$1;
(statearr_37741_37787[(1)] = (5));

} else {
var statearr_37742_37788 = state_37734__$1;
(statearr_37742_37788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (15))){
var inst_37707 = (state_37734[(2)]);
var state_37734__$1 = state_37734;
var statearr_37743_37789 = state_37734__$1;
(statearr_37743_37789[(2)] = inst_37707);

(statearr_37743_37789[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (21))){
var inst_37727 = (state_37734[(2)]);
var state_37734__$1 = (function (){var statearr_37744 = state_37734;
(statearr_37744[(9)] = inst_37727);

return statearr_37744;
})();
var statearr_37745_37790 = state_37734__$1;
(statearr_37745_37790[(2)] = null);

(statearr_37745_37790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (13))){
var inst_37689 = (state_37734[(10)]);
var inst_37691 = cljs.core.chunked_seq_QMARK_.call(null,inst_37689);
var state_37734__$1 = state_37734;
if(inst_37691){
var statearr_37746_37791 = state_37734__$1;
(statearr_37746_37791[(1)] = (16));

} else {
var statearr_37747_37792 = state_37734__$1;
(statearr_37747_37792[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (22))){
var inst_37719 = (state_37734[(2)]);
var state_37734__$1 = state_37734;
if(cljs.core.truth_(inst_37719)){
var statearr_37748_37793 = state_37734__$1;
(statearr_37748_37793[(1)] = (23));

} else {
var statearr_37749_37794 = state_37734__$1;
(statearr_37749_37794[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (6))){
var inst_37713 = (state_37734[(7)]);
var inst_37715 = (state_37734[(11)]);
var inst_37665 = (state_37734[(8)]);
var inst_37713__$1 = topic_fn.call(null,inst_37665);
var inst_37714 = cljs.core.deref.call(null,mults);
var inst_37715__$1 = cljs.core.get.call(null,inst_37714,inst_37713__$1);
var state_37734__$1 = (function (){var statearr_37750 = state_37734;
(statearr_37750[(7)] = inst_37713__$1);

(statearr_37750[(11)] = inst_37715__$1);

return statearr_37750;
})();
if(cljs.core.truth_(inst_37715__$1)){
var statearr_37751_37795 = state_37734__$1;
(statearr_37751_37795[(1)] = (19));

} else {
var statearr_37752_37796 = state_37734__$1;
(statearr_37752_37796[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (25))){
var inst_37724 = (state_37734[(2)]);
var state_37734__$1 = state_37734;
var statearr_37753_37797 = state_37734__$1;
(statearr_37753_37797[(2)] = inst_37724);

(statearr_37753_37797[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (17))){
var inst_37689 = (state_37734[(10)]);
var inst_37698 = cljs.core.first.call(null,inst_37689);
var inst_37699 = cljs.core.async.muxch_STAR_.call(null,inst_37698);
var inst_37700 = cljs.core.async.close_BANG_.call(null,inst_37699);
var inst_37701 = cljs.core.next.call(null,inst_37689);
var inst_37675 = inst_37701;
var inst_37676 = null;
var inst_37677 = (0);
var inst_37678 = (0);
var state_37734__$1 = (function (){var statearr_37754 = state_37734;
(statearr_37754[(12)] = inst_37675);

(statearr_37754[(13)] = inst_37678);

(statearr_37754[(14)] = inst_37676);

(statearr_37754[(15)] = inst_37700);

(statearr_37754[(16)] = inst_37677);

return statearr_37754;
})();
var statearr_37755_37798 = state_37734__$1;
(statearr_37755_37798[(2)] = null);

(statearr_37755_37798[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (3))){
var inst_37732 = (state_37734[(2)]);
var state_37734__$1 = state_37734;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37734__$1,inst_37732);
} else {
if((state_val_37735 === (12))){
var inst_37709 = (state_37734[(2)]);
var state_37734__$1 = state_37734;
var statearr_37756_37799 = state_37734__$1;
(statearr_37756_37799[(2)] = inst_37709);

(statearr_37756_37799[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (2))){
var state_37734__$1 = state_37734;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37734__$1,(4),ch);
} else {
if((state_val_37735 === (23))){
var state_37734__$1 = state_37734;
var statearr_37757_37800 = state_37734__$1;
(statearr_37757_37800[(2)] = null);

(statearr_37757_37800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (19))){
var inst_37715 = (state_37734[(11)]);
var inst_37665 = (state_37734[(8)]);
var inst_37717 = cljs.core.async.muxch_STAR_.call(null,inst_37715);
var state_37734__$1 = state_37734;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37734__$1,(22),inst_37717,inst_37665);
} else {
if((state_val_37735 === (11))){
var inst_37675 = (state_37734[(12)]);
var inst_37689 = (state_37734[(10)]);
var inst_37689__$1 = cljs.core.seq.call(null,inst_37675);
var state_37734__$1 = (function (){var statearr_37758 = state_37734;
(statearr_37758[(10)] = inst_37689__$1);

return statearr_37758;
})();
if(inst_37689__$1){
var statearr_37759_37801 = state_37734__$1;
(statearr_37759_37801[(1)] = (13));

} else {
var statearr_37760_37802 = state_37734__$1;
(statearr_37760_37802[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (9))){
var inst_37711 = (state_37734[(2)]);
var state_37734__$1 = state_37734;
var statearr_37761_37803 = state_37734__$1;
(statearr_37761_37803[(2)] = inst_37711);

(statearr_37761_37803[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (5))){
var inst_37672 = cljs.core.deref.call(null,mults);
var inst_37673 = cljs.core.vals.call(null,inst_37672);
var inst_37674 = cljs.core.seq.call(null,inst_37673);
var inst_37675 = inst_37674;
var inst_37676 = null;
var inst_37677 = (0);
var inst_37678 = (0);
var state_37734__$1 = (function (){var statearr_37762 = state_37734;
(statearr_37762[(12)] = inst_37675);

(statearr_37762[(13)] = inst_37678);

(statearr_37762[(14)] = inst_37676);

(statearr_37762[(16)] = inst_37677);

return statearr_37762;
})();
var statearr_37763_37804 = state_37734__$1;
(statearr_37763_37804[(2)] = null);

(statearr_37763_37804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (14))){
var state_37734__$1 = state_37734;
var statearr_37767_37805 = state_37734__$1;
(statearr_37767_37805[(2)] = null);

(statearr_37767_37805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (16))){
var inst_37689 = (state_37734[(10)]);
var inst_37693 = cljs.core.chunk_first.call(null,inst_37689);
var inst_37694 = cljs.core.chunk_rest.call(null,inst_37689);
var inst_37695 = cljs.core.count.call(null,inst_37693);
var inst_37675 = inst_37694;
var inst_37676 = inst_37693;
var inst_37677 = inst_37695;
var inst_37678 = (0);
var state_37734__$1 = (function (){var statearr_37768 = state_37734;
(statearr_37768[(12)] = inst_37675);

(statearr_37768[(13)] = inst_37678);

(statearr_37768[(14)] = inst_37676);

(statearr_37768[(16)] = inst_37677);

return statearr_37768;
})();
var statearr_37769_37806 = state_37734__$1;
(statearr_37769_37806[(2)] = null);

(statearr_37769_37806[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (10))){
var inst_37675 = (state_37734[(12)]);
var inst_37678 = (state_37734[(13)]);
var inst_37676 = (state_37734[(14)]);
var inst_37677 = (state_37734[(16)]);
var inst_37683 = cljs.core._nth.call(null,inst_37676,inst_37678);
var inst_37684 = cljs.core.async.muxch_STAR_.call(null,inst_37683);
var inst_37685 = cljs.core.async.close_BANG_.call(null,inst_37684);
var inst_37686 = (inst_37678 + (1));
var tmp37764 = inst_37675;
var tmp37765 = inst_37676;
var tmp37766 = inst_37677;
var inst_37675__$1 = tmp37764;
var inst_37676__$1 = tmp37765;
var inst_37677__$1 = tmp37766;
var inst_37678__$1 = inst_37686;
var state_37734__$1 = (function (){var statearr_37770 = state_37734;
(statearr_37770[(17)] = inst_37685);

(statearr_37770[(12)] = inst_37675__$1);

(statearr_37770[(13)] = inst_37678__$1);

(statearr_37770[(14)] = inst_37676__$1);

(statearr_37770[(16)] = inst_37677__$1);

return statearr_37770;
})();
var statearr_37771_37807 = state_37734__$1;
(statearr_37771_37807[(2)] = null);

(statearr_37771_37807[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (18))){
var inst_37704 = (state_37734[(2)]);
var state_37734__$1 = state_37734;
var statearr_37772_37808 = state_37734__$1;
(statearr_37772_37808[(2)] = inst_37704);

(statearr_37772_37808[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37735 === (8))){
var inst_37678 = (state_37734[(13)]);
var inst_37677 = (state_37734[(16)]);
var inst_37680 = (inst_37678 < inst_37677);
var inst_37681 = inst_37680;
var state_37734__$1 = state_37734;
if(cljs.core.truth_(inst_37681)){
var statearr_37773_37809 = state_37734__$1;
(statearr_37773_37809[(1)] = (10));

} else {
var statearr_37774_37810 = state_37734__$1;
(statearr_37774_37810[(1)] = (11));

}

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
});})(c__30074__auto___37782,mults,ensure_mult,p))
;
return ((function (switch__30018__auto__,c__30074__auto___37782,mults,ensure_mult,p){
return (function() {
var cljs$core$async$pub_$_state_machine__30019__auto__ = null;
var cljs$core$async$pub_$_state_machine__30019__auto____0 = (function (){
var statearr_37778 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37778[(0)] = cljs$core$async$pub_$_state_machine__30019__auto__);

(statearr_37778[(1)] = (1));

return statearr_37778;
});
var cljs$core$async$pub_$_state_machine__30019__auto____1 = (function (state_37734){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_37734);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e37779){if((e37779 instanceof Object)){
var ex__30022__auto__ = e37779;
var statearr_37780_37811 = state_37734;
(statearr_37780_37811[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37734);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37779;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37812 = state_37734;
state_37734 = G__37812;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$pub_$_state_machine__30019__auto__ = function(state_37734){
switch(arguments.length){
case 0:
return cljs$core$async$pub_$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$pub_$_state_machine__30019__auto____1.call(this,state_37734);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pub_$_state_machine__30019__auto____0;
cljs$core$async$pub_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pub_$_state_machine__30019__auto____1;
return cljs$core$async$pub_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto___37782,mults,ensure_mult,p))
})();
var state__30076__auto__ = (function (){var statearr_37781 = f__30075__auto__.call(null);
(statearr_37781[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto___37782);

return statearr_37781;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto___37782,mults,ensure_mult,p))
);


return p;
});
cljs$core$async$pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return cljs$core$async$pub__2.call(this,ch,topic_fn);
case 3:
return cljs$core$async$pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$pub__2;
cljs$core$async$pub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$pub__3;
return cljs$core$async$pub;
})()
;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function() {
var cljs$core$async$sub = null;
var cljs$core$async$sub__3 = (function (p,topic,ch){
return cljs$core$async$sub.call(null,p,topic,ch,true);
});
var cljs$core$async$sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
cljs$core$async$sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return cljs$core$async$sub__3.call(this,p,topic,ch);
case 4:
return cljs$core$async$sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$sub__3;
cljs$core$async$sub.cljs$core$IFn$_invoke$arity$4 = cljs$core$async$sub__4;
return cljs$core$async$sub;
})()
;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function() {
var cljs$core$async$unsub_all = null;
var cljs$core$async$unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var cljs$core$async$unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
cljs$core$async$unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return cljs$core$async$unsub_all__1.call(this,p);
case 2:
return cljs$core$async$unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unsub_all__1;
cljs$core$async$unsub_all.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unsub_all__2;
return cljs$core$async$unsub_all;
})()
;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function() {
var cljs$core$async$map = null;
var cljs$core$async$map__2 = (function (f,chs){
return cljs$core$async$map.call(null,f,chs,null);
});
var cljs$core$async$map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__30074__auto___37949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto___37949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto___37949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_37919){
var state_val_37920 = (state_37919[(1)]);
if((state_val_37920 === (7))){
var state_37919__$1 = state_37919;
var statearr_37921_37950 = state_37919__$1;
(statearr_37921_37950[(2)] = null);

(statearr_37921_37950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (1))){
var state_37919__$1 = state_37919;
var statearr_37922_37951 = state_37919__$1;
(statearr_37922_37951[(2)] = null);

(statearr_37922_37951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (4))){
var inst_37883 = (state_37919[(7)]);
var inst_37885 = (inst_37883 < cnt);
var state_37919__$1 = state_37919;
if(cljs.core.truth_(inst_37885)){
var statearr_37923_37952 = state_37919__$1;
(statearr_37923_37952[(1)] = (6));

} else {
var statearr_37924_37953 = state_37919__$1;
(statearr_37924_37953[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (15))){
var inst_37915 = (state_37919[(2)]);
var state_37919__$1 = state_37919;
var statearr_37925_37954 = state_37919__$1;
(statearr_37925_37954[(2)] = inst_37915);

(statearr_37925_37954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (13))){
var inst_37908 = cljs.core.async.close_BANG_.call(null,out);
var state_37919__$1 = state_37919;
var statearr_37926_37955 = state_37919__$1;
(statearr_37926_37955[(2)] = inst_37908);

(statearr_37926_37955[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (6))){
var state_37919__$1 = state_37919;
var statearr_37927_37956 = state_37919__$1;
(statearr_37927_37956[(2)] = null);

(statearr_37927_37956[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (3))){
var inst_37917 = (state_37919[(2)]);
var state_37919__$1 = state_37919;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37919__$1,inst_37917);
} else {
if((state_val_37920 === (12))){
var inst_37905 = (state_37919[(8)]);
var inst_37905__$1 = (state_37919[(2)]);
var inst_37906 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_37905__$1);
var state_37919__$1 = (function (){var statearr_37928 = state_37919;
(statearr_37928[(8)] = inst_37905__$1);

return statearr_37928;
})();
if(cljs.core.truth_(inst_37906)){
var statearr_37929_37957 = state_37919__$1;
(statearr_37929_37957[(1)] = (13));

} else {
var statearr_37930_37958 = state_37919__$1;
(statearr_37930_37958[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (2))){
var inst_37882 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_37883 = (0);
var state_37919__$1 = (function (){var statearr_37931 = state_37919;
(statearr_37931[(9)] = inst_37882);

(statearr_37931[(7)] = inst_37883);

return statearr_37931;
})();
var statearr_37932_37959 = state_37919__$1;
(statearr_37932_37959[(2)] = null);

(statearr_37932_37959[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (11))){
var inst_37883 = (state_37919[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_37919,(10),Object,null,(9));
var inst_37892 = chs__$1.call(null,inst_37883);
var inst_37893 = done.call(null,inst_37883);
var inst_37894 = cljs.core.async.take_BANG_.call(null,inst_37892,inst_37893);
var state_37919__$1 = state_37919;
var statearr_37933_37960 = state_37919__$1;
(statearr_37933_37960[(2)] = inst_37894);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37919__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (9))){
var inst_37883 = (state_37919[(7)]);
var inst_37896 = (state_37919[(2)]);
var inst_37897 = (inst_37883 + (1));
var inst_37883__$1 = inst_37897;
var state_37919__$1 = (function (){var statearr_37934 = state_37919;
(statearr_37934[(10)] = inst_37896);

(statearr_37934[(7)] = inst_37883__$1);

return statearr_37934;
})();
var statearr_37935_37961 = state_37919__$1;
(statearr_37935_37961[(2)] = null);

(statearr_37935_37961[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (5))){
var inst_37903 = (state_37919[(2)]);
var state_37919__$1 = (function (){var statearr_37936 = state_37919;
(statearr_37936[(11)] = inst_37903);

return statearr_37936;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37919__$1,(12),dchan);
} else {
if((state_val_37920 === (14))){
var inst_37905 = (state_37919[(8)]);
var inst_37910 = cljs.core.apply.call(null,f,inst_37905);
var state_37919__$1 = state_37919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37919__$1,(16),out,inst_37910);
} else {
if((state_val_37920 === (16))){
var inst_37912 = (state_37919[(2)]);
var state_37919__$1 = (function (){var statearr_37937 = state_37919;
(statearr_37937[(12)] = inst_37912);

return statearr_37937;
})();
var statearr_37938_37962 = state_37919__$1;
(statearr_37938_37962[(2)] = null);

(statearr_37938_37962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (10))){
var inst_37887 = (state_37919[(2)]);
var inst_37888 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_37919__$1 = (function (){var statearr_37939 = state_37919;
(statearr_37939[(13)] = inst_37887);

return statearr_37939;
})();
var statearr_37940_37963 = state_37919__$1;
(statearr_37940_37963[(2)] = inst_37888);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37919__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37920 === (8))){
var inst_37901 = (state_37919[(2)]);
var state_37919__$1 = state_37919;
var statearr_37941_37964 = state_37919__$1;
(statearr_37941_37964[(2)] = inst_37901);

(statearr_37941_37964[(1)] = (5));


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
});})(c__30074__auto___37949,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__30018__auto__,c__30074__auto___37949,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$map_$_state_machine__30019__auto__ = null;
var cljs$core$async$map_$_state_machine__30019__auto____0 = (function (){
var statearr_37945 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37945[(0)] = cljs$core$async$map_$_state_machine__30019__auto__);

(statearr_37945[(1)] = (1));

return statearr_37945;
});
var cljs$core$async$map_$_state_machine__30019__auto____1 = (function (state_37919){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_37919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e37946){if((e37946 instanceof Object)){
var ex__30022__auto__ = e37946;
var statearr_37947_37965 = state_37919;
(statearr_37947_37965[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37946;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37966 = state_37919;
state_37919 = G__37966;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$map_$_state_machine__30019__auto__ = function(state_37919){
switch(arguments.length){
case 0:
return cljs$core$async$map_$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$map_$_state_machine__30019__auto____1.call(this,state_37919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$map_$_state_machine__30019__auto____0;
cljs$core$async$map_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$map_$_state_machine__30019__auto____1;
return cljs$core$async$map_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto___37949,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__30076__auto__ = (function (){var statearr_37948 = f__30075__auto__.call(null);
(statearr_37948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto___37949);

return statearr_37948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto___37949,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
cljs$core$async$map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$map__2.call(this,f,chs);
case 3:
return cljs$core$async$map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$map.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$map__2;
cljs$core$async$map.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$map__3;
return cljs$core$async$map;
})()
;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function() {
var cljs$core$async$merge = null;
var cljs$core$async$merge__1 = (function (chs){
return cljs$core$async$merge.call(null,chs,null);
});
var cljs$core$async$merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30074__auto___38074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto___38074,out){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto___38074,out){
return (function (state_38050){
var state_val_38051 = (state_38050[(1)]);
if((state_val_38051 === (7))){
var inst_38029 = (state_38050[(7)]);
var inst_38030 = (state_38050[(8)]);
var inst_38029__$1 = (state_38050[(2)]);
var inst_38030__$1 = cljs.core.nth.call(null,inst_38029__$1,(0),null);
var inst_38031 = cljs.core.nth.call(null,inst_38029__$1,(1),null);
var inst_38032 = (inst_38030__$1 == null);
var state_38050__$1 = (function (){var statearr_38052 = state_38050;
(statearr_38052[(7)] = inst_38029__$1);

(statearr_38052[(8)] = inst_38030__$1);

(statearr_38052[(9)] = inst_38031);

return statearr_38052;
})();
if(cljs.core.truth_(inst_38032)){
var statearr_38053_38075 = state_38050__$1;
(statearr_38053_38075[(1)] = (8));

} else {
var statearr_38054_38076 = state_38050__$1;
(statearr_38054_38076[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (1))){
var inst_38021 = cljs.core.vec.call(null,chs);
var inst_38022 = inst_38021;
var state_38050__$1 = (function (){var statearr_38055 = state_38050;
(statearr_38055[(10)] = inst_38022);

return statearr_38055;
})();
var statearr_38056_38077 = state_38050__$1;
(statearr_38056_38077[(2)] = null);

(statearr_38056_38077[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (4))){
var inst_38022 = (state_38050[(10)]);
var state_38050__$1 = state_38050;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38050__$1,(7),inst_38022);
} else {
if((state_val_38051 === (6))){
var inst_38046 = (state_38050[(2)]);
var state_38050__$1 = state_38050;
var statearr_38057_38078 = state_38050__$1;
(statearr_38057_38078[(2)] = inst_38046);

(statearr_38057_38078[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (3))){
var inst_38048 = (state_38050[(2)]);
var state_38050__$1 = state_38050;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38050__$1,inst_38048);
} else {
if((state_val_38051 === (2))){
var inst_38022 = (state_38050[(10)]);
var inst_38024 = cljs.core.count.call(null,inst_38022);
var inst_38025 = (inst_38024 > (0));
var state_38050__$1 = state_38050;
if(cljs.core.truth_(inst_38025)){
var statearr_38059_38079 = state_38050__$1;
(statearr_38059_38079[(1)] = (4));

} else {
var statearr_38060_38080 = state_38050__$1;
(statearr_38060_38080[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (11))){
var inst_38022 = (state_38050[(10)]);
var inst_38039 = (state_38050[(2)]);
var tmp38058 = inst_38022;
var inst_38022__$1 = tmp38058;
var state_38050__$1 = (function (){var statearr_38061 = state_38050;
(statearr_38061[(11)] = inst_38039);

(statearr_38061[(10)] = inst_38022__$1);

return statearr_38061;
})();
var statearr_38062_38081 = state_38050__$1;
(statearr_38062_38081[(2)] = null);

(statearr_38062_38081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (9))){
var inst_38030 = (state_38050[(8)]);
var state_38050__$1 = state_38050;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38050__$1,(11),out,inst_38030);
} else {
if((state_val_38051 === (5))){
var inst_38044 = cljs.core.async.close_BANG_.call(null,out);
var state_38050__$1 = state_38050;
var statearr_38063_38082 = state_38050__$1;
(statearr_38063_38082[(2)] = inst_38044);

(statearr_38063_38082[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (10))){
var inst_38042 = (state_38050[(2)]);
var state_38050__$1 = state_38050;
var statearr_38064_38083 = state_38050__$1;
(statearr_38064_38083[(2)] = inst_38042);

(statearr_38064_38083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38051 === (8))){
var inst_38029 = (state_38050[(7)]);
var inst_38030 = (state_38050[(8)]);
var inst_38031 = (state_38050[(9)]);
var inst_38022 = (state_38050[(10)]);
var inst_38034 = (function (){var cs = inst_38022;
var vec__38027 = inst_38029;
var v = inst_38030;
var c = inst_38031;
return ((function (cs,vec__38027,v,c,inst_38029,inst_38030,inst_38031,inst_38022,state_val_38051,c__30074__auto___38074,out){
return (function (p1__37967_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__37967_SHARP_);
});
;})(cs,vec__38027,v,c,inst_38029,inst_38030,inst_38031,inst_38022,state_val_38051,c__30074__auto___38074,out))
})();
var inst_38035 = cljs.core.filterv.call(null,inst_38034,inst_38022);
var inst_38022__$1 = inst_38035;
var state_38050__$1 = (function (){var statearr_38065 = state_38050;
(statearr_38065[(10)] = inst_38022__$1);

return statearr_38065;
})();
var statearr_38066_38084 = state_38050__$1;
(statearr_38066_38084[(2)] = null);

(statearr_38066_38084[(1)] = (2));


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
});})(c__30074__auto___38074,out))
;
return ((function (switch__30018__auto__,c__30074__auto___38074,out){
return (function() {
var cljs$core$async$merge_$_state_machine__30019__auto__ = null;
var cljs$core$async$merge_$_state_machine__30019__auto____0 = (function (){
var statearr_38070 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38070[(0)] = cljs$core$async$merge_$_state_machine__30019__auto__);

(statearr_38070[(1)] = (1));

return statearr_38070;
});
var cljs$core$async$merge_$_state_machine__30019__auto____1 = (function (state_38050){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_38050);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e38071){if((e38071 instanceof Object)){
var ex__30022__auto__ = e38071;
var statearr_38072_38085 = state_38050;
(statearr_38072_38085[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38050);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38086 = state_38050;
state_38050 = G__38086;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$merge_$_state_machine__30019__auto__ = function(state_38050){
switch(arguments.length){
case 0:
return cljs$core$async$merge_$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$merge_$_state_machine__30019__auto____1.call(this,state_38050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$merge_$_state_machine__30019__auto____0;
cljs$core$async$merge_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge_$_state_machine__30019__auto____1;
return cljs$core$async$merge_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto___38074,out))
})();
var state__30076__auto__ = (function (){var statearr_38073 = f__30075__auto__.call(null);
(statearr_38073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto___38074);

return statearr_38073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto___38074,out))
);


return out;
});
cljs$core$async$merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$merge__1.call(this,chs);
case 2:
return cljs$core$async$merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$merge__1;
cljs$core$async$merge.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$merge__2;
return cljs$core$async$merge;
})()
;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function() {
var cljs$core$async$take = null;
var cljs$core$async$take__2 = (function (n,ch){
return cljs$core$async$take.call(null,n,ch,null);
});
var cljs$core$async$take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30074__auto___38179 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto___38179,out){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto___38179,out){
return (function (state_38156){
var state_val_38157 = (state_38156[(1)]);
if((state_val_38157 === (7))){
var inst_38138 = (state_38156[(7)]);
var inst_38138__$1 = (state_38156[(2)]);
var inst_38139 = (inst_38138__$1 == null);
var inst_38140 = cljs.core.not.call(null,inst_38139);
var state_38156__$1 = (function (){var statearr_38158 = state_38156;
(statearr_38158[(7)] = inst_38138__$1);

return statearr_38158;
})();
if(inst_38140){
var statearr_38159_38180 = state_38156__$1;
(statearr_38159_38180[(1)] = (8));

} else {
var statearr_38160_38181 = state_38156__$1;
(statearr_38160_38181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (1))){
var inst_38133 = (0);
var state_38156__$1 = (function (){var statearr_38161 = state_38156;
(statearr_38161[(8)] = inst_38133);

return statearr_38161;
})();
var statearr_38162_38182 = state_38156__$1;
(statearr_38162_38182[(2)] = null);

(statearr_38162_38182[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (4))){
var state_38156__$1 = state_38156;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38156__$1,(7),ch);
} else {
if((state_val_38157 === (6))){
var inst_38151 = (state_38156[(2)]);
var state_38156__$1 = state_38156;
var statearr_38163_38183 = state_38156__$1;
(statearr_38163_38183[(2)] = inst_38151);

(statearr_38163_38183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (3))){
var inst_38153 = (state_38156[(2)]);
var inst_38154 = cljs.core.async.close_BANG_.call(null,out);
var state_38156__$1 = (function (){var statearr_38164 = state_38156;
(statearr_38164[(9)] = inst_38153);

return statearr_38164;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38156__$1,inst_38154);
} else {
if((state_val_38157 === (2))){
var inst_38133 = (state_38156[(8)]);
var inst_38135 = (inst_38133 < n);
var state_38156__$1 = state_38156;
if(cljs.core.truth_(inst_38135)){
var statearr_38165_38184 = state_38156__$1;
(statearr_38165_38184[(1)] = (4));

} else {
var statearr_38166_38185 = state_38156__$1;
(statearr_38166_38185[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (11))){
var inst_38133 = (state_38156[(8)]);
var inst_38143 = (state_38156[(2)]);
var inst_38144 = (inst_38133 + (1));
var inst_38133__$1 = inst_38144;
var state_38156__$1 = (function (){var statearr_38167 = state_38156;
(statearr_38167[(8)] = inst_38133__$1);

(statearr_38167[(10)] = inst_38143);

return statearr_38167;
})();
var statearr_38168_38186 = state_38156__$1;
(statearr_38168_38186[(2)] = null);

(statearr_38168_38186[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (9))){
var state_38156__$1 = state_38156;
var statearr_38169_38187 = state_38156__$1;
(statearr_38169_38187[(2)] = null);

(statearr_38169_38187[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (5))){
var state_38156__$1 = state_38156;
var statearr_38170_38188 = state_38156__$1;
(statearr_38170_38188[(2)] = null);

(statearr_38170_38188[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (10))){
var inst_38148 = (state_38156[(2)]);
var state_38156__$1 = state_38156;
var statearr_38171_38189 = state_38156__$1;
(statearr_38171_38189[(2)] = inst_38148);

(statearr_38171_38189[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38157 === (8))){
var inst_38138 = (state_38156[(7)]);
var state_38156__$1 = state_38156;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38156__$1,(11),out,inst_38138);
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
});})(c__30074__auto___38179,out))
;
return ((function (switch__30018__auto__,c__30074__auto___38179,out){
return (function() {
var cljs$core$async$take_$_state_machine__30019__auto__ = null;
var cljs$core$async$take_$_state_machine__30019__auto____0 = (function (){
var statearr_38175 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38175[(0)] = cljs$core$async$take_$_state_machine__30019__auto__);

(statearr_38175[(1)] = (1));

return statearr_38175;
});
var cljs$core$async$take_$_state_machine__30019__auto____1 = (function (state_38156){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_38156);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e38176){if((e38176 instanceof Object)){
var ex__30022__auto__ = e38176;
var statearr_38177_38190 = state_38156;
(statearr_38177_38190[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38156);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38176;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38191 = state_38156;
state_38156 = G__38191;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$take_$_state_machine__30019__auto__ = function(state_38156){
switch(arguments.length){
case 0:
return cljs$core$async$take_$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$take_$_state_machine__30019__auto____1.call(this,state_38156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$take_$_state_machine__30019__auto____0;
cljs$core$async$take_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$take_$_state_machine__30019__auto____1;
return cljs$core$async$take_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto___38179,out))
})();
var state__30076__auto__ = (function (){var statearr_38178 = f__30075__auto__.call(null);
(statearr_38178[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto___38179);

return statearr_38178;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto___38179,out))
);


return out;
});
cljs$core$async$take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$take__2.call(this,n,ch);
case 3:
return cljs$core$async$take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$take.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$take__2;
cljs$core$async$take.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$take__3;
return cljs$core$async$take;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t38199 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38199 = (function (map_LT_,f,ch,meta38200){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38200 = meta38200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t38199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38201,meta38200__$1){
var self__ = this;
var _38201__$1 = this;
return (new cljs.core.async.t38199(self__.map_LT_,self__.f,self__.ch,meta38200__$1));
});

cljs.core.async.t38199.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38201){
var self__ = this;
var _38201__$1 = this;
return self__.meta38200;
});

cljs.core.async.t38199.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38199.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38199.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t38199.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38199.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t38202 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38202 = (function (map_LT_,f,ch,meta38200,_,fn1,meta38203){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta38200 = meta38200;
this._ = _;
this.fn1 = fn1;
this.meta38203 = meta38203;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t38202.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_38204,meta38203__$1){
var self__ = this;
var _38204__$1 = this;
return (new cljs.core.async.t38202(self__.map_LT_,self__.f,self__.ch,self__.meta38200,self__._,self__.fn1,meta38203__$1));
});})(___$1))
;

cljs.core.async.t38202.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_38204){
var self__ = this;
var _38204__$1 = this;
return self__.meta38203;
});})(___$1))
;

cljs.core.async.t38202.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t38202.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t38202.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__38192_SHARP_){
return f1.call(null,(((p1__38192_SHARP_ == null))?null:self__.f.call(null,p1__38192_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t38202.cljs$lang$type = true;

cljs.core.async.t38202.cljs$lang$ctorStr = "cljs.core.async/t38202";

cljs.core.async.t38202.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__28250__auto__,writer__28251__auto__,opt__28252__auto__){
return cljs.core._write.call(null,writer__28251__auto__,"cljs.core.async/t38202");
});})(___$1))
;

cljs.core.async.__GT_t38202 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t38202(map_LT___$1,f__$1,ch__$1,meta38200__$1,___$2,fn1__$1,meta38203){
return (new cljs.core.async.t38202(map_LT___$1,f__$1,ch__$1,meta38200__$1,___$2,fn1__$1,meta38203));
});})(___$1))
;

}

return (new cljs.core.async.t38202(self__.map_LT_,self__.f,self__.ch,self__.meta38200,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__27651__auto__ = ret;
if(cljs.core.truth_(and__27651__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__27651__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t38199.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38199.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t38199.cljs$lang$type = true;

cljs.core.async.t38199.cljs$lang$ctorStr = "cljs.core.async/t38199";

cljs.core.async.t38199.cljs$lang$ctorPrWriter = (function (this__28250__auto__,writer__28251__auto__,opt__28252__auto__){
return cljs.core._write.call(null,writer__28251__auto__,"cljs.core.async/t38199");
});

cljs.core.async.__GT_t38199 = (function cljs$core$async$map_LT__$___GT_t38199(map_LT___$1,f__$1,ch__$1,meta38200){
return (new cljs.core.async.t38199(map_LT___$1,f__$1,ch__$1,meta38200));
});

}

return (new cljs.core.async.t38199(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t38208 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38208 = (function (map_GT_,f,ch,meta38209){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta38209 = meta38209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t38208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38210,meta38209__$1){
var self__ = this;
var _38210__$1 = this;
return (new cljs.core.async.t38208(self__.map_GT_,self__.f,self__.ch,meta38209__$1));
});

cljs.core.async.t38208.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38210){
var self__ = this;
var _38210__$1 = this;
return self__.meta38209;
});

cljs.core.async.t38208.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38208.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38208.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38208.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t38208.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38208.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t38208.cljs$lang$type = true;

cljs.core.async.t38208.cljs$lang$ctorStr = "cljs.core.async/t38208";

cljs.core.async.t38208.cljs$lang$ctorPrWriter = (function (this__28250__auto__,writer__28251__auto__,opt__28252__auto__){
return cljs.core._write.call(null,writer__28251__auto__,"cljs.core.async/t38208");
});

cljs.core.async.__GT_t38208 = (function cljs$core$async$map_GT__$___GT_t38208(map_GT___$1,f__$1,ch__$1,meta38209){
return (new cljs.core.async.t38208(map_GT___$1,f__$1,ch__$1,meta38209));
});

}

return (new cljs.core.async.t38208(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t38214 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t38214 = (function (filter_GT_,p,ch,meta38215){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta38215 = meta38215;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t38214.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38216,meta38215__$1){
var self__ = this;
var _38216__$1 = this;
return (new cljs.core.async.t38214(self__.filter_GT_,self__.p,self__.ch,meta38215__$1));
});

cljs.core.async.t38214.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38216){
var self__ = this;
var _38216__$1 = this;
return self__.meta38215;
});

cljs.core.async.t38214.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t38214.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t38214.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t38214.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t38214.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t38214.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t38214.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t38214.cljs$lang$type = true;

cljs.core.async.t38214.cljs$lang$ctorStr = "cljs.core.async/t38214";

cljs.core.async.t38214.cljs$lang$ctorPrWriter = (function (this__28250__auto__,writer__28251__auto__,opt__28252__auto__){
return cljs.core._write.call(null,writer__28251__auto__,"cljs.core.async/t38214");
});

cljs.core.async.__GT_t38214 = (function cljs$core$async$filter_GT__$___GT_t38214(filter_GT___$1,p__$1,ch__$1,meta38215){
return (new cljs.core.async.t38214(filter_GT___$1,p__$1,ch__$1,meta38215));
});

}

return (new cljs.core.async.t38214(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function() {
var cljs$core$async$filter_LT_ = null;
var cljs$core$async$filter_LT___2 = (function (p,ch){
return cljs$core$async$filter_LT_.call(null,p,ch,null);
});
var cljs$core$async$filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30074__auto___38299 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto___38299,out){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto___38299,out){
return (function (state_38278){
var state_val_38279 = (state_38278[(1)]);
if((state_val_38279 === (7))){
var inst_38274 = (state_38278[(2)]);
var state_38278__$1 = state_38278;
var statearr_38280_38300 = state_38278__$1;
(statearr_38280_38300[(2)] = inst_38274);

(statearr_38280_38300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38279 === (1))){
var state_38278__$1 = state_38278;
var statearr_38281_38301 = state_38278__$1;
(statearr_38281_38301[(2)] = null);

(statearr_38281_38301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38279 === (4))){
var inst_38260 = (state_38278[(7)]);
var inst_38260__$1 = (state_38278[(2)]);
var inst_38261 = (inst_38260__$1 == null);
var state_38278__$1 = (function (){var statearr_38282 = state_38278;
(statearr_38282[(7)] = inst_38260__$1);

return statearr_38282;
})();
if(cljs.core.truth_(inst_38261)){
var statearr_38283_38302 = state_38278__$1;
(statearr_38283_38302[(1)] = (5));

} else {
var statearr_38284_38303 = state_38278__$1;
(statearr_38284_38303[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38279 === (6))){
var inst_38260 = (state_38278[(7)]);
var inst_38265 = p.call(null,inst_38260);
var state_38278__$1 = state_38278;
if(cljs.core.truth_(inst_38265)){
var statearr_38285_38304 = state_38278__$1;
(statearr_38285_38304[(1)] = (8));

} else {
var statearr_38286_38305 = state_38278__$1;
(statearr_38286_38305[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38279 === (3))){
var inst_38276 = (state_38278[(2)]);
var state_38278__$1 = state_38278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38278__$1,inst_38276);
} else {
if((state_val_38279 === (2))){
var state_38278__$1 = state_38278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38278__$1,(4),ch);
} else {
if((state_val_38279 === (11))){
var inst_38268 = (state_38278[(2)]);
var state_38278__$1 = state_38278;
var statearr_38287_38306 = state_38278__$1;
(statearr_38287_38306[(2)] = inst_38268);

(statearr_38287_38306[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38279 === (9))){
var state_38278__$1 = state_38278;
var statearr_38288_38307 = state_38278__$1;
(statearr_38288_38307[(2)] = null);

(statearr_38288_38307[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38279 === (5))){
var inst_38263 = cljs.core.async.close_BANG_.call(null,out);
var state_38278__$1 = state_38278;
var statearr_38289_38308 = state_38278__$1;
(statearr_38289_38308[(2)] = inst_38263);

(statearr_38289_38308[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38279 === (10))){
var inst_38271 = (state_38278[(2)]);
var state_38278__$1 = (function (){var statearr_38290 = state_38278;
(statearr_38290[(8)] = inst_38271);

return statearr_38290;
})();
var statearr_38291_38309 = state_38278__$1;
(statearr_38291_38309[(2)] = null);

(statearr_38291_38309[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38279 === (8))){
var inst_38260 = (state_38278[(7)]);
var state_38278__$1 = state_38278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38278__$1,(11),out,inst_38260);
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
});})(c__30074__auto___38299,out))
;
return ((function (switch__30018__auto__,c__30074__auto___38299,out){
return (function() {
var cljs$core$async$filter_LT__$_state_machine__30019__auto__ = null;
var cljs$core$async$filter_LT__$_state_machine__30019__auto____0 = (function (){
var statearr_38295 = [null,null,null,null,null,null,null,null,null];
(statearr_38295[(0)] = cljs$core$async$filter_LT__$_state_machine__30019__auto__);

(statearr_38295[(1)] = (1));

return statearr_38295;
});
var cljs$core$async$filter_LT__$_state_machine__30019__auto____1 = (function (state_38278){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_38278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e38296){if((e38296 instanceof Object)){
var ex__30022__auto__ = e38296;
var statearr_38297_38310 = state_38278;
(statearr_38297_38310[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38311 = state_38278;
state_38278 = G__38311;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$filter_LT__$_state_machine__30019__auto__ = function(state_38278){
switch(arguments.length){
case 0:
return cljs$core$async$filter_LT__$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$filter_LT__$_state_machine__30019__auto____1.call(this,state_38278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT__$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$filter_LT__$_state_machine__30019__auto____0;
cljs$core$async$filter_LT__$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$filter_LT__$_state_machine__30019__auto____1;
return cljs$core$async$filter_LT__$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto___38299,out))
})();
var state__30076__auto__ = (function (){var statearr_38298 = f__30075__auto__.call(null);
(statearr_38298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto___38299);

return statearr_38298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto___38299,out))
);


return out;
});
cljs$core$async$filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$filter_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$filter_LT___2;
cljs$core$async$filter_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$filter_LT___3;
return cljs$core$async$filter_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function() {
var cljs$core$async$remove_LT_ = null;
var cljs$core$async$remove_LT___2 = (function (p,ch){
return cljs$core$async$remove_LT_.call(null,p,ch,null);
});
var cljs$core$async$remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
cljs$core$async$remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$remove_LT___2.call(this,p,ch);
case 3:
return cljs$core$async$remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$remove_LT___2;
cljs$core$async$remove_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$remove_LT___3;
return cljs$core$async$remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__30074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto__){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto__){
return (function (state_38477){
var state_val_38478 = (state_38477[(1)]);
if((state_val_38478 === (7))){
var inst_38473 = (state_38477[(2)]);
var state_38477__$1 = state_38477;
var statearr_38479_38520 = state_38477__$1;
(statearr_38479_38520[(2)] = inst_38473);

(statearr_38479_38520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38478 === (20))){
var inst_38443 = (state_38477[(7)]);
var inst_38454 = (state_38477[(2)]);
var inst_38455 = cljs.core.next.call(null,inst_38443);
var inst_38429 = inst_38455;
var inst_38430 = null;
var inst_38431 = (0);
var inst_38432 = (0);
var state_38477__$1 = (function (){var statearr_38480 = state_38477;
(statearr_38480[(8)] = inst_38429);

(statearr_38480[(9)] = inst_38432);

(statearr_38480[(10)] = inst_38454);

(statearr_38480[(11)] = inst_38430);

(statearr_38480[(12)] = inst_38431);

return statearr_38480;
})();
var statearr_38481_38521 = state_38477__$1;
(statearr_38481_38521[(2)] = null);

(statearr_38481_38521[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38478 === (1))){
var state_38477__$1 = state_38477;
var statearr_38482_38522 = state_38477__$1;
(statearr_38482_38522[(2)] = null);

(statearr_38482_38522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38478 === (4))){
var inst_38418 = (state_38477[(13)]);
var inst_38418__$1 = (state_38477[(2)]);
var inst_38419 = (inst_38418__$1 == null);
var state_38477__$1 = (function (){var statearr_38483 = state_38477;
(statearr_38483[(13)] = inst_38418__$1);

return statearr_38483;
})();
if(cljs.core.truth_(inst_38419)){
var statearr_38484_38523 = state_38477__$1;
(statearr_38484_38523[(1)] = (5));

} else {
var statearr_38485_38524 = state_38477__$1;
(statearr_38485_38524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38478 === (15))){
var state_38477__$1 = state_38477;
var statearr_38489_38525 = state_38477__$1;
(statearr_38489_38525[(2)] = null);

(statearr_38489_38525[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38478 === (21))){
var state_38477__$1 = state_38477;
var statearr_38490_38526 = state_38477__$1;
(statearr_38490_38526[(2)] = null);

(statearr_38490_38526[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38478 === (13))){
var inst_38429 = (state_38477[(8)]);
var inst_38432 = (state_38477[(9)]);
var inst_38430 = (state_38477[(11)]);
var inst_38431 = (state_38477[(12)]);
var inst_38439 = (state_38477[(2)]);
var inst_38440 = (inst_38432 + (1));
var tmp38486 = inst_38429;
var tmp38487 = inst_38430;
var tmp38488 = inst_38431;
var inst_38429__$1 = tmp38486;
var inst_38430__$1 = tmp38487;
var inst_38431__$1 = tmp38488;
var inst_38432__$1 = inst_38440;
var state_38477__$1 = (function (){var statearr_38491 = state_38477;
(statearr_38491[(8)] = inst_38429__$1);

(statearr_38491[(14)] = inst_38439);

(statearr_38491[(9)] = inst_38432__$1);

(statearr_38491[(11)] = inst_38430__$1);

(statearr_38491[(12)] = inst_38431__$1);

return statearr_38491;
})();
var statearr_38492_38527 = state_38477__$1;
(statearr_38492_38527[(2)] = null);

(statearr_38492_38527[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38478 === (22))){
var state_38477__$1 = state_38477;
var statearr_38493_38528 = state_38477__$1;
(statearr_38493_38528[(2)] = null);

(statearr_38493_38528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38478 === (6))){
var inst_38418 = (state_38477[(13)]);
var inst_38427 = f.call(null,inst_38418);
var inst_38428 = cljs.core.seq.call(null,inst_38427);
var inst_38429 = inst_38428;
var inst_38430 = null;
var inst_38431 = (0);
var inst_38432 = (0);
var state_38477__$1 = (function (){var statearr_38494 = state_38477;
(statearr_38494[(8)] = inst_38429);

(statearr_38494[(9)] = inst_38432);

(statearr_38494[(11)] = inst_38430);

(statearr_38494[(12)] = inst_38431);

return statearr_38494;
})();
var statearr_38495_38529 = state_38477__$1;
(statearr_38495_38529[(2)] = null);

(statearr_38495_38529[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38478 === (17))){
var inst_38443 = (state_38477[(7)]);
var inst_38447 = cljs.core.chunk_first.call(null,inst_38443);
var inst_38448 = cljs.core.chunk_rest.call(null,inst_38443);
var inst_38449 = cljs.core.count.call(null,inst_38447);
var inst_38429 = inst_38448;
var inst_38430 = inst_38447;
var inst_38431 = inst_38449;
var inst_38432 = (0);
var state_38477__$1 = (function (){var statearr_38496 = state_38477;
(statearr_38496[(8)] = inst_38429);

(statearr_38496[(9)] = inst_38432);

(statearr_38496[(11)] = inst_38430);

(statearr_38496[(12)] = inst_38431);

return statearr_38496;
})();
var statearr_38497_38530 = state_38477__$1;
(statearr_38497_38530[(2)] = null);

(statearr_38497_38530[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38478 === (3))){
var inst_38475 = (state_38477[(2)]);
var state_38477__$1 = state_38477;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38477__$1,inst_38475);
} else {
if((state_val_38478 === (12))){
var inst_38463 = (state_38477[(2)]);
var state_38477__$1 = state_38477;
var statearr_38498_38531 = state_38477__$1;
(statearr_38498_38531[(2)] = inst_38463);

(statearr_38498_38531[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38478 === (2))){
var state_38477__$1 = state_38477;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38477__$1,(4),in$);
} else {
if((state_val_38478 === (23))){
var inst_38471 = (state_38477[(2)]);
var state_38477__$1 = state_38477;
var statearr_38499_38532 = state_38477__$1;
(statearr_38499_38532[(2)] = inst_38471);

(statearr_38499_38532[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38478 === (19))){
var inst_38458 = (state_38477[(2)]);
var state_38477__$1 = state_38477;
var statearr_38500_38533 = state_38477__$1;
(statearr_38500_38533[(2)] = inst_38458);

(statearr_38500_38533[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38478 === (11))){
var inst_38429 = (state_38477[(8)]);
var inst_38443 = (state_38477[(7)]);
var inst_38443__$1 = cljs.core.seq.call(null,inst_38429);
var state_38477__$1 = (function (){var statearr_38501 = state_38477;
(statearr_38501[(7)] = inst_38443__$1);

return statearr_38501;
})();
if(inst_38443__$1){
var statearr_38502_38534 = state_38477__$1;
(statearr_38502_38534[(1)] = (14));

} else {
var statearr_38503_38535 = state_38477__$1;
(statearr_38503_38535[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38478 === (9))){
var inst_38465 = (state_38477[(2)]);
var inst_38466 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_38477__$1 = (function (){var statearr_38504 = state_38477;
(statearr_38504[(15)] = inst_38465);

return statearr_38504;
})();
if(cljs.core.truth_(inst_38466)){
var statearr_38505_38536 = state_38477__$1;
(statearr_38505_38536[(1)] = (21));

} else {
var statearr_38506_38537 = state_38477__$1;
(statearr_38506_38537[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38478 === (5))){
var inst_38421 = cljs.core.async.close_BANG_.call(null,out);
var state_38477__$1 = state_38477;
var statearr_38507_38538 = state_38477__$1;
(statearr_38507_38538[(2)] = inst_38421);

(statearr_38507_38538[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38478 === (14))){
var inst_38443 = (state_38477[(7)]);
var inst_38445 = cljs.core.chunked_seq_QMARK_.call(null,inst_38443);
var state_38477__$1 = state_38477;
if(inst_38445){
var statearr_38508_38539 = state_38477__$1;
(statearr_38508_38539[(1)] = (17));

} else {
var statearr_38509_38540 = state_38477__$1;
(statearr_38509_38540[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38478 === (16))){
var inst_38461 = (state_38477[(2)]);
var state_38477__$1 = state_38477;
var statearr_38510_38541 = state_38477__$1;
(statearr_38510_38541[(2)] = inst_38461);

(statearr_38510_38541[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38478 === (10))){
var inst_38432 = (state_38477[(9)]);
var inst_38430 = (state_38477[(11)]);
var inst_38437 = cljs.core._nth.call(null,inst_38430,inst_38432);
var state_38477__$1 = state_38477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38477__$1,(13),out,inst_38437);
} else {
if((state_val_38478 === (18))){
var inst_38443 = (state_38477[(7)]);
var inst_38452 = cljs.core.first.call(null,inst_38443);
var state_38477__$1 = state_38477;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38477__$1,(20),out,inst_38452);
} else {
if((state_val_38478 === (8))){
var inst_38432 = (state_38477[(9)]);
var inst_38431 = (state_38477[(12)]);
var inst_38434 = (inst_38432 < inst_38431);
var inst_38435 = inst_38434;
var state_38477__$1 = state_38477;
if(cljs.core.truth_(inst_38435)){
var statearr_38511_38542 = state_38477__$1;
(statearr_38511_38542[(1)] = (10));

} else {
var statearr_38512_38543 = state_38477__$1;
(statearr_38512_38543[(1)] = (11));

}

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
});})(c__30074__auto__))
;
return ((function (switch__30018__auto__,c__30074__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__30019__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__30019__auto____0 = (function (){
var statearr_38516 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38516[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__30019__auto__);

(statearr_38516[(1)] = (1));

return statearr_38516;
});
var cljs$core$async$mapcat_STAR__$_state_machine__30019__auto____1 = (function (state_38477){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_38477);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e38517){if((e38517 instanceof Object)){
var ex__30022__auto__ = e38517;
var statearr_38518_38544 = state_38477;
(statearr_38518_38544[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38477);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38517;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38545 = state_38477;
state_38477 = G__38545;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__30019__auto__ = function(state_38477){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__30019__auto____1.call(this,state_38477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__30019__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__30019__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto__))
})();
var state__30076__auto__ = (function (){var statearr_38519 = f__30075__auto__.call(null);
(statearr_38519[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto__);

return statearr_38519;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto__))
);

return c__30074__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function() {
var cljs$core$async$mapcat_LT_ = null;
var cljs$core$async$mapcat_LT___2 = (function (f,in$){
return cljs$core$async$mapcat_LT_.call(null,f,in$,null);
});
var cljs$core$async$mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
cljs$core$async$mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_LT___2.call(this,f,in$);
case 3:
return cljs$core$async$mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_LT___2;
cljs$core$async$mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_LT___3;
return cljs$core$async$mapcat_LT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function() {
var cljs$core$async$mapcat_GT_ = null;
var cljs$core$async$mapcat_GT___2 = (function (f,out){
return cljs$core$async$mapcat_GT_.call(null,f,out,null);
});
var cljs$core$async$mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
cljs$core$async$mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$mapcat_GT___2.call(this,f,out);
case 3:
return cljs$core$async$mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$mapcat_GT___2;
cljs$core$async$mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$mapcat_GT___3;
return cljs$core$async$mapcat_GT_;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function() {
var cljs$core$async$unique = null;
var cljs$core$async$unique__1 = (function (ch){
return cljs$core$async$unique.call(null,ch,null);
});
var cljs$core$async$unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30074__auto___38642 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto___38642,out){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto___38642,out){
return (function (state_38617){
var state_val_38618 = (state_38617[(1)]);
if((state_val_38618 === (7))){
var inst_38612 = (state_38617[(2)]);
var state_38617__$1 = state_38617;
var statearr_38619_38643 = state_38617__$1;
(statearr_38619_38643[(2)] = inst_38612);

(statearr_38619_38643[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38618 === (1))){
var inst_38594 = null;
var state_38617__$1 = (function (){var statearr_38620 = state_38617;
(statearr_38620[(7)] = inst_38594);

return statearr_38620;
})();
var statearr_38621_38644 = state_38617__$1;
(statearr_38621_38644[(2)] = null);

(statearr_38621_38644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38618 === (4))){
var inst_38597 = (state_38617[(8)]);
var inst_38597__$1 = (state_38617[(2)]);
var inst_38598 = (inst_38597__$1 == null);
var inst_38599 = cljs.core.not.call(null,inst_38598);
var state_38617__$1 = (function (){var statearr_38622 = state_38617;
(statearr_38622[(8)] = inst_38597__$1);

return statearr_38622;
})();
if(inst_38599){
var statearr_38623_38645 = state_38617__$1;
(statearr_38623_38645[(1)] = (5));

} else {
var statearr_38624_38646 = state_38617__$1;
(statearr_38624_38646[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38618 === (6))){
var state_38617__$1 = state_38617;
var statearr_38625_38647 = state_38617__$1;
(statearr_38625_38647[(2)] = null);

(statearr_38625_38647[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38618 === (3))){
var inst_38614 = (state_38617[(2)]);
var inst_38615 = cljs.core.async.close_BANG_.call(null,out);
var state_38617__$1 = (function (){var statearr_38626 = state_38617;
(statearr_38626[(9)] = inst_38614);

return statearr_38626;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38617__$1,inst_38615);
} else {
if((state_val_38618 === (2))){
var state_38617__$1 = state_38617;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38617__$1,(4),ch);
} else {
if((state_val_38618 === (11))){
var inst_38597 = (state_38617[(8)]);
var inst_38606 = (state_38617[(2)]);
var inst_38594 = inst_38597;
var state_38617__$1 = (function (){var statearr_38627 = state_38617;
(statearr_38627[(7)] = inst_38594);

(statearr_38627[(10)] = inst_38606);

return statearr_38627;
})();
var statearr_38628_38648 = state_38617__$1;
(statearr_38628_38648[(2)] = null);

(statearr_38628_38648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38618 === (9))){
var inst_38597 = (state_38617[(8)]);
var state_38617__$1 = state_38617;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38617__$1,(11),out,inst_38597);
} else {
if((state_val_38618 === (5))){
var inst_38597 = (state_38617[(8)]);
var inst_38594 = (state_38617[(7)]);
var inst_38601 = cljs.core._EQ_.call(null,inst_38597,inst_38594);
var state_38617__$1 = state_38617;
if(inst_38601){
var statearr_38630_38649 = state_38617__$1;
(statearr_38630_38649[(1)] = (8));

} else {
var statearr_38631_38650 = state_38617__$1;
(statearr_38631_38650[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38618 === (10))){
var inst_38609 = (state_38617[(2)]);
var state_38617__$1 = state_38617;
var statearr_38632_38651 = state_38617__$1;
(statearr_38632_38651[(2)] = inst_38609);

(statearr_38632_38651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38618 === (8))){
var inst_38594 = (state_38617[(7)]);
var tmp38629 = inst_38594;
var inst_38594__$1 = tmp38629;
var state_38617__$1 = (function (){var statearr_38633 = state_38617;
(statearr_38633[(7)] = inst_38594__$1);

return statearr_38633;
})();
var statearr_38634_38652 = state_38617__$1;
(statearr_38634_38652[(2)] = null);

(statearr_38634_38652[(1)] = (2));


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
});})(c__30074__auto___38642,out))
;
return ((function (switch__30018__auto__,c__30074__auto___38642,out){
return (function() {
var cljs$core$async$unique_$_state_machine__30019__auto__ = null;
var cljs$core$async$unique_$_state_machine__30019__auto____0 = (function (){
var statearr_38638 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_38638[(0)] = cljs$core$async$unique_$_state_machine__30019__auto__);

(statearr_38638[(1)] = (1));

return statearr_38638;
});
var cljs$core$async$unique_$_state_machine__30019__auto____1 = (function (state_38617){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_38617);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e38639){if((e38639 instanceof Object)){
var ex__30022__auto__ = e38639;
var statearr_38640_38653 = state_38617;
(statearr_38640_38653[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38617);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38654 = state_38617;
state_38617 = G__38654;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$unique_$_state_machine__30019__auto__ = function(state_38617){
switch(arguments.length){
case 0:
return cljs$core$async$unique_$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$unique_$_state_machine__30019__auto____1.call(this,state_38617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$unique_$_state_machine__30019__auto____0;
cljs$core$async$unique_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique_$_state_machine__30019__auto____1;
return cljs$core$async$unique_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto___38642,out))
})();
var state__30076__auto__ = (function (){var statearr_38641 = f__30075__auto__.call(null);
(statearr_38641[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto___38642);

return statearr_38641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto___38642,out))
);


return out;
});
cljs$core$async$unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return cljs$core$async$unique__1.call(this,ch);
case 2:
return cljs$core$async$unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$unique__1;
cljs$core$async$unique.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$unique__2;
return cljs$core$async$unique;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function() {
var cljs$core$async$partition = null;
var cljs$core$async$partition__2 = (function (n,ch){
return cljs$core$async$partition.call(null,n,ch,null);
});
var cljs$core$async$partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30074__auto___38789 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto___38789,out){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto___38789,out){
return (function (state_38759){
var state_val_38760 = (state_38759[(1)]);
if((state_val_38760 === (7))){
var inst_38755 = (state_38759[(2)]);
var state_38759__$1 = state_38759;
var statearr_38761_38790 = state_38759__$1;
(statearr_38761_38790[(2)] = inst_38755);

(statearr_38761_38790[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (1))){
var inst_38722 = (new Array(n));
var inst_38723 = inst_38722;
var inst_38724 = (0);
var state_38759__$1 = (function (){var statearr_38762 = state_38759;
(statearr_38762[(7)] = inst_38724);

(statearr_38762[(8)] = inst_38723);

return statearr_38762;
})();
var statearr_38763_38791 = state_38759__$1;
(statearr_38763_38791[(2)] = null);

(statearr_38763_38791[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (4))){
var inst_38727 = (state_38759[(9)]);
var inst_38727__$1 = (state_38759[(2)]);
var inst_38728 = (inst_38727__$1 == null);
var inst_38729 = cljs.core.not.call(null,inst_38728);
var state_38759__$1 = (function (){var statearr_38764 = state_38759;
(statearr_38764[(9)] = inst_38727__$1);

return statearr_38764;
})();
if(inst_38729){
var statearr_38765_38792 = state_38759__$1;
(statearr_38765_38792[(1)] = (5));

} else {
var statearr_38766_38793 = state_38759__$1;
(statearr_38766_38793[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (15))){
var inst_38749 = (state_38759[(2)]);
var state_38759__$1 = state_38759;
var statearr_38767_38794 = state_38759__$1;
(statearr_38767_38794[(2)] = inst_38749);

(statearr_38767_38794[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (13))){
var state_38759__$1 = state_38759;
var statearr_38768_38795 = state_38759__$1;
(statearr_38768_38795[(2)] = null);

(statearr_38768_38795[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (6))){
var inst_38724 = (state_38759[(7)]);
var inst_38745 = (inst_38724 > (0));
var state_38759__$1 = state_38759;
if(cljs.core.truth_(inst_38745)){
var statearr_38769_38796 = state_38759__$1;
(statearr_38769_38796[(1)] = (12));

} else {
var statearr_38770_38797 = state_38759__$1;
(statearr_38770_38797[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (3))){
var inst_38757 = (state_38759[(2)]);
var state_38759__$1 = state_38759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38759__$1,inst_38757);
} else {
if((state_val_38760 === (12))){
var inst_38723 = (state_38759[(8)]);
var inst_38747 = cljs.core.vec.call(null,inst_38723);
var state_38759__$1 = state_38759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38759__$1,(15),out,inst_38747);
} else {
if((state_val_38760 === (2))){
var state_38759__$1 = state_38759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38759__$1,(4),ch);
} else {
if((state_val_38760 === (11))){
var inst_38739 = (state_38759[(2)]);
var inst_38740 = (new Array(n));
var inst_38723 = inst_38740;
var inst_38724 = (0);
var state_38759__$1 = (function (){var statearr_38771 = state_38759;
(statearr_38771[(10)] = inst_38739);

(statearr_38771[(7)] = inst_38724);

(statearr_38771[(8)] = inst_38723);

return statearr_38771;
})();
var statearr_38772_38798 = state_38759__$1;
(statearr_38772_38798[(2)] = null);

(statearr_38772_38798[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (9))){
var inst_38723 = (state_38759[(8)]);
var inst_38737 = cljs.core.vec.call(null,inst_38723);
var state_38759__$1 = state_38759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38759__$1,(11),out,inst_38737);
} else {
if((state_val_38760 === (5))){
var inst_38727 = (state_38759[(9)]);
var inst_38724 = (state_38759[(7)]);
var inst_38723 = (state_38759[(8)]);
var inst_38732 = (state_38759[(11)]);
var inst_38731 = (inst_38723[inst_38724] = inst_38727);
var inst_38732__$1 = (inst_38724 + (1));
var inst_38733 = (inst_38732__$1 < n);
var state_38759__$1 = (function (){var statearr_38773 = state_38759;
(statearr_38773[(12)] = inst_38731);

(statearr_38773[(11)] = inst_38732__$1);

return statearr_38773;
})();
if(cljs.core.truth_(inst_38733)){
var statearr_38774_38799 = state_38759__$1;
(statearr_38774_38799[(1)] = (8));

} else {
var statearr_38775_38800 = state_38759__$1;
(statearr_38775_38800[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (14))){
var inst_38752 = (state_38759[(2)]);
var inst_38753 = cljs.core.async.close_BANG_.call(null,out);
var state_38759__$1 = (function (){var statearr_38777 = state_38759;
(statearr_38777[(13)] = inst_38752);

return statearr_38777;
})();
var statearr_38778_38801 = state_38759__$1;
(statearr_38778_38801[(2)] = inst_38753);

(statearr_38778_38801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (10))){
var inst_38743 = (state_38759[(2)]);
var state_38759__$1 = state_38759;
var statearr_38779_38802 = state_38759__$1;
(statearr_38779_38802[(2)] = inst_38743);

(statearr_38779_38802[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38760 === (8))){
var inst_38723 = (state_38759[(8)]);
var inst_38732 = (state_38759[(11)]);
var tmp38776 = inst_38723;
var inst_38723__$1 = tmp38776;
var inst_38724 = inst_38732;
var state_38759__$1 = (function (){var statearr_38780 = state_38759;
(statearr_38780[(7)] = inst_38724);

(statearr_38780[(8)] = inst_38723__$1);

return statearr_38780;
})();
var statearr_38781_38803 = state_38759__$1;
(statearr_38781_38803[(2)] = null);

(statearr_38781_38803[(1)] = (2));


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
});})(c__30074__auto___38789,out))
;
return ((function (switch__30018__auto__,c__30074__auto___38789,out){
return (function() {
var cljs$core$async$partition_$_state_machine__30019__auto__ = null;
var cljs$core$async$partition_$_state_machine__30019__auto____0 = (function (){
var statearr_38785 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38785[(0)] = cljs$core$async$partition_$_state_machine__30019__auto__);

(statearr_38785[(1)] = (1));

return statearr_38785;
});
var cljs$core$async$partition_$_state_machine__30019__auto____1 = (function (state_38759){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_38759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e38786){if((e38786 instanceof Object)){
var ex__30022__auto__ = e38786;
var statearr_38787_38804 = state_38759;
(statearr_38787_38804[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38805 = state_38759;
state_38759 = G__38805;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$partition_$_state_machine__30019__auto__ = function(state_38759){
switch(arguments.length){
case 0:
return cljs$core$async$partition_$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$partition_$_state_machine__30019__auto____1.call(this,state_38759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_$_state_machine__30019__auto____0;
cljs$core$async$partition_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_$_state_machine__30019__auto____1;
return cljs$core$async$partition_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto___38789,out))
})();
var state__30076__auto__ = (function (){var statearr_38788 = f__30075__auto__.call(null);
(statearr_38788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto___38789);

return statearr_38788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto___38789,out))
);


return out;
});
cljs$core$async$partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition__2.call(this,n,ch);
case 3:
return cljs$core$async$partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition__2;
cljs$core$async$partition.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition__3;
return cljs$core$async$partition;
})()
;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function() {
var cljs$core$async$partition_by = null;
var cljs$core$async$partition_by__2 = (function (f,ch){
return cljs$core$async$partition_by.call(null,f,ch,null);
});
var cljs$core$async$partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__30074__auto___38948 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto___38948,out){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto___38948,out){
return (function (state_38918){
var state_val_38919 = (state_38918[(1)]);
if((state_val_38919 === (7))){
var inst_38914 = (state_38918[(2)]);
var state_38918__$1 = state_38918;
var statearr_38920_38949 = state_38918__$1;
(statearr_38920_38949[(2)] = inst_38914);

(statearr_38920_38949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (1))){
var inst_38877 = [];
var inst_38878 = inst_38877;
var inst_38879 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_38918__$1 = (function (){var statearr_38921 = state_38918;
(statearr_38921[(7)] = inst_38878);

(statearr_38921[(8)] = inst_38879);

return statearr_38921;
})();
var statearr_38922_38950 = state_38918__$1;
(statearr_38922_38950[(2)] = null);

(statearr_38922_38950[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (4))){
var inst_38882 = (state_38918[(9)]);
var inst_38882__$1 = (state_38918[(2)]);
var inst_38883 = (inst_38882__$1 == null);
var inst_38884 = cljs.core.not.call(null,inst_38883);
var state_38918__$1 = (function (){var statearr_38923 = state_38918;
(statearr_38923[(9)] = inst_38882__$1);

return statearr_38923;
})();
if(inst_38884){
var statearr_38924_38951 = state_38918__$1;
(statearr_38924_38951[(1)] = (5));

} else {
var statearr_38925_38952 = state_38918__$1;
(statearr_38925_38952[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (15))){
var inst_38908 = (state_38918[(2)]);
var state_38918__$1 = state_38918;
var statearr_38926_38953 = state_38918__$1;
(statearr_38926_38953[(2)] = inst_38908);

(statearr_38926_38953[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (13))){
var state_38918__$1 = state_38918;
var statearr_38927_38954 = state_38918__$1;
(statearr_38927_38954[(2)] = null);

(statearr_38927_38954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (6))){
var inst_38878 = (state_38918[(7)]);
var inst_38903 = inst_38878.length;
var inst_38904 = (inst_38903 > (0));
var state_38918__$1 = state_38918;
if(cljs.core.truth_(inst_38904)){
var statearr_38928_38955 = state_38918__$1;
(statearr_38928_38955[(1)] = (12));

} else {
var statearr_38929_38956 = state_38918__$1;
(statearr_38929_38956[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (3))){
var inst_38916 = (state_38918[(2)]);
var state_38918__$1 = state_38918;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38918__$1,inst_38916);
} else {
if((state_val_38919 === (12))){
var inst_38878 = (state_38918[(7)]);
var inst_38906 = cljs.core.vec.call(null,inst_38878);
var state_38918__$1 = state_38918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38918__$1,(15),out,inst_38906);
} else {
if((state_val_38919 === (2))){
var state_38918__$1 = state_38918;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38918__$1,(4),ch);
} else {
if((state_val_38919 === (11))){
var inst_38886 = (state_38918[(10)]);
var inst_38882 = (state_38918[(9)]);
var inst_38896 = (state_38918[(2)]);
var inst_38897 = [];
var inst_38898 = inst_38897.push(inst_38882);
var inst_38878 = inst_38897;
var inst_38879 = inst_38886;
var state_38918__$1 = (function (){var statearr_38930 = state_38918;
(statearr_38930[(7)] = inst_38878);

(statearr_38930[(8)] = inst_38879);

(statearr_38930[(11)] = inst_38898);

(statearr_38930[(12)] = inst_38896);

return statearr_38930;
})();
var statearr_38931_38957 = state_38918__$1;
(statearr_38931_38957[(2)] = null);

(statearr_38931_38957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (9))){
var inst_38878 = (state_38918[(7)]);
var inst_38894 = cljs.core.vec.call(null,inst_38878);
var state_38918__$1 = state_38918;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38918__$1,(11),out,inst_38894);
} else {
if((state_val_38919 === (5))){
var inst_38886 = (state_38918[(10)]);
var inst_38879 = (state_38918[(8)]);
var inst_38882 = (state_38918[(9)]);
var inst_38886__$1 = f.call(null,inst_38882);
var inst_38887 = cljs.core._EQ_.call(null,inst_38886__$1,inst_38879);
var inst_38888 = cljs.core.keyword_identical_QMARK_.call(null,inst_38879,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_38889 = (inst_38887) || (inst_38888);
var state_38918__$1 = (function (){var statearr_38932 = state_38918;
(statearr_38932[(10)] = inst_38886__$1);

return statearr_38932;
})();
if(cljs.core.truth_(inst_38889)){
var statearr_38933_38958 = state_38918__$1;
(statearr_38933_38958[(1)] = (8));

} else {
var statearr_38934_38959 = state_38918__$1;
(statearr_38934_38959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (14))){
var inst_38911 = (state_38918[(2)]);
var inst_38912 = cljs.core.async.close_BANG_.call(null,out);
var state_38918__$1 = (function (){var statearr_38936 = state_38918;
(statearr_38936[(13)] = inst_38911);

return statearr_38936;
})();
var statearr_38937_38960 = state_38918__$1;
(statearr_38937_38960[(2)] = inst_38912);

(statearr_38937_38960[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (10))){
var inst_38901 = (state_38918[(2)]);
var state_38918__$1 = state_38918;
var statearr_38938_38961 = state_38918__$1;
(statearr_38938_38961[(2)] = inst_38901);

(statearr_38938_38961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38919 === (8))){
var inst_38878 = (state_38918[(7)]);
var inst_38886 = (state_38918[(10)]);
var inst_38882 = (state_38918[(9)]);
var inst_38891 = inst_38878.push(inst_38882);
var tmp38935 = inst_38878;
var inst_38878__$1 = tmp38935;
var inst_38879 = inst_38886;
var state_38918__$1 = (function (){var statearr_38939 = state_38918;
(statearr_38939[(7)] = inst_38878__$1);

(statearr_38939[(8)] = inst_38879);

(statearr_38939[(14)] = inst_38891);

return statearr_38939;
})();
var statearr_38940_38962 = state_38918__$1;
(statearr_38940_38962[(2)] = null);

(statearr_38940_38962[(1)] = (2));


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
});})(c__30074__auto___38948,out))
;
return ((function (switch__30018__auto__,c__30074__auto___38948,out){
return (function() {
var cljs$core$async$partition_by_$_state_machine__30019__auto__ = null;
var cljs$core$async$partition_by_$_state_machine__30019__auto____0 = (function (){
var statearr_38944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38944[(0)] = cljs$core$async$partition_by_$_state_machine__30019__auto__);

(statearr_38944[(1)] = (1));

return statearr_38944;
});
var cljs$core$async$partition_by_$_state_machine__30019__auto____1 = (function (state_38918){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_38918);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e38945){if((e38945 instanceof Object)){
var ex__30022__auto__ = e38945;
var statearr_38946_38963 = state_38918;
(statearr_38946_38963[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38964 = state_38918;
state_38918 = G__38964;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
cljs$core$async$partition_by_$_state_machine__30019__auto__ = function(state_38918){
switch(arguments.length){
case 0:
return cljs$core$async$partition_by_$_state_machine__30019__auto____0.call(this);
case 1:
return cljs$core$async$partition_by_$_state_machine__30019__auto____1.call(this,state_38918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$partition_by_$_state_machine__30019__auto____0;
cljs$core$async$partition_by_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$partition_by_$_state_machine__30019__auto____1;
return cljs$core$async$partition_by_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto___38948,out))
})();
var state__30076__auto__ = (function (){var statearr_38947 = f__30075__auto__.call(null);
(statearr_38947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto___38948);

return statearr_38947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto___38948,out))
);


return out;
});
cljs$core$async$partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return cljs$core$async$partition_by__2.call(this,f,ch);
case 3:
return cljs$core$async$partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$2 = cljs$core$async$partition_by__2;
cljs$core$async$partition_by.cljs$core$IFn$_invoke$arity$3 = cljs$core$async$partition_by__3;
return cljs$core$async$partition_by;
})()
;

//# sourceMappingURL=async.js.map