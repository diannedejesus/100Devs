//Keep Hydrated!

function litres(time) {
  return Math.floor(time*.5)
}

//Remove String Spaces
function noSpace(x){
  return x.split(" ").join("")
}

//Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
   return args.reduce((a,c) => a < c ? a : c )
  }
}

//Remove First and Last Character
function removeChar(str){
 return str.slice(1,str.length-1)
};

//Is n divisible by x and y?
function isDivisible(n, x, y) {
  return (n % x === 0 && n % y === 0) ? true : false
}

//String repeat
function repeatStr (n, s) {
  let str = ""

  for(let i=0; i < n; i++){
   str += s
  }

  return str;
}
