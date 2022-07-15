$(document) .ready ( function () {
    alert ("WELCOME BACK FRIEND!");
    
        $("div.active").hover(function(){
            $(this).css ("background-color", "yellow");
            }, function(){
            $(this).css("background-color", "pink");
          });
          $("dark-mode").toggleclass (function (){
            $(this).css ("background-color", "black");
          }, function (){
            $(this).css ("background-color", "white");
          });
      
         $(":button").click (Function(){
          $(this).css("background-color", "red");
         });
});

