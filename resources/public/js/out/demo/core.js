// Compiled by ClojureScript 0.0-3058 {}
goog.provide('demo.core');
goog.require('cljs.core');
goog.require('demo.graph');
demo.core.clear_command = (function demo$core$clear_command(){
d3.selectAll("p").remove();

return d3.selectAll("svg").remove();
});
demo.core.main = (function demo$core$main(){
demo.core.clear_command.call(null);

return demo.graph.force_layout.call(null);
});

//# sourceMappingURL=core.js.map