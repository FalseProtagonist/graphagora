(ns demo.core)



(def clear-command (fn [] (-> 
                                  js/d3 
                                  (.selectAll "p") 
                                        ;(.selectAll "*") 
                                  .remove)))

(defn add-element []     (-> js/d3 (.select "div") #_(.selectAll "p") 
        (.data (clj->js ["this is" "d3" "ANYTHING" "at all"])) .enter 
        (.append "p") (.text "data")))


(defn main [] 
  (do
    #_(weasel/connect 
     "ws://localhost:9001" 
     :verbose true :print #{:repl :console})
    (clear-command)
;    (.write js/document "Hello, ClojureScript fig")
  ;  (js/alert "hello, world!")
    (add-element)
    (js/alert "alive")))
