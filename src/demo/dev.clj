(ns demo.dev
  (:require             
   [net.cgrand.enlive-html :refer [set-attr prepend append html]]))

#_(def inject-devmode-html
  (comp
     (set-attr :class "is-dev")
     (prepend (html [:script {:type "text/javascript" :src "/js/out/goog/base.js"}]))
     (append  (html [:script {:type "text/javascript"} "goog.require('demo.app')"]))))
