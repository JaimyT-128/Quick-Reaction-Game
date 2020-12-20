var game_startTime;
var game_endTime;
var targetsCaught = 0;
var fastestRound;
var roundTimes = [];
var averageRound;


// Starts the game, resets player position, sets start time.
function startGame(){
  player_X = 2;
  player_Y = 2;
  setPlayer(player_X, player_Y);
  generateTargetPos();
  game_startTime = new Date();
}

// Removes the player and target from the field.
function clearGame(){
  removePlayer(player_X, player_Y);
  removeTarget(target_X, target_Y);
}

// Updates statistics, defines what happens when target is caught.
function onTargetCapture(){
  if (player_X == target_X && player_Y == target_Y) {
    game_endTime = new Date();
    game_timeDifference = (game_endTime.getTime() - game_startTime.getTime()) / 1000;
    roundTimes.push(game_timeDifference);
    getAverageRoundTime();
    if (targetsCaught == 0) {
      fastestRound = game_timeDifference;
      document.getElementById("fastestRound").innerHTML = fastestRound.toFixed(3) + " seconds";
    } else {
      if (game_timeDifference < fastestRound) {
        fastestRound = game_timeDifference;
        document.getElementById("fastestRound").innerHTML = fastestRound.toFixed(3) + " seconds";
      }
    }
    targetsCaught++;
    document.getElementById("targetsCaught").innerHTML = targetsCaught;
    document.getElementById("latestRound").innerHTML = game_timeDifference.toFixed(3) + " seconds";
    document.getElementById("avgRound").innerHTML = averageRound.toFixed(3) + " seconds";
    clearGame();
    startGame();
  }
}

// Calculates average round time.
function getAverageRoundTime(){
  var sum = 0;
  for (var i = 0; i < roundTimes.length; i++) {
    sum += roundTimes[i];
  }
  averageRound = (sum / roundTimes.length);
}

// Actually starts the game when the page is loaded.
startGame();
