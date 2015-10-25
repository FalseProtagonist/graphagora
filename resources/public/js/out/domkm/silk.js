// Compiled by ClojureScript 1.7.145 {}
goog.provide('domkm.silk');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core');
domkm.silk.encode = (function domkm$silk$encode(s){
return clojure.string.replace.call(null,clojure.string.replace.call(null,encodeURIComponent(s),/[!'()]/,escape),/~/,"%7E");
});
domkm.silk.decode = (function domkm$silk$decode(s){
return decodeURIComponent(s);
});
/**
 * Takes a path seqable.
 *   Returns a string of path segments encoded, joined with `/`, and prepended with `/`.
 */
domkm.silk.encode_path = (function domkm$silk$encode_path(path){
if(cljs.core.every_QMARK_.call(null,cljs.core.not_empty,path)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"not-empty","not-empty",2029453590,null),new cljs.core.Symbol(null,"path","path",1452340359,null))))].join('')));
}

return [cljs.core.str("/"),cljs.core.str(clojure.string.join.call(null,"/",cljs.core.map.call(null,domkm.silk.encode,path)))].join('');
});
/**
 * Takes a path string.
 *   Returns a vector of decoded path segments.
 */
domkm.silk.decode_path = (function domkm$silk$decode_path(s){
return cljs.core.mapv.call(null,domkm.silk.decode,cljs.core.remove.call(null,clojure.string.blank_QMARK_,clojure.string.split.call(null,s,/\//)));
});
/**
 * Takes a query map.
 *   Returns a string of query pairs encoded and joined.
 */
domkm.silk.encode_query = (function domkm$silk$encode_query(query){
return clojure.string.join.call(null,"&",(function (){var iter__31198__auto__ = (function domkm$silk$encode_query_$_iter__33539(s__33540){
return (new cljs.core.LazySeq(null,(function (){
var s__33540__$1 = s__33540;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__33540__$1);
if(temp__4425__auto__){
var s__33540__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__33540__$2)){
var c__31196__auto__ = cljs.core.chunk_first.call(null,s__33540__$2);
var size__31197__auto__ = cljs.core.count.call(null,c__31196__auto__);
var b__33542 = cljs.core.chunk_buffer.call(null,size__31197__auto__);
if((function (){var i__33541 = (0);
while(true){
if((i__33541 < size__31197__auto__)){
var vec__33545 = cljs.core._nth.call(null,c__31196__auto__,i__33541);
var k = cljs.core.nth.call(null,vec__33545,(0),null);
var v = cljs.core.nth.call(null,vec__33545,(1),null);
cljs.core.chunk_append.call(null,b__33542,[cljs.core.str(domkm.silk.encode.call(null,k)),cljs.core.str("="),cljs.core.str(domkm.silk.encode.call(null,v))].join(''));

var G__33547 = (i__33541 + (1));
i__33541 = G__33547;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33542),domkm$silk$encode_query_$_iter__33539.call(null,cljs.core.chunk_rest.call(null,s__33540__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__33542),null);
}
} else {
var vec__33546 = cljs.core.first.call(null,s__33540__$2);
var k = cljs.core.nth.call(null,vec__33546,(0),null);
var v = cljs.core.nth.call(null,vec__33546,(1),null);
return cljs.core.cons.call(null,[cljs.core.str(domkm.silk.encode.call(null,k)),cljs.core.str("="),cljs.core.str(domkm.silk.encode.call(null,v))].join(''),domkm$silk$encode_query_$_iter__33539.call(null,cljs.core.rest.call(null,s__33540__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31198__auto__.call(null,cljs.core.sort.call(null,query));
})());
});
/**
 * Takes a query string.
 *   Returns a map of decoded query pairs.
 */
domkm.silk.decode_query = (function domkm$silk$decode_query(s){
if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (q,pair){
var vec__33549 = cljs.core.map.call(null,domkm.silk.decode,clojure.string.split.call(null,pair,/=/));
var k = cljs.core.nth.call(null,vec__33549,(0),null);
var v = cljs.core.nth.call(null,vec__33549,(1),null);
return cljs.core.assoc_BANG_.call(null,q,k,v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),clojure.string.split.call(null,s,/[&;]/)));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {domkm.silk.Object}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
domkm.silk.URL = (function (scheme,user,host,port,path,query,fragment,__meta,__extmap,__hash){
this.scheme = scheme;
this.user = user;
this.host = host;
this.port = port;
this.path = path;
this.query = query;
this.fragment = fragment;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
domkm.silk.URL.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str(domkm.silk.encode_path.call(null,self__.path)),cljs.core.str((function (){var query__$1 = cljs.core.remove.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,cljs.core.val),self__.query);
if(cljs.core.seq.call(null,query__$1)){
return [cljs.core.str("?"),cljs.core.str(domkm.silk.encode_query.call(null,query__$1))].join('');
} else {
return null;
}
})())].join('');
});

domkm.silk.URL.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31040__auto__,k__31041__auto__){
var self__ = this;
var this__31040__auto____$1 = this;
return cljs.core._lookup.call(null,this__31040__auto____$1,k__31041__auto__,null);
});

domkm.silk.URL.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31042__auto__,k33551,else__31043__auto__){
var self__ = this;
var this__31042__auto____$1 = this;
var G__33553 = (((k33551 instanceof cljs.core.Keyword))?k33551.fqn:null);
switch (G__33553) {
case "scheme":
return self__.scheme;

break;
case "user":
return self__.user;

break;
case "host":
return self__.host;

break;
case "port":
return self__.port;

break;
case "path":
return self__.path;

break;
case "query":
return self__.query;

break;
case "fragment":
return self__.fragment;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33551,else__31043__auto__);

}
});

domkm.silk.URL.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31054__auto__,writer__31055__auto__,opts__31056__auto__){
var self__ = this;
var this__31054__auto____$1 = this;
var pr_pair__31057__auto__ = ((function (this__31054__auto____$1){
return (function (keyval__31058__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31055__auto__,cljs.core.pr_writer,""," ","",opts__31056__auto__,keyval__31058__auto__);
});})(this__31054__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31055__auto__,pr_pair__31057__auto__,"#domkm.silk.URL{",", ","}",opts__31056__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scheme","scheme",90199613),self__.scheme],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"user","user",1532431356),self__.user],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fragment","fragment",826775688),self__.fragment],null))], null),self__.__extmap));
});

domkm.silk.URL.prototype.cljs$core$IIterable$ = true;

domkm.silk.URL.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33550){
var self__ = this;
var G__33550__$1 = this;
return (new cljs.core.RecordIter((0),G__33550__$1,7,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"fragment","fragment",826775688)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

domkm.silk.URL.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31038__auto__){
var self__ = this;
var this__31038__auto____$1 = this;
return self__.__meta;
});

domkm.silk.URL.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31034__auto__){
var self__ = this;
var this__31034__auto____$1 = this;
return (new domkm.silk.URL(self__.scheme,self__.user,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,self__.__hash));
});

domkm.silk.URL.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31044__auto__){
var self__ = this;
var this__31044__auto____$1 = this;
return (7 + cljs.core.count.call(null,self__.__extmap));
});

domkm.silk.URL.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31035__auto__){
var self__ = this;
var this__31035__auto____$1 = this;
var h__30861__auto__ = self__.__hash;
if(!((h__30861__auto__ == null))){
return h__30861__auto__;
} else {
var h__30861__auto____$1 = cljs.core.hash_imap.call(null,this__31035__auto____$1);
self__.__hash = h__30861__auto____$1;

return h__30861__auto____$1;
}
});

domkm.silk.URL.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__31036__auto__,other__31037__auto__){
var self__ = this;
var this__31036__auto____$1 = this;
if(cljs.core.truth_((function (){var and__30414__auto__ = other__31037__auto__;
if(cljs.core.truth_(and__30414__auto__)){
var and__30414__auto____$1 = (this__31036__auto____$1.constructor === other__31037__auto__.constructor);
if(and__30414__auto____$1){
return cljs.core.equiv_map.call(null,this__31036__auto____$1,other__31037__auto__);
} else {
return and__30414__auto____$1;
}
} else {
return and__30414__auto__;
}
})())){
return true;
} else {
return false;
}
});

domkm.silk.URL.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31049__auto__,k__31050__auto__){
var self__ = this;
var this__31049__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"fragment","fragment",826775688),null,new cljs.core.Keyword(null,"port","port",1534937262),null,new cljs.core.Keyword(null,"host","host",-1558485167),null,new cljs.core.Keyword(null,"query","query",-1288509510),null,new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"scheme","scheme",90199613),null], null), null),k__31050__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31049__auto____$1),self__.__meta),k__31050__auto__);
} else {
return (new domkm.silk.URL(self__.scheme,self__.user,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31050__auto__)),null));
}
});

