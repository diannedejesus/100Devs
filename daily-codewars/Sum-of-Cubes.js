function sumCubes(n){
  return [...Array(n+1).keys()].reduce((accum,val) => accum + (val**3))
}
