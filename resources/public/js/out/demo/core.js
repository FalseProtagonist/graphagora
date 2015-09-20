// Compiled by ClojureScript 0.0-3058 {}
goog.provide('demo.core');
goog.require('cljs.core');
goog.require('demo.graph');
if(typeof demo.core.app_state !== 'undefined'){
} else {
demo.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"text","text",-1790561697),"yo",cljs.core.list,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lion","Zebra","Buffalo","Antelope"], null)], true, false));
}
demo.core.main = (function demo$core$main(){
demo.graph.clear_command.call(null);

demo.graph.force_layout.call(null);

return alert("alive3?");
});

//# sourceMappingURL=core.js.map