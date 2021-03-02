function stringy(size) {
  let stringer = "";
  for(i=0; i<size; i++){
    stringer += (i%2 === 0 ? "1" : "0")
  }
  return stringer
}
