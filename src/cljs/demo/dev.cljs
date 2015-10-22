(ns demo.dev
(:require  
 [demo.core :as core]
[demo.app :as app]
 [weasel.repl :as weasel]
 [figwheel.client :as figwheel :include-macros true]))

#_(figwheel/watch-and-reload
  :websocket-url "ws://localhost:3449/figwheel-ws"
  :jsload-callback (fn []
                     (core/main)))

#_(weasel/connect "ws://localhost:9001" :verbose true :print #{:repl :console})

;(core/main)

#_(app/main)

