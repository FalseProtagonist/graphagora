// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.core');
goog.require('cljs.core');
goog.require('demo.life_logic');
goog.require('demo.life_draw');
goog.require('om.dom');
goog.require('reagent.core');
goog.require('demo.index');
goog.require('demo.routes');
goog.require('cljs.core.async');
goog.require('demo.db');
goog.require('demo.life_core');
goog.require('om.core');
goog.require('demo.util');
demo.core.panels = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"life","life",939004719),demo.life_core.daddy_life,new cljs.core.Keyword(null,"index","index",-1531685915),demo.index.daddy_index], null);
demo.core.main_panel = (function demo$core$main_panel(dev_mode){
var active_panel = demo.core.panels.call(null,cljs.core.deref.call(null,demo.db.db).call(null,new cljs.core.Keyword(null,"panel","panel",-558637456)));
demo.util.log.call(null,"active panel changed panel is",cljs.core.deref.call(null,demo.db.db).call(null,new cljs.core.Keyword(null,"panel","panel",-558637456)));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [active_panel], null)], null);
});
demo.core.mount_root = (function demo$core$mount_root(){
return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [demo.core.main_panel], null),document.getElementById("app"));
});
demo.core.main = (function demo$core$main(dev_mode){
demo.core.mount_root.call(null);

demo.routes.app_routes.call(null);

if(cljs.core.truth_(dev_mode)){
return demo.util.log.call(null,[cljs.core.str("dev mode"),cljs.core.str(" "),cljs.core.str(new cljs.core.Keyword(null,"hello","hello",-245025397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,demo.db.db)))].join(''));
} else {
return null;
}
});

//# sourceMappingURL=core.js.map