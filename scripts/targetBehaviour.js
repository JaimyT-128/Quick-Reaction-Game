var target_X;
var target_Y;
function generateTargetPos(){
  target_X = Math.floor(Math.random() * 5);
  target_Y = Math.floor(Math.random() * 5);
  if (target_X == 2 && target_Y == 2) {
    generateTargetPos();
  } else {
    setTarget(target_X, target_Y);
  }
}

function setTarget(x, y){
  var targetPosition = document.getElementById(x + "," + y);
  targetPosition.classList.add("target");
}
function removeTarget(x, y){
  var targetPosition = document.getElementById(x + "," + y);
  targetPosition.classList.remove("target");
}
