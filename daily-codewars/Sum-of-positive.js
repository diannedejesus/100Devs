function positiveSum(arr) {
  return arr.filter(function(number){return number > 0}).reduce(function(accum, current) {return accum + current}, 0);
}

console.log(positiveSum([1,-2,3,4,5]))
console.log(positiveSum([]),0)
console.log(positiveSum([-1,-2,-3,-4,-5]))
console.log(positiveSum([-1,2,3,4,-5]))
