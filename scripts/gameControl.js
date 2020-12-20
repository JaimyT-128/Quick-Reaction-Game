var game_startTime;
var game_endTime;
var targetsCaught = 0;
var fastestRound;
var roundTimes = [];
var averageRound;

function startGame(){
  player_X = 2;
  player_Y = 2;
  setPlayer(player_X, player_Y);
  generateTargetPos();
  game_startTime = new Date();
}
function clearGame(){
  removePlayer(player_X, player_Y);
  removeTarget(target_X, target_Y);
}

function onTargetCapture(){
  if (player_X == target_X && player_Y == target_Y) {
    game_endTime = new Date();
    game_timeDifference = (game_endTime.getTime() - game_startTime.getTime()) / 1000;
    roundTimes.push(game_timeDifference);
    getAverageRoundTime();
    if (targetsCaught == 0) {
      fastestRound = game_timeDifference;
      document.getElementById("fastestRound").innerHTML = fastestRound + " seconds";
    } else {
      if (game_timeDifference < fastestRound) {
        fastestRound = game_timeDifference;
        document.getElementById("fastestRound").innerHTML = fastestRound + " seconds";
      }
    }
    targetsCaught++;
    document.getElementById("targetsCaught").innerHTML = targetsCaught;
    document.getElementById("latestRound").innerHTML = game_timeDifference + " seconds";
    document.getElementById("avgRound").innerHTML = averageRound + " seconds";
    clearGame();
    startGame();
  }
}

function getAverageRoundTime(){
  var sum = 0;
  for (var i = 0; i < roundTimes.length; i++) {
    sum += roundTimes[i];
  }
  averageRound = (sum / roundTimes.length).toFixed(3);
}

startGame();
