function solution(number){
  let accumulator = 0

  for(let i=1; i < number; i++){
    if(i%3 === 0){
      accumulator += i
    }else if(i%5 === 0){
      accumulator += i
    }
  }
  return accumulator
}