domkm.silk.URL.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31047__auto__,k__31048__auto__,G__33550){
var self__ = this;
var this__31047__auto____$1 = this;
var pred__33554 = cljs.core.keyword_identical_QMARK_;
var expr__33555 = k__31048__auto__;
if(cljs.core.truth_(pred__33554.call(null,new cljs.core.Keyword(null,"scheme","scheme",90199613),expr__33555))){
return (new domkm.silk.URL(G__33550,self__.user,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33554.call(null,new cljs.core.Keyword(null,"user","user",1532431356),expr__33555))){
return (new domkm.silk.URL(self__.scheme,G__33550,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33554.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),expr__33555))){
return (new domkm.silk.URL(self__.scheme,self__.user,G__33550,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33554.call(null,new cljs.core.Keyword(null,"port","port",1534937262),expr__33555))){
return (new domkm.silk.URL(self__.scheme,self__.user,self__.host,G__33550,self__.path,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33554.call(null,new cljs.core.Keyword(null,"path","path",-188191168),expr__33555))){
return (new domkm.silk.URL(self__.scheme,self__.user,self__.host,self__.port,G__33550,self__.query,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33554.call(null,new cljs.core.Keyword(null,"query","query",-1288509510),expr__33555))){
return (new domkm.silk.URL(self__.scheme,self__.user,self__.host,self__.port,self__.path,G__33550,self__.fragment,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33554.call(null,new cljs.core.Keyword(null,"fragment","fragment",826775688),expr__33555))){
return (new domkm.silk.URL(self__.scheme,self__.user,self__.host,self__.port,self__.path,self__.query,G__33550,self__.__meta,self__.__extmap,null));
} else {
return (new domkm.silk.URL(self__.scheme,self__.user,self__.host,self__.port,self__.path,self__.query,self__.fragment,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31048__auto__,G__33550),null));
}
}
}
}
}
}
}
});

domkm.silk.URL.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31052__auto__){
var self__ = this;
var this__31052__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"scheme","scheme",90199613),self__.scheme],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"user","user",1532431356),self__.user],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"host","host",-1558485167),self__.host],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"port","port",1534937262),self__.port],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"query","query",-1288509510),self__.query],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"fragment","fragment",826775688),self__.fragment],null))], null),self__.__extmap));
});

domkm.silk.URL.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31039__auto__,G__33550){
var self__ = this;
var this__31039__auto____$1 = this;
return (new domkm.silk.URL(self__.scheme,self__.user,self__.host,self__.port,self__.path,self__.query,self__.fragment,G__33550,self__.__extmap,self__.__hash));
});

domkm.silk.URL.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31045__auto__,entry__31046__auto__){
var self__ = this;
var this__31045__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31046__auto__)){
return cljs.core._assoc.call(null,this__31045__auto____$1,cljs.core._nth.call(null,entry__31046__auto__,(0)),cljs.core._nth.call(null,entry__31046__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31045__auto____$1,entry__31046__auto__);
}
});

domkm.silk.URL.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scheme","scheme",1730731140,null),new cljs.core.Symbol(null,"user","user",-1122004413,null),new cljs.core.Symbol(null,"host","host",82046360,null),new cljs.core.Symbol(null,"port","port",-1119498507,null),new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"query","query",352022017,null),new cljs.core.Symbol(null,"fragment","fragment",-1827660081,null)], null);
});

domkm.silk.URL.cljs$lang$type = true;

domkm.silk.URL.cljs$lang$ctorPrSeq = (function (this__31074__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"domkm.silk/URL");
});

domkm.silk.URL.cljs$lang$ctorPrWriter = (function (this__31074__auto__,writer__31075__auto__){
return cljs.core._write.call(null,writer__31075__auto__,"domkm.silk/URL");
});

domkm.silk.__GT_URL = (function domkm$silk$__GT_URL(scheme,user,host,port,path,query,fragment){
return (new domkm.silk.URL(scheme,user,host,port,path,query,fragment,null,null,null));
});

domkm.silk.map__GT_URL = (function domkm$silk$map__GT_URL(G__33552){
return (new domkm.silk.URL(new cljs.core.Keyword(null,"scheme","scheme",90199613).cljs$core$IFn$_invoke$arity$1(G__33552),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(G__33552),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(G__33552),new cljs.core.Keyword(null,"port","port",1534937262).cljs$core$IFn$_invoke$arity$1(G__33552),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__33552),new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__33552),new cljs.core.Keyword(null,"fragment","fragment",826775688).cljs$core$IFn$_invoke$arity$1(G__33552),null,cljs.core.dissoc.call(null,G__33552,new cljs.core.Keyword(null,"scheme","scheme",90199613),new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"port","port",1534937262),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"query","query",-1288509510),new cljs.core.Keyword(null,"fragment","fragment",826775688)),null));
});

domkm.silk.url_QMARK_ = (function domkm$silk$url_QMARK_(x){
return (x instanceof domkm.silk.URL);
});
domkm.silk.url = (function domkm$silk$url(x){
if(cljs.core.truth_(domkm.silk.url_QMARK_.call(null,x))){
return x;
} else {
if(typeof x === 'string'){
var vec__33559 = clojure.string.split.call(null,x,/\?/);
var p = cljs.core.nth.call(null,vec__33559,(0),null);
var q = cljs.core.nth.call(null,vec__33559,(1),null);
return domkm$silk$url.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),domkm.silk.decode_path.call(null,[cljs.core.str(p)].join('')),new cljs.core.Keyword(null,"query","query",-1288509510),domkm.silk.decode_query.call(null,[cljs.core.str(q)].join(''))], null));
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return domkm.silk.map__GT_URL.call(null,x);
} else {
return null;
}
}
}
});
domkm.silk.url_pattern = (function domkm$silk$url_pattern(x){
if(cljs.core.map_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
var vec__33563 = x;
var path = cljs.core.nth.call(null,vec__33563,(0),null);
var query = cljs.core.nth.call(null,vec__33563,(1),null);
var etc = cljs.core.nth.call(null,vec__33563,(2),null);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,((function (vec__33563,path,query,etc){
return (function (p__33564){
var vec__33565 = p__33564;
var k = cljs.core.nth.call(null,vec__33565,(0),null);
var v = cljs.core.nth.call(null,vec__33565,(1),null);
return (v == null);
});})(vec__33563,path,query,etc))
,cljs.core.assoc.call(null,etc,new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"query","query",-1288509510),query)));
} else {
return null;
}
}
});

/**
 * @interface
 */
domkm.silk.Pattern = function(){};

domkm.silk._match = (function domkm$silk$_match(this$,that){
if((!((this$ == null))) && (!((this$.domkm$silk$Pattern$_match$arity$2 == null)))){
return this$.domkm$silk$Pattern$_match$arity$2(this$,that);
} else {
var x__31081__auto__ = (((this$ == null))?null:this$);
var m__31082__auto__ = (domkm.silk._match[goog.typeOf(x__31081__auto__)]);
if(!((m__31082__auto__ == null))){
return m__31082__auto__.call(null,this$,that);
} else {
var m__31082__auto____$1 = (domkm.silk._match["_"]);
if(!((m__31082__auto____$1 == null))){
return m__31082__auto____$1.call(null,this$,that);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.-match",this$);
}
}
}
});

domkm.silk._unmatch = (function domkm$silk$_unmatch(this$,params){
if((!((this$ == null))) && (!((this$.domkm$silk$Pattern$_unmatch$arity$2 == null)))){
return this$.domkm$silk$Pattern$_unmatch$arity$2(this$,params);
} else {
var x__31081__auto__ = (((this$ == null))?null:this$);
var m__31082__auto__ = (domkm.silk._unmatch[goog.typeOf(x__31081__auto__)]);
if(!((m__31082__auto__ == null))){
return m__31082__auto__.call(null,this$,params);
} else {
var m__31082__auto____$1 = (domkm.silk._unmatch["_"]);
if(!((m__31082__auto____$1 == null))){
return m__31082__auto____$1.call(null,this$,params);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.-unmatch",this$);
}
}
}
});

domkm.silk._match_validator = (function domkm$silk$_match_validator(this$){
if((!((this$ == null))) && (!((this$.domkm$silk$Pattern$_match_validator$arity$1 == null)))){
return this$.domkm$silk$Pattern$_match_validator$arity$1(this$);
} else {
var x__31081__auto__ = (((this$ == null))?null:this$);
var m__31082__auto__ = (domkm.silk._match_validator[goog.typeOf(x__31081__auto__)]);
if(!((m__31082__auto__ == null))){
return m__31082__auto__.call(null,this$);
} else {
var m__31082__auto____$1 = (domkm.silk._match_validator["_"]);
if(!((m__31082__auto____$1 == null))){
return m__31082__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.-match-validator",this$);
}
}
}
});

