function hideSpinner() {
    $("div.spanner").addClass("hide-spinner");
    $("div.overlay").addClass("hide-spinner");
  };
  
  $( document ).ready(function() {
    //   setTimeout(function(){ hideSpinner() }, 500);
      $(".menu-nav").click(function(){
          if($("#mySidenav").width()> 0){
              $("#mySidenav").width(0);
          }else{
            $("#mySidenav").width(250);
          }
      });

      $(window).on('scroll', function() {
        if($(window).scrollTop() < 1000) {
          $('.hero').css('background-size', 115 + parseInt($(window).scrollTop() / 5) + '%');
          $('.hero h1').css('top', 50 + ($(window).scrollTop() * .1) + '%');
          $('.hero h1').css('opacity', 1 - ($(window).scrollTop() * .003));
          // $('.content-about h1').css('margin-top', 0 + ($(window).scrollTop()  * .1) + '%');
          // $('.content-about h1').css('margin-top', ($(window).scrollTop()   + 'px'));
          $('.content-about h1').css('opacity', 1 - ($(window).scrollTop() * .0015));
          
        }
         
         if($(window).scrollTop() >= $('.content-wrapper').offset().top - 300) {
           $('.nav-bg').removeClass('bg-hidden');
           $('.nav-bg').addClass('bg-visible');
           $('.link-text').removeClass('link-text-hidden');
           $('.link-text').addClass('link-text-visible');
           $('.content-about h1').css('color', 'rgb(0, 0, 0)');
        
         } else {
           $('.nav-bg').removeClass('bg-visible');
           $('.nav-bg').addClass('bg-hidden');
           $('.link-text').removeClass('link-text-visible');
           $('.link-text').addClass('link-text-hidden');
           $('.content-about h1').css('color', 'rgb(255, 255, 255)');
         }
      });
  });
  
