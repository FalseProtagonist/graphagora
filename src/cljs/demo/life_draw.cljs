(ns demo.life-draw)

(defn clear-stuff [] 
  (-> js/d3 (.selectAll "svg") (.remove)))

(defn draw-svg [width height]
  (-> js/d3 
      (.select "div")
      (.append "svg")
      (.attr "width" width)
      (.attr "height" height)))

(defn draw-circles [info]
  (-> js/d3 
      (.select "svg") 
      (.selectAll "circle")
      (.data (clj->js (:circles info)))
      .enter
      (.append "circle")
      (.attr "cy" (fn [d-] (.-y d-))) 
      (.attr "cx" (fn [d-] (.-x d-))) 
      (.attr "r" (fn [d-] (.-r d-)))
      (.attr "fill" (fn [d-] (.-color d-)))))
