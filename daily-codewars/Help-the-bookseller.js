function stockList(listOfArt, listOfCat){
  let result=""
  let summed=0

  if(listOfArt.length === 0){return ""}

  for(i=0; i<listOfCat.length; i++){
    letterList = listOfArt.filter(art => art.charAt(0) === listOfCat[i])
    summed=0
    if(letterList){
      letterList.forEach(curr => summed += parseInt(curr.split(" ").filter((curr,i)=>i === 1)))
      result += `(${listOfCat[i]} : ${summed})`
      result += i<listOfCat.length-1 ? " - " : ""
    }
   }
   return result
}

b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]
res = "(A : 200) - (B : 1140)"
console.log(stockList(b, c))

b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
c = ["A", "B", "C", "W"]
res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
console.log(stockList(b, c))
