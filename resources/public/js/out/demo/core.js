// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.core');
goog.require('cljs.core');
goog.require('demo.clock');
goog.require('demo.life_logic');
goog.require('demo.life_draw');
goog.require('om.dom');
goog.require('reagent.core');
goog.require('cljs.core.async');
goog.require('demo.chart');
goog.require('demo.life');
goog.require('om.core');
demo.core.circle_data = demo.life_logic.get_circle_coordinates.call(null,(6),(6),(50),demo.life_logic.color_map);
demo.core.refresh_stuff = (function demo$core$refresh_stuff(){
demo.life_draw.clear_stuff.call(null);

demo.life_draw.draw_svg.call(null,(1000),(1000));

return demo.life_draw.draw_circles.call(null,demo.core.circle_data);
});
demo.core.circle_state = reagent.core.atom.call(null,demo.core.circle_data);
demo.core.play_life = (function demo$core$play_life(circle_data,n,timeout,nx,ny,neighbours){
var lives = cljs.core.iterate.call(null,(function (p1__45153_SHARP_){
return demo.life_logic.update_color.call(null,demo.life_logic.iterate_life.call(null,p1__45153_SHARP_,nx,ny,neighbours));
}),circle_data);
return demo.life_draw.update_circles.call(null,cljs.core.get.call(null,(1),lives));
});
demo.core.life_component = (function demo$core$life_component(){
demo.life_draw.clear_stuff.call(null);

demo.life_draw.draw_svg.call(null,(1000),(1000));

return demo.life_draw.draw_circles.call(null,cljs.core.deref.call(null,demo.core.circle_state));
});
demo.core.alert_component = (function demo$core$alert_component(){
return alert("yeah?");
});
if(typeof demo.core.timer !== 'undefined'){
} else {
demo.core.timer = cljs.core.atom.call(null,(new Date()));
}
demo.core.time_updater = setInterval((function (){
return cljs.core.swap_BANG_.call(null,demo.core.circle_state,(function (data){
return demo.life_logic.update_color_main.call(null,demo.life_logic.iterate_life_main.call(null,data));
}));
}),(1000));
demo.core.hello = (function demo$core$hello(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"hello world"], null);
});
if(typeof demo.core.state !== 'undefined'){
} else {
demo.core.state = reagent.core.atom.call(null,"state");
}
demo.core.hello_updater = setInterval((function (){
return cljs.core.swap_BANG_.call(null,demo.core.state,(function (p1__45154_SHARP_){
return [cljs.core.str(p1__45154_SHARP_),cljs.core.str("t")].join('');
}));
}),(1000));
demo.core.hello2 = (function demo$core$hello2(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"hello",cljs.core.deref.call(null,demo.core.state)], null);
});
demo.core.home_did_mount = (function demo$core$home_did_mount(){
return alert("heyy");
});
demo.core.home = (function demo$core$home(){
alert("tick");

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#d3-node","div#d3-node",-1412505089)], null);
});
demo.core.get_state = (function demo$core$get_state(){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,demo.core.circle_state)));
});
demo.core.get_states = (function demo$core$get_states(){
return cljs.core.first.call(null,new cljs.core.Keyword(null,"circles","circles",-1947060917).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,demo.core.circle_state)));
});
demo.core.home_component = (function demo$core$home_component(){
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),demo.core.hello2,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
return alert("mounted");
}),new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),demo.core.life_component], null));
});
demo.core.main = (function demo$core$main(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.core.home_component], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map