//If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 

var x = 1; //birth month
var y = 9; //birth day

if ((x == 1 || y == 9) && (x == 31 || y == 31)){
  console.log("How did you know?");
} else {
  console.log("Just another day...");
}
