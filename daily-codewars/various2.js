//Returning Strings
function greet(name){
  return `Hello, ${name} how are you doing today?`
}

//How good are you really?

function betterThanAverage(classPoints, yourPoints) {
  const averaged = (classPoints.reduce((accum, val) => accum + val) + yourPoints) / (classPoints.length++)

  return averaged > yourPoints ? false : true
}
