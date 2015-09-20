(ns demo.core
  (:require [demo.graphag :as graphag]))



(def clear-command (fn [] (do (-> 
                               js/d3 
                               (.selectAll "p") 
                                        ;(.selectAll "*") 
                               .remove)
                              (->
                               js/d3
                               (.selectAll "svg")
                               .remove))))

#_(defn add-element []     (-> js/d3 (.select "div") #_(.selectAll "p") 
        (.data (clj->js ["this is" "d3" "ANYTHING" "at all"])) .enter 
        (.append "p") (.text "dataa2")))


(defn main [] 
  (do
    #_(weasel/connect 
     "ws://localhost:9001" 
     :verbose true :print #{:repl :console})
    (clear-command)
;    (.write js/document "Hello, ClojureScript fig")
  ;  (js/alert "hello, world!")
    #_(add-element)
    (graphag/force-layout)
    #_(js/alert "alive?")))
