function findUniq(arr) {
  var numberHolder = null;
  var booleanValue = false;
  var currentTester = 0;

   if(arr[0] !== arr[1] && arr[0] !== arr[2]){
    return arr[0];
   }
  for(i=1; i < arr.length; i++){
      if(arr[currentTester] !== arr[i] && booleanValue == false){
        numberHolder = arr[currentTester];
        if(numberHolder !== null){
          numberHolder = arr[i];
        }
      }else if(arr[currentTester] == arr[i]){
        currentTester++;
        if(numberHolder !== null){
          booleanValue = true;
        }
      }
   }
  return numberHolder;
}
