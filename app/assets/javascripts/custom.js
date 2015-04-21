$(document).ready(function() {
 
  $("#owl-demo").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay:true,
      rewindSpeed : 500,
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
  
  // Hide tabs //
  $("#tennessee").hide(0);
  $("#sustainability").hide(0);
  $("#batches").hide(0);
  
  $("#two").hide(0);
  $("#three").hide(0);
  $("#four").hide(0);
  
  // Show selected tab //
  $("#cincinnati_tab").click(function(){
    $("#cincinnati").fadeIn(200);
    $("#tennessee").fadeOut(200);
    $("#sustainability").fadeOut(200);
    $("#batches").fadeOut(200);
  });
 
   $("#tennessee_tab").click(function(){
    $("#tennessee").fadeIn(200);
    $("#cincinnati").fadeOut(200);
    $("#sustainability").fadeOut(200);
    $("#batches").fadeOut(200);
  });
  
   $("#sustainability_tab").click(function(){
    $("#sustainability").fadeIn(200);
    $("#cincinnati").fadeOut(200);
    $("#tennessee").fadeOut(200);
    $("#batches").fadeOut(200);
    
  });
  
   $("#batches_tab").click(function(){
    $("#batches").fadeIn(200);
    $("#cincinnati").fadeOut(200);
    $("#tennessee").fadeOut(200);
    $("#sustainability").fadeOut(200);
  });
  
  $("#wear_tab").click(function(){
    $("#one").fadeIn(200);
    $("#two").fadeOut(200);
    $("#three").fadeOut(200);
    $("#four").fadeOut(200);
  });
 
   $("#fit_tab").click(function(){
    $("#two").fadeIn(200);
    $("#one").fadeOut(200);
    $("#three").fadeOut(200);
    $("#four").fadeOut(200);
  });
  
   $("#care_tab").click(function(){
    $("#three").fadeIn(200);
    $("#one").fadeOut(200);
    $("#two").fadeOut(200);
    $("#four").fadeOut(200);
    
  });
  
   $("#raw_tab").click(function(){
    $("#four").fadeIn(200);
    $("#one").fadeOut(200);
    $("#two").fadeOut(200);
    $("#three").fadeOut(200);
  });
 
});