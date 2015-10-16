(ns demo.life-logic
  (:require [demo.util :as util]))

(def states #{:live :dead})

(defn alive [num-neighbours current-state]
  (get  {3 :live 4 current-state} num-neighbours :dead))

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


(defn update-visuals [circles color-map size-map]
  (map 
   (fn [circle] 
     (util/alter-map circle 
                [[:color #(color-map (:alive %1))]
                 [:r #(size-map (:alive %1))]]))
   circles
   ))

#_(defn update-visuals-main [circle-data color-map]
  (assoc circle-data :circles ()))

(defn update-visuals-main [circle-data color-map size-map]
  (update circle-data :circles #(update-visuals % color-map size-map) ))

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
       (+ (mod x-new nx) (* (mod y-new ny) nx)))))

(defn init-neighbours [nx ny & {:keys [wrap]}]
  (fn [pos] (neighbours nx ny pos :wrap wrap)))

(defn count-live-neighbours [circles neighbours pos]
  (count 
   (filter 
    #(= :live (:alive %))
    (util/select-values (vec circles) (neighbours pos)))
    ))

(defn iterate-life-main [data nx ny & {:keys [wrap]}]
  (let [neighbours-fixed (init-neighbours nx ny :wrap wrap)]
    (assoc 
        data 
      :circles 
      (map-indexed
       #(assoc
            %2
          :alive
          (alive 
           (count-live-neighbours (:circles data) neighbours-fixed %1)
           (:alive %2)))
       (:circles data)))))


