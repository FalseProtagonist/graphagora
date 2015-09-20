(ns demo.core
  (:require [demo.graph :as graph]
;           [om.core :as om :include-macros true]
 ;           [om.dom :as dom :include-macros true]
            ))

(defonce app-state (atom {:text "yo"
                          list ["Lion" "Zebra" "Buffalo" "Antelope"]}))

(defn main [] 
  (do
    (graph/clear-command)
    #_(add-element)
    (graph/force-layout)
    #_(om/root
     (fn [data owner]
       (reify
         om/IRender
         (render [_]
           (dom/p nil (:text data)))))
     app-state
     {:target (. js/document (getElementById "app"))})


#_(js/alert "why alert?")))