domkm.silk._unmatch_validators = (function domkm$silk$_unmatch_validators(this$){
if((!((this$ == null))) && (!((this$.domkm$silk$Pattern$_unmatch_validators$arity$1 == null)))){
return this$.domkm$silk$Pattern$_unmatch_validators$arity$1(this$);
} else {
var x__31081__auto__ = (((this$ == null))?null:this$);
var m__31082__auto__ = (domkm.silk._unmatch_validators[goog.typeOf(x__31081__auto__)]);
if(!((m__31082__auto__ == null))){
return m__31082__auto__.call(null,this$);
} else {
var m__31082__auto____$1 = (domkm.silk._unmatch_validators["_"]);
if(!((m__31082__auto____$1 == null))){
return m__31082__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.-unmatch-validators",this$);
}
}
}
});

domkm.silk._create_default = (function domkm$silk$_create_default(this$,v){
if((!((this$ == null))) && (!((this$.domkm$silk$Pattern$_create_default$arity$2 == null)))){
return this$.domkm$silk$Pattern$_create_default$arity$2(this$,v);
} else {
var x__31081__auto__ = (((this$ == null))?null:this$);
var m__31082__auto__ = (domkm.silk._create_default[goog.typeOf(x__31081__auto__)]);
if(!((m__31082__auto__ == null))){
return m__31082__auto__.call(null,this$,v);
} else {
var m__31082__auto____$1 = (domkm.silk._create_default["_"]);
if(!((m__31082__auto____$1 == null))){
return m__31082__auto____$1.call(null,this$,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pattern.-create-default",this$);
}
}
}
});

domkm.silk.pattern_QMARK_ = (function domkm$silk$pattern_QMARK_(x){
if(!((x == null))){
if((false) || (x.domkm$silk$Pattern$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,domkm.silk.Pattern,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,domkm.silk.Pattern,x);
}
});
domkm.silk.optional_value_is_allowed = (function domkm$silk$optional_value_is_allowed(validator){
return (function (x){
if(cljs.core._EQ_.call(null,x,new cljs.core.Keyword("domkm.silk","optional-key-has-no-value","domkm.silk/optional-key-has-no-value",-532938173))){
return true;
} else {
return validator.call(null,x);
}
});
});
domkm.silk.match_validator = (function domkm$silk$match_validator(ptrn){
if(cljs.core.truth_(domkm.silk.pattern_QMARK_.call(null,ptrn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pattern?","pattern?",519487951,null),new cljs.core.Symbol(null,"ptrn","ptrn",1874447722,null))))].join('')));
}

var _PERCENT_ = domkm.silk.optional_value_is_allowed.call(null,domkm.silk._match_validator.call(null,ptrn));
if(cljs.core.fn_QMARK_.call(null,_PERCENT_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
});
domkm.silk.unmatch_validators = (function domkm$silk$unmatch_validators(ptrn){
if(cljs.core.truth_(domkm.silk.pattern_QMARK_.call(null,ptrn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pattern?","pattern?",519487951,null),new cljs.core.Symbol(null,"ptrn","ptrn",1874447722,null))))].join('')));
}

var _PERCENT_ = domkm.silk._unmatch_validators.call(null,ptrn);
if(cljs.core.map_QMARK_.call(null,_PERCENT_)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.some_QMARK_,cljs.core.keys.call(null,_PERCENT_))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"some?","some?",234752293,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))].join('')));
}

if(cljs.core.every_QMARK_.call(null,cljs.core.fn_QMARK_,cljs.core.vals.call(null,_PERCENT_))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"fn?","fn?",1820990818,null),cljs.core.list(new cljs.core.Symbol(null,"vals","vals",-1886377036,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))].join('')));
}

return _PERCENT_;
});
domkm.silk.match_valid_QMARK_ = (function domkm$silk$match_valid_QMARK_(ptrn,x){
return cljs.core.boolean$.call(null,domkm.silk.match_validator.call(null,ptrn).call(null,x));
});
domkm.silk.unmatch_valid_QMARK_ = (function domkm$silk$unmatch_valid_QMARK_(ptrn,params){
return cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p__33570){
var vec__33571 = p__33570;
var k = cljs.core.nth.call(null,vec__33571,(0),null);
var v = cljs.core.nth.call(null,vec__33571,(1),null);
return v.call(null,cljs.core.get.call(null,params,k));
}),domkm.silk.unmatch_validators.call(null,ptrn)));
});
domkm.silk.match = (function domkm$silk$match(ptrn,x){
if(cljs.core.truth_(domkm.silk.pattern_QMARK_.call(null,ptrn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pattern?","pattern?",519487951,null),new cljs.core.Symbol(null,"ptrn","ptrn",1874447722,null))))].join('')));
}

var _PERCENT_ = (cljs.core.truth_(domkm.silk.match_valid_QMARK_.call(null,ptrn,x))?domkm.silk._match.call(null,ptrn,x):null);
if(cljs.core.truth_((function (){var or__30426__auto__ = (_PERCENT_ == null);
if(or__30426__auto__){
return or__30426__auto__;
} else {
return domkm.silk.unmatch_valid_QMARK_.call(null,ptrn,_PERCENT_);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"%","%",-950237169,null)),cljs.core.list(new cljs.core.Symbol(null,"unmatch-valid?","unmatch-valid?",526505072,null),new cljs.core.Symbol(null,"ptrn","ptrn",1874447722,null),new cljs.core.Symbol(null,"%","%",-950237169,null)))))].join('')));
}

return _PERCENT_;
});
domkm.silk.unmatch = (function domkm$silk$unmatch(ptrn,params){
if(cljs.core.truth_(domkm.silk.unmatch_valid_QMARK_.call(null,ptrn,params))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"unmatch-valid?","unmatch-valid?",526505072,null),new cljs.core.Symbol(null,"ptrn","ptrn",1874447722,null),new cljs.core.Symbol(null,"params","params",-1943919534,null))))].join('')));
}

var _PERCENT_ = domkm.silk._unmatch.call(null,ptrn,params);
if(cljs.core.truth_(domkm.silk.match_valid_QMARK_.call(null,ptrn,_PERCENT_))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"match-valid?","match-valid?",1320066545,null),new cljs.core.Symbol(null,"ptrn","ptrn",1874447722,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))].join('')));
}

return _PERCENT_;
});
domkm.silk.create_default = (function domkm$silk$create_default(var_args){
var args33572 = [];
var len__31484__auto___33575 = arguments.length;
var i__31485__auto___33576 = (0);
while(true){
if((i__31485__auto___33576 < len__31484__auto___33575)){
args33572.push((arguments[i__31485__auto___33576]));

var G__33577 = (i__31485__auto___33576 + (1));
i__31485__auto___33576 = G__33577;
continue;
} else {
}
break;
}

var G__33574 = args33572.length;
switch (G__33574) {
case 1:
return domkm.silk.create_default.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domkm.silk.create_default.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33572.length)].join('')));

}
});

domkm.silk.create_default.cljs$core$IFn$_invoke$arity$1 = (function (ptrn){
return domkm.silk.create_default.call(null,ptrn,null);
});

domkm.silk.create_default.cljs$core$IFn$_invoke$arity$2 = (function (ptrn,v){
return domkm.silk._create_default.call(null,ptrn,v);
});

domkm.silk.create_default.cljs$lang$maxFixedArity = 2;
(domkm.silk.Pattern["string"] = true);

(domkm.silk._match["string"] = (function (this$,that){
if(cljs.core._EQ_.call(null,this$,that)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
return null;
}
}));

(domkm.silk._unmatch["string"] = (function (this$,_){
return this$;
}));

(domkm.silk._match_validator["string"] = (function (_){
return cljs.core.string_QMARK_;
}));

(domkm.silk._unmatch_validators["string"] = (function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core.Keyword.prototype.domkm$silk$Pattern$ = true;

cljs.core.Keyword.prototype.domkm$silk$Pattern$_match$arity$2 = (function (this$,that){
var this$__$1 = this;
return cljs.core.PersistentArrayMap.fromArray([this$__$1,that], true, false);
});

cljs.core.Keyword.prototype.domkm$silk$Pattern$_unmatch$arity$2 = (function (this$,params){
var this$__$1 = this;
return cljs.core.get.call(null,params,this$__$1);
});

cljs.core.Keyword.prototype.domkm$silk$Pattern$_match_validator$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.some_QMARK_;
});

cljs.core.Keyword.prototype.domkm$silk$Pattern$_unmatch_validators$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.PersistentArrayMap.fromArray([this$__$1,cljs.core.some_QMARK_], true, false);
});

