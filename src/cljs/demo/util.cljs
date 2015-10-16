(ns demo.util)

(def select-values (comp vals select-keys))

(defn alter-map 
  "returns map with new values functions of old values
  given list of k-fn pairs"
  [m k-fns]
  (reduce 
   #(assoc %1 (first %2) ((second %2) %1))
   m
   k-fns))
