$(document).ready(function() {

  $("nav.mobile").append($("nav.desktop").html());
  $(".loader-container").hide();

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
  	  autoPlay:2000,
  	  stopOnHover:true,
      items : 4 //10 items above 1000px browser width
     });

  var owl2 = $("#owl-demo-2");
 
  owl2.owlCarousel({
      navigation:false,
      pagination:false,
      autoPlay:2000,
      stopOnHover:true,
      singleItem:true,
      items : 4 //10 items above 1000px browser width
     });


var owl3 = $("#owl-demo-3");
 
  owl3.owlCarousel({
      navigation:false,
      pagination:false,
      autoPlay:2000,
      stopOnHover:true,
      singleItem:true,
      items : 4 //10 items above 1000px browser width
     });


  $.fn.scrollspy = function(){
      $(this).find("a").on("click",function(e){
          e.preventDefault();
          var idName = $(this).data("target");
          var y =$("#"+idName).offset().top;
          $("html,body").animate({scrollTop : y}, scrollTime);


      });
  }
  $("[scrollspy]").scrollspy();

  $(".desktop .question").hover(function(){
      var target=$(this).data("target");
      $(".phone-bg").addClass("active").css({width:$(".banner").width(), height: 650});
      $("#"+target).addClass("active");
      $("#"+target).find(".answer").addClass("active");
      $(".desktop .banner-text").fadeOut("slow");

  },function(){
      var target=$(this).data("target");
      $(".phone-bg").removeClass("active").removeAttr("style");
      $("#"+target).removeClass("active");
      $("#"+target).find(".answer").removeClass("active");
        $(".desktop .banner-text").fadeIn("slow");
    
  });

 
});