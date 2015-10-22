// Compiled by ClojureScript 1.7.145 {}
goog.provide('demo.app');
goog.require('cljs.core');
goog.require('demo.core');
goog.require('weasel.repl');
goog.require('figwheel.client');
demo.app.main = (function demo$app$main(){
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){
return demo.core.main.call(null);
}));

weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"verbose","verbose",1694226060),true,new cljs.core.Keyword(null,"print","print",1299562414),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"repl","repl",-35398667),null,new cljs.core.Keyword(null,"console","console",1228072057),null], null), null));

return demo.core.main.call(null);
});
demo.app.main.call(null);

//# sourceMappingURL=app.js.map