 $(window).load(function(){
        while($(".owl-wrapper-outer").length != 3){
            console.log("wrapper is here");
        }

        $(".owl-wrapper").promise().done(function(){
            $(".body-wrapper").show();
            $(".body-wrapper").promise().done(function(){
              $(".loader-container").hide();     
            });

        });
        
                
    
 });

$(document).ready(function() {

var isAndroid = /(android)/i.test(navigator.userAgent);
var isIOS =(navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i));
    

  $("nav.mobile").append($("nav.desktop").html());

    $(".name").each(function(){
        if($(this).data('color')){
            $(this).css({'color':$(this).data('color')});
        }
        if($(this).data('bg')){
            $(this).css({'background':$(this).data('bg')});
        }
    })


  $("nav.mobile .navigation-btn").on("click",function(e){
    e.stopPropagation();
    var nav = $(this).closest("nav").find(".nav");
      nav.addClass("active");
      var handler = function(e){
        if(e.target!=$("nav.mobile")){
            nav.removeClass("active");
            $(document).unbind("click.mobile",handler);
        }
      };
      $(document).bind("click.mobile",handler);
  });

  var scrollTime = 600; 
  var owl = $("#owl-demo");
 
  owl.owlCarousel({
  	  navigation:false,
  	  pagination:false,
  	  stopOnHover:true,
      items : 4 //10 items above 1000px browser width
     });
  
  $(".next").click(function(){
    owl.trigger('owl.next');
  })
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  });

  var owl2 = $("#owl-demo-2");
 
  owl2.owlCarousel({
      navigation:false,
      pagination:false,
      autoPlay:1500,
      stopOnHover:true,
      singleItem:true,
      items : 4 //10 items above 1000px browser width
     });


var owl3 = $("#owl-demo-3");
 
  owl3.owlCarousel({
      navigation:false,
      pagination:false,
      autoPlay:1500,
      stopOnHover:true,
      singleItem:true,
      items : 4 //10 items above 1000px browser width
     });


  $.fn.scrollspy = function(){
      $(this).find("a").on("click",function(e){
          e.preventDefault();
          var idName = $(this).data("target");
          var y =Math.round($("#"+idName).offset().top);
          $("html,body").animate({scrollTop : y}, scrollTime);


      });
  }
  $("[scrollspy]").scrollspy();

  $(".desktop .question").hover(function(){
      var target=$(this).data("target");
      $(".phone-bg").addClass("active").css({width:$(".banner").width(), height: 800});
      $("#"+target).addClass("active");
      $("#"+target).find(".answer").each(function(i){
          
          $(this).addClass("active");
      })
      $(".desktop .banner-text, .triangle").stop(true,true).hide();

  },function(){
      var target=$(this).data("target");
      $(".phone-bg").removeClass("active").removeAttr("style");
      $("#"+target).removeClass("active");
      $("#"+target).find(".answer").each(function(){
          $(this).removeAttr("style").removeClass("active");
      })
        $(".desktop .banner-text, .triangle").stop(true,true).fadeIn("slow");
    
  });

  $(".play_store").click(function(){
    window.location = "https://play.google.com/store/apps/details?id=com.dekkoh";
  })
  $(".app_store").click(function(){
    window.location = "https://play.google.com/store/apps/details?id=com.dekkoh";
  })

  $(".read-the-blog").click(function(){
    window.location = "https://medium.com/the-dekkoh-blog";
  });

   $(".news-images img").click(function(){
    window.location = $(this).data("href");
  });

  $(".download_now").click(function(){
     if(isAndroid){
       window.location = "https://play.google.com/store/apps/details?id=com.dekkoh";
     }
     if(isIOS){
        //App store path
       //window.location = "https://medium.com/the-dekkoh-blog";
       $(this).html('Coming Soon');
     }
     else{
        window.location = "https://play.google.com/store/apps/details?id=com.dekkoh";
     }
  });

 
});