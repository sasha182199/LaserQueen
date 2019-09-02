// carousel swiper
$(function() {

    var swiper = new Swiper('.container-reviews', {                
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        parallax: true,
        speed: 600,
		    autoplay: 3500
		// mousewheelControl: true
		// loop: true              
    });

});

if( $(window).width() < 768) {
  // scroll-header-mobile 
  $(window).scroll(function() {
  var height = $(window).scrollTop();
  /*Если сделали скролл на 100px задаём новый класс для header*/
  if(height > 40){
  $('header').addClass('to-scroll');
  } else{
  /*Если меньше 100px удаляем класс для header*/
  $('header').removeClass('to-scroll');
  }
  });

  // tabs in <768 screen
  $(document).ready(function(){
    $(".tabs .button-catalog").click(function () {
      $(".button-catalog, .tabs").toggleClass('actives');    
    if($(this).hasClass('active')){
      $(this).removeClass("active");
    }else{
    $(this).addClass("active");
    }      
    });
  });

  $('.tabs .button-catalog.active, .link-faq').click(function (e){
    e.preventDefault();
});
}

// not-load
  $('.link-faq').click(function (e){
    e.preventDefault();
});

// tabs
if( $(window).width() > 767) { 
  $(document).ready(function(){
  $(".button-catalog").on("click", function(){
      if($(this).hasClass('active')){  
      $(this).removeClass("active");
      }else{
      $(this).addClass('active');
    }     
  })
  });
}

// MASKS

// placeholder out
$(document).ready(function () {
 $('input,textarea').focus(function(){
   $(this).data('placeholder',$(this).attr('placeholder'))
   $(this).attr('placeholder','');
 });
 $('input,textarea').blur(function(){
   $(this).attr('placeholder',$(this).data('placeholder'));
 });
 });

// calendar

//DROPDOWN
$('header .dropdown-list').click(function () {
    // $(this).parents('.dropdown-list').toggleClass('opened');
    $(this).toggleClass('opened');
    $(".overlay-change").css('display', 'block');
    $('header').css('overflow', 'visible');
})
$('.select-sorted .sorted').click(function () {
    // $(this).parents('.dropdown-list').toggleClass('opened');
    $(".select-sorted .dropdown-list").toggleClass('opened');
    $(".overlay-sorted").css('display', 'block');
})
$('.dropdown-list li').click(function () {
    var $this = $(this);
    $this.parents('.dropdown-list').find('.city, .sorted').text($this.text()).addClass('chosen');
    $('.dropdown-list').removeClass('opened');
    $('.overlay-change').css('display', 'none');
    $('.overlay-sorted').css('display', 'none');
    $('header').css('overflow', 'hidden');
})
$('.overlay-change').click(function () {
  $(this).css('display', 'none');
  $('.dropdown-list').removeClass('opened');
  $('header').css('overflow', 'hidden');
})


$(document).on('click', function(e) {
  if (!$(e.target).closest(".select-region").length) {
    $('header .dropdown-list').removeClass('opened');
    // $('header').css('overflow', 'hidden');
  }
  e.stopPropagation();
});

// sorted-overlay
$('.sorted').click(function () {
    $('.overlay-sorted').css('display', 'block');
  })

$('.overlay-sorted').click(function () {
    $(this).css('display', 'none');
    $('.dropdown-list').removeClass('opened');
  })


// preloader
$( document ).ready(function() {    
    $(".preloader").fadeOut();
});

// acordion    
$(document).ready(function(){
  $(".set > .link-faq").on("click", function(){
    if($(this).hasClass('active')){
      $(this).removeClass("active");
      $(this).siblings('.content-in').slideUp(200);
      $(".set > .link-faq i").removeClass("fa-minus").addClass("fa-plus");
    }else{
      $(".set > .link-faq i").removeClass("fa-minus").addClass("fa-plus");
    $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
    $(".set > .link-faq").removeClass("active");
    $(this).addClass("active");
    $('.content-in').slideUp(200);
    $(this).siblings('.content-in').slideDown(200);
    }
    
  });
});

