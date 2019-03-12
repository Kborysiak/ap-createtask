var i = 0;
var machineStatus = 0;
var stopGame;
var numMachines = 0;
function countInsert(){
  document.count.display.value++
  stopGame = false;
}

function reset(){
  document.count.display.value = 0;
  i=0;
  stopGame = true;
  machineStatus = 0;
  numMachines = 0;
}
function buyMachine(){
  if(document.count.display.value>=25){
    document.count.display.value = document.count.display.value - 25
  //  document.count.display.value = i;
    console.log(i)
    numMachines++
    machineStatus=numMachines
  }
}
setInterval(function(){
  if(machineStatus >= 1 && stopGame == false){
    let stored = Number(document.count.display.value)
    document.count.display.value ="";
    console.log(typeof stored)
    document.count.display.value = (stored + (machineStatus * 1));
  }
}, 1000)
function machineStat(){
  if(machineStatus >= 1){

  }
}
