var game_startTime;
var game_endTime;

function startGame(){
  player_X = 2;
  player_Y = 2;
  setPlayer(player_X, player_Y);
  generateTargetPos();
  var date = new Date();
  game_startTime = date.getMilliseconds();
}
function clearGame(){
  removePlayer(player_X, player_Y);
  removeTarget(target_X, target_Y);
}

function checkIfCaught(){
  if (player_X == target_X && player_Y == target_Y) {
    var date = new Date();
    game_endTime = date.getMilliseconds();
    clearGame();
    startGame();
  }
}

startGame();
