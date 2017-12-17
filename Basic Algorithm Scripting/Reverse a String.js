/*
Reverse a String 
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
Sarthak Sharma ssharm02
*/


function reverseString(str) {
    ////Easy method to reverse a string, using javascript methods
  //   var splitArray = str.split('');
  //   var reverseIt = splitArray.reverse();
  //   var joinIt = reverseIt.join('');
    
    
     var newString = "";
      //start from the last character in string and go till the first character
     for (var i = str.length - 1; i >= 0; i--) {
       //join all characters and form the new string
      newString += str[i];
     }
    //return the new string
     return newString;
  }
  