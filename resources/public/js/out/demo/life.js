// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.life');
goog.require('cljs.core');
goog.require('demo.life_draw');
goog.require('demo.life_logic');
goog.require('reagent.core');
demo.life.circle_data = demo.life_logic.get_circle_coordinates.call(null,(6),(6),(100),demo.life_logic.color_map);
demo.life.refresh_stuff = (function demo$life$refresh_stuff(){
demo.life_draw.clear_stuff.call(null);

demo.life_draw.draw_svg.call(null,(1000),(1000));

return demo.life_draw.draw_circles.call(null,demo.life.circle_data);
});
demo.life.circle_state = reagent.core.atom.call(null,demo.life.circle_data);
demo.life.play_life = (function demo$life$play_life(circle_data,n,timeout,nx,ny,neighbours){
var lives = cljs.core.iterate.call(null,(function (p1__45578_SHARP_){
return demo.life_logic.update_color.call(null,demo.life_logic.iterate_life.call(null,p1__45578_SHARP_,nx,ny,neighbours));
}),circle_data);
return demo.life_draw.update_circles.call(null,cljs.core.get.call(null,(1),lives));
});
demo.life.life_component = (function demo$life$life_component(){
demo.life_draw.clear_stuff.call(null);

demo.life_draw.draw_svg.call(null,(1000),(1000));

return demo.life_draw.draw_circles.call(null,cljs.core.deref.call(null,demo.life.circle_state));
});
demo.life.alert_component = (function demo$life$alert_component(){
return alert("yeah?");
});
if(typeof demo.life.app_state !== 'undefined'){
} else {
demo.life.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"text","text",-1790561697),"yo",cljs.core.list,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Lion","Zebra","Buffalo","Antelope"], null)], true, false));
}
if(typeof demo.life.timer !== 'undefined'){
} else {
demo.life.timer = cljs.core.atom.call(null,(new Date()));
}
if(typeof demo.life.time_updater !== 'undefined'){
} else {
demo.life.time_updater = setInterval((function (){
return cljs.core.reset_BANG_.call(null,demo.life.timer,(new Date()));
}),(1000));
}
demo.life.hello = (function demo$life$hello(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"hello world"], null);
});
demo.life.main = (function demo$life$main(){
return reagent.core.render.call(null,demo.life.hello,document.getElementById("app"));
});

//# sourceMappingURL=life.js.map