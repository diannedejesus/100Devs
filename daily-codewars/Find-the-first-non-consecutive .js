function firstNonConsecutive (arr) {
  if(arr.length === 0){return null}

  for(i=1; i<arr.length; i++){
    if(arr[i-1]+1 !== arr[i]){
      return arr[i]
    }
  }
  return null
}


  const first = firstNonConsecutive([1,2,3,4,6,7,8])
  console.log(first)
