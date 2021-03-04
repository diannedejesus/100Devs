function spoonerize(words) {
  console.log(words)
   let array = words.split(" ")
   let letter = array[0][0]
   array[0] = array[0].replace(array[0][0], array[1][0])
   array[1] = array[1].replace(array[1][0], letter)
   return array.join(" ")
}
