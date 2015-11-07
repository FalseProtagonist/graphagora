(ns demo.hiccup
  (:use [hiccup.page :only (html5 include-css include-js)]))

(defn index-page [dev-mode]
  (html5 {:lang "en"}
           [:head
            (if dev-mode {:class "is-dev"} {})
            [:meta {:charset "utf-8"}]
            [:title {} "Simple CLJS"]
            "<!--[if lt IE 9]>\n    <script src=\"http://html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n    <![endif]-->"]
           [:body
            {}
            [:div
             {:id "app"}
             [:p {} "&quot;Loading pretty pictures slowly...&quot;"]]
            [:div {:id "graphag"}]
;devmode inject?
            [:script {:type "text/javascript", :src "/js/out/goog/base.js"}]
            (include-js "js/d3.min.js")
            (include-js "js/rawtestscript.js")
            (include-js "js/app.js")
;devmode inject?
            (if dev-mode 
              [:script {:type "text/javascript"} "goog.require('demo.app')"])
   ]))


#_(def hello '("<!DOCTYPE html>"
 [:html
  {:lang "en"}
  [:head
   {}
   "\n    "
   [:meta {:charset "utf-8"}]
   "\n    "
   [:title {} "Simple CLJS"]
   "\n    "
   "<!--[if lt IE 9]>\n    <script src=\"http://html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n    <![endif]-->"
   "\n"]
  "\n"
  [:body
   {}
   "\n    "
   [:div
    {:id "app"}
    " "
    [:p {} "&quot;Loading pretty pictures slowly...&quot;"]
    "  "]
   "\n    "
   [:div {:id "graphag"} " \n    "]
   "\n    "
   [:script {:type "text/javascript", :src "/js/out/goog/base.js"}]
   "\n    "
   "<!-- pointing to cljsbuild generated js file -->"
   "\n"
   "<!--    <script src=\"js/d3.v3.min.js\" type=\"text/javascript\"></script>-->"
   "\n    "
;   [:script {:src "js/d3.min.js", :type "text/javascript"}]
(include-js "js/d3.min.js")
(include-js "js/app.js")
;(include-js "goog.require('demo.app')")
   "\n    "
;   [:script {:src "js/app.js"}]
   "\n    "
   [:script {:type "text/javascript"} "goog.require('demo.app')"]
   "\n"
   "\n"
   "\n"]]))
