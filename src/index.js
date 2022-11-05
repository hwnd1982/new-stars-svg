import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

let starsCount = 0;
const cosmos = document.getElementById('cosmos');
const holes = document.getElementById('holes');
const startingCoordinates = {x:92, y:23, rotate: -25.5};
const path = [
  {id: 'star-alpha', x:81, y:18, size: 4},
  {id: 'star-beta', x:57, y:8, size: 3},
  {id: 'star-gamma', x:56, y:32, size: 3},
  {id: 'star-beta', x:73, y:38, size: 4},
  {id: 'star-alpha', x:88, y:44, size: 5},
  {id: 'star-gamma', x:102, y:50, size: 3},
  {id: 'star-alpha', x:88, y:56, size: 4},
  {id: 'star-beta', x:72, y:62, size: 4},
  {id: 'star-alpha', x:56, y:67, size: 6},
  {id: 'star-gamma', x:57, y:92, size: 3},
  {id: 'star-beta', x:82, y:82, size: 4},
  {id: 'star-alpha', x:106, y:70, size: 6},
  {id: 'star-beta', x:134, y:60, size: 3},
  {id: 'star-alpha', x:133, y:39, size: 4},
  {id: 'star-gamma', x:107, y:28, size: 5},
  startingCoordinates
];


path.forEach(({id, x, y, size}) => {
  holes.innerHTML += id ?
    `<use class="hole" x="${x}" y="${y}" width="${size}" height="${size}" xlink:href="#${id}-hole" />` : '';
});

gsap.registerPlugin(MotionPathPlugin);

gsap.set('#rocket', startingCoordinates);

document.addEventListener('click', ({target}) => {
  const hole = target.closest('.hole');
  
  if (!hole) return;
  
  const x = +hole.getAttribute('x');
  const y = +hole.getAttribute('y');
  const {id, size} = path[starsCount];
  
  if (x === path[starsCount].x && y === path[starsCount].y) {
    cosmos.innerHTML += id ?
      `<use class="star" x="${x}" y="${y}" width="${size}" height="${size}" xlink:href="#${id}" />` : '';
    starsCount++;
  } else cosmos.innerHTML = '';

  console.log(starsCount, path.length);
  if (starsCount + 1 === path.length) {
    gsap.to('#rocket',{
      duration: 12,
      repeat: -1,
      ease: "power1.inOut",
      motionPath:{
        path: path,
        autoRotate: 135,
        alignOrigin: [0.5, 0.5],
        fromCurrent: true,
        resolution: 30,
        curviness: 0.7
      }
    });
  }
});