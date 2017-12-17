/*
Missing letters 
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Sarthak Sharma ssharm02 

*/


function fearNotLetter(str) {
  //loop through the string one character at a time
  for (var i = 0; i < str.length; i++) {
    //charCodeAt return ASCI value of the characters
    //String.fromCharCode(65, 66, 67);  // returns "ABC"
    var code = str.charCodeAt(i);
    //increment to the next code
    if (code !== str.charCodeAt(0) + i) {
      
      return String.fromCharCode(code - 1);
    }
  }
  
  return undefined;
}
