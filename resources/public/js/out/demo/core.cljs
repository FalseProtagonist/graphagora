(ns demo.core
  (:require 
           ;[demo.graph :as graph]
   [demo.util :refer [log]]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [demo.life-draw :as draw] 
   [demo.life-logic :as logic]
   [demo.life-core :as life]
   [demo.db :as db]
   [demo.routes :as routes]
   [reagent.core :as r]
   [demo.index :as index]
   [cljs.core.async 
    :refer 
    [<! chan put! sliding-buffer sub pub timeout]]))

(def panels {:life life/daddy-life :index index/daddy-index})

(defn main-panel [dev-mode]
  (let [active-panel (panels (@db/db :panel))]
    (log "active panel changed panel is" (@db/db :panel))
    [:div [active-panel]]))

(defn mount-root []
  (r/render [main-panel]
                  (.getElementById js/document "app")))

(defn main [dev-mode] 
;  (life/main dev-mode)
;  (graph/force-layout)
  (mount-root)
  (routes/app-routes) 
  (if dev-mode (log (str "dev mode" " " (:hello @db/db)))))

#_(defn main [dev-mode] 
  (life/main dev-mode)
  (routes/app-routes) 
  (if dev-mode (js/alert (str "dev mode" " " (:hello @db/db))))
  )
