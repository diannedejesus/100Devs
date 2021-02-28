function getAverage(marks){
  //TODO : calculate the downwar rounded average of the marks array
  return Math.floor(marks.reduce((a,b)=> a+b)/marks.length)
}

console.log(getAverage([2,2,2,2]))
console.log(getAverage([1,2,3,4,5,]))
console.log(getAverage([1,1,1,1,1,1,1,2]))
