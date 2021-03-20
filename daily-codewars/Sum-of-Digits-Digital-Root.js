function digital_root(n) {
  let summed = n.toString().split("").reduce((accum, val) => +accum + +val)
  return summed > 9 ? digital_root(summed) : +summed
}