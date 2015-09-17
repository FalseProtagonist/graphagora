(ns demo.brepl
  (:require
   [cemerick.piggieback :as piggieback]
   [weasel.repl.websocket :as weasel]
   [figwheel-sidecar.auto-builder :as fig-auto]
   [figwheel-sidecar.core :as fig]
   ))

#_(ns demo.brepl)


(defn browser-repl []

  (let [repl-env (weasel/repl-env :ip "0.0.0.0" :port 9001)]
      (piggieback/cljs-repl :repl-env repl-env)))

#_(defn browser-repl []
  (print "hello"))

#_(defonce conn
  (repl/connect "http://localhost:9000/repl"))
(defonce conn nil)


(defn start-figwheel []
  (let [server (fig/start-server)
        config {:builds [{
                          :source-paths ["src/cljs"]
                          :compiler {:output-to            "resources/public/js/app.js"
                                     :output-dir           "resources/public/js/out"
                                     :optimizations        :none}}]
                :figwheel-server server}]
    (fig-auto/autobuild* config)))

#_(def inject-devmode-html
  (comp
     (set-attr :class "is-dev")
     (prepend (html [:script {:type "text/javascript" :src "/js/out/goog/base.js"}]))
     (append  (html [:script {:type "text/javascript"} "goog.require('chestnut.main')"]))))
