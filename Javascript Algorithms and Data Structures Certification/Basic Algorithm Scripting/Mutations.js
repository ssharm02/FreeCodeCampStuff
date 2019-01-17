/* Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Coded by Sarthak Sharma ssharm02
*/
function mutation(arr) {
  //Create test Array - takes the 1st element of the arr and turns it to lower case
  let firstWord = arr[1].toLowerCase();
  //Create Target Array - takes the 0th element of the arr and turns it to lower case
  let target = arr[0].toLowerCase();
  //Use for loop to go through test string
  for (let i = 0; i < firstWord.length; i++) {
    //if the target doesn't contain all characters return flase otherwise return true
    if (target.indexOf(firstWord[i]) === -1) return false;
  }
  return true;
}

console.log(mutation(["hey", "HEY"]));
