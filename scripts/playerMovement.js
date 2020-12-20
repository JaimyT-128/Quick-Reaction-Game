var player_X = 2;
var player_Y = 2;

setPlayer(player_X, player_Y);

document.onkeydown = function(e) {
     if (e.keyCode == 38 || e.keyCode == 87) {
      movePlayer("up");
    } else if (e.keyCode == 39 || e.keyCode == 68) {
      movePlayer("down");
    } else if (e.keyCode == 37 || e.keyCode == 65) {
      movePlayer("left");
    } else if (e.keyCode == 40 || e.keyCode == 83) {
      movePlayer("right");
    }
};

function setPlayer(x, y){
  var playerPosition = document.getElementById(x + "," + y);
  playerPosition.classList.add("player");
}
function removePlayer(x, y){
  var playerPosition = document.getElementById(x + "," + y);
  playerPosition.classList.remove("player");
}
function movePlayer(direction){
  if (direction == "left") {
    if (player_Y > 0) {
      removePlayer(player_X, player_Y);
      player_Y--;
      setPlayer(player_X, player_Y);
    }
  } else if (direction == "up") {
    if (player_X > 0) {
      removePlayer(player_X, player_Y);
      player_X--;
      setPlayer(player_X, player_Y);
    }
  } else if (direction == "down") {
    if (player_Y < 4) {
      removePlayer(player_X, player_Y);
      player_Y++;
      setPlayer(player_X, player_Y);
    }
  } else if (direction == "right") {
    if (player_X < 4) {
      removePlayer(player_X, player_Y);
      player_X++;
      setPlayer(player_X, player_Y);
    }
  }
}
