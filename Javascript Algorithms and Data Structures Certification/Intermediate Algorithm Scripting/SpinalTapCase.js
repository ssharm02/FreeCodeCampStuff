/*
Spinal Tap Case 
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes

Sarthak Sharma ssharm02

*/

function spinalCase(str) {
  //Create a variable for the white space and underscore
  let regex = /\s+|_+/g;

  //replace low upper case to low-space-upperccase
  str = str.replace(/([a-z])([A-Z])/g, "$1-$2");
  return str.replace(regex, "-").toLowerCase();
}

// This could also work
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."

  let newStr = "";
  let strArr = str.toLowerCase().split(" ");
  for (let i = 0; i < strArr.length; i++) {
    newStr += strArr[i] + "-";
  }
  newStr = newStr.substring(0, newStr.length - 1);
  // --David St. Hubbins
  return newStr;
  // --David St. Hubbins
}
