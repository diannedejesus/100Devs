function solution(str, ending){
  var endingLength = ending.length;
  var getLastCharacters = str.substring(str.length - endingLength,str.length)
  var matchEnding = false

  if(ending == getLastCharacters){
    matchEnding = true;
  }
  return matchEnding;
}
