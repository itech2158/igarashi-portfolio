
$(function(){
  $('a[href^="#"]').click(function(){
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});


$(function (){
  $('.hamburger').on('click', function (){        // js-btnクラスをクリックすると、
    $('.nav-list , .btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
  })
});

$('#area').click(function(){
  $('.nav-list').removeClass('header-nav');
  $('.nav-list , .btn-line').removeClass('open');
});

