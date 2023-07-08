gsap.registerPlugin(ScrollTrigger);

// ----------timeline---------------
// méthode 1:但是这个方式有缺陷，如果第一个动画持续还没有完成，第二个到运动时间就会触发。就会斜角运动
// premier animation
// gsap.to(".box", { x: 500, duration: 5 });
// deuxième animation après deux secondes de la première
// gsap.to(".box", { y: 200, duration: 3, delay: 2 });
// troisième animation
// gsap.to(".box", { x: 0, duration: 2, delay: 5 });

// méthode 2:
// const tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: ".box",
//     markers: true,
//     start: "top 80%",
//     end: "top 30%",
//     scrub: 1,
//   },
// });
// tl.to(".box", { x: 500, duration: 5 })
//   .to(".box", { y: 200, duration: 3 })
//   .to(".box", { x: 0, duration: 2 });

//-----------stand-alone-----------------
ScrollTrigger.create({
  trigger: ".box",
  start: "top 80%",
  end: "top 50%",
  markers: true,
  // ToggleClass: "box-red",
  onUpdate: (self) => {
    console.log(self);
  },
});
