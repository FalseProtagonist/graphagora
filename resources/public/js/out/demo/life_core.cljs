(ns demo.life-core
  (:require 
           ;[demo.graph :as graph]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [demo.life-draw :as draw] 
   [demo.life-logic :as logic]
   [demo.db :as db]
   [reagent.core :as r]
   [cljs.core.async 
    :refer 
    [<! chan put! sliding-buffer sub pub timeout]]))

(def nx 10)
(def ny 10)
(def r 15)
(def wrap :true)
(def color-map {:live "green" :dead "red"})
(def size-map {:live r :dead 0})
(defn rand-circle-data []
  (logic/get-circle-coordinates nx ny r color-map))

(defn get-circle-state [] (logic/update-visuals-main 
                    (rand-circle-data)
                    color-map
                    size-map))

(def circle-state (r/atom (get-circle-state)))
(def int-state (r/atom 0))
(def timer-state (r/atom nil))
(def timeperiod 1650)
(defonce timer (atom  (js/Date.)))
(defonce state (r/atom "state"))
(def show-life (r/atom true))

(defn set-time-updater 
  [speed]
  (do
    (js/clearInterval @timer-state)
    (reset! 
     timer-state
     (js/setInterval
      #(swap! 
        circle-state 
        (fn [data] 
          (logic/update-visuals-main 
           (logic/iterate-life-main data nx ny :wrap wrap)
           color-map
           size-map)
          )) 
      speed))))

(defn clear-time-updater []
  (js/clearInterval @timer-state))

(defn reset-state []
  (reset! circle-state (get-circle-state)))

(defn life-inner-component []
  (draw/draw-update-circles 
   (:circles @circle-state)
   timeperiod)
  )

(defn draw-svg []
  [:div#life (if @circle-state [:svg {:width 1500 :height 1500}])])

(defn reset-button []
  [:button {:onClick reset-state} "Random Data"])

(defn stop-button []
  [:button {:onClick clear-time-updater} "Stop"])

(defn start-button []
  [:button {:onClick #(set-time-updater timeperiod)} "Start"])

(defn show-fn []
  [:button {:onClick #(swap! show-life not)} "Show"])

(defn life-component []
  (r/create-class {:reagent-render draw-svg
                   :component-will-mount
                   (do ;(js/alert "willmount")
                       ; (draw/draw-svg 1000 1000)
                       )
                   :component-did-update life-inner-component
                   }))

(defn daddy-life []
  (set-time-updater timeperiod)
    [:div 
     [:div [show-fn]]
     [:div {:style {:color "red" :float "left"}} [reset-button]]
     [:div {:style {:color "red":float "left"}} [stop-button]]
     [:div {:style {:color "red"}} [start-button]]
     [:div {:style {:color "red"}} [life-component]]])

(defn main [dev-mode]
 (set-time-updater timeperiod)
 (r/render 
  [:div [:div [show-fn]]
   [:div [daddy-life]]]  
  (.getElementById js/document "app")))
