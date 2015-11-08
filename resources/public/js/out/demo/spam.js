// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.spam');
goog.require('cljs.core');
goog.require('demo.util');
goog.require('reagent.core');
demo.spam.text = reagent.core.atom.call(null,"");
demo.spam.spam_component = (function demo$spam$spam_component(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"para",new cljs.core.Keyword(null,"id","id",-1388402092),"myPara",new cljs.core.Keyword(null,"cols","cols",-1914801295),(demo.util.avail_width / (9)),new cljs.core.Keyword(null,"rows","rows",850049680),(demo.util.avail_height / (20)),new cljs.core.Keyword(null,"on-input","on-input",-267523366),(function (p1__32790_SHARP_){
return demo.util.log.call(null,[cljs.core.str("\ntext value: "),cljs.core.str(p1__32790_SHARP_.target.value)].join(''));
})], null)], null)], null);
});

//# sourceMappingURL=spam.js.map