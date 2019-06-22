/*
Title Case a Sentence 
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Sarthak Sharma ssharm02
*/

function titleCase(str) {
  //turn the string to lower case
  let turnLower = str.toLowerCase();
  //split the string and put it in an array
  let stringArray = turnLower.split(' ');
  //for loops
  for (let i = 0; i < stringArray.length; i++) {
     stringArray[i] = stringArray[i].charAt(0).toUpperCase() + stringArray[i].slice(1);
  }
  
  
  return stringArray.join(' ');
}