// about-us - see-all
$(document).ready(function(){
  $(".see-all-us ").on("click", function(){
    if($(".about-us").hasClass('active')){
      $(".about-us").removeClass("active");
    }else{
    $(".about-us").addClass("active");
    }
  });
});

$('.visible .calc-button').click(function () {
    $(this).css('display', 'none');
    $('.hide').animate({opacity: 1, 'z-index': '5'}, 200);
    $('.overlay-calc').css('display', 'block');
    $('.visible .calc-button').css('display', 'block');
    $("body").addClass("max-body");
  })

$('.overlay-calc').click(function () {
    $(this).css('display', 'none');
    $('.hide').animate({opacity: 0, 'z-index': '-1'}, 200);
    $('.calc-close').animate({opacity: 0, 'z-index': '-1'}, 200);
    $("body").removeClass("max-body");
  })
$('.calc-close').click(function () {
    $('.overlay-calc').css('display', 'none');
    $('.hide').animate({opacity: 0, 'z-index': '-1'}, 200);
    $("body").removeClass("max-body");
  })

// mobile-menu
$( "nav .c-hamburger, .close, .overlay-menu" ).click(function() {
  $( "nav ul, .bottom-line, .overlay-menu" ).fadeIn( "slow" );  
  $('header').css('overflow', 'visible');
  $("header").addClass("no-overflow");
  $('header').css('position', 'inherit');
  $('.content').css('opacity', '0');
  $('.content').css('display', 'none');
  $('footer').css('display', 'none');
  $('body').css('background', '#E8E8E8');
});
$( ".close" ).click(function() {
  $( "nav ul, .bottom-line, .overlay-menu" ).fadeOut( "slow" );  
  $("header").removeClass("no-overflow");
  $('header').css('position', 'fixed');
  $('.content').css('opacity', '1');
  $('.content').css('display', 'block');
  $('footer').css('display', 'block');  
  $('body').css('background', '#eee');
});

// mobile-phone
$( ".button-click" ).click(function() {
  $( ".none" ).slideToggle( "slow" );  
});

// popup
$(document).ready(function(){
  $('.popup .close_window, .overlay').click(function (){
    $('.popup, .overlay').css({'opacity':'0', 'visibility':'hidden'});
  });
  
  $(this).keydown(function(eventObject){
    if (eventObject.which == 27){
      $('.popup, .overlay').css({'opacity':'0', 'visibility':'hidden'});
    }
  });  

  $(this).keydown(function(eventObject){
    if (eventObject.which == 27){
      $('.bootstrap-datetimepicker-widget').css({'display':'none'});
    }
  });
  $(this).keydown(function(eventObject){
    if (eventObject.which == 13){
      $('.bootstrap-datetimepicker-widget').css({'display':'none'});
    }
  });
  $('a.open_window').click(function (e){
    $('.popup, .overlay').css({'opacity':'1', 'visibility':'visible'});
    // e.preventDefault();
  });
});

// swiper-index.html
if( $(window).width() > 767) { 
    var swiper = new Swiper('.header-section .swiper-container', {        
        slidesPerView: '4',
        spaceBetween: 4          
    }); 
}

if( $(window).width() < 768) { 
    var swiper = new Swiper('.header-section .swiper-container', {      
      slidesPerView: 1,
      paginationClickable: true,
      keyboardControl: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',          
      loop: true
    });   
}

// popup-swiper
var swiper = new Swiper('.popup .swiper-container', {
    pagination: '.popup .swiper-pagination',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true
    }
});

if( $(window).width() > 1260) { 
  $('.kThumbnailsPage img').wrap('<div class="wrap-img">');
}

if( $(window).width() < 768) { 

    $('.form-control').click(function(){
      $('.form-control').prop('readonly', true);
    });

    $('.date').click(function(){
      $('.date').prop('readonly', true);
    });
}


if( $(window).width() < 479) { 
  if (navigator.userAgent.match(/Android/)) {
    $('.top-line nav').css('flex-basis','13%');
    $('.top-line .contacts').css('margin-left','16px');
    $('.top-line .contacts').css('margin-right','-22px');
  }
}