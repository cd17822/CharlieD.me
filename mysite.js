//deemed useless, inferior to css's :hover

var bubbleBig=false;
$(document).ready(function(){
    alert("OK");
    $(".bubble").mouseenter(function() {
        if(bubbleBig==false){
            $(this).animate({
                width: '+=25',
                height: '+=25'
              }, 500, function(){
                bubbleBig=true;
            });
        }
    });
    $(".bubble").mouseleave(function() {
        if (bubbleBig==true){
            $(this).animate({
                width: '-=25',
                height: '-=25'
              }, 500, function(){
                bubbleBig=false
            });
        }
    });
});
