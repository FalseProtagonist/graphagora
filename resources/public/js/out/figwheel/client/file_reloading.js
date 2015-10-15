// Compiled by ClojureScript 1.7.145 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.reload_file_STAR_;

figwheel.client.file_reloading.resolve_ns;
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__42042_SHARP_,p2__42043_SHARP_){
var and__28894__auto__ = p1__42042_SHARP_;
if(cljs.core.truth_(and__28894__auto__)){
return p2__42043_SHARP_;
} else {
return and__28894__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__28906__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28906__auto__){
return or__28906__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__42045_SHARP_,p2__42044_SHARP_){
return [cljs.core.str(p2__42044_SHARP_)].join('');
}))),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided_ = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__28906__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__28906__auto__){
return or__28906__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__28906__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__28906__auto__)){
return or__28906__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__29819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29821__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29822__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29823__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29823__auto__,method_table__29819__auto__,prefer_table__29820__auto__,method_cache__29821__auto__,cached_hierarchy__29822__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__42046){
var map__42047 = p__42046;
var map__42047__$1 = ((((!((map__42047 == null)))?((((map__42047.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42047.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42047):map__42047);
var file = cljs.core.get.call(null,map__42047__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__42049){
var map__42050 = p__42049;
var map__42050__$1 = ((((!((map__42050 == null)))?((((map__42050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42050):map__42050);
var namespace = cljs.core.get.call(null,map__42050__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__29819__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29820__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29821__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29822__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29823__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29823__auto__,method_table__29819__auto__,prefer_table__29820__auto__,method_cache__29821__auto__,cached_hierarchy__29822__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e42052){if((e42052 instanceof Error)){
var e = e42052;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42052;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(var_args){
var args42053 = [];
var len__29964__auto___42056 = arguments.length;
var i__29965__auto___42057 = (0);
while(true){
if((i__29965__auto___42057 < len__29964__auto___42056)){
args42053.push((arguments[i__29965__auto___42057]));

var G__42058 = (i__29965__auto___42057 + (1));
i__29965__auto___42057 = G__42058;
continue;
} else {
}
break;
}

var G__42055 = args42053.length;
switch (G__42055) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42053.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42060,callback){
var map__42063 = p__42060;
var map__42063__$1 = ((((!((map__42063 == null)))?((((map__42063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42063):map__42063);
var file_msg = map__42063__$1;
var request_url = cljs.core.get.call(null,map__42063__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__42063,map__42063__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42063,map__42063__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__42065){
var map__42068 = p__42065;
var map__42068__$1 = ((((!((map__42068 == null)))?((((map__42068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42068):map__42068);
var file_msg = map__42068__$1;
var namespace = cljs.core.get.call(null,map__42068__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__42068__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__28906__auto__ = meta_data;
if(cljs.core.truth_(or__28906__auto__)){
return or__28906__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__28894__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__28894__auto__){
var or__28906__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__28906__auto__)){
return or__28906__auto__;
} else {
var or__28906__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__28906__auto____$1)){
return or__28906__auto____$1;
} else {
var and__28894__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__28894__auto____$1){
var or__28906__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__28906__auto____$2){
return or__28906__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__28894__auto____$1;
}
}
}
} else {
return and__28894__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__42070,callback){
var map__42073 = p__42070;
var map__42073__$1 = ((((!((map__42073 == null)))?((((map__42073.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42073.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42073):map__42073);
var file_msg = map__42073__$1;
var request_url = cljs.core.get.call(null,map__42073__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__42073__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32217__auto___42161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32217__auto___42161,out){
return (function (){
var f__32218__auto__ = (function (){var switch__32152__auto__ = ((function (c__32217__auto___42161,out){
return (function (state_42143){
var state_val_42144 = (state_42143[(1)]);
if((state_val_42144 === (1))){
var inst_42121 = cljs.core.nth.call(null,files,(0),null);
var inst_42122 = cljs.core.nthnext.call(null,files,(1));
var inst_42123 = files;
var state_42143__$1 = (function (){var statearr_42145 = state_42143;
(statearr_42145[(7)] = inst_42121);

(statearr_42145[(8)] = inst_42123);

(statearr_42145[(9)] = inst_42122);

return statearr_42145;
})();
var statearr_42146_42162 = state_42143__$1;
(statearr_42146_42162[(2)] = null);

(statearr_42146_42162[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (2))){
var inst_42126 = (state_42143[(10)]);
var inst_42123 = (state_42143[(8)]);
var inst_42126__$1 = cljs.core.nth.call(null,inst_42123,(0),null);
var inst_42127 = cljs.core.nthnext.call(null,inst_42123,(1));
var inst_42128 = (inst_42126__$1 == null);
var inst_42129 = cljs.core.not.call(null,inst_42128);
var state_42143__$1 = (function (){var statearr_42147 = state_42143;
(statearr_42147[(10)] = inst_42126__$1);

(statearr_42147[(11)] = inst_42127);

return statearr_42147;
})();
if(inst_42129){
var statearr_42148_42163 = state_42143__$1;
(statearr_42148_42163[(1)] = (4));

} else {
var statearr_42149_42164 = state_42143__$1;
(statearr_42149_42164[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (3))){
var inst_42141 = (state_42143[(2)]);
var state_42143__$1 = state_42143;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42143__$1,inst_42141);
} else {
if((state_val_42144 === (4))){
var inst_42126 = (state_42143[(10)]);
var inst_42131 = figwheel.client.file_reloading.reload_js_file.call(null,inst_42126);
var state_42143__$1 = state_42143;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42143__$1,(7),inst_42131);
} else {
if((state_val_42144 === (5))){
var inst_42137 = cljs.core.async.close_BANG_.call(null,out);
var state_42143__$1 = state_42143;
var statearr_42150_42165 = state_42143__$1;
(statearr_42150_42165[(2)] = inst_42137);

(statearr_42150_42165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (6))){
var inst_42139 = (state_42143[(2)]);
var state_42143__$1 = state_42143;
var statearr_42151_42166 = state_42143__$1;
(statearr_42151_42166[(2)] = inst_42139);

(statearr_42151_42166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42144 === (7))){
var inst_42127 = (state_42143[(11)]);
var inst_42133 = (state_42143[(2)]);
var inst_42134 = cljs.core.async.put_BANG_.call(null,out,inst_42133);
var inst_42123 = inst_42127;
var state_42143__$1 = (function (){var statearr_42152 = state_42143;
(statearr_42152[(12)] = inst_42134);

(statearr_42152[(8)] = inst_42123);

return statearr_42152;
})();
var statearr_42153_42167 = state_42143__$1;
(statearr_42153_42167[(2)] = null);

(statearr_42153_42167[(1)] = (2));


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
});})(c__32217__auto___42161,out))
;
return ((function (switch__32152__auto__,c__32217__auto___42161,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32153__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32153__auto____0 = (function (){
var statearr_42157 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42157[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32153__auto__);

(statearr_42157[(1)] = (1));

return statearr_42157;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32153__auto____1 = (function (state_42143){
while(true){
var ret_value__32154__auto__ = (function (){try{while(true){
var result__32155__auto__ = switch__32152__auto__.call(null,state_42143);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32155__auto__;
}
break;
}
}catch (e42158){if((e42158 instanceof Object)){
var ex__32156__auto__ = e42158;
var statearr_42159_42168 = state_42143;
(statearr_42159_42168[(5)] = ex__32156__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42143);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42158;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42169 = state_42143;
state_42143 = G__42169;
continue;
} else {
return ret_value__32154__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32153__auto__ = function(state_42143){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32153__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32153__auto____1.call(this,state_42143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32153__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32153__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32153__auto__;
})()
;})(switch__32152__auto__,c__32217__auto___42161,out))
})();
var state__32219__auto__ = (function (){var statearr_42160 = f__32218__auto__.call(null);
(statearr_42160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32217__auto___42161);

return statearr_42160;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32219__auto__);
});})(c__32217__auto___42161,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__42170,p__42171){
var map__42176 = p__42170;
var map__42176__$1 = ((((!((map__42176 == null)))?((((map__42176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42176):map__42176);
var opts = map__42176__$1;
var url_rewriter = cljs.core.get.call(null,map__42176__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__42177 = p__42171;
var map__42177__$1 = ((((!((map__42177 == null)))?((((map__42177.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42177.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42177):map__42177);
var file_msg = map__42177__$1;
var file = cljs.core.get.call(null,map__42177__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__42180){
var map__42184 = p__42180;
var map__42184__$1 = ((((!((map__42184 == null)))?((((map__42184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42184):map__42184);
var eval_body__$1 = cljs.core.get.call(null,map__42184__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__42184__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28894__auto__ = eval_body__$1;
if(cljs.core.truth_(and__28894__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__28894__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e42186){var e = e42186;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__42191,p__42192){
var map__42419 = p__42191;
var map__42419__$1 = ((((!((map__42419 == null)))?((((map__42419.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42419.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42419):map__42419);
var opts = map__42419__$1;
var before_jsload = cljs.core.get.call(null,map__42419__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__42419__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__42419__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__42420 = p__42192;
var map__42420__$1 = ((((!((map__42420 == null)))?((((map__42420.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42420.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42420):map__42420);
var msg = map__42420__$1;
var files = cljs.core.get.call(null,map__42420__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__32217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files){
return (function (){
var f__32218__auto__ = (function (){var switch__32152__auto__ = ((function (c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files){
return (function (state_42560){
var state_val_42561 = (state_42560[(1)]);
if((state_val_42561 === (7))){
var inst_42434 = (state_42560[(7)]);
var inst_42435 = (state_42560[(8)]);
var inst_42433 = (state_42560[(9)]);
var inst_42436 = (state_42560[(10)]);
var inst_42441 = cljs.core._nth.call(null,inst_42434,inst_42436);
var inst_42442 = figwheel.client.file_reloading.eval_body.call(null,inst_42441);
var inst_42443 = (inst_42436 + (1));
var tmp42562 = inst_42434;
var tmp42563 = inst_42435;
var tmp42564 = inst_42433;
var inst_42433__$1 = tmp42564;
var inst_42434__$1 = tmp42562;
var inst_42435__$1 = tmp42563;
var inst_42436__$1 = inst_42443;
var state_42560__$1 = (function (){var statearr_42565 = state_42560;
(statearr_42565[(11)] = inst_42442);

(statearr_42565[(7)] = inst_42434__$1);

(statearr_42565[(8)] = inst_42435__$1);

(statearr_42565[(9)] = inst_42433__$1);

(statearr_42565[(10)] = inst_42436__$1);

return statearr_42565;
})();
var statearr_42566_42645 = state_42560__$1;
(statearr_42566_42645[(2)] = null);

(statearr_42566_42645[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (20))){
var inst_42482 = (state_42560[(12)]);
var inst_42478 = (state_42560[(13)]);
var inst_42479 = (state_42560[(14)]);
var inst_42485 = (state_42560[(15)]);
var inst_42483 = (state_42560[(16)]);
var inst_42488 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_42490 = (function (){var all_files = inst_42478;
var files_SINGLEQUOTE_ = inst_42479;
var res_SINGLEQUOTE_ = inst_42482;
var res = inst_42483;
var files_not_loaded = inst_42485;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_42482,inst_42478,inst_42479,inst_42485,inst_42483,inst_42488,state_val_42561,c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files){
return (function (p__42489){
var map__42567 = p__42489;
var map__42567__$1 = ((((!((map__42567 == null)))?((((map__42567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42567):map__42567);
var namespace = cljs.core.get.call(null,map__42567__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__42567__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_42482,inst_42478,inst_42479,inst_42485,inst_42483,inst_42488,state_val_42561,c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files))
})();
var inst_42491 = cljs.core.map.call(null,inst_42490,inst_42483);
var inst_42492 = cljs.core.pr_str.call(null,inst_42491);
var inst_42493 = figwheel.client.utils.log.call(null,inst_42492);
var inst_42494 = (function (){var all_files = inst_42478;
var files_SINGLEQUOTE_ = inst_42479;
var res_SINGLEQUOTE_ = inst_42482;
var res = inst_42483;
var files_not_loaded = inst_42485;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_42482,inst_42478,inst_42479,inst_42485,inst_42483,inst_42488,inst_42490,inst_42491,inst_42492,inst_42493,state_val_42561,c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_42482,inst_42478,inst_42479,inst_42485,inst_42483,inst_42488,inst_42490,inst_42491,inst_42492,inst_42493,state_val_42561,c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files))
})();
var inst_42495 = setTimeout(inst_42494,(10));
var state_42560__$1 = (function (){var statearr_42569 = state_42560;
(statearr_42569[(17)] = inst_42493);

(statearr_42569[(18)] = inst_42488);

return statearr_42569;
})();
var statearr_42570_42646 = state_42560__$1;
(statearr_42570_42646[(2)] = inst_42495);

(statearr_42570_42646[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (27))){
var state_42560__$1 = state_42560;
var statearr_42571_42647 = state_42560__$1;
(statearr_42571_42647[(2)] = false);

(statearr_42571_42647[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (1))){
var inst_42425 = (state_42560[(19)]);
var inst_42423 = before_jsload.call(null,files);
var inst_42424 = (function (){return ((function (inst_42425,inst_42423,state_val_42561,c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files){
return (function (p1__42187_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42187_SHARP_);
});
;})(inst_42425,inst_42423,state_val_42561,c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files))
})();
var inst_42425__$1 = cljs.core.filter.call(null,inst_42424,files);
var inst_42426 = cljs.core.not_empty.call(null,inst_42425__$1);
var state_42560__$1 = (function (){var statearr_42572 = state_42560;
(statearr_42572[(20)] = inst_42423);

(statearr_42572[(19)] = inst_42425__$1);

return statearr_42572;
})();
if(cljs.core.truth_(inst_42426)){
var statearr_42573_42648 = state_42560__$1;
(statearr_42573_42648[(1)] = (2));

} else {
var statearr_42574_42649 = state_42560__$1;
(statearr_42574_42649[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (24))){
var state_42560__$1 = state_42560;
var statearr_42575_42650 = state_42560__$1;
(statearr_42575_42650[(2)] = null);

(statearr_42575_42650[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (39))){
var state_42560__$1 = state_42560;
var statearr_42576_42651 = state_42560__$1;
(statearr_42576_42651[(2)] = null);

(statearr_42576_42651[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (4))){
var inst_42470 = (state_42560[(2)]);
var inst_42471 = (function (){return ((function (inst_42470,state_val_42561,c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files){
return (function (p1__42188_SHARP_){
var and__28894__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__42188_SHARP_);
if(cljs.core.truth_(and__28894__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__42188_SHARP_));
} else {
return and__28894__auto__;
}
});
;})(inst_42470,state_val_42561,c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files))
})();
var inst_42472 = cljs.core.filter.call(null,inst_42471,files);
var state_42560__$1 = (function (){var statearr_42577 = state_42560;
(statearr_42577[(21)] = inst_42472);

(statearr_42577[(22)] = inst_42470);

return statearr_42577;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_42578_42652 = state_42560__$1;
(statearr_42578_42652[(1)] = (16));

} else {
var statearr_42579_42653 = state_42560__$1;
(statearr_42579_42653[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (15))){
var inst_42460 = (state_42560[(2)]);
var state_42560__$1 = state_42560;
var statearr_42580_42654 = state_42560__$1;
(statearr_42580_42654[(2)] = inst_42460);

(statearr_42580_42654[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (21))){
var state_42560__$1 = state_42560;
var statearr_42581_42655 = state_42560__$1;
(statearr_42581_42655[(2)] = null);

(statearr_42581_42655[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (31))){
var inst_42517 = (state_42560[(2)]);
var state_42560__$1 = state_42560;
var statearr_42582_42656 = state_42560__$1;
(statearr_42582_42656[(2)] = inst_42517);

(statearr_42582_42656[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (32))){
var inst_42505 = (state_42560[(23)]);
var inst_42522 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42505);
var state_42560__$1 = state_42560;
var statearr_42583_42657 = state_42560__$1;
(statearr_42583_42657[(2)] = inst_42522);

(statearr_42583_42657[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (40))){
var inst_42528 = (state_42560[(24)]);
var inst_42546 = (state_42560[(2)]);
var inst_42547 = cljs.core.not_empty.call(null,inst_42528);
var state_42560__$1 = (function (){var statearr_42584 = state_42560;
(statearr_42584[(25)] = inst_42546);

return statearr_42584;
})();
if(cljs.core.truth_(inst_42547)){
var statearr_42585_42658 = state_42560__$1;
(statearr_42585_42658[(1)] = (41));

} else {
var statearr_42586_42659 = state_42560__$1;
(statearr_42586_42659[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (33))){
var inst_42505 = (state_42560[(23)]);
var state_42560__$1 = state_42560;
var statearr_42587_42660 = state_42560__$1;
(statearr_42587_42660[(2)] = inst_42505);

(statearr_42587_42660[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (13))){
var inst_42446 = (state_42560[(26)]);
var inst_42450 = cljs.core.chunk_first.call(null,inst_42446);
var inst_42451 = cljs.core.chunk_rest.call(null,inst_42446);
var inst_42452 = cljs.core.count.call(null,inst_42450);
var inst_42433 = inst_42451;
var inst_42434 = inst_42450;
var inst_42435 = inst_42452;
var inst_42436 = (0);
var state_42560__$1 = (function (){var statearr_42588 = state_42560;
(statearr_42588[(7)] = inst_42434);

(statearr_42588[(8)] = inst_42435);

(statearr_42588[(9)] = inst_42433);

(statearr_42588[(10)] = inst_42436);

return statearr_42588;
})();
var statearr_42589_42661 = state_42560__$1;
(statearr_42589_42661[(2)] = null);

(statearr_42589_42661[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (22))){
var inst_42485 = (state_42560[(15)]);
var inst_42498 = (state_42560[(2)]);
var inst_42499 = cljs.core.not_empty.call(null,inst_42485);
var state_42560__$1 = (function (){var statearr_42590 = state_42560;
(statearr_42590[(27)] = inst_42498);

return statearr_42590;
})();
if(cljs.core.truth_(inst_42499)){
var statearr_42591_42662 = state_42560__$1;
(statearr_42591_42662[(1)] = (23));

} else {
var statearr_42592_42663 = state_42560__$1;
(statearr_42592_42663[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (36))){
var state_42560__$1 = state_42560;
var statearr_42593_42664 = state_42560__$1;
(statearr_42593_42664[(2)] = null);

(statearr_42593_42664[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (41))){
var inst_42528 = (state_42560[(24)]);
var inst_42549 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42528);
var inst_42550 = cljs.core.pr_str.call(null,inst_42549);
var inst_42551 = [cljs.core.str("not required: "),cljs.core.str(inst_42550)].join('');
var inst_42552 = figwheel.client.utils.log.call(null,inst_42551);
var state_42560__$1 = state_42560;
var statearr_42594_42665 = state_42560__$1;
(statearr_42594_42665[(2)] = inst_42552);

(statearr_42594_42665[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (43))){
var inst_42555 = (state_42560[(2)]);
var state_42560__$1 = state_42560;
var statearr_42595_42666 = state_42560__$1;
(statearr_42595_42666[(2)] = inst_42555);

(statearr_42595_42666[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (29))){
var state_42560__$1 = state_42560;
var statearr_42596_42667 = state_42560__$1;
(statearr_42596_42667[(2)] = true);

(statearr_42596_42667[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (6))){
var inst_42467 = (state_42560[(2)]);
var state_42560__$1 = state_42560;
var statearr_42597_42668 = state_42560__$1;
(statearr_42597_42668[(2)] = inst_42467);

(statearr_42597_42668[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (28))){
var inst_42520 = (state_42560[(2)]);
var state_42560__$1 = state_42560;
if(cljs.core.truth_(inst_42520)){
var statearr_42598_42669 = state_42560__$1;
(statearr_42598_42669[(1)] = (32));

} else {
var statearr_42599_42670 = state_42560__$1;
(statearr_42599_42670[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (25))){
var inst_42558 = (state_42560[(2)]);
var state_42560__$1 = state_42560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42560__$1,inst_42558);
} else {
if((state_val_42561 === (34))){
var inst_42526 = (state_42560[(28)]);
var inst_42525 = (state_42560[(2)]);
var inst_42526__$1 = cljs.core.get.call(null,inst_42525,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_42527 = cljs.core.get.call(null,inst_42525,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_42528 = cljs.core.get.call(null,inst_42525,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_42529 = cljs.core.not_empty.call(null,inst_42526__$1);
var state_42560__$1 = (function (){var statearr_42600 = state_42560;
(statearr_42600[(29)] = inst_42527);

(statearr_42600[(24)] = inst_42528);

(statearr_42600[(28)] = inst_42526__$1);

return statearr_42600;
})();
if(cljs.core.truth_(inst_42529)){
var statearr_42601_42671 = state_42560__$1;
(statearr_42601_42671[(1)] = (35));

} else {
var statearr_42602_42672 = state_42560__$1;
(statearr_42602_42672[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (17))){
var inst_42472 = (state_42560[(21)]);
var state_42560__$1 = state_42560;
var statearr_42603_42673 = state_42560__$1;
(statearr_42603_42673[(2)] = inst_42472);

(statearr_42603_42673[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (3))){
var state_42560__$1 = state_42560;
var statearr_42604_42674 = state_42560__$1;
(statearr_42604_42674[(2)] = null);

(statearr_42604_42674[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (12))){
var inst_42463 = (state_42560[(2)]);
var state_42560__$1 = state_42560;
var statearr_42605_42675 = state_42560__$1;
(statearr_42605_42675[(2)] = inst_42463);

(statearr_42605_42675[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (2))){
var inst_42425 = (state_42560[(19)]);
var inst_42432 = cljs.core.seq.call(null,inst_42425);
var inst_42433 = inst_42432;
var inst_42434 = null;
var inst_42435 = (0);
var inst_42436 = (0);
var state_42560__$1 = (function (){var statearr_42606 = state_42560;
(statearr_42606[(7)] = inst_42434);

(statearr_42606[(8)] = inst_42435);

(statearr_42606[(9)] = inst_42433);

(statearr_42606[(10)] = inst_42436);

return statearr_42606;
})();
var statearr_42607_42676 = state_42560__$1;
(statearr_42607_42676[(2)] = null);

(statearr_42607_42676[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (23))){
var inst_42482 = (state_42560[(12)]);
var inst_42505 = (state_42560[(23)]);
var inst_42478 = (state_42560[(13)]);
var inst_42479 = (state_42560[(14)]);
var inst_42485 = (state_42560[(15)]);
var inst_42483 = (state_42560[(16)]);
var inst_42501 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_42504 = (function (){var all_files = inst_42478;
var files_SINGLEQUOTE_ = inst_42479;
var res_SINGLEQUOTE_ = inst_42482;
var res = inst_42483;
var files_not_loaded = inst_42485;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_42482,inst_42505,inst_42478,inst_42479,inst_42485,inst_42483,inst_42501,state_val_42561,c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files){
return (function (p__42503){
var map__42608 = p__42503;
var map__42608__$1 = ((((!((map__42608 == null)))?((((map__42608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42608):map__42608);
var meta_data = cljs.core.get.call(null,map__42608__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_42482,inst_42505,inst_42478,inst_42479,inst_42485,inst_42483,inst_42501,state_val_42561,c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files))
})();
var inst_42505__$1 = cljs.core.group_by.call(null,inst_42504,inst_42485);
var inst_42507 = (inst_42505__$1 == null);
var inst_42508 = cljs.core.not.call(null,inst_42507);
var state_42560__$1 = (function (){var statearr_42610 = state_42560;
(statearr_42610[(23)] = inst_42505__$1);

(statearr_42610[(30)] = inst_42501);

return statearr_42610;
})();
if(inst_42508){
var statearr_42611_42677 = state_42560__$1;
(statearr_42611_42677[(1)] = (26));

} else {
var statearr_42612_42678 = state_42560__$1;
(statearr_42612_42678[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (35))){
var inst_42526 = (state_42560[(28)]);
var inst_42531 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42526);
var inst_42532 = cljs.core.pr_str.call(null,inst_42531);
var inst_42533 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_42532)].join('');
var inst_42534 = figwheel.client.utils.log.call(null,inst_42533);
var state_42560__$1 = state_42560;
var statearr_42613_42679 = state_42560__$1;
(statearr_42613_42679[(2)] = inst_42534);

(statearr_42613_42679[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (19))){
var inst_42482 = (state_42560[(12)]);
var inst_42478 = (state_42560[(13)]);
var inst_42479 = (state_42560[(14)]);
var inst_42483 = (state_42560[(16)]);
var inst_42482__$1 = (state_42560[(2)]);
var inst_42483__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_42482__$1);
var inst_42484 = (function (){var all_files = inst_42478;
var files_SINGLEQUOTE_ = inst_42479;
var res_SINGLEQUOTE_ = inst_42482__$1;
var res = inst_42483__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_42482,inst_42478,inst_42479,inst_42483,inst_42482__$1,inst_42483__$1,state_val_42561,c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files){
return (function (p1__42190_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__42190_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_42482,inst_42478,inst_42479,inst_42483,inst_42482__$1,inst_42483__$1,state_val_42561,c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files))
})();
var inst_42485 = cljs.core.filter.call(null,inst_42484,inst_42482__$1);
var inst_42486 = cljs.core.not_empty.call(null,inst_42483__$1);
var state_42560__$1 = (function (){var statearr_42614 = state_42560;
(statearr_42614[(12)] = inst_42482__$1);

(statearr_42614[(15)] = inst_42485);

(statearr_42614[(16)] = inst_42483__$1);

return statearr_42614;
})();
if(cljs.core.truth_(inst_42486)){
var statearr_42615_42680 = state_42560__$1;
(statearr_42615_42680[(1)] = (20));

} else {
var statearr_42616_42681 = state_42560__$1;
(statearr_42616_42681[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (11))){
var state_42560__$1 = state_42560;
var statearr_42617_42682 = state_42560__$1;
(statearr_42617_42682[(2)] = null);

(statearr_42617_42682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (9))){
var inst_42465 = (state_42560[(2)]);
var state_42560__$1 = state_42560;
var statearr_42618_42683 = state_42560__$1;
(statearr_42618_42683[(2)] = inst_42465);

(statearr_42618_42683[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (5))){
var inst_42435 = (state_42560[(8)]);
var inst_42436 = (state_42560[(10)]);
var inst_42438 = (inst_42436 < inst_42435);
var inst_42439 = inst_42438;
var state_42560__$1 = state_42560;
if(cljs.core.truth_(inst_42439)){
var statearr_42619_42684 = state_42560__$1;
(statearr_42619_42684[(1)] = (7));

} else {
var statearr_42620_42685 = state_42560__$1;
(statearr_42620_42685[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (14))){
var inst_42446 = (state_42560[(26)]);
var inst_42455 = cljs.core.first.call(null,inst_42446);
var inst_42456 = figwheel.client.file_reloading.eval_body.call(null,inst_42455);
var inst_42457 = cljs.core.next.call(null,inst_42446);
var inst_42433 = inst_42457;
var inst_42434 = null;
var inst_42435 = (0);
var inst_42436 = (0);
var state_42560__$1 = (function (){var statearr_42621 = state_42560;
(statearr_42621[(31)] = inst_42456);

(statearr_42621[(7)] = inst_42434);

(statearr_42621[(8)] = inst_42435);

(statearr_42621[(9)] = inst_42433);

(statearr_42621[(10)] = inst_42436);

return statearr_42621;
})();
var statearr_42622_42686 = state_42560__$1;
(statearr_42622_42686[(2)] = null);

(statearr_42622_42686[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (26))){
var inst_42505 = (state_42560[(23)]);
var inst_42510 = inst_42505.cljs$lang$protocol_mask$partition0$;
var inst_42511 = (inst_42510 & (64));
var inst_42512 = inst_42505.cljs$core$ISeq$;
var inst_42513 = (inst_42511) || (inst_42512);
var state_42560__$1 = state_42560;
if(cljs.core.truth_(inst_42513)){
var statearr_42623_42687 = state_42560__$1;
(statearr_42623_42687[(1)] = (29));

} else {
var statearr_42624_42688 = state_42560__$1;
(statearr_42624_42688[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (16))){
var inst_42472 = (state_42560[(21)]);
var inst_42474 = (function (){var all_files = inst_42472;
return ((function (all_files,inst_42472,state_val_42561,c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files){
return (function (p1__42189_SHARP_){
return cljs.core.update_in.call(null,p1__42189_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_42472,state_val_42561,c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files))
})();
var inst_42475 = cljs.core.map.call(null,inst_42474,inst_42472);
var state_42560__$1 = state_42560;
var statearr_42625_42689 = state_42560__$1;
(statearr_42625_42689[(2)] = inst_42475);

(statearr_42625_42689[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (38))){
var inst_42527 = (state_42560[(29)]);
var inst_42540 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42527);
var inst_42541 = cljs.core.pr_str.call(null,inst_42540);
var inst_42542 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_42541)].join('');
var inst_42543 = figwheel.client.utils.log.call(null,inst_42542);
var state_42560__$1 = state_42560;
var statearr_42626_42690 = state_42560__$1;
(statearr_42626_42690[(2)] = inst_42543);

(statearr_42626_42690[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (30))){
var state_42560__$1 = state_42560;
var statearr_42627_42691 = state_42560__$1;
(statearr_42627_42691[(2)] = false);

(statearr_42627_42691[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (10))){
var inst_42446 = (state_42560[(26)]);
var inst_42448 = cljs.core.chunked_seq_QMARK_.call(null,inst_42446);
var state_42560__$1 = state_42560;
if(inst_42448){
var statearr_42628_42692 = state_42560__$1;
(statearr_42628_42692[(1)] = (13));

} else {
var statearr_42629_42693 = state_42560__$1;
(statearr_42629_42693[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (18))){
var inst_42478 = (state_42560[(13)]);
var inst_42479 = (state_42560[(14)]);
var inst_42478__$1 = (state_42560[(2)]);
var inst_42479__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_42478__$1);
var inst_42480 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_42479__$1);
var state_42560__$1 = (function (){var statearr_42630 = state_42560;
(statearr_42630[(13)] = inst_42478__$1);

(statearr_42630[(14)] = inst_42479__$1);

return statearr_42630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42560__$1,(19),inst_42480);
} else {
if((state_val_42561 === (42))){
var state_42560__$1 = state_42560;
var statearr_42631_42694 = state_42560__$1;
(statearr_42631_42694[(2)] = null);

(statearr_42631_42694[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (37))){
var inst_42527 = (state_42560[(29)]);
var inst_42537 = (state_42560[(2)]);
var inst_42538 = cljs.core.not_empty.call(null,inst_42527);
var state_42560__$1 = (function (){var statearr_42632 = state_42560;
(statearr_42632[(32)] = inst_42537);

return statearr_42632;
})();
if(cljs.core.truth_(inst_42538)){
var statearr_42633_42695 = state_42560__$1;
(statearr_42633_42695[(1)] = (38));

} else {
var statearr_42634_42696 = state_42560__$1;
(statearr_42634_42696[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42561 === (8))){
var inst_42446 = (state_42560[(26)]);
var inst_42433 = (state_42560[(9)]);
var inst_42446__$1 = cljs.core.seq.call(null,inst_42433);
var state_42560__$1 = (function (){var statearr_42635 = state_42560;
(statearr_42635[(26)] = inst_42446__$1);

return statearr_42635;
})();
if(inst_42446__$1){
var statearr_42636_42697 = state_42560__$1;
(statearr_42636_42697[(1)] = (10));

} else {
var statearr_42637_42698 = state_42560__$1;
(statearr_42637_42698[(1)] = (11));

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
});})(c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files))
;
return ((function (switch__32152__auto__,c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32153__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32153__auto____0 = (function (){
var statearr_42641 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42641[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32153__auto__);

(statearr_42641[(1)] = (1));

return statearr_42641;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32153__auto____1 = (function (state_42560){
while(true){
var ret_value__32154__auto__ = (function (){try{while(true){
var result__32155__auto__ = switch__32152__auto__.call(null,state_42560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32155__auto__;
}
break;
}
}catch (e42642){if((e42642 instanceof Object)){
var ex__32156__auto__ = e42642;
var statearr_42643_42699 = state_42560;
(statearr_42643_42699[(5)] = ex__32156__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42700 = state_42560;
state_42560 = G__42700;
continue;
} else {
return ret_value__32154__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32153__auto__ = function(state_42560){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32153__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32153__auto____1.call(this,state_42560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32153__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32153__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32153__auto__;
})()
;})(switch__32152__auto__,c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files))
})();
var state__32219__auto__ = (function (){var statearr_42644 = f__32218__auto__.call(null);
(statearr_42644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32217__auto__);

return statearr_42644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32219__auto__);
});})(c__32217__auto__,map__42419,map__42419__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__42420,map__42420__$1,msg,files))
);

return c__32217__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__42703,link){
var map__42706 = p__42703;
var map__42706__$1 = ((((!((map__42706 == null)))?((((map__42706.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42706.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42706):map__42706);
var file = cljs.core.get.call(null,map__42706__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__42706,map__42706__$1,file){
return (function (p1__42701_SHARP_,p2__42702_SHARP_){
if(cljs.core._EQ_.call(null,p1__42701_SHARP_,p2__42702_SHARP_)){
return p1__42701_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__42706,map__42706__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__42712){
var map__42713 = p__42712;
var map__42713__$1 = ((((!((map__42713 == null)))?((((map__42713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42713):map__42713);
var match_length = cljs.core.get.call(null,map__42713__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__42713__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__42708_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__42708_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args42715 = [];
var len__29964__auto___42718 = arguments.length;
var i__29965__auto___42719 = (0);
while(true){
if((i__29965__auto___42719 < len__29964__auto___42718)){
args42715.push((arguments[i__29965__auto___42719]));

var G__42720 = (i__29965__auto___42719 + (1));
i__29965__auto___42719 = G__42720;
continue;
} else {
}
break;
}

var G__42717 = args42715.length;
switch (G__42717) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42715.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__42722){
var map__42725 = p__42722;
var map__42725__$1 = ((((!((map__42725 == null)))?((((map__42725.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42725.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42725):map__42725);
var f_data = map__42725__$1;
var file = cljs.core.get.call(null,map__42725__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__42725__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__28906__auto__ = request_url;
if(cljs.core.truth_(or__28906__auto__)){
return or__28906__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__42727,files_msg){
var map__42750 = p__42727;
var map__42750__$1 = ((((!((map__42750 == null)))?((((map__42750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__42750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42750):map__42750);
var opts = map__42750__$1;
var on_cssload = cljs.core.get.call(null,map__42750__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__42752_42772 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__42753_42773 = null;
var count__42754_42774 = (0);
var i__42755_42775 = (0);
while(true){
if((i__42755_42775 < count__42754_42774)){
var f_42776 = cljs.core._nth.call(null,chunk__42753_42773,i__42755_42775);
figwheel.client.file_reloading.reload_css_file.call(null,f_42776);

var G__42777 = seq__42752_42772;
var G__42778 = chunk__42753_42773;
var G__42779 = count__42754_42774;
var G__42780 = (i__42755_42775 + (1));
seq__42752_42772 = G__42777;
chunk__42753_42773 = G__42778;
count__42754_42774 = G__42779;
i__42755_42775 = G__42780;
continue;
} else {
var temp__4425__auto___42781 = cljs.core.seq.call(null,seq__42752_42772);
if(temp__4425__auto___42781){
var seq__42752_42782__$1 = temp__4425__auto___42781;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42752_42782__$1)){
var c__29709__auto___42783 = cljs.core.chunk_first.call(null,seq__42752_42782__$1);
var G__42784 = cljs.core.chunk_rest.call(null,seq__42752_42782__$1);
var G__42785 = c__29709__auto___42783;
var G__42786 = cljs.core.count.call(null,c__29709__auto___42783);
var G__42787 = (0);
seq__42752_42772 = G__42784;
chunk__42753_42773 = G__42785;
count__42754_42774 = G__42786;
i__42755_42775 = G__42787;
continue;
} else {
var f_42788 = cljs.core.first.call(null,seq__42752_42782__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_42788);

var G__42789 = cljs.core.next.call(null,seq__42752_42782__$1);
var G__42790 = null;
var G__42791 = (0);
var G__42792 = (0);
seq__42752_42772 = G__42789;
chunk__42753_42773 = G__42790;
count__42754_42774 = G__42791;
i__42755_42775 = G__42792;
continue;
}
} else {
}
}
break;
}

var c__32217__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32217__auto__,map__42750,map__42750__$1,opts,on_cssload){
return (function (){
var f__32218__auto__ = (function (){var switch__32152__auto__ = ((function (c__32217__auto__,map__42750,map__42750__$1,opts,on_cssload){
return (function (state_42762){
var state_val_42763 = (state_42762[(1)]);
if((state_val_42763 === (1))){
var inst_42756 = cljs.core.async.timeout.call(null,(100));
var state_42762__$1 = state_42762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42762__$1,(2),inst_42756);
} else {
if((state_val_42763 === (2))){
var inst_42758 = (state_42762[(2)]);
var inst_42759 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_42760 = on_cssload.call(null,inst_42759);
var state_42762__$1 = (function (){var statearr_42764 = state_42762;
(statearr_42764[(7)] = inst_42758);

return statearr_42764;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42762__$1,inst_42760);
} else {
return null;
}
}
});})(c__32217__auto__,map__42750,map__42750__$1,opts,on_cssload))
;
return ((function (switch__32152__auto__,c__32217__auto__,map__42750,map__42750__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__32153__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__32153__auto____0 = (function (){
var statearr_42768 = [null,null,null,null,null,null,null,null];
(statearr_42768[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__32153__auto__);

(statearr_42768[(1)] = (1));

return statearr_42768;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__32153__auto____1 = (function (state_42762){
while(true){
var ret_value__32154__auto__ = (function (){try{while(true){
var result__32155__auto__ = switch__32152__auto__.call(null,state_42762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32155__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32155__auto__;
}
break;
}
}catch (e42769){if((e42769 instanceof Object)){
var ex__32156__auto__ = e42769;
var statearr_42770_42793 = state_42762;
(statearr_42770_42793[(5)] = ex__32156__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42769;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32154__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42794 = state_42762;
state_42762 = G__42794;
continue;
} else {
return ret_value__32154__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__32153__auto__ = function(state_42762){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__32153__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__32153__auto____1.call(this,state_42762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__32153__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__32153__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__32153__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__32153__auto__;
})()
;})(switch__32152__auto__,c__32217__auto__,map__42750,map__42750__$1,opts,on_cssload))
})();
var state__32219__auto__ = (function (){var statearr_42771 = f__32218__auto__.call(null);
(statearr_42771[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__32217__auto__);

return statearr_42771;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32219__auto__);
});})(c__32217__auto__,map__42750,map__42750__$1,opts,on_cssload))
);

return c__32217__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map