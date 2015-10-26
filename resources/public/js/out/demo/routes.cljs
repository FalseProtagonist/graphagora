(ns demo.routes
  (:require [clojure.set :refer [rename-keys]]
            [domkm.silk :as silk]
            [pushy.core :as pushy]
            [re-frame.core :as re-frame]
            [demo.db :refer [db]]))


 	
(def routes (silk/routes [[:home [[]]]
                          [:about [["about"]]]
                          [:notlife [["life"]]]]))

(defn- sanitize-silk-keywords [matched-route]
  (rename-keys matched-route {:domkm.silk/name    :name
                              :domkm.silk/pattern :pattern
                              :domkm.silk/routes  :routes
                              :domkm.silk/url     :url}))


(defn- parse-url [url]
  (silk/arrive routes url))

#_(defn- dispatch-route [matched-route]
  (let [matched-route (sanitize-silk-keywords matched-route)
        panel-name (keyword (str (name (:name matched-route)) "-panel"))]
    (re-frame/dispatch [:set-active-panel panel-name])))

(defn- dispatch-route [matched-route]
  (let [matched-route (sanitize-silk-keywords matched-route)
        panel-name (keyword (str (name (:name matched-route)) "-panel"))]
    (js/alert (str panel-name))
    (swap! db #(assoc % :hello (str panel-name)))))

(defn app-routes []
  (pushy/start! (pushy/pushy dispatch-route parse-url)))
