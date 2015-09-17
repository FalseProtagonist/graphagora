(ns demo.app
(:require  ; [cljs.core.async :refer [put!]]
            [weasel.repl :as weasel]
            [figwheel.client :as figwheel :include-macros true]))
;(.write js/document "Hello, ClojureScript!")
;(js/alert "hello, world!")




(defn add-element []     (-> js/d3 (.select "div") (.selectAll "p") 
        (.data (clj->js ["this is" "d33"])) .enter 
        (.append "p") (.text "this is d3 zzzzzzz")))


(defn main [] 
  (do
    (weasel/connect 
     "ws://localhost:9001" 
     :verbose true :print #{:repl :console})
    (.write js/document "Hello, ClojureScript figwheel?s!")
  ;  (js/alert "hello, world!")
    (add-element)))


(figwheel/watch-and-reload
  :websocket-url "ws://localhost:3449/figwheel-ws"
  :jsload-callback (fn []
                     (main)))

(weasel/connect "ws://localhost:9001" :verbose true :print #{:repl :console})

(main)


