/*
DNA Pairing 
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

Sarthak Sharma ssharm02

*/

function pairElement(str) {
  //Split each word of the string
  let splitArray = str.split("");
  //Create an empty array variable
  let emptyArray = [];
  //Cycle through the entire word
  for (let i = 0; i < splitArray.length; i++) {
    //if word is G, push G and C in to empty array etc
    if (splitArray[i] === "G") {
      emptyArray.push(["G", "C"]);
    } else if (splitArray[i] === "C") {
      emptyArray.push(["C", "G"]);
    } else if (splitArray[i] === "A") {
      emptyArray.push(["A", "T"]);
    } else {
      emptyArray.push(["T", "A"]);
    }
  }
  //Return the array which has DNA
  return emptyArray;
}
