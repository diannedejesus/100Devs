function abbrevName(name){
  return name.split(" ").map(element => element = element[0]).join(".").toUpperCase()
}
console.log(abbrevName("Sam Harris"));
console.log(abbrevName("Patrick Feenan"));
console.log(abbrevName("Evan Cole"));
console.log(abbrevName("P Favuzzi"));
console.log(abbrevName("David Mendieta"));
