function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
  var sheepPresent = 0;

  for(i=0; i < arrayOfSheep.length; i++){
    if(arrayOfSheep[i] !== null || arrayOfSheep[i] !== undefined){
      if(arrayOfSheep[i] == true){
        sheepPresent += 1;
      }
    }
  }
  return sheepPresent;
}
