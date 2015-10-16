(ns demo.chart
  [:require [reagent.core :as r]])

#_(defn home []
  [:div [:h1 "Welcome to Reagent Cookbook!"]
   [:div#d3-node {:style {:width "750" :height "420"}} [:svg ]]
   ])

(defn home-did-mount []
  (js/alert "heyy"))

(defn home [] [:div#d3-node])


(defn home-component []
  (r/create-class {:reagent-render home
                   :component-did-mount home-did-mount}))


#_(reagent/render-component [home-component]
                          (.getElementById js/document "app"))
