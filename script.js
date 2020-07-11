$(function () {
  $('.hamburger').on('click', function () {        // js-btnクラスをクリックすると、
    $('.nav-list , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});

$('#area').click(function(){
  $('.nav-list').removeClass('header-nav');
  $('.nav-list , .btn-line').toggleClass('open');
});