cljs.core.Keyword.prototype.domkm$silk$Pattern$_create_default$arity$2 = (function (this$,v){
var this$__$1 = this;
return cljs.core.PersistentArrayMap.fromArray([this$__$1,v], true, false);
});
domkm.silk.match_coll = (function domkm$silk$match_coll(ks,_PERCENT_1s,_PERCENT_2s){
var ks__$1 = ks;
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
var temp__4427__auto__ = cljs.core.first.call(null,ks__$1);
if((temp__4427__auto__ == null)){
return cljs.core.persistent_BANG_.call(null,ret);
} else {
var k = temp__4427__auto__;
var temp__4425__auto__ = domkm.silk.match.call(null,cljs.core.get.call(null,_PERCENT_1s,k),cljs.core.get.call(null,_PERCENT_2s,k));
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
var G__33582 = cljs.core.rest.call(null,ks__$1);
var G__33583 = cljs.core.reduce_kv.call(null,((function (ks__$1,ret,m,temp__4425__auto__,k,temp__4427__auto__){
return (function (p1__33579_SHARP_,p2__33580_SHARP_,p3__33581_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__33579_SHARP_,p2__33580_SHARP_,p3__33581_SHARP_);
});})(ks__$1,ret,m,temp__4425__auto__,k,temp__4427__auto__))
,ret,m);
ks__$1 = G__33582;
ret = G__33583;
continue;
} else {
return null;
}
}
break;
}
});
cljs.core.PersistentVector.prototype.domkm$silk$Pattern$ = true;

cljs.core.PersistentVector.prototype.domkm$silk$Pattern$_match$arity$2 = (function (this$,that){
var this$__$1 = this;
if((cljs.core.count.call(null,this$__$1) === cljs.core.count.call(null,that))){
return domkm.silk.match_coll.call(null,cljs.core.range.call(null,cljs.core.count.call(null,this$__$1)),this$__$1,that);
} else {
return null;
}
});

cljs.core.PersistentVector.prototype.domkm$silk$Pattern$_unmatch$arity$2 = (function (this$,params){
var this$__$1 = this;
return cljs.core.mapv.call(null,((function (this$__$1){
return (function (p1__33584_SHARP_){
return domkm.silk.unmatch.call(null,p1__33584_SHARP_,params);
});})(this$__$1))
,this$__$1);
});

cljs.core.PersistentVector.prototype.domkm$silk$Pattern$_match_validator$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.vector_QMARK_;
});

cljs.core.PersistentVector.prototype.domkm$silk$Pattern$_unmatch_validators$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});
domkm.silk.unmatch_map = (function domkm$silk$unmatch_map(ptrn,params){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (acc,k,v){
return cljs.core.assoc_BANG_.call(null,acc,k,domkm.silk.unmatch.call(null,v,params));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),ptrn));
});
cljs.core.PersistentArrayMap.prototype.domkm$silk$Pattern$ = true;

cljs.core.PersistentArrayMap.prototype.domkm$silk$Pattern$_match$arity$2 = (function (this$,that){
var this$__$1 = this;
return domkm.silk.match_coll.call(null,cljs.core.keys.call(null,this$__$1),this$__$1,that);
});

cljs.core.PersistentArrayMap.prototype.domkm$silk$Pattern$_unmatch$arity$2 = (function (this$,that){
var this$__$1 = this;
return domkm.silk.unmatch_map.call(null,this$__$1,that);
});

cljs.core.PersistentArrayMap.prototype.domkm$silk$Pattern$_match_validator$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.map_QMARK_;
});

cljs.core.PersistentArrayMap.prototype.domkm$silk$Pattern$_unmatch_validators$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});
cljs.core.PersistentHashMap.prototype.domkm$silk$Pattern$ = true;

cljs.core.PersistentHashMap.prototype.domkm$silk$Pattern$_match$arity$2 = (function (this$,that){
var this$__$1 = this;
return domkm.silk.match_coll.call(null,cljs.core.keys.call(null,this$__$1),this$__$1,that);
});

cljs.core.PersistentHashMap.prototype.domkm$silk$Pattern$_unmatch$arity$2 = (function (this$,that){
var this$__$1 = this;
return domkm.silk.unmatch_map.call(null,this$__$1,that);
});

cljs.core.PersistentHashMap.prototype.domkm$silk$Pattern$_match_validator$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.map_QMARK_;
});

cljs.core.PersistentHashMap.prototype.domkm$silk$Pattern$_unmatch_validators$arity$1 = (function (_){
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});
var re_quote_char_map_33587 = cljs.core.reduce.call(null,(function (p1__33585_SHARP_,p2__33586_SHARP_){
return cljs.core.assoc.call(null,p1__33585_SHARP_,p2__33586_SHARP_,[cljs.core.str("\\"),cljs.core.str(p2__33586_SHARP_)].join(''));
}),cljs.core.PersistentArrayMap.EMPTY,"\\.*+|?()[]{}$^");
domkm.silk.re_quote_replacement = ((function (re_quote_char_map_33587){
return (function domkm$silk$re_quote_replacement(s){
return clojure.string.escape.call(null,s,re_quote_char_map_33587);
});})(re_quote_char_map_33587))
;

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
 * @implements {domkm.silk.Pattern}
*/
domkm.silk.RegexPattern = (function (param_key,regex,deserialize,serialize,validate,__meta,__extmap,__hash){
this.param_key = param_key;
this.regex = regex;
this.deserialize = deserialize;
this.serialize = serialize;
this.validate = validate;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
domkm.silk.RegexPattern.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__31040__auto__,k__31041__auto__){
var self__ = this;
var this__31040__auto____$1 = this;
return cljs.core._lookup.call(null,this__31040__auto____$1,k__31041__auto__,null);
});

domkm.silk.RegexPattern.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__31042__auto__,k33589,else__31043__auto__){
var self__ = this;
var this__31042__auto____$1 = this;
var G__33591 = (((k33589 instanceof cljs.core.Keyword))?k33589.fqn:null);
switch (G__33591) {
case "param-key":
return self__.param_key;

break;
case "regex":
return self__.regex;

break;
case "deserialize":
return self__.deserialize;

break;
case "serialize":
return self__.serialize;

break;
case "validate":
return self__.validate;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k33589,else__31043__auto__);

}
});

domkm.silk.RegexPattern.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__31054__auto__,writer__31055__auto__,opts__31056__auto__){
var self__ = this;
var this__31054__auto____$1 = this;
var pr_pair__31057__auto__ = ((function (this__31054__auto____$1){
return (function (keyval__31058__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__31055__auto__,cljs.core.pr_writer,""," ","",opts__31056__auto__,keyval__31058__auto__);
});})(this__31054__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__31055__auto__,pr_pair__31057__auto__,"#domkm.silk.RegexPattern{",", ","}",opts__31056__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"param-key","param-key",1149590958),self__.param_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"regex","regex",939488856),self__.regex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),self__.deserialize],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"serialize","serialize",-69216574),self__.serialize],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validate","validate",-201300827),self__.validate],null))], null),self__.__extmap));
});

domkm.silk.RegexPattern.prototype.cljs$core$IIterable$ = true;

domkm.silk.RegexPattern.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__33588){
var self__ = this;
var G__33588__$1 = this;
return (new cljs.core.RecordIter((0),G__33588__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"param-key","param-key",1149590958),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),new cljs.core.Keyword(null,"serialize","serialize",-69216574),new cljs.core.Keyword(null,"validate","validate",-201300827)], null),cljs.core._iterator.call(null,self__.__extmap)));
});

domkm.silk.RegexPattern.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__31038__auto__){
var self__ = this;
var this__31038__auto____$1 = this;
return self__.__meta;
});

domkm.silk.RegexPattern.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__31034__auto__){
var self__ = this;
var this__31034__auto____$1 = this;
return (new domkm.silk.RegexPattern(self__.param_key,self__.regex,self__.deserialize,self__.serialize,self__.validate,self__.__meta,self__.__extmap,self__.__hash));
});

domkm.silk.RegexPattern.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__31044__auto__){
var self__ = this;
var this__31044__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

domkm.silk.RegexPattern.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__31035__auto__){
var self__ = this;
var this__31035__auto____$1 = this;
var h__30861__auto__ = self__.__hash;
if(!((h__30861__auto__ == null))){
return h__30861__auto__;
} else {
var h__30861__auto____$1 = cljs.core.hash_imap.call(null,this__31035__auto____$1);
self__.__hash = h__30861__auto____$1;

return h__30861__auto____$1;
}
});

domkm.silk.RegexPattern.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__31036__auto__,other__31037__auto__){
var self__ = this;
var this__31036__auto____$1 = this;
if(cljs.core.truth_((function (){var and__30414__auto__ = other__31037__auto__;
if(cljs.core.truth_(and__30414__auto__)){
var and__30414__auto____$1 = (this__31036__auto____$1.constructor === other__31037__auto__.constructor);
if(and__30414__auto____$1){
return cljs.core.equiv_map.call(null,this__31036__auto____$1,other__31037__auto__);
} else {
return and__30414__auto____$1;
}
} else {
return and__30414__auto__;
}
})())){
return true;
} else {
return false;
}
});

domkm.silk.RegexPattern.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__31049__auto__,k__31050__auto__){
var self__ = this;
var this__31049__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"serialize","serialize",-69216574),null,new cljs.core.Keyword(null,"validate","validate",-201300827),null,new cljs.core.Keyword(null,"param-key","param-key",1149590958),null,new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),null,new cljs.core.Keyword(null,"regex","regex",939488856),null], null), null),k__31050__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__31049__auto____$1),self__.__meta),k__31050__auto__);
} else {
return (new domkm.silk.RegexPattern(self__.param_key,self__.regex,self__.deserialize,self__.serialize,self__.validate,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__31050__auto__)),null));
}
});

