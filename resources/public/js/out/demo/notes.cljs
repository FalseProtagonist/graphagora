(ns demo.notes)


(defn clear-stuff-here [] 
  (-> js/d3 (.selectAll "circle") .remove))

(defn play []
  (clear-stuff-here)
  (draw/draw-svg 1000 1000)
  (draw/draw-circles (rand-circle-data)))

(defn play2 []
;  (clear-stuff-here)
  (draw/draw-svg 1000 1000)
  (draw/draw-circles (rand-circle-data)))

(defn draw-circles [info]
  (-> js/d3 
      (.select "svg") 
      (.selectAll "circle")
      (.data (clj->js (:circles (rand-circle-data))))
      .enter
      (.append "circle")
      (.attr "cy" (fn [d-] (.-y d-))) 
      (.attr "cx" (fn [d-] (.-x d-)))
      (.attr "fill" (fn [d-] (.-color d-)))
;      .transition
;      (.duration 3000)
;      (.delay 1000)
      (.attr "r" (fn [d-] (.-r d-)))))

(defn get-data [] 
  (clj->js 
   (:circles (rand-circle-data))))

(defn update-elements [data transition]
  (-> 
      js/d3 
      (.select "svg") 
      (.selectAll "circle")
      (.data data)
      .transition
      (.duration transition)
      (.attr "cy" (fn [d-] (.-y d-))) 
      (.attr "cx" (fn [d-] (.-x d-)))
      (.attr "fill" (fn [d-] (.-color d-)))
      (.attr "r" (fn [d-] (.-r d-)))))

(defn create-elements [data transition]
  (->
   js/d3
   (.select "svg") 
   (.selectAll "circle")
   (.data data)
   .enter
   (.append "circle")
   .transition
   (.duration transition)
   (.attr "cy" (fn [d-] (.-y d-))) 
   (.attr "cx" (fn [d-] (.-x d-)))
   (.attr "fill" (fn [d-] (.-color d-)))
   (.attr "r" (fn [d-] (.-r d-)))))

(defn play3 []
  (let [data (get-data)]
    (create-elements data 3000)
    (update-elements data 3000)))
