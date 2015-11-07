(ns demo.life-draw)

(defn clear-stuff [] 
  (-> js/d3 (.selectAll "svg") .remove))

(defn draw-svg [width height]
  (-> js/d3 
      (.select "#life")
      (.append "svg")
      (.attr "width" width)
      (.attr "height" height)))

(defn update-elements [data time-taken]
  (-> 
      js/d3 
      (.select "svg") 
      (.selectAll "circle")
      (.data data)
      .transition
      (.duration time-taken)
      (.attr "cy" (fn [d-] (.-y d-))) 
      (.attr "cx" (fn [d-] (.-x d-)))
      (.attr "fill" (fn [d-] (.-color d-)))
      (.attr "r" (fn [d-] (.-r d-)))))

(defn create-elements [data time-taken]
  (->
   js/d3
   (.select "svg") 
   (.selectAll "circle")
   (.data data)
   .enter
   (.append "circle")
;   .transition
;   (.duration time-taken)
   (.attr "cy" (fn [d-] (.-y d-))) 
   (.attr "cx" (fn [d-] (.-x d-)))
   (.attr "fill" (fn [d-] (.-color d-)))
   (.attr "r" (fn [d-] (.-r d-)))))

(defn draw-update-circles [data transition]
  (let [datajs (clj->js data)]
       (create-elements datajs transition)
       (update-elements datajs transition)))