domkm.silk.RegexPattern.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__31047__auto__,k__31048__auto__,G__33588){
var self__ = this;
var this__31047__auto____$1 = this;
var pred__33592 = cljs.core.keyword_identical_QMARK_;
var expr__33593 = k__31048__auto__;
if(cljs.core.truth_(pred__33592.call(null,new cljs.core.Keyword(null,"param-key","param-key",1149590958),expr__33593))){
return (new domkm.silk.RegexPattern(G__33588,self__.regex,self__.deserialize,self__.serialize,self__.validate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33592.call(null,new cljs.core.Keyword(null,"regex","regex",939488856),expr__33593))){
return (new domkm.silk.RegexPattern(self__.param_key,G__33588,self__.deserialize,self__.serialize,self__.validate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33592.call(null,new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),expr__33593))){
return (new domkm.silk.RegexPattern(self__.param_key,self__.regex,G__33588,self__.serialize,self__.validate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33592.call(null,new cljs.core.Keyword(null,"serialize","serialize",-69216574),expr__33593))){
return (new domkm.silk.RegexPattern(self__.param_key,self__.regex,self__.deserialize,G__33588,self__.validate,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__33592.call(null,new cljs.core.Keyword(null,"validate","validate",-201300827),expr__33593))){
return (new domkm.silk.RegexPattern(self__.param_key,self__.regex,self__.deserialize,self__.serialize,G__33588,self__.__meta,self__.__extmap,null));
} else {
return (new domkm.silk.RegexPattern(self__.param_key,self__.regex,self__.deserialize,self__.serialize,self__.validate,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__31048__auto__,G__33588),null));
}
}
}
}
}
});

domkm.silk.RegexPattern.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__31052__auto__){
var self__ = this;
var this__31052__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"param-key","param-key",1149590958),self__.param_key],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"regex","regex",939488856),self__.regex],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),self__.deserialize],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"serialize","serialize",-69216574),self__.serialize],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"validate","validate",-201300827),self__.validate],null))], null),self__.__extmap));
});

domkm.silk.RegexPattern.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__31039__auto__,G__33588){
var self__ = this;
var this__31039__auto____$1 = this;
return (new domkm.silk.RegexPattern(self__.param_key,self__.regex,self__.deserialize,self__.serialize,self__.validate,G__33588,self__.__extmap,self__.__hash));
});

domkm.silk.RegexPattern.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__31045__auto__,entry__31046__auto__){
var self__ = this;
var this__31045__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__31046__auto__)){
return cljs.core._assoc.call(null,this__31045__auto____$1,cljs.core._nth.call(null,entry__31046__auto__,(0)),cljs.core._nth.call(null,entry__31046__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__31045__auto____$1,entry__31046__auto__);
}
});

domkm.silk.RegexPattern.prototype.domkm$silk$Pattern$ = true;

domkm.silk.RegexPattern.prototype.domkm$silk$Pattern$_match$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
var G__33595 = cljs.core.re_matches.call(null,self__.regex,s);
var G__33595__$1 = (((G__33595 == null))?null:self__.deserialize.call(null,G__33595));
var G__33595__$2 = (((G__33595__$1 == null))?null:cljs.core.PersistentHashMap.fromArrays([self__.param_key],[G__33595__$1]));
return G__33595__$2;
});

domkm.silk.RegexPattern.prototype.domkm$silk$Pattern$_unmatch$arity$2 = (function (_,params){
var self__ = this;
var ___$1 = this;
var v = cljs.core.get.call(null,params,self__.param_key);
if(cljs.core._EQ_.call(null,v,new cljs.core.Keyword("domkm.silk","optional-key-has-no-value","domkm.silk/optional-key-has-no-value",-532938173))){
return v;
} else {
return self__.serialize.call(null,v);
}
});

domkm.silk.RegexPattern.prototype.domkm$silk$Pattern$_match_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.string_QMARK_;
});

domkm.silk.RegexPattern.prototype.domkm$silk$Pattern$_unmatch_validators$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.fromArray([self__.param_key,domkm.silk.optional_value_is_allowed.call(null,self__.validate)], true, false);
});

domkm.silk.RegexPattern.prototype.domkm$silk$Pattern$_create_default$arity$2 = (function (_,v){
var self__ = this;
var ___$1 = this;
return domkm.silk.create_default.call(null,self__.param_key,v);
});

domkm.silk.RegexPattern.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"param-key","param-key",-1504844811,null),new cljs.core.Symbol(null,"regex","regex",-1714946913,null),new cljs.core.Symbol(null,"deserialize","deserialize",-350525411,null),new cljs.core.Symbol(null,"serialize","serialize",1571314953,null),new cljs.core.Symbol(null,"validate","validate",1439230700,null)], null);
});

domkm.silk.RegexPattern.cljs$lang$type = true;

domkm.silk.RegexPattern.cljs$lang$ctorPrSeq = (function (this__31074__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"domkm.silk/RegexPattern");
});

domkm.silk.RegexPattern.cljs$lang$ctorPrWriter = (function (this__31074__auto__,writer__31075__auto__){
return cljs.core._write.call(null,writer__31075__auto__,"domkm.silk/RegexPattern");
});

domkm.silk.__GT_RegexPattern = (function domkm$silk$__GT_RegexPattern(param_key,regex,deserialize,serialize,validate){
return (new domkm.silk.RegexPattern(param_key,regex,deserialize,serialize,validate,null,null,null));
});

domkm.silk.map__GT_RegexPattern = (function domkm$silk$map__GT_RegexPattern(G__33590){
return (new domkm.silk.RegexPattern(new cljs.core.Keyword(null,"param-key","param-key",1149590958).cljs$core$IFn$_invoke$arity$1(G__33590),new cljs.core.Keyword(null,"regex","regex",939488856).cljs$core$IFn$_invoke$arity$1(G__33590),new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938).cljs$core$IFn$_invoke$arity$1(G__33590),new cljs.core.Keyword(null,"serialize","serialize",-69216574).cljs$core$IFn$_invoke$arity$1(G__33590),new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(G__33590),null,cljs.core.dissoc.call(null,G__33590,new cljs.core.Keyword(null,"param-key","param-key",1149590958),new cljs.core.Keyword(null,"regex","regex",939488856),new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),new cljs.core.Keyword(null,"serialize","serialize",-69216574),new cljs.core.Keyword(null,"validate","validate",-201300827)),null));
});

domkm.silk.regex = (function domkm$silk$regex(var_args){
var args33599 = [];
var len__31484__auto___33605 = arguments.length;
var i__31485__auto___33606 = (0);
while(true){
if((i__31485__auto___33606 < len__31484__auto___33605)){
args33599.push((arguments[i__31485__auto___33606]));

var G__33607 = (i__31485__auto___33606 + (1));
i__31485__auto___33606 = G__33607;
continue;
} else {
}
break;
}

var G__33601 = args33599.length;
switch (G__33601) {
case 2:
return domkm.silk.regex.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domkm.silk.regex.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33599.length)].join('')));

}
});

domkm.silk.regex.cljs$core$IFn$_invoke$arity$2 = (function (k,re){
return domkm.silk.regex.call(null,k,re,cljs.core.PersistentArrayMap.EMPTY);
});

domkm.silk.regex.cljs$core$IFn$_invoke$arity$3 = (function (k,re,p__33602){
var map__33603 = p__33602;
var map__33603__$1 = ((((!((map__33603 == null)))?((((map__33603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33603):map__33603);
var deserialize = cljs.core.get.call(null,map__33603__$1,new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),cljs.core.identity);
var serialize = cljs.core.get.call(null,map__33603__$1,new cljs.core.Keyword(null,"serialize","serialize",-69216574),((function (map__33603,map__33603__$1,deserialize){
return (function (p1__33597_SHARP_){
if(cljs.core.vector_QMARK_.call(null,p1__33597_SHARP_)){
return cljs.core.nth.call(null,p1__33597_SHARP_,(0));
} else {
return p1__33597_SHARP_;
}
});})(map__33603,map__33603__$1,deserialize))
);
var validate = cljs.core.get.call(null,map__33603__$1,new cljs.core.Keyword(null,"validate","validate",-201300827),((function (map__33603,map__33603__$1,deserialize,serialize){
return (function (p1__33598_SHARP_){
var temp__4425__auto__ = ((cljs.core.vector_QMARK_.call(null,p1__33598_SHARP_))?cljs.core.first.call(null,p1__33598_SHARP_):p1__33598_SHARP_);
if(cljs.core.truth_(temp__4425__auto__)){
var s = temp__4425__auto__;
var and__30414__auto__ = typeof s === 'string';
if(and__30414__auto__){
return cljs.core.re_find.call(null,re,s);
} else {
return and__30414__auto__;
}
} else {
return null;
}
});})(map__33603,map__33603__$1,deserialize,serialize))
);
if(cljs.core.some_QMARK_.call(null,k)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"k","k",-505765866,null))))].join('')));
}

