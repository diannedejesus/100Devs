function warnTheSheep(queue) {
  const wolfIndex = queue.findIndex((wolf => wolf === "wolf"))

  return queue.length-1 === wolfIndex ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${queue.length - wolfIndex-1}! You are about to be eaten by a wolf!`
}


console.log(warnTheSheep(["sheep", "sheep", "sheep", "sheep", "sheep", "wolf", "sheep", "sheep"]))
console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]))
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]))
console.log(warnTheSheep(["sheep", "wolf", "sheep"]))
console.log(warnTheSheep(["sheep", "sheep", "wolf"]))
