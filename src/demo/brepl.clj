(ns demo.brepl
  (:require
   [cemerick.piggieback :as piggieback]
   [weasel.repl.websocket :as weasel]))

#_(ns demo.brepl)


(defn browser-repl []

  (let [repl-env (weasel/repl-env :ip "0.0.0.0" :port 9001)]
      (piggieback/cljs-repl :repl-env repl-env)))

#_(defn browser-repl []
  (print "hello"))

#_(defonce conn
  (repl/connect "http://localhost:9000/repl"))
(defonce conn nil)
