console.log('main.js is started');

$(function(){
  $('.hamburger-button').on('click', function() {
      console.log('click detected')
    $(this).toggleClass('active');
    return false;
  });
});










gsap.registerPlugin(ScrollTrigger);

const el = document.querySelector('.circle');

// トップの見出しスライド
// gsap.from('.slogan-top', {
//     duration: 1,
//     opacity: 0,
//     x: -100,
// })
// gsap.from('.slogan-bottom', {
//     duration: 5,
//     delay: 1,
//     x: -50,
//     opacity: 0
// })

// 理念スライド
// gsap.from('.philosophy-text-background', {
//     duration: 5,
//     x: -1500,
//     ease: Power3.easeOut,
//     stagger: 0.1,
//     scrollTrigger: "philosophy-content-container",
// });

// gsap.from('.philosophy-text', {
//     duration: 5,
//     x: -1500,
//     ease: Power3.easeOut,
//     stagger: 0.1,
//     scrollTrigger: "philosophy-content-container",
// })

console.log('js finish');
