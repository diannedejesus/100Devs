function points(games) {
  let x = 0
  
  games.forEach(el => {
    +el[0] > +el[2] ? x+=3 : 
    +el[0] === +el[2] ? x++ : 0
  })

  return x
}