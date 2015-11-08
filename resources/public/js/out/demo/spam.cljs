(ns demo.spam
  (:require 
   [demo.util :refer [log avail-height avail-width d3-select get-jskeys]]
   [reagent.core :as r]))

(def text (r/atom ""))

(defn spam-component [] 
  [:div
   [:textarea {:name "para"
               :id "myPara"
               :cols (/ avail-width 9) 
               :rows (/ avail-height 20)
               :on-input #(log 
                           (str 
                            "\ntext value: "
                            (.-value (.-target %))))}]])
