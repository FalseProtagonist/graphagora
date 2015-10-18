// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.core');
goog.require('cljs.core');
goog.require('demo.life_logic');
goog.require('demo.life_draw');
goog.require('om.dom');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('om.core');
demo.core.nx = (15);
demo.core.ny = (15);
demo.core.r = (20);
demo.core.wrap = new cljs.core.Keyword(null,"true","true",-1114210334);
demo.core.color_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"live","live",-1610148039),"green",new cljs.core.Keyword(null,"dead","dead",-1946604091),"red"], null);
demo.core.size_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"live","live",-1610148039),demo.core.r,new cljs.core.Keyword(null,"dead","dead",-1946604091),(0)], null);
demo.core.rand_circle_data = (function demo$core$rand_circle_data(){
return demo.life_logic.get_circle_coordinates.call(null,demo.core.nx,demo.core.ny,demo.core.r,demo.core.color_map);
});
demo.core.get_circle_state = (function demo$core$get_circle_state(){
return demo.life_logic.update_visuals_main.call(null,demo.core.rand_circle_data.call(null),demo.core.color_map,demo.core.size_map);
});
demo.core.circle_state = reagent.core.atom.call(null,demo.core.get_circle_state.call(null));
demo.core.timer_state = reagent.core.atom.call(null,null);
demo.core.timeperiod = (1650);
if(typeof demo.core.timer !== 'undefined'){
} else {
demo.core.timer = cljs.core.atom.call(null,(new Date()));
}
if(typeof demo.core.state !== 'undefined'){
} else {
demo.core.state = reagent.core.atom.call(null,"state");
}
demo.core.set_time_updater = (function demo$core$set_time_updater(speed){
clearInterval(cljs.core.deref.call(null,demo.core.timer_state));

return cljs.core.reset_BANG_.call(null,demo.core.timer_state,setInterval((function (){
return cljs.core.swap_BANG_.call(null,demo.core.circle_state,(function (data){
return demo.life_logic.update_visuals_main.call(null,demo.life_logic.iterate_life_main.call(null,data,demo.core.nx,demo.core.ny,new cljs.core.Keyword(null,"wrap","wrap",851669987),demo.core.wrap),demo.core.color_map,demo.core.size_map);
}));
}),speed));
});
demo.core.clear_time_updater = (function demo$core$clear_time_updater(){
return clearInterval(cljs.core.deref.call(null,demo.core.timer_state));
});
demo.core.reset_state = (function demo$core$reset_state(){
return cljs.core.reset_BANG_.call(null,demo.core.circle_state,demo.core.get_circle_state.call(null));
});
demo.core.life_component = (function demo$core$life_component(){
return demo.life_draw.draw_update_circles.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,demo.core.circle_state)),demo.core.timeperiod);
});
demo.core.hello = (function demo$core$hello(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#life","div#life",1292344043),(cljs.core.truth_(cljs.core.deref.call(null,demo.core.circle_state))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1500),new cljs.core.Keyword(null,"height","height",1025178622),(1500)], null)], null):null)], null);
});
demo.core.reset_button = (function demo$core$reset_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),demo.core.reset_state], null),"Random Data"], null);
});
demo.core.stop_button = (function demo$core$stop_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),demo.core.clear_time_updater], null),"Stop"], null);
});
demo.core.start_button = (function demo$core$start_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return demo.core.set_time_updater.call(null,demo.core.timeperiod);
})], null),"Start"], null);
});
demo.core.home_component = (function demo$core$home_component(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),demo.core.hello,new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),null,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),demo.core.life_component], null));
});
demo.core.main = (function demo$core$main(){
demo.core.set_time_updater.call(null,demo.core.timeperiod);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.core.reset_button], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.core.stop_button], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.core.start_button], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.core.home_component], null)], null)], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map