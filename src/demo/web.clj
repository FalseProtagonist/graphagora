(ns demo.web
  (:require [immutant.web                 :as web]
            [immutant.web.async           :as async]
            [immutant.web.middleware      :as mw]
            [demo.web.sse                 :as sse]
            [demo.web.http-kit-comparison :as htk]
            [demo.hiccup :as dh]
            [hiccup.core :as h]
            [hickory.core :as hik]
;            [demo.brepl :refer (browser-repl conn start-figwheel)]
            [compojure.route              :as route]
            [compojure.core     :refer (ANY GET defroutes)]
            [ring.util.response 
             :refer 
             (response redirect content-type file-response)]
            [clojure.pprint     :refer (pprint)]
            [environ.core       :refer (env)]
            [ring.middleware.reload :as reload]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [net.cgrand.reload :refer [auto-reload]]
))

(def dev-mode (= "vagrant" (:user-name env)))

(defn hook-dev-mode []
(if 
    dev-mode 
  (do (require 
       '[demo.brepl 
         :refer 
         (browser-repl conn start-figwheel)])
      ((resolve 'start-figwheel))
      )))

(defn echo
  "Echos the request back as a string."
  [request]
  (-> (response (with-out-str (pprint request)))
    (content-type "text/plain")))

(defn counter
  "An example manipulating session state from
  https://github.com/ring-clojure/ring/wiki/Sessions"
  [{session :session}]
  (let [count (:count session 0)
        session (assoc session :count (inc count))]
    (println "counter =>" count)
    (-> (response (str "You accessed this page " "0.0.1"  " times\n"))
      (assoc :session session))))

(defn reverser
  "An example WebSocket app"
  [request]
  (async/as-channel request
    {:on-open    (fn [channel]
                   (async/send! channel "Ready to reverse your messages!"))
     :on-message (fn [channel m]
                   (async/send! channel (apply str (reverse m))))
     :on-close   (fn [channel {:keys [code reason]}]
                   (println "close code:" code "reason:" reason))}))


(defroutes routes
;  (GET "/counter"  [] counter)
;  (GET "/" {c :context} (redirect (str c "/hello.html")))
;  (GET "*" [] (h/html dh/hello))
;  (GET "*" [] (file-response "index.html" {:root "public"}))
;  (GET "/" {c :context} (redirect (str c "/index.html")))
  (GET "/" {c :context} (redirect (str c "/hello.html")))
;  (GET "/reverser" [] reverser)
;  (GET "/sse"      [] sse/countdown)
;  (GET "/http-kit" [] htk/async-handler)
;  (GET "/wat" [] (h/html dh/hello))
  (route/resources "/")
  (ANY "*" [] echo)
;  (GET "/" {c :context} (redirect (str c "/index.html")))
;(GET "/graphagora" {c :context} (redirect (str c "/hello.html")))
 ; (GET "/" {c :context} (redirect (str c "/index.html")))
)

#_(defn -main [& {:as args}]
  (web/run
    (-> routes
      (immutant.web.middleware/wrap-session
        {:timeout 20})
      (immutant.web.middleware/wrap-websocket
        {:on-open (fn [ch] (println "You opened a websocket!"))}))
    (merge {"host" (env :demo-web-host), "port" (env :demo-web-port)}
      args)))

 (def http-handler
   (reload/wrap-reload (wrap-defaults #'routes api-defaults))
  )

(def defaults ["host" "0.0.0.0" "port" 10555])


(defn reload-main [& {:as args}]
  (web/run
    (-> routes
      (immutant.web.middleware/wrap-session
        {:timeout 20})
;      (immutant.web.middleware/wrap-websocket {:on-open (fn [ch] (println "You opened a websocket!"))})
      reload/wrap-reload)
    (merge {"host" (env :demo-web-host), "port" (env :demo-web-port)}
      args)))

(defn -main [& {:as args}] 
  (do (hook-dev-mode) (apply reload-main defaults)))

