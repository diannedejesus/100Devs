function songDecoder(song){
  let newString = song.replace(/WUB/g, " ");
  newString = newString.replace(/  */g, " ");
  newString = newString.trim();

  return newString;
}
