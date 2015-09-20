(ns demo.scrap) 



#_(defn add-element []     (-> js/d3 (.select "div") #_(.selectAll "p") 
                                  (.data (clj->js ["this is" "d3" "ANYTHING" "at all"])) .enter 
                                  (.append "p") (.text "dataa2")))

#_(def clear-command (fn [] (do (-> 
                               js/d3 
                               (.selectAll "p") 
                               .remove)
                              (->
                               js/d3
                               (.selectAll "svg")
                               .remove))))
