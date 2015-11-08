(ns demo.util)

(def select-values (comp vals select-keys))

;(defn get-jskeys [obj] (apply str (.keys js/Object obj)))
(def get-jskeys nil)

(defn alter-map 
  "returns map with new values functions of old values
  given list of k-fn pairs"
  [m k-fns]
  (reduce 
   #(assoc %1 (first %2) ((second %2) %1))
   m
   k-fns))

(defn log [msg & rest] (.log js/console (str msg (apply str rest))))

(defn clear-component [] nil)

;(def avail-height (-> js/window .-screen .-availHeight))

;(def avail-width (-> js/window .-screen .-availWidth))

(def avail-height (-> js/document .-documentElement .-clientHeight))

(def avail-width (-> js/document .-documentElement .-clientWidth))

(defn d3-select [thing] (-> js/d3 (.select thing)))


