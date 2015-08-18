$(document).ready(function() {
  
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

  $.fn.scrollspy = function(){
      $(this).find("a").on("click",function(e){
          e.preventDefault();
          var idName = $(this).data("target");
          var y =$("#"+idName).offset().top;
          $("html,body").animate({scrollTop : y}, scrollTime);


      });
  }
  $("[scrollspy]").scrollspy();

  $(".question").hover(function(){
      var target=$(this).data("target");
      $(".phone-bg").addClass("active").css({width:$(".banner").width(), height: $(".banner").height()});
      $("#"+target).addClass("active");
      $("#"+target).find(".answer").addClass("active");
      $(".banner-text").hide();

  },function(){
      var target=$(this).data("target");
      $(".phone-bg").removeClass("active").removeAttr("style");
      $("#"+target).removeClass("active");
      $("#"+target).find(".answer").removeClass("active");
      $(".banner-text").show();
  });

 
});