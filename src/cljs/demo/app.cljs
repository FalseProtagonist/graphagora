(ns demo.app
(:require  
 [demo.core :as core]
 [weasel.repl :as weasel]
 [figwheel.client :as figwheel :include-macros true]))

(defn main []
    (figwheel/watch-and-reload
     :websocket-url "ws://localhost:3449/figwheel-ws"
     :jsload-callback (fn []
                        (core/main)))
    (weasel/connect 
     "ws://localhost:9001" :verbose true :print #{:repl :console})
    (core/main))

(main)




