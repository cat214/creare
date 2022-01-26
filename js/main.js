console.log('main.js is started');

$(function(){
  $('.hamburger-button').on('click', function() {
    $(this).toggleClass('active');
    $('.sidemenu-container').toggleClass('l-sidemenu__open')
    // return false;
  });
});

console.log('js finish');
