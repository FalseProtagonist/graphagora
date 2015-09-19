// Compiled by ClojureScript 0.0-3058 {}
goog.provide('demo.core');
goog.require('cljs.core');
demo.core.clear_command = (function demo$core$clear_command(){
return d3.selectAll("p").remove();
});
demo.core.add_element = (function demo$core$add_element(){
return d3.select("div").data(cljs.core.clj__GT_js.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["this is","d3","ANYTHING","at all"], null))).enter().append("p").text("data");
});
demo.core.main = (function demo$core$main(){
demo.core.clear_command.call(null);

demo.core.add_element.call(null);

return alert("alive");
});

//# sourceMappingURL=core.js.map