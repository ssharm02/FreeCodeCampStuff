/*
Remove all falsy values from an array.

Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Coded by Sarthak Sharma ssharm02
*/

//use .filter
function bouncer(arr) {
  //.filter function removes bad values
  let truths = arr.filter(function(filterTrue) {
    return filterTrue;
  });
  return truths;
}
