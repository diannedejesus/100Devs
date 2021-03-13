String.prototype.toJadenCase = function (x) {
  return this.split(" ").map(el => el[0].toUpperCase() + el.slice(1, el.legnth)).join(" ")
};


var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");
