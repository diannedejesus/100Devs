function switcheroo(x){
  let arrayOfX = x.split("")

  arrayOfX.forEach(function(a, i, array){
  if(a === "a"){
      array[i] = "b"
    }else if(a === "b"){
      array[i] = "a"
    }
  });
  return arrayOfX.join("")
}


console.log(switcheroo('abc'))
console.log(switcheroo('aaabcccbaaa'));
console.log(switcheroo('ccccc'));
