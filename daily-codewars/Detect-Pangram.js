function isPangram(string){
  //...
 const alphabet = ["q","r","s","t","u","v","w","x","y","z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"];
 let isParadigm = true
 let letterFound;




  alphabet.forEach(function(currentValue){
    letterFound = string.toLowerCase().search(currentValue);
   if(letterFound < 0){
      isParadigm = false;
   }
 });
  return isParadigm;

  }
