(ns demo.db
  (:require [reagent.core :as r]))

(def db (r/atom {:panel :index}))
