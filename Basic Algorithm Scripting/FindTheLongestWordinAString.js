/*
Find the Longest Word in a String 
Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use Read-Search-Ask if you get stuck. Write your own code.

Sarthak Sharma ssharm02
*/

function findLongestWord(str) {
  //split the string and place it into array
  let splitArray = str.toString().split(",");
  //max word counts the length of the words inside the for loop
  let maxWord = 0;

  //for loop goes through the lenght of all the words in the array
  for (let i = 0; i < splitArray.length; i++) {
    //if the length of the word is higher than whatever value in the maxWord at the time
    if (splitArray[i].length > maxWord) {
      //set it to maxWord
      maxWord = splitArray[i].length;
    }
  }
  return maxWord;
}
