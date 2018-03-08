//Peter Anderson's Crystal Game Assignment
$(document).ready(function(){
  var forestStoneVal = Math.floor((Math.random()*12)+1);
  var fireStoneVal = Math.floor((Math.random()*12)+1);
  var waterStoneVal = Math.floor((Math.random()*12)+1);
  var triforceVal = Math.floor((Math.random()*12)+1);
  var goalNumVal = Math.floor((Math.random()*100)+20);
  var gemPower = 0;
  var numWins = 0;
  var numLosses = 0;
  
  
  
  console.log($("#button-forestStone"))
  
  $("#button-forestStone").on("click", function() {
      console.log("forest stone was pressed")
      addToCounter(forestStoneVal);
      
    });
  
    $("#button-fireStone").on("click", function() {
      console.log("fire stone was pressed")
      addToCounter(fireStoneVal);
      
    });
  
    $("#button-waterStone").on("click", function() {
      console.log("water stone was pressed")
      addToCounter(waterStoneVal);
      
    });
  
    $("#button-triforce").on("click", function() {
      console.log("triforce stone was pressed")
      addToCounter(triforceVal);
      
    });
  
    function addToCounter(increaseValue) {
        gemPower = gemPower + increaseValue;
        $("#gemPower").text(gemPower);
        console.log("Gem Power = "+gemPower);
        checkWinLoss()
    };
  
    function checkWinLoss() {
        if (gemPower === goalNumVal) {
            alert("You Win!");
            numWins++;
            $("#num")
            resetGame();
        } else if (gemPower > goalNumVal) {
          alert("You Lose!");
          numLosses++;
          resetGame();
        } else {

        }
        
    }
  
    function resetGame() {
      forestStoneVal = Math.floor((Math.random()*12)+1);
      fireStoneVal = Math.floor((Math.random()*12)+1);
      waterStoneVal = Math.floor((Math.random()*12)+1);
      triforceVal = Math.floor((Math.random()*12)+1);
      goalNumVal = Math.floor((Math.random()*100)+20);
      gemPower = 0;
      $("#gemPower").text("Gem Power = 0")
  
    }
  
    
})

