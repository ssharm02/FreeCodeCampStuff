/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one 
or more arguments. Remove all elements from the initial array that are of the same value as these arguments.


Coded by Sarthak Sharma ssharm02

*/

function destroyer(arr) {
 //empty array to hold arguments
  var argArray = [];
  for (var i = 0; i<arguments.length;i++) {
    argArray.push(arguments[i]);
    //argArray now contains a list of arguments
  }
  function test(value) {
    if(argArray.includes(value)) {
      return false;
    }
    else {
      return true;
    }
    }//end of test function
  var filtered = arr.filter(test);
  
return filtered;
}