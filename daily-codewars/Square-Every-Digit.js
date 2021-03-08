function squareDigits(num){
  return Number(Array.from(String(num), el => el**2).join(""))
}