return domkm.silk.map__GT_RegexPattern.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"param-key","param-key",1149590958),k,new cljs.core.Keyword(null,"regex","regex",939488856),re,new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),deserialize,new cljs.core.Keyword(null,"serialize","serialize",-69216574),serialize,new cljs.core.Keyword(null,"validate","validate",-201300827),validate], null));
});

domkm.silk.regex.cljs$lang$maxFixedArity = 3;
domkm.silk.bool = (function domkm$silk$bool(k){
return domkm.silk.regex.call(null,k,/true|false/,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),(function (p1__33609_SHARP_){
return cljs.core._EQ_.call(null,"true",p1__33609_SHARP_);
}),new cljs.core.Keyword(null,"serialize","serialize",-69216574),cljs.core.str,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__33610_SHARP_){
return (Boolean === cljs.core.type.call(null,p1__33610_SHARP_));
})], null));
});
domkm.silk.int$ = (function domkm$silk$int(k){
return domkm.silk.regex.call(null,k,/\d+/,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),(function (p1__33611_SHARP_){
return parseInt(p1__33611_SHARP_,(10));
}),new cljs.core.Keyword(null,"serialize","serialize",-69216574),cljs.core.str,new cljs.core.Keyword(null,"validate","validate",-201300827),cljs.core.integer_QMARK_], null));
});
domkm.silk.uuid = (function domkm$silk$uuid(k){
return domkm.silk.regex.call(null,k,/[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}/,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"deserialize","deserialize",-1991056938),cljs.core.__GT_UUID,new cljs.core.Keyword(null,"serialize","serialize",-69216574),cljs.core.str,new cljs.core.Keyword(null,"validate","validate",-201300827),(function (p1__33612_SHARP_){
return (p1__33612_SHARP_ instanceof cljs.core.UUID);
})], null));
});
domkm.silk.cat = (function domkm$silk$cat(var_args){
var args__31491__auto__ = [];
var len__31484__auto___33619 = arguments.length;
var i__31485__auto___33620 = (0);
while(true){
if((i__31485__auto___33620 < len__31484__auto___33619)){
args__31491__auto__.push((arguments[i__31485__auto___33620]));

var G__33621 = (i__31485__auto___33620 + (1));
i__31485__auto___33620 = G__33621;
continue;
} else {
}
break;
}

var argseq__31492__auto__ = ((((0) < args__31491__auto__.length))?(new cljs.core.IndexedSeq(args__31491__auto__.slice((0)),(0))):null);
return domkm.silk.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31492__auto__);
});

domkm.silk.cat.cljs$core$IFn$_invoke$arity$variadic = (function (ptrns){
if(cljs.core.every_QMARK_.call(null,(function (p1__33613_SHARP_){
return domkm.silk.match_valid_QMARK_.call(null,p1__33613_SHARP_,"string");
}),ptrns)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__33613#","p1__33613#",1468981378,null)], null),cljs.core.list(new cljs.core.Symbol(null,"match-valid?","match-valid?",1320066545,null),new cljs.core.Symbol(null,"p1__33613#","p1__33613#",1468981378,null),"string")),new cljs.core.Symbol(null,"ptrns","ptrns",-1823952707,null))))].join('')));
}

if(cljs.core.truth_((function (){var pkeys = cljs.core.mapcat.call(null,cljs.core.comp.call(null,cljs.core.keys,domkm.silk.unmatch_validators),ptrns);
var or__30426__auto__ = cljs.core.empty_QMARK_.call(null,pkeys);
if(or__30426__auto__){
return or__30426__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.distinct_QMARK_,pkeys);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"pkeys","pkeys",1683217583,null),cljs.core.list(new cljs.core.Symbol(null,"mapcat","mapcat",-601348859,null),cljs.core.list(new cljs.core.Symbol(null,"comp","comp",-1462482139,null),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"unmatch-validators","unmatch-validators",1961826765,null)),new cljs.core.Symbol(null,"ptrns","ptrns",-1823952707,null))], null),cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"pkeys","pkeys",1683217583,null)),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Symbol(null,"pkeys","pkeys",1683217583,null))))))].join('')));
}

var re_str = (function (p1__33614_SHARP_){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,")"),((typeof p1__33614_SHARP_ === 'string')?domkm.silk.re_quote_replacement.call(null,p1__33614_SHARP_):(((p1__33614_SHARP_ instanceof domkm.silk.RegexPattern))?(function (){var s = [cljs.core.str(new cljs.core.Keyword(null,"regex","regex",939488856).cljs$core$IFn$_invoke$arity$1(p1__33614_SHARP_))].join('');
return cljs.core.subs.call(null,s,(1),(s.length - (1)));
})():".*"
))),"(");
});
var re = cljs.core.re_pattern.call(null,clojure.string.join.call(null,cljs.core.mapcat.call(null,re_str,ptrns)));
var ptrns__$1 = cljs.core.vec.call(null,ptrns);
var validator = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,domkm.silk.unmatch_validators,ptrns__$1));
if(typeof domkm.silk.t_domkm$silk33616 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {domkm.silk.Pattern}
*/
domkm.silk.t_domkm$silk33616 = (function (ptrns,re_str,re,validator,meta33617){
this.ptrns = ptrns;
this.re_str = re_str;
this.re = re;
this.validator = validator;
this.meta33617 = meta33617;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domkm.silk.t_domkm$silk33616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (re_str,re,ptrns__$1,validator){
return (function (_33618,meta33617__$1){
var self__ = this;
var _33618__$1 = this;
return (new domkm.silk.t_domkm$silk33616(self__.ptrns,self__.re_str,self__.re,self__.validator,meta33617__$1));
});})(re_str,re,ptrns__$1,validator))
;

domkm.silk.t_domkm$silk33616.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (re_str,re,ptrns__$1,validator){
return (function (_33618){
var self__ = this;
var _33618__$1 = this;
return self__.meta33617;
});})(re_str,re,ptrns__$1,validator))
;

domkm.silk.t_domkm$silk33616.prototype.domkm$silk$Pattern$ = true;

domkm.silk.t_domkm$silk33616.prototype.domkm$silk$Pattern$_match$arity$2 = ((function (re_str,re,ptrns__$1,validator){
return (function (_,s){
var self__ = this;
var ___$1 = this;
var temp__4425__auto__ = cljs.core.re_find.call(null,self__.re,s);
if(cljs.core.truth_(temp__4425__auto__)){
var v = temp__4425__auto__;
return domkm.silk.match.call(null,self__.ptrns,cljs.core.mapv.call(null,cljs.core.not_empty,cljs.core.subvec.call(null,v,(1))));
} else {
return null;
}
});})(re_str,re,ptrns__$1,validator))
;

domkm.silk.t_domkm$silk33616.prototype.domkm$silk$Pattern$_unmatch$arity$2 = ((function (re_str,re,ptrns__$1,validator){
return (function (_,params){
var self__ = this;
var ___$1 = this;
return clojure.string.join.call(null,domkm.silk.unmatch.call(null,self__.ptrns,params));
});})(re_str,re,ptrns__$1,validator))
;

domkm.silk.t_domkm$silk33616.prototype.domkm$silk$Pattern$_match_validator$arity$1 = ((function (re_str,re,ptrns__$1,validator){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.string_QMARK_;
});})(re_str,re,ptrns__$1,validator))
;

domkm.silk.t_domkm$silk33616.prototype.domkm$silk$Pattern$_unmatch_validators$arity$1 = ((function (re_str,re,ptrns__$1,validator){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.validator;
});})(re_str,re,ptrns__$1,validator))
;

domkm.silk.t_domkm$silk33616.getBasis = ((function (re_str,re,ptrns__$1,validator){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ptrns","ptrns",-1823952707,null),new cljs.core.Symbol(null,"re-str","re-str",1527032991,null),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"validator","validator",-325659154,null),new cljs.core.Symbol(null,"meta33617","meta33617",-1105313768,null)], null);
});})(re_str,re,ptrns__$1,validator))
;

domkm.silk.t_domkm$silk33616.cljs$lang$type = true;

domkm.silk.t_domkm$silk33616.cljs$lang$ctorStr = "domkm.silk/t_domkm$silk33616";

domkm.silk.t_domkm$silk33616.cljs$lang$ctorPrWriter = ((function (re_str,re,ptrns__$1,validator){
return (function (this__31024__auto__,writer__31025__auto__,opt__31026__auto__){
return cljs.core._write.call(null,writer__31025__auto__,"domkm.silk/t_domkm$silk33616");
});})(re_str,re,ptrns__$1,validator))
;

domkm.silk.__GT_t_domkm$silk33616 = ((function (re_str,re,ptrns__$1,validator){
return (function domkm$silk$__GT_t_domkm$silk33616(ptrns__$2,re_str__$1,re__$1,validator__$1,meta33617){
return (new domkm.silk.t_domkm$silk33616(ptrns__$2,re_str__$1,re__$1,validator__$1,meta33617));
});})(re_str,re,ptrns__$1,validator))
;

}

