(ns demo.core
  (:require 
           ;[demo.graph :as graph]
   [om.core :as om :include-macros true]
   [om.dom :as dom :include-macros true]
   [demo.life-draw :as draw] 
   [demo.life-logic :as logic]
   [demo.life-core :as life]
   [demo.db :as db]
   [demo.routes :as routes]
   [reagent.core :as r]
   [cljs.core.async 
    :refer 
    [<! chan put! sliding-buffer sub pub timeout]]))

(defn main [dev-mode] 
  (life/main dev-mode)
  (routes/app-routes) 
  (if dev-mode (js/alert (str "dev mode" " " (:hello @db/db))))
  )
