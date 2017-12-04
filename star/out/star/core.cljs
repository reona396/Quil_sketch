(ns star.core
  (:require [quil.core :as q :include-macros true]
            [quil.middleware :as m]))

(def vertexNum 10)

(defn setup []
  (q/frame-rate 30))

(defn draw [state]
  (q/background 240)

  (q/fill 255 255 0)
  (q/stroke 0 0 0)

  (q/with-translation [(/ (q/width) 2)
                       (/ (q/height) 2)]

                       (q/rotate (/ q/PI 2))

                      (q/begin-shape)
                      (doseq [i (range 0 vertexNum)]
                        (let [r (+ 100 (* 80 (rem i 2)))
                              x (* r (q/cos (* i (/ q/TWO-PI vertexNum))))
                              y (* r (q/sin (* i (/ q/TWO-PI vertexNum))))];(q/ellipse x y 20 20)
                          (q/vertex x y)))
                      (q/end-shape :close)))

(q/defsketch star
             :host "star"
             :size [500 500]
             :setup setup
             :draw draw
             :middleware [m/fun-mode])
