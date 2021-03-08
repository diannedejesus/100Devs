function digitize(n) {
  return n.toString().split("").reverse().map( element => parseInt(element))
}
