$(function() {
  
  var $hero_footer  = $('.layout-hero .hero-footer');
  var $form         = $("#contact-form");
  var $navbarLayout = $("#navbarLayout");

  // Mobile menu
  $navbarLayout.on('hidden.bs.collapse', function () {
    $("#toggle-main-menu").removeClass('is-active');
  });
  $navbarLayout.on('shown.bs.collapse', function () {
    $("#toggle-main-menu").addClass('is-active');
  });

  $navbarLayout.find('a').on('click tap press', function () {
    $navbarLayout.collapse('hide');
  });

  if( $('#enquiryform').length ) {
    document.getElementById("enquiryform").addEventListener("submit",function(evt)
        {
        
        var response = grecaptcha.getResponse();
        if(response.length == 0) 
        { 
          //reCaptcha not verified
          alert("Please verify you are human by checking the I'm not a robot!"); 
          evt.preventDefault();
          return false;
        }
        //captcha verified
        //do the rest of your validations here
    
    });
  }

  const svgDraw = anime({
    targets: '#draw #animated  path',
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: 'easeInOutSine',
    duration: 1800,
    delay: function(el, i) { return i * 250 },
    direction: 'alternate',
    loop: true
  });

  const svgZoom = anime({
    targets: '#zoom #animated',
    scaleX:1.05,
    scaleY:1.05,
    duration: 1600,
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true
  });

  

  // $('.row-work .work-teaser').matchHeight();


  $( document ).ready(function() {
  // Image Comparison
    document.querySelectorAll('.cocoen').forEach(function(element){
      new Cocoen(element);
    });

  });


  $(".form-group input, .form-group textarea").focusout(function(){
      if($(this).val() === ""){
        $(this).parent().removeClass('focus');
      }
  }); 
  $('.form-group input, .form-group textarea').focus(function() {
    $(this).parent().addClass('focus');
  });

  // $(function() {
  //   $('#pagetransition').smoothState({ debug: true });
  // });
  // $(function(){
  //   'use strict';
  //   var $page = $('#pagetransition'),
  //       options = {
  //         debug: true,
  //         prefetch: true,
  //         cacheLength: 2,
  //         onStart: {
  //           duration: 250, // Duration of our animation
  //           render: function ($container) {
  //             // Add your CSS animation reversing class
  //             $container.addClass('is-exiting');
  //             // Restart your animation
  //             smoothState.restartCSSAnimations();
  //           }
  //         },
  //         onReady: {
  //           duration: 0,
  //           render: function ($container, $newContent) {
  //             // Remove your CSS animation reversing class
  //             $container.removeClass('is-exiting');
  //             // Inject the new content
  //             $container.html($newContent);
  //           }
  //         }
  //       },
  //       smoothState = $page.smoothState(options).data('smoothState');
  // });

  $(window).scroll(function(){
    $(".hero-copy").css("opacity", 1 - $(window).scrollTop() / 250);
  });


  console.log("Welcome to WE ARE VA");
  // console.log("##:::::'##:'########::::'###::::'########::'########:'##::::'##::::'###::::");
  // console.log("##:'##: ##: ##.....::::'## ##::: ##.... ##: ##.....:: ##:::: ##:::'## ##:::");
  // console.log("##: ##: ##: ##::::::::'##:. ##:: ##:::: ##: ##::::::: ##:::: ##::'##:. ##::");
  // console.log("##: ##: ##: ######:::'##:::. ##: ########:: ######::: ##:::: ##:'##:::. ##:");
  // console.log("##: ##: ##: ##...:::: #########: ##.. ##::: ##...::::. ##:: ##:: #########:");
  // console.log("##: ##: ##: ##::::::: ##.... ##: ##::. ##:: ##::::::::. ## ##::: ##.... ##:");
  // console.log(". ###. ###:: ########: ##:::: ##: ##:::. ##: ########:::. ###:::: ##:::: ##:");
  // console.log(":...::...:::........::..:::::..::..:::::..::........:::::...:::::..:::::..::");

    /*
     * Replace all SVG images with inline SVG
     */
    $('img.svg').each(function(){
        var $img     = jQuery(this);
        var imgID    = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL   = $img.attr('src');

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });



    // Play when in viewport
      $(window).on('scroll load', function(){
        $('.responsive-vid iframe').each( function(i){
          player.pauseVideo();
          var scroll_position = $(window).scrollTop();
          var bottom_of_video = $(this).offset().top + ($(this).outerHeight() / 2);
          var bottom_of_window3 = $(window).scrollTop() + $(window).height();
          if( bottom_of_window3 > bottom_of_video && scroll_position < bottom_of_video ) {  
            player.playVideo();
            $('#player').css({'opacity':'1'});
          } else {
            player.pauseVideo();
            $('#player').css({'opacity':'.6'});
          }
        });
      });


      var vids = $("video"); 
      $.each(vids, function(){
             this.controls = false; 
      }); 


});


