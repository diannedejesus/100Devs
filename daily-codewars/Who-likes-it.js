function likes(names) {
  // TODO
  var likeNames = names;
  var text = "";

  if (likeNames.length > 0) {
    if (likeNames.length == 1 ){
      text = likeNames[0] + " likes this";
    }else if (likeNames.length == 2 ){
      text = likeNames[0] + " and " + likeNames[1] + " like this";
    }else if (likeNames.length == 3 ){
      text = likeNames[0] + ", " + likeNames[1] + " and " + likeNames[2] + " like this";
    }else if (likeNames.length >= 4 ){
      text = likeNames[0] + ", " + likeNames[1] + " and " + (likeNames.length - 2) + " others like this";
    }
  }else{
      text = "no one likes this";
    }
  return text;
}
