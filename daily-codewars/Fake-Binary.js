function fakeBin(x){
return Array.from(x.toString()).map(char => parseInt(char) < 5 ? "0" : "1").join("")
}
