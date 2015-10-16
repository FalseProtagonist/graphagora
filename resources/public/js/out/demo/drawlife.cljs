(ns demo.drawlife)

(defn clear-stuff [] 
  (-> js/d3 (.selectAll "svg") (.remove)))

(defn color-circles []
  (-> js/d3 
      (.selectAll "circle") 
      .transition 
      (.duration 3000)
      (.attr "fill" "blue")))

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


(defn modify-circles [info color]
  (-> js/d3 
      (.select "svg") 
      (.selectAll "circle")
      (.data (clj->js (:circles info)))
      ;; (.data (:circles info))
      (.attr "fill" color)
      (.attr "cy" (fn [d-] (.-y d-))) 
;      (.attr "cy" #(+ 200 (:y %))) 
 ;     (.attr "cx" (fn [d-] (:x d-))) 
 ;     (.attr "r" (fn [d-] (:r d-)))
      (.attr "cx" (fn [d-] (.-x d-))) 
      (.attr "r" (fn [d-] (.-r d-)))
      ))

(defn update-circles [info color]
  (-> js/d3 
      (.select "svg") 
      (.selectAll "circle")
      (.data (clj->js (:circles info)))
      (.attr "fill" (fn [d-] (.-color d-)))
      (.attr "cy" (fn [d-] (.-y d-))) 
      (.attr "cx" (fn [d-] (.-x d-))) 
      (.attr "r" (fn [d-] (.-r d-)))))

