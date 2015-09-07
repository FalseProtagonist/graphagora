(ns demo.app)
;(.write js/document "Hello, ClojureScript!")
;(js/alert "hello, world!")

(defn add-element []     (-> js/d3 (.select "div") (.selectAll "p") 
        (.data (clj->js ["this is" "d3"])) .enter 
        (.append "p") (.text "this is d3")))


(defn main [] 
  (do
    (.write js/document "Hello, ClojureScript3!")
    (js/alert "hello, world!")
    (add-element)))
(main)