return (new domkm.silk.t_domkm$silk33616(ptrns__$1,re_str,re,validator,cljs.core.PersistentArrayMap.EMPTY));
});

domkm.silk.cat.cljs$lang$maxFixedArity = (0);

domkm.silk.cat.cljs$lang$applyTo = (function (seq33615){
return domkm.silk.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33615));
});
domkm.silk._QMARK_ = (function domkm$silk$_QMARK_(var_args){
var args__31491__auto__ = [];
var len__31484__auto___33629 = arguments.length;
var i__31485__auto___33630 = (0);
while(true){
if((i__31485__auto___33630 < len__31484__auto___33629)){
args__31491__auto__.push((arguments[i__31485__auto___33630]));

var G__33631 = (i__31485__auto___33630 + (1));
i__31485__auto___33630 = G__33631;
continue;
} else {
}
break;
}

var argseq__31492__auto__ = ((((1) < args__31491__auto__.length))?(new cljs.core.IndexedSeq(args__31491__auto__.slice((1)),(0))):null);
return domkm.silk._QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31492__auto__);
});

domkm.silk._QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (ptrn,p__33624){
var vec__33625 = p__33624;
var default_params = cljs.core.nth.call(null,vec__33625,(0),null);
if(cljs.core.truth_(domkm.silk.pattern_QMARK_.call(null,ptrn))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pattern?","pattern?",519487951,null),new cljs.core.Symbol(null,"ptrn","ptrn",1874447722,null))))].join('')));
}

if(cljs.core.truth_((function (){var or__30426__auto__ = cljs.core.not.call(null,default_params);
if(or__30426__auto__){
return or__30426__auto__;
} else {
return domkm.silk.unmatch.call(null,ptrn,default_params);
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"or","or",1876275696,null),cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),new cljs.core.Symbol(null,"default-params","default-params",715565285,null)),cljs.core.list(new cljs.core.Symbol(null,"unmatch","unmatch",-1044807595,null),new cljs.core.Symbol(null,"ptrn","ptrn",1874447722,null),new cljs.core.Symbol(null,"default-params","default-params",715565285,null)))))].join('')));
}

if(typeof domkm.silk.t_domkm$silk33626 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {domkm.silk.Pattern}
*/
domkm.silk.t_domkm$silk33626 = (function (ptrn,p__33624,vec__33625,default_params,meta33627){
this.ptrn = ptrn;
this.p__33624 = p__33624;
this.vec__33625 = vec__33625;
this.default_params = default_params;
this.meta33627 = meta33627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domkm.silk.t_domkm$silk33626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (vec__33625,default_params){
return (function (_33628,meta33627__$1){
var self__ = this;
var _33628__$1 = this;
return (new domkm.silk.t_domkm$silk33626(self__.ptrn,self__.p__33624,self__.vec__33625,self__.default_params,meta33627__$1));
});})(vec__33625,default_params))
;

domkm.silk.t_domkm$silk33626.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (vec__33625,default_params){
return (function (_33628){
var self__ = this;
var _33628__$1 = this;
return self__.meta33627;
});})(vec__33625,default_params))
;

domkm.silk.t_domkm$silk33626.prototype.domkm$silk$Pattern$ = true;

domkm.silk.t_domkm$silk33626.prototype.domkm$silk$Pattern$_match$arity$2 = ((function (vec__33625,default_params){
return (function (_,that){
var self__ = this;
var ___$1 = this;
if((that == null)){
var or__30426__auto__ = self__.default_params;
if(cljs.core.truth_(or__30426__auto__)){
return or__30426__auto__;
} else {
return domkm.silk.create_default.call(null,self__.ptrn);
}
} else {
return domkm.silk.match.call(null,self__.ptrn,that);
}
});})(vec__33625,default_params))
;

domkm.silk.t_domkm$silk33626.prototype.domkm$silk$Pattern$_unmatch$arity$2 = ((function (vec__33625,default_params){
return (function (_,params){
var self__ = this;
var ___$1 = this;
var r = domkm.silk.unmatch.call(null,self__.ptrn,cljs.core.merge_with.call(null,((function (___$1,vec__33625,default_params){
return (function (pval,dval){
if((pval == null)){
return dval;
} else {
return pval;
}
});})(___$1,vec__33625,default_params))
,params,(function (){var or__30426__auto__ = self__.default_params;
if(cljs.core.truth_(or__30426__auto__)){
return or__30426__auto__;
} else {
return domkm.silk.create_default.call(null,self__.ptrn,new cljs.core.Keyword("domkm.silk","optional-key-has-no-value","domkm.silk/optional-key-has-no-value",-532938173));
}
})()));
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword("domkm.silk","optional-key-has-no-value","domkm.silk/optional-key-has-no-value",-532938173),r))){
return r;
} else {
return null;
}
});})(vec__33625,default_params))
;

domkm.silk.t_domkm$silk33626.prototype.domkm$silk$Pattern$_match_validator$arity$1 = ((function (vec__33625,default_params){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.some_fn.call(null,cljs.core.nil_QMARK_,domkm.silk.match_validator.call(null,self__.ptrn));
});})(vec__33625,default_params))
;

domkm.silk.t_domkm$silk33626.prototype.domkm$silk$Pattern$_unmatch_validators$arity$1 = ((function (vec__33625,default_params){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});})(vec__33625,default_params))
;

domkm.silk.t_domkm$silk33626.getBasis = ((function (vec__33625,default_params){
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ptrn","ptrn",1874447722,null),new cljs.core.Symbol(null,"p__33624","p__33624",-17052860,null),new cljs.core.Symbol(null,"vec__33625","vec__33625",-1624486498,null),new cljs.core.Symbol(null,"default-params","default-params",715565285,null),new cljs.core.Symbol(null,"meta33627","meta33627",-534857492,null)], null);
});})(vec__33625,default_params))
;

domkm.silk.t_domkm$silk33626.cljs$lang$type = true;

domkm.silk.t_domkm$silk33626.cljs$lang$ctorStr = "domkm.silk/t_domkm$silk33626";

domkm.silk.t_domkm$silk33626.cljs$lang$ctorPrWriter = ((function (vec__33625,default_params){
return (function (this__31024__auto__,writer__31025__auto__,opt__31026__auto__){
return cljs.core._write.call(null,writer__31025__auto__,"domkm.silk/t_domkm$silk33626");
});})(vec__33625,default_params))
;

domkm.silk.__GT_t_domkm$silk33626 = ((function (vec__33625,default_params){
return (function domkm$silk$__GT_t_domkm$silk33626(ptrn__$1,p__33624__$1,vec__33625__$1,default_params__$1,meta33627){
return (new domkm.silk.t_domkm$silk33626(ptrn__$1,p__33624__$1,vec__33625__$1,default_params__$1,meta33627));
});})(vec__33625,default_params))
;

}

return (new domkm.silk.t_domkm$silk33626(ptrn,p__33624,vec__33625,default_params,cljs.core.PersistentArrayMap.EMPTY));
});

domkm.silk._QMARK_.cljs$lang$maxFixedArity = (1);

domkm.silk._QMARK_.cljs$lang$applyTo = (function (seq33622){
var G__33623 = cljs.core.first.call(null,seq33622);
var seq33622__$1 = cljs.core.next.call(null,seq33622);
return domkm.silk._QMARK_.cljs$core$IFn$_invoke$arity$variadic(G__33623,seq33622__$1);
});

/**
* @constructor
 * @implements {cljs.core.IMapEntry}
 * @implements {domkm.silk.Pattern}
*/
domkm.silk.Route = (function (name,pattern){
this.name = name;
this.pattern = pattern;
this.cljs$lang$protocol_mask$partition0$ = 2048;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domkm.silk.Route.prototype.domkm$silk$Pattern$ = true;

domkm.silk.Route.prototype.domkm$silk$Pattern$_match$arity$2 = (function (this$,_url){
var self__ = this;
var this$__$1 = this;
var temp__4425__auto__ = domkm.silk.match.call(null,self__.pattern,domkm.silk.url.call(null,_url));
if(cljs.core.truth_(temp__4425__auto__)){
var params = temp__4425__auto__;
return cljs.core.assoc.call(null,params,new cljs.core.Keyword("domkm.silk","name","domkm.silk/name",607245322),self__.name,new cljs.core.Keyword("domkm.silk","pattern","domkm.silk/pattern",-593943136),self__.pattern);
} else {
return null;
}
});

domkm.silk.Route.prototype.domkm$silk$Pattern$_unmatch$arity$2 = (function (this$,params){
var self__ = this;
var this$__$1 = this;
return domkm.silk.url.call(null,domkm.silk.unmatch.call(null,self__.pattern,cljs.core.dissoc.call(null,params,new cljs.core.Keyword("domkm.silk","name","domkm.silk/name",607245322),new cljs.core.Keyword("domkm.silk","pattern","domkm.silk/pattern",-593943136))));
});

domkm.silk.Route.prototype.domkm$silk$Pattern$_match_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.map_QMARK_;
});

