const entrance = document.querySelector('.entrance');
const interior = document.querySelector('.interior');
const drawer   = document.querySelector('.drawer');

var slide = gsap.timeline();

// 二枚目と三枚目は初期ロードで表示させたくないので最初は透明にしてある
slide.set(entrance,{zIndex: 3});
slide.set(interior,{zIndex: 2, opacity: 1});
slide.set(drawer,  {zIndex: 1, opacity: 1});

slide.to(entrance, {
    delay: 10,
    duration: 1,
    opacity: 0,
});
slide.set(entrance,{opacity: 1,zIndex: 0,});
slide.to(interior, {
    delay: 10,
    duration: 1,
    opacity: 0,
});
slide.to(drawer, {
    delay: 10,
    duration: 1,
    opacity: 0,
});

slide.set(entrance, {opacity: 1});
slide.set(interior, {opacity: 1});
slide.set(drawer,   {opacity: 1});

slide.repeat(-1);