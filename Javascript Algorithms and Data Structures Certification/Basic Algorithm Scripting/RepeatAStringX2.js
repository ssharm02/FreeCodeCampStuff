/*
epeat a string repeat a string 
Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.
Sarthak Sharma ssharm02
*/
function repeatStringNumTimes(str, num) {
  //Create a new string variable and initalize it
  let string1 = "";
  //if num of argumentsi is 0 or less than 0 return empty string
  if (num <= 0) {
    return "";
  }
  //while the number of arguments is greater than 0
  while (num > 0) {
    //multiply the string
    string1 += str;
    //subtract the argument number
    num--;
  }
  //return the duplicated string
  return string1;
}

console.log(repeatStringNumTimes("sarthak", 2));


function repeatStringNumTimes(str, num) {
  // repeat after me
  const emptyStr = '';
  let newStr = '';
  if (num <= 0) {
    return emptyStr;
  }
  for (let i = 1; i <= num; i++) {
    console.log(i)
    newStr += str;
  }
  //  while (num > 1) {
  //    newStr += str;
  //    num--;
  //  }
  return newStr;
}

console.log(repeatStringNumTimes("abc", 3));