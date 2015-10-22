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


#_(defn start-figwheel []
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

#_(ra/start-figwheel!
  {:figwheel-options {} ;; <-- figwheel server config goes here 
   :build-ids ["dev"]   ;; <-- a vector of build ids to start autobuilding
   :all-builds          ;; <-- supply your build configs here
   [{:id "dev"
     :figwheel true
     :source-paths ["src"]
     :compiler {:main "example.core"
                :asset-path "out"
                :output-to "resources/public/main.js"
                :output-dir "resources/public/out"
                :verbose true}}]})
