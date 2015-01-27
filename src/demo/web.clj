(ns demo.web
  (:require [immutant.web             :as web]
            [immutant.web.async       :as async]
            [immutant.web.middleware  :as web-middleware]
            [compojure.route          :as route]
            [compojure.core     :refer (ANY GET defroutes)]
            [ring.util.response :refer (response redirect content-type)]
            [clojure.pprint     :refer (pprint)]
            [environ.core       :refer (env)]))

(defn echo
  "Echos the request back as a string."
  [request]
  (-> (response (with-out-str (pprint request)))
    (content-type "text/plain")))

(defn counter
  "From https://github.com/ring-clojure/ring/wiki/Sessions"
  [{session :session}]
  (let [count (:count session 0)
        session (assoc session :count (inc count))]
    (println "counter =>" count)
    (-> (response (str "You accessed this page " count " times\n"))
      (assoc :session session))))

(def websocket-callbacks
  "WebSocket callback functions"
  {:on-open    (fn [channel]
                 (async/send! channel "Ready to reverse your messages!"))
   :on-close   (fn [channel {:keys [code reason]}]
                 (println "close code:" code "reason:" reason))
   :on-message (fn [ch m]
                 (async/send! ch (apply str (reverse m))))})

(defroutes routes
  (GET "/" {c :context :as request}
    (if (:websocket? request)
      (async/as-channel request
        websocket-callbacks)
      (redirect (str c "/index.html"))))
  (GET "/counter" [] counter)
  (route/resources "/")
  (ANY "*" [] echo))

(defn -main [& {:as args}]
  (web/run
    (-> routes
      (web-middleware/wrap-session {:timeout 20}))
    (merge {"host" (env :demo-web-host), "port" (env :demo-web-port)}
      args)))
