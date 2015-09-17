// Compiled by ClojureScript 0.0-3058 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');

figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__35175_SHARP_,p2__35176_SHARP_){
var and__27651__auto__ = p1__35175_SHARP_;
if(cljs.core.truth_(and__27651__auto__)){
return p2__35176_SHARP_;
} else {
return and__27651__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__27663__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__27663__auto__){
return or__27663__auto__;
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

return [cljs.core.str(clojure.string.replace.call(null,goog.basePath,/(.*)goog\//,(function (p1__35178_SHARP_,p2__35177_SHARP_){
return [cljs.core.str(p2__35177_SHARP_)].join('');
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
if(cljs.core.truth_((function (){var or__27663__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__27663__auto__){
return or__27663__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__27663__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__27663__auto__)){
return or__27663__auto__;
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
figwheel.client.file_reloading.resolve_url = (function (){var method_table__28560__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28561__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28562__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28564__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28564__auto__,method_table__28560__auto__,prefer_table__28561__auto__,method_cache__28562__auto__,cached_hierarchy__28563__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__35179){
var map__35180 = p__35179;
var map__35180__$1 = ((cljs.core.seq_QMARK_.call(null,map__35180))?cljs.core.apply.call(null,cljs.core.hash_map,map__35180):map__35180);
var file = cljs.core.get.call(null,map__35180__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__35181){
var map__35182 = p__35181;
var map__35182__$1 = ((cljs.core.seq_QMARK_.call(null,map__35182))?cljs.core.apply.call(null,cljs.core.hash_map,map__35182):map__35182);
var namespace = cljs.core.get.call(null,map__35182__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
figwheel.client.file_reloading.reload_base = (function (){var method_table__28560__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__28561__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__28562__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__28563__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__28564__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__28564__auto__,method_table__28560__auto__,prefer_table__28561__auto__,method_cache__28562__auto__,cached_hierarchy__28563__auto__));
})();
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e35183){if((e35183 instanceof Error)){
var e = e35183;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e35183;

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
figwheel.client.file_reloading.reload_file_STAR_ = (function() {
var figwheel$client$file_reloading$reload_file_STAR_ = null;
var figwheel$client$file_reloading$reload_file_STAR___1 = (function (request_url){
return figwheel$client$file_reloading$reload_file_STAR_.call(null,request_url,cljs.core.identity);
});
var figwheel$client$file_reloading$reload_file_STAR___2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});
figwheel$client$file_reloading$reload_file_STAR_ = function(request_url,callback){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$reload_file_STAR___1.call(this,request_url);
case 2:
return figwheel$client$file_reloading$reload_file_STAR___2.call(this,request_url,callback);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_file_STAR___1;
figwheel$client$file_reloading$reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$reload_file_STAR___2;
return figwheel$client$file_reloading$reload_file_STAR_;
})()
;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__35184,callback){
var map__35186 = p__35184;
var map__35186__$1 = ((cljs.core.seq_QMARK_.call(null,map__35186))?cljs.core.apply.call(null,cljs.core.hash_map,map__35186):map__35186);
var file_msg = map__35186__$1;
var request_url = cljs.core.get.call(null,map__35186__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__35186,map__35186__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__35186,map__35186__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__35187){
var map__35189 = p__35187;
var map__35189__$1 = ((cljs.core.seq_QMARK_.call(null,map__35189))?cljs.core.apply.call(null,cljs.core.hash_map,map__35189):map__35189);
var file_msg = map__35189__$1;
var namespace = cljs.core.get.call(null,map__35189__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__35189__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__27663__auto__ = meta_data;
if(cljs.core.truth_(or__27663__auto__)){
return or__27663__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__27651__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__27651__auto__){
var or__27663__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__27663__auto__)){
return or__27663__auto__;
} else {
var or__27663__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__27663__auto____$1)){
return or__27663__auto____$1;
} else {
var and__27651__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__27651__auto____$1){
var or__27663__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__27663__auto____$2){
return or__27663__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__27651__auto____$1;
}
}
}
} else {
return and__27651__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__35190,callback){
var map__35192 = p__35190;
var map__35192__$1 = ((cljs.core.seq_QMARK_.call(null,map__35192))?cljs.core.apply.call(null,cljs.core.hash_map,map__35192):map__35192);
var file_msg = map__35192__$1;
var request_url = cljs.core.get.call(null,map__35192__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__35192__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30074__auto___35279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto___35279,out){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto___35279,out){
return (function (state_35261){
var state_val_35262 = (state_35261[(1)]);
if((state_val_35262 === (1))){
var inst_35239 = cljs.core.nth.call(null,files,(0),null);
var inst_35240 = cljs.core.nthnext.call(null,files,(1));
var inst_35241 = files;
var state_35261__$1 = (function (){var statearr_35263 = state_35261;
(statearr_35263[(7)] = inst_35239);

(statearr_35263[(8)] = inst_35241);

(statearr_35263[(9)] = inst_35240);

return statearr_35263;
})();
var statearr_35264_35280 = state_35261__$1;
(statearr_35264_35280[(2)] = null);

(statearr_35264_35280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (2))){
var inst_35241 = (state_35261[(8)]);
var inst_35244 = (state_35261[(10)]);
var inst_35244__$1 = cljs.core.nth.call(null,inst_35241,(0),null);
var inst_35245 = cljs.core.nthnext.call(null,inst_35241,(1));
var inst_35246 = (inst_35244__$1 == null);
var inst_35247 = cljs.core.not.call(null,inst_35246);
var state_35261__$1 = (function (){var statearr_35265 = state_35261;
(statearr_35265[(11)] = inst_35245);

(statearr_35265[(10)] = inst_35244__$1);

return statearr_35265;
})();
if(inst_35247){
var statearr_35266_35281 = state_35261__$1;
(statearr_35266_35281[(1)] = (4));

} else {
var statearr_35267_35282 = state_35261__$1;
(statearr_35267_35282[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (3))){
var inst_35259 = (state_35261[(2)]);
var state_35261__$1 = state_35261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35261__$1,inst_35259);
} else {
if((state_val_35262 === (4))){
var inst_35244 = (state_35261[(10)]);
var inst_35249 = figwheel.client.file_reloading.reload_js_file.call(null,inst_35244);
var state_35261__$1 = state_35261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35261__$1,(7),inst_35249);
} else {
if((state_val_35262 === (5))){
var inst_35255 = cljs.core.async.close_BANG_.call(null,out);
var state_35261__$1 = state_35261;
var statearr_35268_35283 = state_35261__$1;
(statearr_35268_35283[(2)] = inst_35255);

(statearr_35268_35283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (6))){
var inst_35257 = (state_35261[(2)]);
var state_35261__$1 = state_35261;
var statearr_35269_35284 = state_35261__$1;
(statearr_35269_35284[(2)] = inst_35257);

(statearr_35269_35284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35262 === (7))){
var inst_35245 = (state_35261[(11)]);
var inst_35251 = (state_35261[(2)]);
var inst_35252 = cljs.core.async.put_BANG_.call(null,out,inst_35251);
var inst_35241 = inst_35245;
var state_35261__$1 = (function (){var statearr_35270 = state_35261;
(statearr_35270[(12)] = inst_35252);

(statearr_35270[(8)] = inst_35241);

return statearr_35270;
})();
var statearr_35271_35285 = state_35261__$1;
(statearr_35271_35285[(2)] = null);

(statearr_35271_35285[(1)] = (2));


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
});})(c__30074__auto___35279,out))
;
return ((function (switch__30018__auto__,c__30074__auto___35279,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30019__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30019__auto____0 = (function (){
var statearr_35275 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35275[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30019__auto__);

(statearr_35275[(1)] = (1));

return statearr_35275;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30019__auto____1 = (function (state_35261){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_35261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e35276){if((e35276 instanceof Object)){
var ex__30022__auto__ = e35276;
var statearr_35277_35286 = state_35261;
(statearr_35277_35286[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35287 = state_35261;
state_35261 = G__35287;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30019__auto__ = function(state_35261){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30019__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30019__auto____1.call(this,state_35261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30019__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30019__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto___35279,out))
})();
var state__30076__auto__ = (function (){var statearr_35278 = f__30075__auto__.call(null);
(statearr_35278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto___35279);

return statearr_35278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto___35279,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__35288,p__35289){
var map__35292 = p__35288;
var map__35292__$1 = ((cljs.core.seq_QMARK_.call(null,map__35292))?cljs.core.apply.call(null,cljs.core.hash_map,map__35292):map__35292);
var opts = map__35292__$1;
var url_rewriter = cljs.core.get.call(null,map__35292__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__35293 = p__35289;
var map__35293__$1 = ((cljs.core.seq_QMARK_.call(null,map__35293))?cljs.core.apply.call(null,cljs.core.hash_map,map__35293):map__35293);
var file_msg = map__35293__$1;
var file = cljs.core.get.call(null,map__35293__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__35294){
var map__35297 = p__35294;
var map__35297__$1 = ((cljs.core.seq_QMARK_.call(null,map__35297))?cljs.core.apply.call(null,cljs.core.hash_map,map__35297):map__35297);
var eval_body__$1 = cljs.core.get.call(null,map__35297__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__35297__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__27651__auto__ = eval_body__$1;
if(cljs.core.truth_(and__27651__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__27651__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return eval(code);
}catch (e35298){var e = e35298;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__35303,p__35304){
var map__35505 = p__35303;
var map__35505__$1 = ((cljs.core.seq_QMARK_.call(null,map__35505))?cljs.core.apply.call(null,cljs.core.hash_map,map__35505):map__35505);
var opts = map__35505__$1;
var before_jsload = cljs.core.get.call(null,map__35505__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35505__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__35505__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__35506 = p__35304;
var map__35506__$1 = ((cljs.core.seq_QMARK_.call(null,map__35506))?cljs.core.apply.call(null,cljs.core.hash_map,map__35506):map__35506);
var msg = map__35506__$1;
var files = cljs.core.get.call(null,map__35506__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__30074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files){
return (function (state_35630){
var state_val_35631 = (state_35630[(1)]);
if((state_val_35631 === (7))){
var inst_35519 = (state_35630[(7)]);
var inst_35517 = (state_35630[(8)]);
var inst_35520 = (state_35630[(9)]);
var inst_35518 = (state_35630[(10)]);
var inst_35525 = cljs.core._nth.call(null,inst_35518,inst_35520);
var inst_35526 = figwheel.client.file_reloading.eval_body.call(null,inst_35525);
var inst_35527 = (inst_35520 + (1));
var tmp35632 = inst_35519;
var tmp35633 = inst_35517;
var tmp35634 = inst_35518;
var inst_35517__$1 = tmp35633;
var inst_35518__$1 = tmp35634;
var inst_35519__$1 = tmp35632;
var inst_35520__$1 = inst_35527;
var state_35630__$1 = (function (){var statearr_35635 = state_35630;
(statearr_35635[(7)] = inst_35519__$1);

(statearr_35635[(8)] = inst_35517__$1);

(statearr_35635[(11)] = inst_35526);

(statearr_35635[(9)] = inst_35520__$1);

(statearr_35635[(10)] = inst_35518__$1);

return statearr_35635;
})();
var statearr_35636_35705 = state_35630__$1;
(statearr_35636_35705[(2)] = null);

(statearr_35636_35705[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (20))){
var inst_35569 = (state_35630[(12)]);
var inst_35562 = (state_35630[(13)]);
var inst_35563 = (state_35630[(14)]);
var inst_35566 = (state_35630[(15)]);
var inst_35567 = (state_35630[(16)]);
var inst_35572 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35574 = (function (){var all_files = inst_35562;
var files_SINGLEQUOTE_ = inst_35563;
var res_SINGLEQUOTE_ = inst_35566;
var res = inst_35567;
var files_not_loaded = inst_35569;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35569,inst_35562,inst_35563,inst_35566,inst_35567,inst_35572,state_val_35631,c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files){
return (function (p__35573){
var map__35637 = p__35573;
var map__35637__$1 = ((cljs.core.seq_QMARK_.call(null,map__35637))?cljs.core.apply.call(null,cljs.core.hash_map,map__35637):map__35637);
var namespace = cljs.core.get.call(null,map__35637__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35637__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35569,inst_35562,inst_35563,inst_35566,inst_35567,inst_35572,state_val_35631,c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files))
})();
var inst_35575 = cljs.core.map.call(null,inst_35574,inst_35567);
var inst_35576 = cljs.core.pr_str.call(null,inst_35575);
var inst_35577 = figwheel.client.utils.log.call(null,inst_35576);
var inst_35578 = (function (){var all_files = inst_35562;
var files_SINGLEQUOTE_ = inst_35563;
var res_SINGLEQUOTE_ = inst_35566;
var res = inst_35567;
var files_not_loaded = inst_35569;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35569,inst_35562,inst_35563,inst_35566,inst_35567,inst_35572,inst_35574,inst_35575,inst_35576,inst_35577,state_val_35631,c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files){
return (function (){
return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35569,inst_35562,inst_35563,inst_35566,inst_35567,inst_35572,inst_35574,inst_35575,inst_35576,inst_35577,state_val_35631,c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files))
})();
var inst_35579 = setTimeout(inst_35578,(10));
var state_35630__$1 = (function (){var statearr_35638 = state_35630;
(statearr_35638[(17)] = inst_35572);

(statearr_35638[(18)] = inst_35577);

return statearr_35638;
})();
var statearr_35639_35706 = state_35630__$1;
(statearr_35639_35706[(2)] = inst_35579);

(statearr_35639_35706[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (27))){
var inst_35589 = (state_35630[(19)]);
var state_35630__$1 = state_35630;
var statearr_35640_35707 = state_35630__$1;
(statearr_35640_35707[(2)] = inst_35589);

(statearr_35640_35707[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (1))){
var inst_35509 = (state_35630[(20)]);
var inst_35507 = before_jsload.call(null,files);
var inst_35508 = (function (){return ((function (inst_35509,inst_35507,state_val_35631,c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files){
return (function (p1__35299_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35299_SHARP_);
});
;})(inst_35509,inst_35507,state_val_35631,c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files))
})();
var inst_35509__$1 = cljs.core.filter.call(null,inst_35508,files);
var inst_35510 = cljs.core.not_empty.call(null,inst_35509__$1);
var state_35630__$1 = (function (){var statearr_35641 = state_35630;
(statearr_35641[(21)] = inst_35507);

(statearr_35641[(20)] = inst_35509__$1);

return statearr_35641;
})();
if(cljs.core.truth_(inst_35510)){
var statearr_35642_35708 = state_35630__$1;
(statearr_35642_35708[(1)] = (2));

} else {
var statearr_35643_35709 = state_35630__$1;
(statearr_35643_35709[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (24))){
var state_35630__$1 = state_35630;
var statearr_35644_35710 = state_35630__$1;
(statearr_35644_35710[(2)] = null);

(statearr_35644_35710[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (4))){
var inst_35554 = (state_35630[(2)]);
var inst_35555 = (function (){return ((function (inst_35554,state_val_35631,c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files){
return (function (p1__35300_SHARP_){
var and__27651__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__35300_SHARP_);
if(cljs.core.truth_(and__27651__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__35300_SHARP_));
} else {
return and__27651__auto__;
}
});
;})(inst_35554,state_val_35631,c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files))
})();
var inst_35556 = cljs.core.filter.call(null,inst_35555,files);
var state_35630__$1 = (function (){var statearr_35645 = state_35630;
(statearr_35645[(22)] = inst_35554);

(statearr_35645[(23)] = inst_35556);

return statearr_35645;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_35646_35711 = state_35630__$1;
(statearr_35646_35711[(1)] = (16));

} else {
var statearr_35647_35712 = state_35630__$1;
(statearr_35647_35712[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (15))){
var inst_35544 = (state_35630[(2)]);
var state_35630__$1 = state_35630;
var statearr_35648_35713 = state_35630__$1;
(statearr_35648_35713[(2)] = inst_35544);

(statearr_35648_35713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (21))){
var state_35630__$1 = state_35630;
var statearr_35649_35714 = state_35630__$1;
(statearr_35649_35714[(2)] = null);

(statearr_35649_35714[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (31))){
var inst_35597 = (state_35630[(24)]);
var inst_35607 = (state_35630[(2)]);
var inst_35608 = cljs.core.not_empty.call(null,inst_35597);
var state_35630__$1 = (function (){var statearr_35650 = state_35630;
(statearr_35650[(25)] = inst_35607);

return statearr_35650;
})();
if(cljs.core.truth_(inst_35608)){
var statearr_35651_35715 = state_35630__$1;
(statearr_35651_35715[(1)] = (32));

} else {
var statearr_35652_35716 = state_35630__$1;
(statearr_35652_35716[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (32))){
var inst_35597 = (state_35630[(24)]);
var inst_35610 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35597);
var inst_35611 = cljs.core.pr_str.call(null,inst_35610);
var inst_35612 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_35611)].join('');
var inst_35613 = figwheel.client.utils.log.call(null,inst_35612);
var state_35630__$1 = state_35630;
var statearr_35653_35717 = state_35630__$1;
(statearr_35653_35717[(2)] = inst_35613);

(statearr_35653_35717[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (33))){
var state_35630__$1 = state_35630;
var statearr_35654_35718 = state_35630__$1;
(statearr_35654_35718[(2)] = null);

(statearr_35654_35718[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (13))){
var inst_35530 = (state_35630[(26)]);
var inst_35534 = cljs.core.chunk_first.call(null,inst_35530);
var inst_35535 = cljs.core.chunk_rest.call(null,inst_35530);
var inst_35536 = cljs.core.count.call(null,inst_35534);
var inst_35517 = inst_35535;
var inst_35518 = inst_35534;
var inst_35519 = inst_35536;
var inst_35520 = (0);
var state_35630__$1 = (function (){var statearr_35655 = state_35630;
(statearr_35655[(7)] = inst_35519);

(statearr_35655[(8)] = inst_35517);

(statearr_35655[(9)] = inst_35520);

(statearr_35655[(10)] = inst_35518);

return statearr_35655;
})();
var statearr_35656_35719 = state_35630__$1;
(statearr_35656_35719[(2)] = null);

(statearr_35656_35719[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (22))){
var inst_35569 = (state_35630[(12)]);
var inst_35582 = (state_35630[(2)]);
var inst_35583 = cljs.core.not_empty.call(null,inst_35569);
var state_35630__$1 = (function (){var statearr_35657 = state_35630;
(statearr_35657[(27)] = inst_35582);

return statearr_35657;
})();
if(cljs.core.truth_(inst_35583)){
var statearr_35658_35720 = state_35630__$1;
(statearr_35658_35720[(1)] = (23));

} else {
var statearr_35659_35721 = state_35630__$1;
(statearr_35659_35721[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (36))){
var state_35630__$1 = state_35630;
var statearr_35660_35722 = state_35630__$1;
(statearr_35660_35722[(2)] = null);

(statearr_35660_35722[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (29))){
var inst_35596 = (state_35630[(28)]);
var inst_35601 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35596);
var inst_35602 = cljs.core.pr_str.call(null,inst_35601);
var inst_35603 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35602)].join('');
var inst_35604 = figwheel.client.utils.log.call(null,inst_35603);
var state_35630__$1 = state_35630;
var statearr_35661_35723 = state_35630__$1;
(statearr_35661_35723[(2)] = inst_35604);

(statearr_35661_35723[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (6))){
var inst_35551 = (state_35630[(2)]);
var state_35630__$1 = state_35630;
var statearr_35662_35724 = state_35630__$1;
(statearr_35662_35724[(2)] = inst_35551);

(statearr_35662_35724[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (28))){
var inst_35596 = (state_35630[(28)]);
var inst_35595 = (state_35630[(2)]);
var inst_35596__$1 = cljs.core.get.call(null,inst_35595,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35597 = cljs.core.get.call(null,inst_35595,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_35598 = cljs.core.get.call(null,inst_35595,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35599 = cljs.core.not_empty.call(null,inst_35596__$1);
var state_35630__$1 = (function (){var statearr_35663 = state_35630;
(statearr_35663[(29)] = inst_35598);

(statearr_35663[(28)] = inst_35596__$1);

(statearr_35663[(24)] = inst_35597);

return statearr_35663;
})();
if(cljs.core.truth_(inst_35599)){
var statearr_35664_35725 = state_35630__$1;
(statearr_35664_35725[(1)] = (29));

} else {
var statearr_35665_35726 = state_35630__$1;
(statearr_35665_35726[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (25))){
var inst_35628 = (state_35630[(2)]);
var state_35630__$1 = state_35630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35630__$1,inst_35628);
} else {
if((state_val_35631 === (34))){
var inst_35598 = (state_35630[(29)]);
var inst_35616 = (state_35630[(2)]);
var inst_35617 = cljs.core.not_empty.call(null,inst_35598);
var state_35630__$1 = (function (){var statearr_35666 = state_35630;
(statearr_35666[(30)] = inst_35616);

return statearr_35666;
})();
if(cljs.core.truth_(inst_35617)){
var statearr_35667_35727 = state_35630__$1;
(statearr_35667_35727[(1)] = (35));

} else {
var statearr_35668_35728 = state_35630__$1;
(statearr_35668_35728[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (17))){
var inst_35556 = (state_35630[(23)]);
var state_35630__$1 = state_35630;
var statearr_35669_35729 = state_35630__$1;
(statearr_35669_35729[(2)] = inst_35556);

(statearr_35669_35729[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (3))){
var state_35630__$1 = state_35630;
var statearr_35670_35730 = state_35630__$1;
(statearr_35670_35730[(2)] = null);

(statearr_35670_35730[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (12))){
var inst_35547 = (state_35630[(2)]);
var state_35630__$1 = state_35630;
var statearr_35671_35731 = state_35630__$1;
(statearr_35671_35731[(2)] = inst_35547);

(statearr_35671_35731[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (2))){
var inst_35509 = (state_35630[(20)]);
var inst_35516 = cljs.core.seq.call(null,inst_35509);
var inst_35517 = inst_35516;
var inst_35518 = null;
var inst_35519 = (0);
var inst_35520 = (0);
var state_35630__$1 = (function (){var statearr_35672 = state_35630;
(statearr_35672[(7)] = inst_35519);

(statearr_35672[(8)] = inst_35517);

(statearr_35672[(9)] = inst_35520);

(statearr_35672[(10)] = inst_35518);

return statearr_35672;
})();
var statearr_35673_35732 = state_35630__$1;
(statearr_35673_35732[(2)] = null);

(statearr_35673_35732[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (23))){
var inst_35569 = (state_35630[(12)]);
var inst_35562 = (state_35630[(13)]);
var inst_35563 = (state_35630[(14)]);
var inst_35566 = (state_35630[(15)]);
var inst_35589 = (state_35630[(19)]);
var inst_35567 = (state_35630[(16)]);
var inst_35585 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35588 = (function (){var all_files = inst_35562;
var files_SINGLEQUOTE_ = inst_35563;
var res_SINGLEQUOTE_ = inst_35566;
var res = inst_35567;
var files_not_loaded = inst_35569;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35569,inst_35562,inst_35563,inst_35566,inst_35589,inst_35567,inst_35585,state_val_35631,c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files){
return (function (p__35587){
var map__35674 = p__35587;
var map__35674__$1 = ((cljs.core.seq_QMARK_.call(null,map__35674))?cljs.core.apply.call(null,cljs.core.hash_map,map__35674):map__35674);
var meta_data = cljs.core.get.call(null,map__35674__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
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
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_35569,inst_35562,inst_35563,inst_35566,inst_35589,inst_35567,inst_35585,state_val_35631,c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files))
})();
var inst_35589__$1 = cljs.core.group_by.call(null,inst_35588,inst_35569);
var inst_35590 = cljs.core.seq_QMARK_.call(null,inst_35589__$1);
var state_35630__$1 = (function (){var statearr_35675 = state_35630;
(statearr_35675[(31)] = inst_35585);

(statearr_35675[(19)] = inst_35589__$1);

return statearr_35675;
})();
if(inst_35590){
var statearr_35676_35733 = state_35630__$1;
(statearr_35676_35733[(1)] = (26));

} else {
var statearr_35677_35734 = state_35630__$1;
(statearr_35677_35734[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (35))){
var inst_35598 = (state_35630[(29)]);
var inst_35619 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35598);
var inst_35620 = cljs.core.pr_str.call(null,inst_35619);
var inst_35621 = [cljs.core.str("not required: "),cljs.core.str(inst_35620)].join('');
var inst_35622 = figwheel.client.utils.log.call(null,inst_35621);
var state_35630__$1 = state_35630;
var statearr_35678_35735 = state_35630__$1;
(statearr_35678_35735[(2)] = inst_35622);

(statearr_35678_35735[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (19))){
var inst_35562 = (state_35630[(13)]);
var inst_35563 = (state_35630[(14)]);
var inst_35566 = (state_35630[(15)]);
var inst_35567 = (state_35630[(16)]);
var inst_35566__$1 = (state_35630[(2)]);
var inst_35567__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35566__$1);
var inst_35568 = (function (){var all_files = inst_35562;
var files_SINGLEQUOTE_ = inst_35563;
var res_SINGLEQUOTE_ = inst_35566__$1;
var res = inst_35567__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_35562,inst_35563,inst_35566,inst_35567,inst_35566__$1,inst_35567__$1,state_val_35631,c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files){
return (function (p1__35302_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__35302_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_35562,inst_35563,inst_35566,inst_35567,inst_35566__$1,inst_35567__$1,state_val_35631,c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files))
})();
var inst_35569 = cljs.core.filter.call(null,inst_35568,inst_35566__$1);
var inst_35570 = cljs.core.not_empty.call(null,inst_35567__$1);
var state_35630__$1 = (function (){var statearr_35679 = state_35630;
(statearr_35679[(12)] = inst_35569);

(statearr_35679[(15)] = inst_35566__$1);

(statearr_35679[(16)] = inst_35567__$1);

return statearr_35679;
})();
if(cljs.core.truth_(inst_35570)){
var statearr_35680_35736 = state_35630__$1;
(statearr_35680_35736[(1)] = (20));

} else {
var statearr_35681_35737 = state_35630__$1;
(statearr_35681_35737[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (11))){
var state_35630__$1 = state_35630;
var statearr_35682_35738 = state_35630__$1;
(statearr_35682_35738[(2)] = null);

(statearr_35682_35738[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (9))){
var inst_35549 = (state_35630[(2)]);
var state_35630__$1 = state_35630;
var statearr_35683_35739 = state_35630__$1;
(statearr_35683_35739[(2)] = inst_35549);

(statearr_35683_35739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (5))){
var inst_35519 = (state_35630[(7)]);
var inst_35520 = (state_35630[(9)]);
var inst_35522 = (inst_35520 < inst_35519);
var inst_35523 = inst_35522;
var state_35630__$1 = state_35630;
if(cljs.core.truth_(inst_35523)){
var statearr_35684_35740 = state_35630__$1;
(statearr_35684_35740[(1)] = (7));

} else {
var statearr_35685_35741 = state_35630__$1;
(statearr_35685_35741[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (14))){
var inst_35530 = (state_35630[(26)]);
var inst_35539 = cljs.core.first.call(null,inst_35530);
var inst_35540 = figwheel.client.file_reloading.eval_body.call(null,inst_35539);
var inst_35541 = cljs.core.next.call(null,inst_35530);
var inst_35517 = inst_35541;
var inst_35518 = null;
var inst_35519 = (0);
var inst_35520 = (0);
var state_35630__$1 = (function (){var statearr_35686 = state_35630;
(statearr_35686[(7)] = inst_35519);

(statearr_35686[(8)] = inst_35517);

(statearr_35686[(9)] = inst_35520);

(statearr_35686[(10)] = inst_35518);

(statearr_35686[(32)] = inst_35540);

return statearr_35686;
})();
var statearr_35687_35742 = state_35630__$1;
(statearr_35687_35742[(2)] = null);

(statearr_35687_35742[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (26))){
var inst_35589 = (state_35630[(19)]);
var inst_35592 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35589);
var state_35630__$1 = state_35630;
var statearr_35688_35743 = state_35630__$1;
(statearr_35688_35743[(2)] = inst_35592);

(statearr_35688_35743[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (16))){
var inst_35556 = (state_35630[(23)]);
var inst_35558 = (function (){var all_files = inst_35556;
return ((function (all_files,inst_35556,state_val_35631,c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files){
return (function (p1__35301_SHARP_){
return cljs.core.update_in.call(null,p1__35301_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_35556,state_val_35631,c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files))
})();
var inst_35559 = cljs.core.map.call(null,inst_35558,inst_35556);
var state_35630__$1 = state_35630;
var statearr_35689_35744 = state_35630__$1;
(statearr_35689_35744[(2)] = inst_35559);

(statearr_35689_35744[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (30))){
var state_35630__$1 = state_35630;
var statearr_35690_35745 = state_35630__$1;
(statearr_35690_35745[(2)] = null);

(statearr_35690_35745[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (10))){
var inst_35530 = (state_35630[(26)]);
var inst_35532 = cljs.core.chunked_seq_QMARK_.call(null,inst_35530);
var state_35630__$1 = state_35630;
if(inst_35532){
var statearr_35691_35746 = state_35630__$1;
(statearr_35691_35746[(1)] = (13));

} else {
var statearr_35692_35747 = state_35630__$1;
(statearr_35692_35747[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (18))){
var inst_35562 = (state_35630[(13)]);
var inst_35563 = (state_35630[(14)]);
var inst_35562__$1 = (state_35630[(2)]);
var inst_35563__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_35562__$1);
var inst_35564 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35563__$1);
var state_35630__$1 = (function (){var statearr_35693 = state_35630;
(statearr_35693[(13)] = inst_35562__$1);

(statearr_35693[(14)] = inst_35563__$1);

return statearr_35693;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35630__$1,(19),inst_35564);
} else {
if((state_val_35631 === (37))){
var inst_35625 = (state_35630[(2)]);
var state_35630__$1 = state_35630;
var statearr_35694_35748 = state_35630__$1;
(statearr_35694_35748[(2)] = inst_35625);

(statearr_35694_35748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35631 === (8))){
var inst_35517 = (state_35630[(8)]);
var inst_35530 = (state_35630[(26)]);
var inst_35530__$1 = cljs.core.seq.call(null,inst_35517);
var state_35630__$1 = (function (){var statearr_35695 = state_35630;
(statearr_35695[(26)] = inst_35530__$1);

return statearr_35695;
})();
if(inst_35530__$1){
var statearr_35696_35749 = state_35630__$1;
(statearr_35696_35749[(1)] = (10));

} else {
var statearr_35697_35750 = state_35630__$1;
(statearr_35697_35750[(1)] = (11));

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
});})(c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files))
;
return ((function (switch__30018__auto__,c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30019__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30019__auto____0 = (function (){
var statearr_35701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35701[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30019__auto__);

(statearr_35701[(1)] = (1));

return statearr_35701;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30019__auto____1 = (function (state_35630){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_35630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e35702){if((e35702 instanceof Object)){
var ex__30022__auto__ = e35702;
var statearr_35703_35751 = state_35630;
(statearr_35703_35751[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35752 = state_35630;
state_35630 = G__35752;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30019__auto__ = function(state_35630){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30019__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30019__auto____1.call(this,state_35630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30019__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30019__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files))
})();
var state__30076__auto__ = (function (){var statearr_35704 = f__30075__auto__.call(null);
(statearr_35704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto__);

return statearr_35704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto__,map__35505,map__35505__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__35506,map__35506__$1,msg,files))
);

return c__30074__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35755,link){
var map__35757 = p__35755;
var map__35757__$1 = ((cljs.core.seq_QMARK_.call(null,map__35757))?cljs.core.apply.call(null,cljs.core.hash_map,map__35757):map__35757);
var file = cljs.core.get.call(null,map__35757__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__35757,map__35757__$1,file){
return (function (p1__35753_SHARP_,p2__35754_SHARP_){
if(cljs.core._EQ_.call(null,p1__35753_SHARP_,p2__35754_SHARP_)){
return p1__35753_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__35757,map__35757__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35761){
var map__35762 = p__35761;
var map__35762__$1 = ((cljs.core.seq_QMARK_.call(null,map__35762))?cljs.core.apply.call(null,cljs.core.hash_map,map__35762):map__35762);
var match_length = cljs.core.get.call(null,map__35762__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35762__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35758_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35758_SHARP_);
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
figwheel.client.file_reloading.add_link_to_doc = (function() {
var figwheel$client$file_reloading$add_link_to_doc = null;
var figwheel$client$file_reloading$add_link_to_doc__1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var figwheel$client$file_reloading$add_link_to_doc__2 = (function (orig_link,klone){
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
figwheel$client$file_reloading$add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$add_link_to_doc__1.call(this,orig_link);
case 2:
return figwheel$client$file_reloading$add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$add_link_to_doc__1;
figwheel$client$file_reloading$add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = figwheel$client$file_reloading$add_link_to_doc__2;
return figwheel$client$file_reloading$add_link_to_doc;
})()
;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__35763){
var map__35765 = p__35763;
var map__35765__$1 = ((cljs.core.seq_QMARK_.call(null,map__35765))?cljs.core.apply.call(null,cljs.core.hash_map,map__35765):map__35765);
var f_data = map__35765__$1;
var file = cljs.core.get.call(null,map__35765__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__35765__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__27663__auto__ = request_url;
if(cljs.core.truth_(or__27663__auto__)){
return or__27663__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35766,files_msg){
var map__35788 = p__35766;
var map__35788__$1 = ((cljs.core.seq_QMARK_.call(null,map__35788))?cljs.core.apply.call(null,cljs.core.hash_map,map__35788):map__35788);
var opts = map__35788__$1;
var on_cssload = cljs.core.get.call(null,map__35788__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__35789_35809 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__35790_35810 = null;
var count__35791_35811 = (0);
var i__35792_35812 = (0);
while(true){
if((i__35792_35812 < count__35791_35811)){
var f_35813 = cljs.core._nth.call(null,chunk__35790_35810,i__35792_35812);
figwheel.client.file_reloading.reload_css_file.call(null,f_35813);

var G__35814 = seq__35789_35809;
var G__35815 = chunk__35790_35810;
var G__35816 = count__35791_35811;
var G__35817 = (i__35792_35812 + (1));
seq__35789_35809 = G__35814;
chunk__35790_35810 = G__35815;
count__35791_35811 = G__35816;
i__35792_35812 = G__35817;
continue;
} else {
var temp__4425__auto___35818 = cljs.core.seq.call(null,seq__35789_35809);
if(temp__4425__auto___35818){
var seq__35789_35819__$1 = temp__4425__auto___35818;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35789_35819__$1)){
var c__28450__auto___35820 = cljs.core.chunk_first.call(null,seq__35789_35819__$1);
var G__35821 = cljs.core.chunk_rest.call(null,seq__35789_35819__$1);
var G__35822 = c__28450__auto___35820;
var G__35823 = cljs.core.count.call(null,c__28450__auto___35820);
var G__35824 = (0);
seq__35789_35809 = G__35821;
chunk__35790_35810 = G__35822;
count__35791_35811 = G__35823;
i__35792_35812 = G__35824;
continue;
} else {
var f_35825 = cljs.core.first.call(null,seq__35789_35819__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_35825);

var G__35826 = cljs.core.next.call(null,seq__35789_35819__$1);
var G__35827 = null;
var G__35828 = (0);
var G__35829 = (0);
seq__35789_35809 = G__35826;
chunk__35790_35810 = G__35827;
count__35791_35811 = G__35828;
i__35792_35812 = G__35829;
continue;
}
} else {
}
}
break;
}

var c__30074__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30074__auto__,map__35788,map__35788__$1,opts,on_cssload){
return (function (){
var f__30075__auto__ = (function (){var switch__30018__auto__ = ((function (c__30074__auto__,map__35788,map__35788__$1,opts,on_cssload){
return (function (state_35799){
var state_val_35800 = (state_35799[(1)]);
if((state_val_35800 === (1))){
var inst_35793 = cljs.core.async.timeout.call(null,(100));
var state_35799__$1 = state_35799;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35799__$1,(2),inst_35793);
} else {
if((state_val_35800 === (2))){
var inst_35795 = (state_35799[(2)]);
var inst_35796 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_35797 = on_cssload.call(null,inst_35796);
var state_35799__$1 = (function (){var statearr_35801 = state_35799;
(statearr_35801[(7)] = inst_35795);

return statearr_35801;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35799__$1,inst_35797);
} else {
return null;
}
}
});})(c__30074__auto__,map__35788,map__35788__$1,opts,on_cssload))
;
return ((function (switch__30018__auto__,c__30074__auto__,map__35788,map__35788__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__30019__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__30019__auto____0 = (function (){
var statearr_35805 = [null,null,null,null,null,null,null,null];
(statearr_35805[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__30019__auto__);

(statearr_35805[(1)] = (1));

return statearr_35805;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__30019__auto____1 = (function (state_35799){
while(true){
var ret_value__30020__auto__ = (function (){try{while(true){
var result__30021__auto__ = switch__30018__auto__.call(null,state_35799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30021__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30021__auto__;
}
break;
}
}catch (e35806){if((e35806 instanceof Object)){
var ex__30022__auto__ = e35806;
var statearr_35807_35830 = state_35799;
(statearr_35807_35830[(5)] = ex__30022__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35806;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30020__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35831 = state_35799;
state_35799 = G__35831;
continue;
} else {
return ret_value__30020__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__30019__auto__ = function(state_35799){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__30019__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__30019__auto____1.call(this,state_35799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__30019__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__30019__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__30019__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__30019__auto__;
})()
;})(switch__30018__auto__,c__30074__auto__,map__35788,map__35788__$1,opts,on_cssload))
})();
var state__30076__auto__ = (function (){var statearr_35808 = f__30075__auto__.call(null);
(statearr_35808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30074__auto__);

return statearr_35808;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30076__auto__);
});})(c__30074__auto__,map__35788,map__35788__$1,opts,on_cssload))
);

return c__30074__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map