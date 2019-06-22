/*
Confirm the Ending 
Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Sarthak Sharma ssharm02
*/
function confirmEnding(str, target) {

  // "Never give up and good luck will find you."
  // -- Falcor
  let targetLength = target.length;
  let strSub = str.slice(-targetLength);
  if (strSub === target) {
    return true;
  }
  return false;
}
  //return str.slice(-target.length)===target;

