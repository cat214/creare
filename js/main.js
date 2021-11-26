console.log('main.js is started');

$(function(){
  $('.hamburger-button').on('click', function() {
    $(this).toggleClass('active');
    $('.sidemenu-container').toggleClass('open')
    // return false;
  });
});












gsap.registerPlugin(ScrollTrigger);

const el = document.querySelector('.circle');

var fadeIn = gsap.timeline();

fadeIn.from('.message-one', {
    duration: 1,
    opacity: 0,
    y: 50,
    delay: 0.5,
    scrollTrigger: ".top-message-container",
})
fadeIn.from('.message-two', {
  duration: 1,
  opacity: 0,
  y: 50,
  delay: 0.3,
  // scrollTrigger: "top-message-container",
})

fadeIn.from('.message-three', {
  duration: 1,
  opacity: 0,
  y: 100,
  delay: 0.3,
  // scrollTrigger: "top-message-container",
})



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
