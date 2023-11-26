$(document).ready(function(){
  $('.slider').slick({
      infinite: true,
      dots: false,
      speed: 500,
  });
  
  $('.products__image').on('click', function() {
    $(this).show().toggleClass('active').siblings().removeClass('active');
  });

  $('.products__button').on('click', 'div:not(.products__image_active)', function() {
    $(this)
      .addClass('products__image_active').siblings().removeClass('products__image_active')
      .closest('div.container').find('div.products__p').removeClass('products__p_active').eq($(this).index()).addClass('products__p_active');
  });

  $(window).scroll(function() {
    if ($(this).scrollTop() > 1600) {
        $('.pageup').fadeIn();
    } else {
        $('.pageup').fadeOut();
    }
  });

  // $("a[href=#up]").click(function(){
  //   const _href = $(this).attr("href");
  //   $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  //   return false;
  // });

  new WOW().init();
});
// $('.products__blocks_img').on('click', function() {
//   $(this).hide().show().toggleClass('image_one:hover');
// });