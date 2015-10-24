(ns demo.brepl
  (:require
   [cemerick.piggieback :as piggieback]
   [weasel.repl.websocket :as weasel]
   [figwheel-sidecar.auto-builder :as fig-auto]
   [figwheel-sidecar.core :as fig]
   ))

(defn browser-repl []
  (let [repl-env (weasel/repl-env :ip "0.0.0.0" :port 9001)]
      (piggieback/cljs-repl :repl-env repl-env)))

#_(defonce conn
  (repl/connect "http://localhost:9000/repl"))
(defonce conn nil)

(defn build-map []
  (let [server (fig/start-server)] 
    {:builds [{
               :id "dev"
               :source-paths ["src/cljs"]
               :compiler {:output-to            "resources/public/js/app.js"
                          :output-dir           "resources/public/js/out"
                          :optimizations        :none
;                          :main "demo.dev"
                          }}]
                 :figwheel-server server}))

(defn start-figwheel []
(fig-auto/autobuild* (build-map)))
