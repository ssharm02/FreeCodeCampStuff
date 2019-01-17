/*
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
Sarthak Sharma ssharm02

*/
//Function rot13 takes in a string parameter
function rot13(str) {
  // LBH QVQ VG!
  //Set number variable shifting characters
  let num = 0;
  //New variable cyphyerString will hold the new shifted cipher strings
  let cypherString = "";
  //For loop goes through the string
  for (let i = 0; i < str.length; i++) {
    //ASCI value for the first character of the string
    num = str.charCodeAt(i);

    if (num >= 65) {
      //if ASCI value of the character is >= 65 shift by 13 characters
      num += 13;
    }
    //if less then 90 shift back by 26
    if (num > 90) {
      num -= 26;
    }
    //Put the new shifted cypher string in the cypherString Variable
    cypherString += String.fromCharCode(num);
  }
  return cypherString;
}

console.log(rot13("abc"));
