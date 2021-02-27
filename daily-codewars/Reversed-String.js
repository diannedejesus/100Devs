function solution(str){
  let tempArray = str.split("").reverse().join("")


  return tempArray
}

console.log(solution('world'))
console.log(solution('hello'))
console.log(solution(''))
console.log(solution('h'))
