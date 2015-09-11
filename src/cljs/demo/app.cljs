(ns demo.app
(:require  ; [cljs.core.async :refer [put!]]
            [weasel.repl :as weasel]))
;(.write js/document "Hello, ClojureScript!")
;(js/alert "hello, world!")




(defn add-element []     (-> js/d3 (.select "div") (.selectAll "p") 
        (.data (clj->js ["this is" "d33"])) .enter 
        (.append "p") (.text "this is d3 zz")))


(defn main [] 
  (do
(weasel/connect "ws://localhost:9001" :verbose true :print #{:repl :console})
    (.write js/document "Hello, ClojureScript5!")
  ;  (js/alert "hello, world!")
    (add-element)))

(main)


