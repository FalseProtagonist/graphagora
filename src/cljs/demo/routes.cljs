(ns demo.routes
  (:require [clojure.set :refer [rename-keys]]
            [domkm.silk :as silk]
            [pushy.core :as pushy]
            [demo.util :refer [log]]
            [re-frame.core :as re-frame]
            [demo.db :refer [db]]))


 	
(def routes (silk/routes [[:home [[]]]
                          [:index [["index"]]]
                          [:life [["life"]]]
                          [:catch [[:anything]]]]))

(defn- sanitize-silk-keywords [matched-route]
  (rename-keys matched-route {:domkm.silk/name    :name
                              :domkm.silk/pattern :pattern
                              :domkm.silk/routes  :routes
                              :domkm.silk/url     :url}))

(defn- parse-url [url]
  (silk/arrive routes url))

(def history nil)
(defn- dispatch-route [matched-route]
  (let [matched-route (sanitize-silk-keywords matched-route)
        panel-name (:name matched-route)]
    (log (str "panel name is " panel-name))
    (if 
        (= panel-name :catch)
      (do (log "redirected non-matching url to index")
          (pushy/set-token! history "index"))
      (swap! db #(assoc % :panel panel-name)))
   (log (str "db is " @db))))

(def history (pushy/pushy dispatch-route parse-url))

(defn app-routes []
  (pushy/start! history))
