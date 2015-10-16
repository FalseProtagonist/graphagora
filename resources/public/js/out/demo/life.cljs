(ns demo.life (:require [demo.life-draw :as draw] 
                        [demo.life-logic :as logic]
                        [reagent.core :as r]))


(def circle-data (logic/get-circle-coordinates 6 6 100 logic/color-map))

(defn refresh-stuff []
  (do
    (draw/clear-stuff)
    (draw/draw-svg 1000 1000)
    (draw/draw-circles circle-data)))

;(refresh-stuff)
;(draw/modify-circles circle-data "green")

(def circle-state (r/atom circle-data))

(defn play-life [circle-data n timeout nx ny neighbours]
  (let [lives 
        (iterate 
         #(logic/update-color 
           (logic/iterate-life % nx ny neighbours)) 
         circle-data)]
    (draw/update-circles (get 1 lives))
    ))

;(play-life circle-data 2 1000 6 6 logic/neighbours)

(defn life-component []
  (do (draw/clear-stuff)
      (draw/draw-svg 1000 1000)
      (draw/draw-circles @circle-state)))

(defn alert-component []
  (js/alert "yeah?"))

(defonce app-state (atom {:text "yo"
                          list ["Lion" "Zebra" "Buffalo" "Antelope"]}))

(defonce timer (atom  (js/Date.)))

(defonce time-updater (js/setInterval
                       #(reset! timer (js/Date.)) 1000))


(defn hello []
  [:div "hello world"])


(defn main [] 
  (do
    ;(graph/clear-command)
    #_(add-element)
     (r/render 
     hello
;      alert-component
;     life-component
(.getElementById js/document "app"))
    #_(r/render 
;     hello
     life-component
(.getElementById js/document "app"))
  #_(js/alert "modified")))



