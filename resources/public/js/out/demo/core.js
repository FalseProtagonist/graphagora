// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.core');
goog.require('cljs.core');
goog.require('demo.life_logic');
goog.require('demo.life_draw');
goog.require('om.dom');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('om.core');
demo.core.nx = (30);
demo.core.ny = (30);
demo.core.r = (20);
demo.core.wrap = new cljs.core.Keyword(null,"true","true",-1114210334);
demo.core.color_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"live","live",-1610148039),"blue",new cljs.core.Keyword(null,"dead","dead",-1946604091),"red"], null);
demo.core.size_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"live","live",-1610148039),demo.core.r,new cljs.core.Keyword(null,"dead","dead",-1946604091),(0)], null);
demo.core.circle_data = demo.life_logic.get_circle_coordinates.call(null,demo.core.nx,demo.core.ny,demo.core.r,demo.core.color_map);
demo.core.circle_state = reagent.core.atom.call(null,demo.core.circle_data);
demo.core.timeperiod = (500);
if(typeof demo.core.timer !== 'undefined'){
} else {
demo.core.timer = cljs.core.atom.call(null,(new Date()));
}
if(typeof demo.core.state !== 'undefined'){
} else {
demo.core.state = reagent.core.atom.call(null,"state");
}
demo.core.time_updater = setInterval((function (){
return cljs.core.swap_BANG_.call(null,demo.core.circle_state,(function (data){
return demo.life_logic.update_visuals_main.call(null,demo.life_logic.iterate_life_main.call(null,data,demo.core.nx,demo.core.ny,new cljs.core.Keyword(null,"wrap","wrap",851669987),demo.core.wrap),demo.core.color_map,demo.core.size_map);
}));
}),demo.core.timeperiod);
demo.core.life_component = (function demo$core$life_component(){
demo.life_draw.clear_stuff.call(null);

demo.life_draw.draw_svg.call(null,(1000),(1000));

return demo.life_draw.draw_circles.call(null,cljs.core.deref.call(null,demo.core.circle_state));
});
demo.core.hello = (function demo$core$hello(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(cljs.core.deref.call(null,demo.core.circle_state))?null:null)], null);
});
demo.core.home_component = (function demo$core$home_component(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),demo.core.hello,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
alert("mounted");

return demo.life_draw.draw_svg.call(null,(1000),(1000));
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),demo.core.life_component], null));
});
demo.core.main = (function demo$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.core.home_component], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map