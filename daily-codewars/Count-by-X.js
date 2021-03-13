function countBy(x, n) {
  let bs = 0
  return Array.from({length: n}, (v, val) => bs+=x)
}

console.log(countBy(1,5), [1,2,3,4,5])
console.log(countBy(2,5), [2,4,6,8,10])