domkm.silk.Route.prototype.domkm$silk$Pattern$_unmatch_validators$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

domkm.silk.Route.prototype.cljs$core$IMapEntry$_key$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.name;
});

domkm.silk.Route.prototype.cljs$core$IMapEntry$_val$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.pattern;
});

domkm.silk.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"pattern","pattern",1882666950,null)], null);
});

domkm.silk.Route.cljs$lang$type = true;

domkm.silk.Route.cljs$lang$ctorStr = "domkm.silk/Route";

domkm.silk.Route.cljs$lang$ctorPrWriter = (function (this__31024__auto__,writer__31025__auto__,opt__31026__auto__){
return cljs.core._write.call(null,writer__31025__auto__,"domkm.silk/Route");
});

domkm.silk.__GT_Route = (function domkm$silk$__GT_Route(name,pattern){
return (new domkm.silk.Route(name,pattern));
});

domkm.silk.route_QMARK_ = (function domkm$silk$route_QMARK_(x){
return (x instanceof domkm.silk.Route);
});
domkm.silk.route = (function domkm$silk$route(x){
if(cljs.core.truth_(domkm.silk.route_QMARK_.call(null,x))){
return x;
} else {
var vec__33633 = x;
var nm = cljs.core.nth.call(null,vec__33633,(0),null);
var ptrn = cljs.core.nth.call(null,vec__33633,(1),null);
return domkm.silk.__GT_Route.call(null,nm,domkm.silk.url_pattern.call(null,ptrn));
}
});

/**
* @constructor
 * @implements {domkm.silk.Pattern}
*/
domkm.silk.Routes = (function (routes_seq,routes_map){
this.routes_seq = routes_seq;
this.routes_map = routes_map;
})
domkm.silk.Routes.prototype.domkm$silk$Pattern$ = true;

domkm.silk.Routes.prototype.domkm$silk$Pattern$_match$arity$2 = (function (this$,_url){
var self__ = this;
var this$__$1 = this;
var u = domkm.silk.url.call(null,_url);
return cljs.core.some.call(null,((function (u,this$__$1){
return (function (route){
var temp__4425__auto__ = domkm.silk.match.call(null,route,u);
if(cljs.core.truth_(temp__4425__auto__)){
var params = temp__4425__auto__;
return cljs.core.assoc.call(null,params,new cljs.core.Keyword("domkm.silk","routes","domkm.silk/routes",626824359),this$__$1,new cljs.core.Keyword("domkm.silk","url","domkm.silk/url",1456306613),u);
} else {
return null;
}
});})(u,this$__$1))
,self__.routes_seq);
});

domkm.silk.Routes.prototype.domkm$silk$Pattern$_unmatch$arity$2 = (function (this$,p__33634){
var self__ = this;
var map__33635 = p__33634;
var map__33635__$1 = ((((!((map__33635 == null)))?((((map__33635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33635):map__33635);
var params = map__33635__$1;
var nm = cljs.core.get.call(null,map__33635__$1,new cljs.core.Keyword("domkm.silk","name","domkm.silk/name",607245322));
var this$__$1 = this;
if((cljs.core.some_QMARK_.call(null,nm)) && (cljs.core.contains_QMARK_.call(null,self__.routes_map,nm))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"and","and",668631710,null),cljs.core.list(new cljs.core.Symbol(null,"some?","some?",234752293,null),new cljs.core.Symbol(null,"nm","nm",-188384525,null)),cljs.core.list(new cljs.core.Symbol(null,"contains?","contains?",-1676812576,null),new cljs.core.Symbol(null,"routes-map","routes-map",964392646,null),new cljs.core.Symbol(null,"nm","nm",-188384525,null)))))].join('')));
}

return domkm.silk.unmatch.call(null,cljs.core.get.call(null,self__.routes_map,nm),cljs.core.dissoc.call(null,params,new cljs.core.Keyword("domkm.silk","routes","domkm.silk/routes",626824359),new cljs.core.Keyword("domkm.silk","url","domkm.silk/url",1456306613)));
});

domkm.silk.Routes.prototype.domkm$silk$Pattern$_match_validator$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.map_QMARK_;
});

domkm.silk.Routes.prototype.domkm$silk$Pattern$_unmatch_validators$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
});

domkm.silk.Routes.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"routes-seq","routes-seq",-1976293284,null),new cljs.core.Symbol(null,"routes-map","routes-map",964392646,null)], null);
});

domkm.silk.Routes.cljs$lang$type = true;

domkm.silk.Routes.cljs$lang$ctorStr = "domkm.silk/Routes";

domkm.silk.Routes.cljs$lang$ctorPrWriter = (function (this__31024__auto__,writer__31025__auto__,opt__31026__auto__){
return cljs.core._write.call(null,writer__31025__auto__,"domkm.silk/Routes");
});

domkm.silk.__GT_Routes = (function domkm$silk$__GT_Routes(routes_seq,routes_map){
return (new domkm.silk.Routes(routes_seq,routes_map));
});

domkm.silk.routes_QMARK_ = (function domkm$silk$routes_QMARK_(x){
return (x instanceof domkm.silk.Routes);
});
domkm.silk.routes = (function domkm$silk$routes(rtes){
if(cljs.core.truth_(domkm.silk.routes_QMARK_.call(null,rtes))){
return rtes;
} else {
var rtes_seq = cljs.core.mapcat.call(null,(function (p1__33637_SHARP_){
if(cljs.core.truth_(domkm.silk.routes_QMARK_.call(null,p1__33637_SHARP_))){
return p1__33637_SHARP_.routes_seq;
} else {
return cljs.core._conj.call(null,cljs.core.List.EMPTY,domkm.silk.route.call(null,p1__33637_SHARP_));
}
}),rtes);
var rtes_map = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (rtes_seq){
return (function (memo,rte){
var rte__$1 = domkm.silk.route.call(null,rte);
var k = cljs.core.key.call(null,rte__$1);
if((k == null)){
return memo;
} else {
return cljs.core.assoc_BANG_.call(null,memo,k,rte__$1);
}
});})(rtes_seq))
,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),rtes_seq));
return domkm.silk.__GT_Routes.call(null,rtes_seq,rtes_map);
}
});
domkm.silk.arrive = (function domkm$silk$arrive(var_args){
var args33638 = [];
var len__31484__auto___33641 = arguments.length;
var i__31485__auto___33642 = (0);
while(true){
if((i__31485__auto___33642 < len__31484__auto___33641)){
args33638.push((arguments[i__31485__auto___33642]));

var G__33643 = (i__31485__auto___33642 + (1));
i__31485__auto___33642 = G__33643;
continue;
} else {
}
break;
}

var G__33640 = args33638.length;
switch (G__33640) {
case 2:
return domkm.silk.arrive.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domkm.silk.arrive.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33638.length)].join('')));

}
});

domkm.silk.arrive.cljs$core$IFn$_invoke$arity$2 = (function (rtes,x){
return domkm.silk.arrive.call(null,rtes,x,cljs.core.identity);
});

domkm.silk.arrive.cljs$core$IFn$_invoke$arity$3 = (function (rtes,x,handler){
return handler.call(null,domkm.silk.match.call(null,rtes,domkm.silk.url.call(null,x)));
});

domkm.silk.arrive.cljs$lang$maxFixedArity = 3;
domkm.silk.depart = (function domkm$silk$depart(var_args){
var args33645 = [];
var len__31484__auto___33648 = arguments.length;
var i__31485__auto___33649 = (0);
while(true){
if((i__31485__auto___33649 < len__31484__auto___33648)){
args33645.push((arguments[i__31485__auto___33649]));

var G__33650 = (i__31485__auto___33649 + (1));
i__31485__auto___33649 = G__33650;
continue;
} else {
}
break;
}

var G__33647 = args33645.length;
switch (G__33647) {
case 2:
return domkm.silk.depart.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domkm.silk.depart.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return domkm.silk.depart.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33645.length)].join('')));

}
});

domkm.silk.depart.cljs$core$IFn$_invoke$arity$2 = (function (rtes,nm){
return domkm.silk.depart.call(null,rtes,nm,cljs.core.PersistentArrayMap.EMPTY,cljs.core.str);
});

domkm.silk.depart.cljs$core$IFn$_invoke$arity$3 = (function (rtes,nm,params){
return domkm.silk.depart.call(null,rtes,nm,params,cljs.core.str);
});

domkm.silk.depart.cljs$core$IFn$_invoke$arity$4 = (function (rtes,nm,params,handler){
return handler.call(null,domkm.silk.unmatch.call(null,rtes,cljs.core.assoc.call(null,params,new cljs.core.Keyword("domkm.silk","name","domkm.silk/name",607245322),nm)));
});

domkm.silk.depart.cljs$lang$maxFixedArity = 4;

//# sourceMappingURL=silk.js.map