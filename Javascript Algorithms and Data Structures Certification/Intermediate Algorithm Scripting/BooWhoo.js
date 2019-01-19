/*
Boo who 
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

*/
function booWho(bool) {
  //checks if typeof returns boolean
  //typeof checks vlaue type
  if (typeof bool === "boolean") {
    return true;
  } else {
    //typeof is not boolean
    return false;
  }
}
