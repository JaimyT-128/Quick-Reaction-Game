var target_X;
var target_Y;

// Generates a random target position, which can not be on the coordinates 2, 2 because that
// is where the player spawns.
function generateTargetPos(){
  target_X = Math.floor(Math.random() * 5);
  target_Y = Math.floor(Math.random() * 5);
  if (target_X == 2 && target_Y == 2) {
    generateTargetPos();
  } else {
    setTarget(target_X, target_Y);
  }
}

// Sets the target on the randomly created coordinates.
function setTarget(x, y){
  var targetPosition = document.getElementById(x + "," + y);
  targetPosition.classList.add("target");
}

// Removes the target from the field.
function removeTarget(x, y){
  var targetPosition = document.getElementById(x + "," + y);
  targetPosition.classList.remove("target");
}
