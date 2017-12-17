/*
Spinal Tap Case 
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes

Sarthak Sharma ssharm02

*/


function spinalCase(str) {
//Create a variable for the white space and underscore
  var regex = /\s+|_+/g;
  
  //replace low upper case to low-space-upperccase
  str = str.replace(/([a-z])([A-Z])/g, '$1-$2');
  return str.replace(regex, '-').toLowerCase();
}