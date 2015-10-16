(ns demo.life-logic)

(def states #{:live :dead})
(def color-map {:live "green" :dead "red"})

(def hello "world")

(def select-values (comp vals select-keys))

(defn get-circle-coordinates [nx ny r colormap]
  (let [individual-coords 
        (for [x (range nx) y (range ny)]
          (let [alive (rand-nth (seq states))]
            {:x (* 2 r (+ x 0.5)) 
             :y (* 2 r (+ y 0.5)) 
             :r r
             :alive alive
             :color (alive colormap)}))]
    {:circles individual-coords 
     :width (* r nx 2) 
     :height (* r ny 2)}))

(defn alive [num-neighbours current-state]
  (get  {3 :live 4 current-state} num-neighbours :dead))


(defn swap-color [circle-data]
  (let [colors {"green" "red" "red" "green"}
        current-color (:color (first (:circles circle-data)))]
    (assoc 
     circle-data 
     :circles 
     (map 
       (fn [circle] (assoc circle :color (colors current-color) ))
       (:circles circle-data) 
       ))))


(defn update-color [circles]
  (map #(assoc % :color ((:alive %) color-map))  circles))

(defn update-color-main [circle-data]
  (assoc circle-data :circles (update-color (:circles circle-data))))

(defn neighbours [nx ny pos & {:keys [wrap]}]
  (let [x-init (mod pos nx)
        y-init (quot pos nx)]
     (for
         [x-delta (range -1 2) 
          y-delta (range -1 2)
          :let [x-new (+ x-init x-delta)
                y-new (+ y-init y-delta)]
          :when (or wrap
                    (and 
                     (< x-new nx) (< y-new ny) 
                     (<= 0 x-new) (<= 0 y-new)))]
       (+ (mod x-new nx) (* (mod y-new ny) nx)) 
       )))


(defn get-neighbours [circles nx ny pos]
  (select-values (vec circles) (neighbours nx ny pos :wrap :true)))

(defn count-live-neighbours [circles nx ny pos]
  (count (filter #(= :live (:alive %)) (get-neighbours circles nx ny pos))))


(defn iterate-life [circles nx ny neighbours]
  (map-indexed 
   #(assoc 
        %2
      :alive
      (alive (count-live-neighbours circles nx ny %1) (:alive %2)))
   circles))


(defn iterate-life-fixed [circles] (iterate-life circles 6 6 neighbours))
(defn iterate-life-main [data] (assoc data :circles (iterate-life-fixed (:circles data))))
