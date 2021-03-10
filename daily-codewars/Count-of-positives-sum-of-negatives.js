let arrayTest = []

function countPositivesSumNegatives(input) {
  const resultValues = []

  if(!input || !input.length){return []}

  resultValues.push(input.filter(number => number > 0).length)
  resultValues.push(input.reduce((accum, val) => val < 0 ? accum + val : accum,0))

  return resultValues;

}

console.log(thistest(arrayTest))
