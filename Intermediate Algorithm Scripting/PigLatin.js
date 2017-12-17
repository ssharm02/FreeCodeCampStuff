/*
Pig Latin 
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Sarthak Sharma ssharm02

*/

function translatePigLatin(str) {
  //Vowels array contains vowels
  var vowels  =['a','e','i','o','u'];
  //loop through the vowel array
  for (var i = 0; i < vowels.length;i++) {
    //if the first character of the string is vowel and matches the characters in the vowel array
    if(str.charAt(0)===vowels[i])
    {
      //return the string with "way" attached 
      return str += "way";
    } 
    //End of for loop
  }
    //If the first character is not a vowel return the string with "ay" attached  
    return str.replace( /([^aeiou]*)([aeiou]\w*)/ , "$2$1ay");
 
}