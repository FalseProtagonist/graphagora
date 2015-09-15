// Compiled by ClojureScript 0.0-3058 {}
goog.provide('demo.app');
goog.require('cljs.core');
goog.require('weasel.repl');
demo.app.add_element = (function demo$app$add_element(){
return d3.select("div").selectAll("p").data(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["this is","d33"], null))).enter().append("p").text("this is d3 zz");
});
demo.app.main = (function demo$app$main(){
weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"verbose","verbose",1694226060),true,new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repl","repl",-35398667),null,new cljs.core.Keyword(null,"console","console",1228072057),null], null), null));

document.write("Hello, ClojureScript5!");

return demo.app.add_element.call(null);
});
demo.app.main.call(null);

//# sourceMappingURL=app.js.map