(ns demo.notes)

(def select-values (comp vals select-keys))

(iterate-life circles 6 6 neighbours)

(swap! circle-state logic/iterate-life-main)
(reset! circle-state circle-data)

(defn iterate-life [circles nx ny neighbours]
  (map-indexed 
   #(assoc 
        %2
      :alive
      (alive (count (count-live-neighbours circles nx ny %1)) (:alive %2)))
   circles))

