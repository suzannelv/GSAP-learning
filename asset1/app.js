// 1. register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

gsap.to(".square", {
  x: 700,
  duration: 3,
  // 当滚动到第二个方块时，会触发第一个方块的动画，scrollTrigger触发元素
  scrollTrigger: {
    trigger: ".square2",
    // 当滚动到距离元素顶部400像素时触发动画
    // start: 400,
    // 当滚动到元素顶部到达视口中心位置时触发动画
    // start: "top center",
    start: "top 80%",
    // end: "center 20%",
    end: "top 30%",
    // end: () => `+=${document.querySelector(".square").offsetHeight}`,
    // scrub 跟start 配合起来可以滚动形成滚来滚去

    // scrub: true,
    // 滚动时间为4秒
    scrub: 4,

    // toggleActions的四个参数：onEnter, onLeave, onEnterBack, onLeaveBack
    // 下面的參數就是可以替換上面4個 ‘play none none none’
    /**
     * “play”, “pause”, “resume”, “reset”, “restart”, “complete”, “reverse”, and “none”.
     “播放”, “暫停”, “恢復”, “重置”, “重新開始”, “完成”, “反向”, 和 “無”。
     */

    toggleActions: "restart none none none",
    // 当ScrollTrigger激活时，你可以固定一个元素，这样当滚动位置在开始和结束元素/值之间时，它就会固定在原地

    // pin
    // pin:true 就是自身元素
    // pin:'.xxx' 就是指定的元素
    // 起到的作用是, 滚动固定的作用
    // pin: true,
    pin: ".square",
    pinSpacing: false,

    // 查看动画定位标志
    markers: true,
    // markers: {
    //   startColor: "purple",
    //   endColor: "fuchsia",
    //   fontSize: "4rem",
    //   indent: 200,
    // },
    toggleClass: "red",
  },
});
