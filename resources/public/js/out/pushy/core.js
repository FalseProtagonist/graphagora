// Compiled by ClojureScript 1.7.145 {}
goog.provide('pushy.core');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.History');
goog.require('goog.history.Html5History');
goog.require('goog.history.Html5History.TokenTransformer');
goog.require('goog.history.EventType');
goog.require('goog.Uri');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
/**
 * Traverses up the DOM tree and returns the first node that contains a href attr
 */
pushy.core.recur_href = (function pushy$core$recur_href(target){
if(cljs.core.truth_(target.href)){
return target;
} else {
if(cljs.core.truth_(target.parentNode)){
return pushy$core$recur_href.call(null,target.parentNode);
} else {
return null;
}
}
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__33655 = h;
G__33655.setUseFragment(false);

G__33655.setPathPrefix("");

G__33655.setEnabled(true);

return G__33655;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str(location.pathname),cljs.core.str(location.search)].join('');
});

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str(path_prefix),cljs.core.str(token)].join('');
});

return t;
});
pushy.core.new_history = (function pushy$core$new_history(var_args){
var args33656 = [];
var len__31484__auto___33659 = arguments.length;
var i__31485__auto___33660 = (0);
while(true){
if((i__31485__auto___33660 < len__31484__auto___33659)){
args33656.push((arguments[i__31485__auto___33660]));

var G__33661 = (i__31485__auto___33660 + (1));
i__31485__auto___33660 = G__33661;
continue;
} else {
}
break;
}

var G__33658 = args33656.length;
switch (G__33658) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33656.length)].join('')));

}
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.call(null,pushy.core.set_create_url_BANG_.call(null,pushy.core.set_retrieve_token_BANG_.call(null,(new goog.history.Html5History.TokenTransformer()))));
});

pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_.call(null,(new goog.history.Html5History(window,transformer)));
});

pushy.core.new_history.cljs$lang$maxFixedArity = 1;

/**
 * @interface
 */
pushy.core.IHistory = function(){};

pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var args33663 = [];
var len__31484__auto___33669 = arguments.length;
var i__31485__auto___33670 = (0);
while(true){
if((i__31485__auto___33670 < len__31484__auto___33669)){
args33663.push((arguments[i__31485__auto___33670]));

var G__33671 = (i__31485__auto___33670 + (1));
i__31485__auto___33670 = G__33671;
continue;
} else {
}
break;
}

var G__33665 = args33663.length;
switch (G__33665) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33663.length)].join('')));

}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
var x__31081__auto__ = (((this$ == null))?null:this$);
var m__31082__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__31081__auto__)]);
if(!((m__31082__auto__ == null))){
return m__31082__auto__.call(null,this$,token);
} else {
var m__31082__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__31082__auto____$1 == null))){
return m__31082__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
var x__31081__auto__ = (((this$ == null))?null:this$);
var m__31082__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__31081__auto__)]);
if(!((m__31082__auto__ == null))){
return m__31082__auto__.call(null,this$,token,title);
} else {
var m__31082__auto____$1 = (pushy.core.set_token_BANG_["_"]);
if(!((m__31082__auto____$1 == null))){
return m__31082__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.set-token!",this$);
}
}
}
});

pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3;

pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var args33666 = [];
var len__31484__auto___33673 = arguments.length;
var i__31485__auto___33674 = (0);
while(true){
if((i__31485__auto___33674 < len__31484__auto___33673)){
args33666.push((arguments[i__31485__auto___33674]));

var G__33675 = (i__31485__auto___33674 + (1));
i__31485__auto___33674 = G__33675;
continue;
} else {
}
break;
}

