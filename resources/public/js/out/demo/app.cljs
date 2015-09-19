(ns demo.app
(:require  ; [cljs.core.async :refer [put!]]
 [demo.core :as core]
 [weasel.repl :as weasel]
 [figwheel.client :as figwheel :include-macros true]))
;(.write js/document "Hello, ClojureScript!")
;(js/alert "hello, world!")




(defn add-element []     (-> js/d3 (.select "div") (.selectAll "p") 
        (.data (clj->js ["this is" "d3333"])) .enter 
        (.append "p") (.text "13")))


#_(defn main [] 
  (do
    #_(weasel/connect 
     "ws://localhost:9001" 
     :verbose true :print #{:repl :console})
;    (.write js/document "Hello, ClojureScript fig")
  ;  (js/alert "hello, world!")
    (add-element)))


(figwheel/watch-and-reload
  :websocket-url "ws://localhost:3449/figwheel-ws"
  :jsload-callback (fn []
                     (core/main)))

(weasel/connect "ws://localhost:9001" :verbose true :print #{:repl :console})

(core/main)


