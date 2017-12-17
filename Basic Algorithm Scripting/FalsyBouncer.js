/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Coded by Sarthak Sharma ssharm02
*/

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  var falseVals = ["false", "null", 0, "", "undefined", "NaN"];
  var stringArr = arr.split(' ');
  for (var i = 0; i < arr.length; i++) {
   if (stringArr[i] == falseVals) {}
  }
  return arr;
}