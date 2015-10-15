(ns demo.core
  (:require ;[demo.graph :as graph]
            [demo.life :as life]
           [om.core :as om :include-macros true]
           [om.dom :as dom :include-macros true]
           [demo.life-draw :as draw] 
           [demo.life-logic :as logic]
           [reagent.core :as r]
           [demo.clock :as clock]
           [demo.chart :as chart]
           [cljs.core.async 
            :refer 
            [<! chan put! sliding-buffer sub pub timeout]]))


(def circle-data (logic/get-circle-coordinates 6 6 50 logic/color-map))

(defn refresh-stuff []
  (do
    (draw/clear-stuff)
    (draw/draw-svg 1000 1000)
    (draw/draw-circles circle-data)))

(def circle-state (r/atom circle-data))

(defn play-life [circle-data n timeout nx ny neighbours]
  (let [lives 
        (iterate 
         #(logic/update-color 
           (logic/iterate-life % nx ny neighbours)) 
         circle-data)]
    (draw/update-circles (get 1 lives))
    ))

 (defn life-component []
  (draw/clear-stuff)
  (draw/draw-svg 1000 1000)
;  (draw/draw-circles circle-data)
(draw/draw-circles @circle-state))

(defn alert-component []
  (js/alert "yeah?"))

(defonce timer (atom  (js/Date.)))

#_(defonce time-updater (js/setInterval
                       #(reset! timer (js/Date.)) 1000))

#_(def time-updater (js/setInterval
                       #(swap! circle-state logic/swap-color) 1000))

(def time-updater (js/setInterval
                   #(swap! 
                     circle-state 
                     (fn [data] 
                       (logic/update-color-main (logic/iterate-life-main data))
                       )) 1000))

(defn hello []
  [:div "hello world"])

(defonce state (r/atom "state"))

(def hello-updater (js/setInterval
                      (fn [] (swap! state #(str % "t"))) 1000))

(defn hello2 []
  [:div "hello" @state])


#_(defn main [] 
  (do
     (r/render 
(.getElementById js/document "app"))
#_(r/render 
 ;   hello
     life-component
(.getElementById js/document "app"))
  (js/alert "modified")
  (reset! circle-state circle-data )))


#_(defn main []
  (clock/run))

(defn home-did-mount []
  (js/alert "heyy"))

(defn home [] (js/alert "tick") [:div#d3-node])

(defn get-state [] (first (:circles @circle-state)))

(defn get-states [] (first (:circles @circle-state)))

(defn home-component []
  (r/create-class {:reagent-render hello2 ;home
                   :component-did-mount ;home-did-mount
                   #(js/alert "mounted");life-component
                   :component-did-update life-component
                   }))

(defn main []
(r/render 
;   [hello2]
   [home-component]
   (.getElementById js/document "app"))
#_(r/render-component
 ;   hello
; [life-component]
 [chart/home-component]
(.getElementById js/document "app")))
