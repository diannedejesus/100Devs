function trouble(x, t){
  const newArray = [];
  let currentValue = x[0];
  newArray.push(currentValue)

  for(i=1; i<x.length; i++){
    let sum = currentValue + x[i]
    if(sum !== t){
      newArray.push(x[i]);
      currentValue = x[i];
    }
  }
  return newArray;
}
