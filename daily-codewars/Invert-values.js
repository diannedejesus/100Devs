function invert(array) {
  array.forEach((current, index, arr) => {arr[index] = current * -1});
  return array
}
