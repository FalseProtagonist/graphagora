(ns demo.core
  (:require 
           ;[demo.graph :as graph]
   [demo.util :refer [log]]
   [demo.life-draw :as draw] 
   [demo.life-logic :as logic]
   [demo.life-core :as life]
   [demo.index :as index]
   [demo.graph :as graph]
   [demo.spam :as spam]
   [demo.db :as db]
   [demo.routes :as routes]
   [reagent.core :as r]
   [cljs.core.async 
    :refer 
    [<! chan put! sliding-buffer sub pub timeout]]))

(def panels {:life life/daddy-life 
             :index index/index-component 
             :dancing-graph graph/force-component
             :spam spam/spam-component
             })

(defn main-panel [dev-mode]
  (let [active-panel (panels (@db/db :panel))]
    (log "active panel changed panel is" (@db/db :panel))
    [:div#innerapp [active-panel]]))

(defn mount-root []
  (r/render [main-panel]
            (.getElementById js/document "app")))

(defn main [dev-mode] 
  (mount-root)
  (routes/app-routes) 
  (if dev-mode (log (str "dev mode" " " (:hello @db/db)))))
