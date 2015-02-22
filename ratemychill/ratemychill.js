$(document).ready(function(){
    $("#calculatebutton").mouseenter(function(){
        $(this).fadeTo("fast",1)});
    $("#calculatebutton").mouseleave(function(){
        $(this).fadeTo("fast",0.5)});
    $("#calculatebutton").click(function(){
      var score1 = document.getElementById("select1");
      var score2 = document.getElementById("select2");
      var score3 = document.getElementById("select3");
      var score4 = document.getElementById("select4");
      var score5 = document.getElementById("select5");
      var score6 = document.getElementById("select6");
      var score7 = document.getElementById("select7");
      var scoreset = [score1, score2, score3, score4, score5, score6, score7];
      var scoretotal=0;
      for(var i=0; i<scoreset.length; i++){
        if (i===0 && scoreset[i].selectedIndex!==3 && scoreset[i].selectedIndex!==0){ //brock||adam
          scoretotal-=10+(10/scoreset.length)*((scoreset[i].selectedIndex-1)/(scoreset[i].length-2));
        }
        if(scoreset[i].selectedIndex<=1){
          scoretotal+=0;
        }else{
          scoretotal+=(10/scoreset.length)*((scoreset[i].selectedIndex-1)/(scoreset[i].length-2));
        }
      }
      if(scoretotal%1!==0){
        scoretotalfixed=scoretotal.toFixed(1);
      }else{
        scoretotalfixed=scoretotal;
      }
      document.getElementById("score").innerHTML = scoretotalfixed;
    });
});
