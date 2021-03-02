function expandedForm(num) {
  let tester = []

  Array.from(String(num)).forEach((char, index) =>  tester.push(parseInt(char) * Math.pow(10, num.toString().length - 1 - index)))
  return tester.filter(numb => numb != 0).join(" + ")
}
