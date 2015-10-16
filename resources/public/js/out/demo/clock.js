// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.clock');
goog.require('cljs.core');
goog.require('reagent.core');
if(typeof demo.clock.timer !== 'undefined'){
} else {
demo.clock.timer = reagent.core.atom.call(null,(new Date()));
}
if(typeof demo.clock.time_color !== 'undefined'){
} else {
demo.clock.time_color = reagent.core.atom.call(null,"#f34");
}
if(typeof demo.clock.time_updater !== 'undefined'){
} else {
demo.clock.time_updater = setInterval((function (){
return cljs.core.reset_BANG_.call(null,demo.clock.timer,(new Date()));
}),(1000));
}
demo.clock.greeting = (function demo$clock$greeting(message){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),message], null);
});
demo.clock.clock = (function demo$clock$clock(){
var time_str = cljs.core.first.call(null,clojure.string.split.call(null,cljs.core.deref.call(null,demo.clock.timer).toTimeString()," "));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.example-clock","div.example-clock",1559289088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.deref.call(null,demo.clock.time_color)], null)], null),time_str], null);
});
demo.clock.color_input = (function demo$clock$color_input(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.color-input","div.color-input",-879914246),"Time color: ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,demo.clock.time_color),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__30279_SHARP_){
return cljs.core.reset_BANG_.call(null,demo.clock.time_color,p1__30279_SHARP_.target.value);
})], null)], null)], null);
});
demo.clock.simple_example = (function demo$clock$simple_example(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.clock.greeting,"Hello world, it is now"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.clock.clock], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.clock.color_input], null)], null);
});
demo.clock.run = (function demo$clock$run(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.clock.simple_example], null),document.getElementById("app"));
});
goog.exportSymbol('demo.clock.run', demo.clock.run);

//# sourceMappingURL=clock.js.map