var G__33668 = args33666.length;
switch (G__33668) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33666.length)].join('')));

}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
var x__31081__auto__ = (((this$ == null))?null:this$);
var m__31082__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__31081__auto__)]);
if(!((m__31082__auto__ == null))){
return m__31082__auto__.call(null,this$,token);
} else {
var m__31082__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__31082__auto____$1 == null))){
return m__31082__auto____$1.call(null,this$,token);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
var x__31081__auto__ = (((this$ == null))?null:this$);
var m__31082__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__31081__auto__)]);
if(!((m__31082__auto__ == null))){
return m__31082__auto__.call(null,this$,token,title);
} else {
var m__31082__auto____$1 = (pushy.core.replace_token_BANG_["_"]);
if(!((m__31082__auto____$1 == null))){
return m__31082__auto____$1.call(null,this$,token,title);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.replace-token!",this$);
}
}
}
});

pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3;

pushy.core.get_token = (function pushy$core$get_token(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$get_token$arity$1 == null)))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
var x__31081__auto__ = (((this$ == null))?null:this$);
var m__31082__auto__ = (pushy.core.get_token[goog.typeOf(x__31081__auto__)]);
if(!((m__31082__auto__ == null))){
return m__31082__auto__.call(null,this$);
} else {
var m__31082__auto____$1 = (pushy.core.get_token["_"]);
if(!((m__31082__auto____$1 == null))){
return m__31082__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.get-token",this$);
}
}
}
});

pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
var x__31081__auto__ = (((this$ == null))?null:this$);
var m__31082__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__31081__auto__)]);
if(!((m__31082__auto__ == null))){
return m__31082__auto__.call(null,this$);
} else {
var m__31082__auto____$1 = (pushy.core.start_BANG_["_"]);
if(!((m__31082__auto____$1 == null))){
return m__31082__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.start!",this$);
}
}
}
});

pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((!((this$ == null))) && (!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null)))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
var x__31081__auto__ = (((this$ == null))?null:this$);
var m__31082__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__31081__auto__)]);
if(!((m__31082__auto__ == null))){
return m__31082__auto__.call(null,this$);
} else {
var m__31082__auto____$1 = (pushy.core.stop_BANG_["_"]);
if(!((m__31082__auto____$1 == null))){
return m__31082__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IHistory.stop!",this$);
}
}
}
});

