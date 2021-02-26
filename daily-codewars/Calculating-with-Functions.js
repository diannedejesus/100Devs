function zero(operationArray){
  const thisNumber = 0

  if(operationArray === undefined){
    return [thisNumber]
  }else if(operationArray[0] === "times"){
    return thisNumber * operationArray[1]
  }else if(operationArray[0] === "dividedby"){
    return Math.floor(thisNumber / operationArray[1])
  }else if(operationArray[0] === "plus"){
    return thisNumber + operationArray[1]
  }else if(operationArray[0] === "minus"){
    return thisNumber - operationArray[1]
  }else{
    return [thisNumber]
  }
}

function one(operationArray){
  const thisNumber = 1

  if(operationArray === undefined){
    return [thisNumber]
  }else if(operationArray[0] === "times"){
    return thisNumber * operationArray[1]
  }else if(operationArray[0] === "dividedby"){
    return Math.floor(thisNumber / operationArray[1])
  }else if(operationArray[0] === "plus"){
    return thisNumber + operationArray[1]
  }else if(operationArray[0] === "minus"){
    return thisNumber - operationArray[1]
  }else{
    return [thisNumber]
  }
}

function two(operationArray){
  const thisNumber = 2

  if(operationArray === undefined){
    return [thisNumber]
  }else if(operationArray[0] === "times"){
    return thisNumber * operationArray[1]
  }else if(operationArray[0] === "dividedby"){
    return Math.floor(thisNumber / operationArray[1])
  }else if(operationArray[0] === "plus"){
    return thisNumber + operationArray[1]
  }else if(operationArray[0] === "minus"){
    return thisNumber - operationArray[1]
  }else{
    return [thisNumber]
  }
}

function three(operationArray){
  const thisNumber = 3

  if(operationArray === undefined){
    return [thisNumber]
  }else if(operationArray[0] === "times"){
    return thisNumber * operationArray[1]
  }else if(operationArray[0] === "dividedby"){
    return Math.floor(thisNumber / operationArray[1])
  }else if(operationArray[0] === "plus"){
    return thisNumber + operationArray[1]
  }else if(operationArray[0] === "minus"){
    return thisNumber - operationArray[1]
  }else{
    return [thisNumber]
  }
}

function four(operationArray){
  const thisNumber = 4

  if(operationArray === undefined){
    return [thisNumber]
  }else if(operationArray[0] === "times"){
    return thisNumber * operationArray[1]
  }else if(operationArray[0] === "dividedby"){
    return Math.floor(thisNumber / operationArray[1])
  }else if(operationArray[0] === "plus"){
    return thisNumber + operationArray[1]
  }else if(operationArray[0] === "minus"){
    return thisNumber - operationArray[1]
  }else{
    return [thisNumber]
  }
}

function five(operationArray){
  const thisNumber = 5

  if(operationArray === undefined){
    return [thisNumber]
  }else if(operationArray[0] === "times"){
    return thisNumber * operationArray[1]
  }else if(operationArray[0] === "dividedby"){
    return Math.floor(thisNumber / operationArray[1])
  }else if(operationArray[0] === "plus"){
    return thisNumber + operationArray[1]
  }else if(operationArray[0] === "minus"){
    return thisNumber - operationArray[1]
  }else{
    return [thisNumber]
  }
}

function six(operationArray){
  const thisNumber = 6

  if(operationArray === undefined){
    return [thisNumber]
  }else if(operationArray[0] === "times"){
    return thisNumber * operationArray[1]
  }else if(operationArray[0] === "dividedby"){
    return Math.floor(thisNumber / operationArray[1])
  }else if(operationArray[0] === "plus"){
    return thisNumber + operationArray[1]
  }else if(operationArray[0] === "minus"){
    return thisNumber - operationArray[1]
  }else{
    return [thisNumber]
  }
}

function seven(operationArray){
  const thisNumber = 7

  if(operationArray === undefined){
    return [thisNumber]
  }else if(operationArray[0] === "times"){
    return thisNumber * operationArray[1]
  }else if(operationArray[0] === "dividedby"){
    return Math.floor(thisNumber / operationArray[1])
  }else if(operationArray[0] === "plus"){
    return thisNumber + operationArray[1]
  }else if(operationArray[0] === "minus"){
    return thisNumber - operationArray[1]
  }else{
    return [thisNumber]
  }
}

function eight(operationArray){
  const thisNumber = 8

  if(operationArray === undefined){
    return [thisNumber]
  }else if(operationArray[0] === "times"){
    return thisNumber * operationArray[1]
  }else if(operationArray[0] === "dividedby"){
    return Math.floor(thisNumber / operationArray[1])
  }else if(operationArray[0] === "plus"){
    return thisNumber + operationArray[1]
  }else if(operationArray[0] === "minus"){
    return thisNumber - operationArray[1]
  }else{
    return [thisNumber]
  }
}

function nine(operationArray){
  const thisNumber = 9

  if(operationArray === undefined){
    return [thisNumber]
  }else if(operationArray[0] === "times"){
    return thisNumber * operationArray[1]
  }else if(operationArray[0] === "dividedby"){
    return Math.floor(thisNumber / operationArray[1])
  }else if(operationArray[0] === "plus"){
    return thisNumber + operationArray[1]
  }else if(operationArray[0] === "minus"){
    return thisNumber - operationArray[1]
  }else{
    return [thisNumber]
  }
}

function dividedby(givenNumber){
  const operator = "dividedby"

  if(givenNumber[0] <= 9 && givenNumber[0] >= 0){
    return [operator, givenNumber[0]]
  }
}

function times(givenNumber){
  const operator = "times"

  if(givenNumber[0] <= 9 && givenNumber[0] >= 0){
    return [operator, givenNumber[0]]
  }
}

function plus(givenNumber){
  const operator = "plus"

  if(givenNumber[0] <= 9 && givenNumber[0] >= 0){
    return [operator, givenNumber[0]]
  }
}

function minus(givenNumber){
  const operator = "minus"

  if(givenNumber[0] <= 9 && givenNumber[0] >= 0){
    return [operator, givenNumber[0]]
  }
}

console.log(one(times(five())))
