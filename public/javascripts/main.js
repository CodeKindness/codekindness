$(function() {
/* ----- Main Menu ----- */
  
  if($().mobileMenu) {
    $('#header nav').mobileMenu();
  }

/* ----- Carousels & Sliders ----- */
  
  // default flex parameters
  if($().flexslider) {
    $('.flexslider').flexslider({
      controlNav: true,
      directionalNav: true,
      slideshow: true,
      slideshowSpeed: 6000,
      smoothHeight: true
    });
  }



/* ----- Twitter Feed ----- */
  
  if($().tweet) {
    $(".widget-twitter .widget-content > div").tweet({
      username: "codekindness",
      join_text: "auto",
      avatar_size: 0,
      count: 2,
      auto_join_text_default: "",
      auto_join_text_ed: "",
      auto_join_text_ing: "",
      auto_join_text_reply: "",
      auto_join_text_url: "",
      loading_text: "loading tweets..."
      });
  }



/* ----- Navigation Scroll ----- */

  $('#header nav, .page-title, #copyright').localScroll({
    offset: {left: 0, top: -99}
  });
  
  //Detecting user's scroll
  $(window).scroll(function() {

    offsetTolerance = 50;
    
    headerWrapper = parseInt($('#header').outerHeight());
  
    //Check scroll position
    scrollPosition  = parseInt($(this).scrollTop());
    
    //Move trough each menu and check its position with scroll position then add current class
    $('#header nav a').each(function() {

      thisHref = $(this).attr('href');
      thisTruePosition = parseInt($(thisHref).offset().top);
      thisPosition = thisTruePosition - headerWrapper - offsetTolerance;
      
      if(scrollPosition >= thisPosition) {

        $('.current-menu-item').removeClass('current-menu-item');
        $('#header nav a[href='+ thisHref +']').parent('li').addClass('current-menu-item');

      }
    });
    
    //If we're at the bottom of the page, move pointer to the last section
    bottomPage  = parseInt($(document).height()) - parseInt($(window).height());
    
    if(scrollPosition == bottomPage || scrollPosition >= bottomPage) {
    
      $('.current-menu-item').removeClass('current-menu-item');
      $('#header nav a:last').parent('li').addClass('current-menu-item');
    }
  });



/* ----- Forms ----- */  

  if (!Modernizr.input.placeholder){
    $("input, textarea").each(function(){
      if($(this).val()=="" && $(this).attr("placeholder")!=""){
        $(this).val($(this).attr("placeholder"));
        $(this).focus(function(){
          if($(this).val()==$(this).attr("placeholder")) $(this).val("");
        });
        $(this).blur(function(){
          if($(this).val()=="") $(this).val($(this).attr("placeholder"));
        });
      }
    });
  }
  
  
  
/* ----- Modal Window ----- */  
  
  $("a[data-toggle=modal]").click(function(event){
    event.preventDefault();
    $(this).next().modal({
      maxWidth: 940,
      opacity: 65,
      closeClass: "close",
      overlayCss: { background: "#000" },
      autoResize: true
    });
  });



/* ----- Github Activity ----- */

  $(".widget-text .widget-content div").githubActivityFor('codekindness', {
    'limit': 4,
    'wrap': function(item) {
      item.prepend('');
      return item;
    }
  });





  $('a[href][title].qtip').qtip({
    content: {
      text: false // Use each elements title attribute
    },
    style: {
      border: {
        width: 5,
        radius: 10
      },
      padding: 10,
      textAlign: 'center',
      tip: true, // Give it a speech bubble tip with automatic corner detection
      name: 'cream' // Style it according to the preset 'cream' style
    }
  });
});
