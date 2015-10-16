(ns demo.core
  (:require 
           ;[demo.graph :as graph]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [demo.life-draw :as draw] 
   [demo.life-logic :as logic]
   [reagent.core :as r]
   [cljs.core.async 
    :refer 
    [<! chan put! sliding-buffer sub pub timeout]]))

(def nx 10)
(def ny 10)
(def r 50)
(def color-map {:live "green" :dead "red"})

(def circle-data (logic/get-circle-coordinates 6 6 50 color-map))
(def circle-state (r/atom circle-data))
(def timeperiod (atom 1000))
(defonce timer (atom  (js/Date.)))
(defonce state (r/atom "state"))

(def time-updater (js/setInterval
                   #(swap! 
                     circle-state 
                     (fn [data] 
                       (logic/update-color-main 
                        (logic/iterate-life-main data 6 6 :wrap :true)
                        color-map)
                       )) 
                   1000))

(defn life-component []
  (draw/clear-stuff)
  (draw/draw-svg 1000 1000)
  (draw/draw-circles @circle-state))

(defn hello []
  [:div (if @circle-state nil)])

(defn home-component []
  (r/create-class {:reagent-render hello
                   :component-did-mount
                   #(js/alert "mounted")
                   :component-did-update life-component
                   }))


(defn main []
(r/render 
   [home-component]
   (.getElementById js/document "app")))

;(defn get-state [] (first (:circles @circle-state)))
;(defn get-states [] (first (:circles @circle-state)))


