function divCon(x){
  let stringNumbers = x.filter(x => typeof x === "string").reduce((a,b)=>parseInt(a)+parseInt(b),0)
  let numberNumbers = x.filter(x => typeof x === "number").reduce((a,b)=>a+b,0)
  return numberNumbers - stringNumbers
}