/**
 * Takes in three functions:
 *  * dispatch-fn: the function that dispatches when a match is found
 *  * match-fn: the function used to check if a particular route exists
 *  * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(var_args){
var args33677 = [];
var len__31484__auto___33687 = arguments.length;
var i__31485__auto___33688 = (0);
while(true){
if((i__31485__auto___33688 < len__31484__auto___33687)){
args33677.push((arguments[i__31485__auto___33688]));

var G__33689 = (i__31485__auto___33688 + (1));
i__31485__auto___33688 = G__33689;
continue;
} else {
}
break;
}

var G__33679 = args33677.length;
switch (G__33679) {
case 2:
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33677.length)].join('')));

}
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.pushy.call(null,dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.pushy.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var history = pushy.core.new_history.call(null);
var event_keys = cljs.core.atom.call(null,null);
if(typeof pushy.core.t_pushy$core33680 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core33680 = (function (dispatch_fn,match_fn,identity_fn,history,event_keys,meta33681){
this.dispatch_fn = dispatch_fn;
this.match_fn = match_fn;
this.identity_fn = identity_fn;
this.history = history;
this.event_keys = event_keys;
this.meta33681 = meta33681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
pushy.core.t_pushy$core33680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (history,event_keys){
return (function (_33682,meta33681__$1){
var self__ = this;
var _33682__$1 = this;
return (new pushy.core.t_pushy$core33680(self__.dispatch_fn,self__.match_fn,self__.identity_fn,self__.history,self__.event_keys,meta33681__$1));
});})(history,event_keys))
;

pushy.core.t_pushy$core33680.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (history,event_keys){
return (function (_33682){
var self__ = this;
var _33682__$1 = this;
return self__.meta33681;
});})(history,event_keys))
;

pushy.core.t_pushy$core33680.prototype.pushy$core$IHistory$ = true;

pushy.core.t_pushy$core33680.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = ((function (history,event_keys){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys))
;

pushy.core.t_pushy$core33680.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = ((function (history,event_keys){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys))
;

pushy.core.t_pushy$core33680.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = ((function (history,event_keys){
return (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
});})(history,event_keys))
;

pushy.core.t_pushy$core33680.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = ((function (history,event_keys){
return (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
});})(history,event_keys))
;

pushy.core.t_pushy$core33680.prototype.pushy$core$IHistory$get_token$arity$1 = ((function (history,event_keys){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
});})(history,event_keys))
;

pushy.core.t_pushy$core33680.prototype.pushy$core$IHistory$start_BANG_$arity$1 = ((function (history,event_keys){
return (function (this$){
var self__ = this;
var this$__$1 = this;
pushy.core.stop_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,((function (this$__$1,history,event_keys){
return (function (e){
var temp__4423__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,e.token));
if(cljs.core.truth_(temp__4423__auto__)){
var match = temp__4423__auto__;
return self__.dispatch_fn.call(null,match);
} else {
return null;
}
});})(this$__$1,history,event_keys))
));

var temp__4425__auto___33691 = self__.identity_fn.call(null,self__.match_fn.call(null,pushy.core.get_token.call(null,this$__$1)));
if(cljs.core.truth_(temp__4425__auto___33691)){
var match_33692 = temp__4425__auto___33691;
self__.dispatch_fn.call(null,match_33692);
} else {
}

cljs.core.swap_BANG_.call(null,self__.event_keys,cljs.core.conj,pushy.core.on_click.call(null,((function (this$__$1,history,event_keys){
return (function (e){
var temp__4425__auto__ = pushy.core.recur_href.call(null,e.target);
if(cljs.core.truth_(temp__4425__auto__)){
var el = temp__4425__auto__;
var uri = goog.Uri.parse(el.href);
var path = uri.getPath();
var query = uri.getQuery();
var next_token = ((cljs.core.empty_QMARK_.call(null,query))?path:[cljs.core.str(path),cljs.core.str("?"),cljs.core.str(query)].join(''));
if(cljs.core.truth_((function (){var and__30414__auto__ = self__.identity_fn.call(null,self__.match_fn.call(null,next_token));
if(cljs.core.truth_(and__30414__auto__)){
return (cljs.core.not.call(null,e.altKey)) && (cljs.core.not.call(null,e.ctrlKey)) && (cljs.core.not.call(null,e.metaKey)) && (cljs.core.not.call(null,e.shiftKey)) && (!(cljs.core._EQ_.call(null,"_blank",el.getAttribute("target")))) && (cljs.core.not_EQ_.call(null,(1),e.button));
} else {
return and__30414__auto__;
}
})())){
var temp__4423__auto___33693 = el.title;
if(cljs.core.truth_(temp__4423__auto___33693)){
var title_33694 = temp__4423__auto___33693;
pushy.core.set_token_BANG_.call(null,this$__$1,next_token,title_33694);
} else {
pushy.core.set_token_BANG_.call(null,this$__$1,next_token);
}

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
});})(this$__$1,history,event_keys))
));

return null;
});})(history,event_keys))
;

pushy.core.t_pushy$core33680.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = ((function (history,event_keys){
return (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__33683_33695 = cljs.core.seq.call(null,cljs.core.deref.call(null,self__.event_keys));
var chunk__33684_33696 = null;
var count__33685_33697 = (0);
var i__33686_33698 = (0);
while(true){
if((i__33686_33698 < count__33685_33697)){
var key_33699 = cljs.core._nth.call(null,chunk__33684_33696,i__33686_33698);
goog.events.unlistenByKey(key_33699);

var G__33700 = seq__33683_33695;
var G__33701 = chunk__33684_33696;
var G__33702 = count__33685_33697;
var G__33703 = (i__33686_33698 + (1));
seq__33683_33695 = G__33700;
chunk__33684_33696 = G__33701;
count__33685_33697 = G__33702;
i__33686_33698 = G__33703;
continue;
} else {
var temp__4425__auto___33704 = cljs.core.seq.call(null,seq__33683_33695);
if(temp__4425__auto___33704){
var seq__33683_33705__$1 = temp__4425__auto___33704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33683_33705__$1)){
var c__31229__auto___33706 = cljs.core.chunk_first.call(null,seq__33683_33705__$1);
var G__33707 = cljs.core.chunk_rest.call(null,seq__33683_33705__$1);
var G__33708 = c__31229__auto___33706;
var G__33709 = cljs.core.count.call(null,c__31229__auto___33706);
var G__33710 = (0);
seq__33683_33695 = G__33707;
chunk__33684_33696 = G__33708;
count__33685_33697 = G__33709;
i__33686_33698 = G__33710;
continue;
} else {
var key_33711 = cljs.core.first.call(null,seq__33683_33705__$1);
goog.events.unlistenByKey(key_33711);

var G__33712 = cljs.core.next.call(null,seq__33683_33705__$1);
var G__33713 = null;
var G__33714 = (0);
var G__33715 = (0);
seq__33683_33695 = G__33712;
chunk__33684_33696 = G__33713;
count__33685_33697 = G__33714;
i__33686_33698 = G__33715;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,self__.event_keys,null);
});})(history,event_keys))
;

pushy.core.t_pushy$core33680.getBasis = ((function (history,event_keys){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"meta33681","meta33681",532739338,null)], null);
});})(history,event_keys))
;

pushy.core.t_pushy$core33680.cljs$lang$type = true;

pushy.core.t_pushy$core33680.cljs$lang$ctorStr = "pushy.core/t_pushy$core33680";

pushy.core.t_pushy$core33680.cljs$lang$ctorPrWriter = ((function (history,event_keys){
return (function (this__31024__auto__,writer__31025__auto__,opt__31026__auto__){
return cljs.core._write.call(null,writer__31025__auto__,"pushy.core/t_pushy$core33680");
});})(history,event_keys))
;

pushy.core.__GT_t_pushy$core33680 = ((function (history,event_keys){
return (function pushy$core$__GT_t_pushy$core33680(dispatch_fn__$1,match_fn__$1,identity_fn__$1,history__$1,event_keys__$1,meta33681){
return (new pushy.core.t_pushy$core33680(dispatch_fn__$1,match_fn__$1,identity_fn__$1,history__$1,event_keys__$1,meta33681));
});})(history,event_keys))
;

}

return (new pushy.core.t_pushy$core33680(dispatch_fn,match_fn,identity_fn,history,event_keys,cljs.core.PersistentArrayMap.EMPTY));
});

pushy.core.pushy.cljs$lang$maxFixedArity = 3;
/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var args33716 = [];
var len__31484__auto___33719 = arguments.length;
var i__31485__auto___33720 = (0);
while(true){
if((i__31485__auto___33720 < len__31484__auto___33719)){
args33716.push((arguments[i__31485__auto___33720]));

var G__33721 = (i__31485__auto___33720 + (1));
i__31485__auto___33720 = G__33721;
continue;
} else {
}
break;
}

var G__33718 = args33716.length;
switch (G__33718) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33716.length)].join('')));

}
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.call(null,window);
});

pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
});

pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1;
pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var args33723 = [];
var len__31484__auto___33726 = arguments.length;
var i__31485__auto___33727 = (0);
while(true){
if((i__31485__auto___33727 < len__31484__auto___33726)){
args33723.push((arguments[i__31485__auto___33727]));

var G__33728 = (i__31485__auto___33727 + (1));
i__31485__auto___33727 = G__33728;
continue;
} else {
}
break;
}

var G__33725 = args33723.length;
switch (G__33725) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33723.length)].join('')));

}
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.call(null,dispatch_fn,match_fn,cljs.core.identity);
});

pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.call(null,dispatch_fn,match_fn,identity_fn);
pushy.core.start_BANG_.call(null,h);

return h;
});

pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=core.js.map