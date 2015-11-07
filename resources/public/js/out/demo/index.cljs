(ns demo.index
  (:require
   [demo.util :refer [log avail-height avail-width]]
   [demo.routes :refer [set-history]]
   [reagent.core :as r]))

;(defn daddy-index [] [:a {:href "life"} "life"])

(def link-data ( clj->js { :className ""
                      :value 0
                          :children 
                          [
                           {:className "Game of Life" 
                            :value 2000 
                            :link "life"
                            :packageName "aa"}
                           {:className "Spam" 
                            :value 200
                            :link "spam"
                            :packageName "ee"}
                           {:className "About" 
                            :value 400
                            :link "about"
                            :packageName "bb"}
                           {:className "Blog"
                            :value 600
                            :link "blog"
                            :packageName "cc"}
                           {:className "Graphs" 
                            :value 1000
                            :link "graph"
                            :packageName "dd"}]}))

(def r 400)

(def format (-> js/d3 (.format ",d")))
(def fill (-> js/d3 .-scale .category10))
(def bubble 
  (-> js/d3 
      .-layout 
      .pack 
      (.sort nil) 
    ;  (.size #js[r r])
      (.size (clj->js [ avail-width avail-height]))
      ))

(defn make-chart []
    (log "make-chart called")
  (-> js/d3 
      (.select "#index")
      (.append "svg:svg")
      (.attr "width" avail-width)
      (.attr "height" avail-height)
      (.attr "class" "bubble")
      ))

(defn make-node [link-data]
  (log "make-node called")
  (let 
      [chart (make-chart)]
    (-> chart
        (.selectAll "g.node")
        (.data (.nodes bubble link-data))
   
        .enter
        (.append "svg:g")
        (.filter (fn [d] (not (.-children d))))
        (.attr "class" "node")
        (.attr "transform" 
               (fn [d] (str "translate(" (.-x d) "," (.-y d) ")"))))))

(defn daddy-index []
  (log "daddy index called")
  (let 
;[node (-> js/d3 (.selectAll "g.node"))]
      [node (make-node link-data)]
    (-> node 
        (.append "svg:title")
        (.text (fn [d] (str (.-className d) ":" (format (.-value d))))))

    (-> node
        (.append "svg:circle")
        (.on "click" #(set-history (.-link %)))
        (.attr "r" (fn [d] (.-r d)))
        (.style "fill" (fn [d] (fill (.-packageName d)))))

    (-> node
        (.append "text")
        (.attr "text-anchor" "middle")
        (.attr "dy" ".3em")
        (.attr "fill" "white")
        (.text (fn [d] (.substring (.-className d) 0 (/ (.-r d) 3) ))))
    (fn [] [:div])))

(defn draw-svg []
  [:div#index])

(defn index-component []
  (r/create-class { :reagent-render draw-svg
                   :component-did-mount daddy-index
                   }))
