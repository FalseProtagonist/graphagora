(defproject demo "0.2.0-SNAPSHOT"
  :description "This will graph2"
  :url "http://github.com/immutant/feature-demo"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
;do I want this? 24Oct15
;  :source-paths ["src/cljs" "src"]
 
  :repl-options {
                 :timeout 120000
                 :init-ns demo.core
                 :nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]
                 }
  :dependencies [[org.clojure/clojure "1.7.0"]
;                 [org.clojure/clojurescript "0.0-2069"]
;                 [org.clojure/clojurescript "0.0-3058" :scope "provided"]
                 [org.clojure/clojurescript "1.7.145" :scope "provided"]
                 [org.immutant/immutant "2.0.2"]
                 [enlive "1.1.5"]
                 [compojure "1.3.4"]
                 [ring "1.3.2"]
                 [ring/ring-devel "1.3.1"]
                 [ring/ring-defaults "0.1.3"]
                 [org.clojure/core.memoize "0.5.6"]
                 [clj-time "0.9.0"]
                 [cheshire "5.4.0"]
                 [environ "1.0.0"]
                 [org.clojure/java.jdbc "0.3.6"]
                 [com.h2database/h2 "1.3.176"]
                 
                 [com.cemerick/piggieback "0.1.5"]
                 [weasel "0.6.0"]

                 [om "0.8.0-rc1"]
                 
                 [reagent "0.5.1"]
                 [reagent-forms "0.5.11"]
                 [reagent-utils "0.1.5"]

                 [hiccup "1.0.5"]
                 [hickory "0.5.4"]

                 [figwheel "0.2.5"]
                 [figwheel-sidecar "0.2.5"]
]
  :repositories [["Immutant incremental builds"
                  "http://downloads.immutant.org/incremental/"]]
  :plugins [[lein-immutant "2.0.0"] 
            [lein-cljsbuild "1.0.5"]
            [lein-environ "1.0.0"]
            [cider/cider-nrepl "0.9.1"]
            [lein-figwheel "0.2.5"]]
                   :figwheel {:http-server-root "public"
                              :server-port 3449
                              :css-dirs ["resources/public/css"]
                              :ring-handler demo.web/http-handler}
  :cljsbuild {:builds
              [{;; CLJS source code path
                :source-paths ["src/cljs"]

                ;; Google Closure (CLS) options configuration
                :compiler {;; CLS generated JS script filename
                           :output-to "resources/public/js/app.js"

                           ;; minimal JS optimization directive
                           :optimizations :none

                           ;; generated JS code prettyfication
                           :pretty-print true
                           :libs ["resources/libs/d3.v3.min.js"]}}]}
;  :main demo.web
  :main demo.core  
 ; :main demo.mad#eup
  :uberjar-name "demo-standalone.jar"
  :min-lein-version "2.4.0"
  :jvm-opts ["-Dhornetq.data.dir=target/hornetq-data"
             "-Dcom.arjuna.ats.arjuna.objectstore.objectStoreDir=target/ObjectStore"]
  :aliases {"msg-client" ["run" "-m" "demo.remote-messaging-client"]}
  :profiles {:uberjar {:aot [demo.core]}
             :eap
             {:exclusions [org.hornetq/hornetq-jms-server 
                           org.hornetq/hornetq-server
                           org.jboss.narayana.jta/narayana-jta]
              :dependencies [[org.hornetq/hornetq-jms-server "2.3.25.Final"]
                             [org.hornetq/hornetq-server "2.3.25.Final"]
                             [org.jboss.jbossts.jta/narayana-jta "4.17.29.Final"]]
              :immutant {:war {:resource-paths ["eap-resources"]}}}})



