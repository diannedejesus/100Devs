function stockList(listOfArt, listOfCat) {
  var qs = {};
  if (!listOfArt.length) return '';

  listOfArt.forEach(function(art) {
    var cat = art[0];
    console.log(cat)
    qs[cat] = (qs[cat] | 0) + +art.split(' ')[1];
  });
console.log(qs)
  return listOfCat.map(function(c) {
    return '(' + c + ' : ' + (qs[c] | 0) + ')';
  }).join(' - ');
}

b = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]
c = ["A", "B"]
res = "(A : 200) - (B : 1140)"
console.log(stockList(b, c))

b = ["CBART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"]
c = ["A", "B", "C", "W"]
res = "(A : 0) - (B : 114) - (C : 70) - (W : 0)"
console.log(stockList(b, c))
