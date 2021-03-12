function check(a, x) {
  return a.find(el => el === x) === 0 ? true : !!a.find(el => el === x)
}
