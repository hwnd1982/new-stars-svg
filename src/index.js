import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

const path = [
  {x:0, y:0},
  {x:35, y:-20},
  {x:22, y:3},
  {x:30, y:2},
  {x:15, y:18},
  {x:40, y:-13},
  {x:-8, y:-27},
  {x:-50, y:27},
]

gsap.registerPlugin(MotionPathPlugin);
gsap.to('#rocket',{
  duration: 15, 
  ease: "power1.inOut",
  motionPath:{
    path: path,
    autoRotate: 120,
    alignOrigin: [0.5, 0.5],
    fromCurrent: false,
    relative: true,
    resolution: 20,
    curviness: 0.75
  }
});
