$(document).ready(function(){

$('.bubble').mouseenter(function() {
	alert("F");
     $(this).stop()
     $(this).animate({
        height: '+=250'
        width '+=250'
      }, 500)

         }, function() {
    $(this).stop()
     $(this).animate({
        height: '-=250'
        width: '-=250'
      }, 500)            
})
}