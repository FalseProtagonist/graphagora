// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.life_core');
goog.require('cljs.core');
goog.require('demo.life_logic');
goog.require('demo.life_draw');
goog.require('om.dom');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('demo.db');
goog.require('om.core');
demo.life_core.nx = (10);
demo.life_core.ny = (10);
demo.life_core.r = (15);
demo.life_core.wrap = new cljs.core.Keyword(null,"true","true",-1114210334);
demo.life_core.color_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"live","live",-1610148039),"green",new cljs.core.Keyword(null,"dead","dead",-1946604091),"red"], null);
demo.life_core.size_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"live","live",-1610148039),demo.life_core.r,new cljs.core.Keyword(null,"dead","dead",-1946604091),(0)], null);
demo.life_core.rand_circle_data = (function demo$life_core$rand_circle_data(){
return demo.life_logic.get_circle_coordinates.call(null,demo.life_core.nx,demo.life_core.ny,demo.life_core.r,demo.life_core.color_map);
});
demo.life_core.get_circle_state = (function demo$life_core$get_circle_state(){
return demo.life_logic.update_visuals_main.call(null,demo.life_core.rand_circle_data.call(null),demo.life_core.color_map,demo.life_core.size_map);
});
demo.life_core.circle_state = reagent.core.atom.call(null,demo.life_core.get_circle_state.call(null));
demo.life_core.int_state = reagent.core.atom.call(null,(0));
demo.life_core.timer_state = reagent.core.atom.call(null,null);
demo.life_core.timeperiod = (1650);
if(typeof demo.life_core.timer !== 'undefined'){
} else {
demo.life_core.timer = cljs.core.atom.call(null,(new Date()));
}
if(typeof demo.life_core.state !== 'undefined'){
} else {
demo.life_core.state = reagent.core.atom.call(null,"state");
}
demo.life_core.show_life = reagent.core.atom.call(null,true);
demo.life_core.set_time_updater = (function demo$life_core$set_time_updater(speed){
clearInterval(cljs.core.deref.call(null,demo.life_core.timer_state));

return cljs.core.reset_BANG_.call(null,demo.life_core.timer_state,setInterval((function (){
return cljs.core.swap_BANG_.call(null,demo.life_core.circle_state,(function (data){
return demo.life_logic.update_visuals_main.call(null,demo.life_logic.iterate_life_main.call(null,data,demo.life_core.nx,demo.life_core.ny,new cljs.core.Keyword(null,"wrap","wrap",851669987),demo.life_core.wrap),demo.life_core.color_map,demo.life_core.size_map);
}));
}),speed));
});
demo.life_core.clear_time_updater = (function demo$life_core$clear_time_updater(){
return clearInterval(cljs.core.deref.call(null,demo.life_core.timer_state));
});
demo.life_core.reset_state = (function demo$life_core$reset_state(){
return cljs.core.reset_BANG_.call(null,demo.life_core.circle_state,demo.life_core.get_circle_state.call(null));
});
demo.life_core.life_inner_component = (function demo$life_core$life_inner_component(){
return demo.life_draw.draw_update_circles.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,demo.life_core.circle_state)),demo.life_core.timeperiod);
});
demo.life_core.draw_svg = (function demo$life_core$draw_svg(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#life","div#life",1292344043),(cljs.core.truth_(cljs.core.deref.call(null,demo.life_core.circle_state))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1500),new cljs.core.Keyword(null,"height","height",1025178622),(1500)], null)], null):null)], null);
});
demo.life_core.reset_button = (function demo$life_core$reset_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),demo.life_core.reset_state], null),"Random Data"], null);
});
demo.life_core.stop_button = (function demo$life_core$stop_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),demo.life_core.clear_time_updater], null),"Stop"], null);
});
demo.life_core.start_button = (function demo$life_core$start_button(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return demo.life_core.set_time_updater.call(null,demo.life_core.timeperiod);
})], null),"Start"], null);
});
demo.life_core.show_fn = (function demo$life_core$show_fn(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.call(null,demo.life_core.show_life,cljs.core.not);
})], null),"Show"], null);
});
demo.life_core.life_component = (function demo$life_core$life_component(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),demo.life_core.draw_svg,new cljs.core.Keyword(null,"component-will-mount","component-will-mount",209708855),null,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),demo.life_core.life_inner_component], null));
});
demo.life_core.daddy_life = (function demo$life_core$daddy_life(){
demo.life_core.set_time_updater.call(null,demo.life_core.timeperiod);

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.life_core.show_fn], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.life_core.reset_button], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"red",new cljs.core.Keyword(null,"float","float",-1732389368),"left"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.life_core.stop_button], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.life_core.start_button], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"red"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.life_core.life_component], null)], null)], null);
});
demo.life_core.main = (function demo$life_core$main(dev_mode){
demo.life_core.set_time_updater.call(null,demo.life_core.timeperiod);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.life_core.show_fn], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.life_core.daddy_life], null)], null)], null),document.getElementById("app"));
});

//# sourceMappingURL=life_core.js.map