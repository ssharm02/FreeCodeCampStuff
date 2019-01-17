/*
Check for Palindromes 
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
Sarthak Sharma ssharm02
*/

function palindrome(str) {
  //remove garbage characters from string using regular expression and turn string to lower case
  let toLower = str.replace(/[\W_]/g, "").toLowerCase();
  //create an empty variable that will store the reversed string
  let stringArray = "";
  //value returns true or false
  let isPalindrome;
  //for loop starts with the last character of string and decrements to first character
  for (let i = toLower.length - 1; i >= 0; i--) {
    //characters in reverse are placed in the stringArray variable
    stringArray += toLower[i];
  }
  isPalindrome = toLower === stringArray ? true : false;

  return isPalindrome;
}

console.log(palindrome("eye"));