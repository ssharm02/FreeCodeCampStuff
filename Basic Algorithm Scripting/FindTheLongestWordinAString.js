/*
Find the Longest Word in a String 
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Sarthak Sharma ssharm02
*/

function findLongestWord(str) {
 
  //split the string and place it into array
  var splitArray = str.split(' ');
  //max word counts the length of the words inside the for loop
  var maxWord = 0;
  
  //for loop goes through the lenght of all the words in the array
  for (var i = 0; i < splitArray.length; i++) {
    //if the length of the word is higher than whatever value in the maxWord at the time
    if (splitArray[i].length > maxWord) {
      //set it to maxWord
      maxWord = splitArray[i].length;
    }
  }
  return maxWord;
  }
  
   
//   //split the word where there are spaces
//   var splitWord = str.split(' ');
//   //count the word with the longest length
//   var maxLength = 0;
  
//   for (var i = 0; i < splitWord.length; i++) {
//     if (splitWord[i].length > maxLength) {
//       maxLength = splitWord[i].length;
//     }
//   }
//   return maxLength;
// }
