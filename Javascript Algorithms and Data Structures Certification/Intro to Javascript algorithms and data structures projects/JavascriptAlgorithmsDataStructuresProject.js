//Palindrome Checker Introduction to Javascript algorithms and data structure

function palindrome(str) {
  let palindrome = '';
  let stringWithoutChars = str.replace(/\W/g, '').toLowerCase();
  let removeUnderscore = stringWithoutChars.replace(/\_/, '');
  
  
  console.log(stringWithoutChars);

  for (let i = removeUnderscore.length - 1; i >= 0; i--) {
    palindrome += removeUnderscore[i];
  }
  console.log(palindrome)
  if (removeUnderscore === palindrome) {
    return true;
  }
  return false;
}


//Validate Phone Numbers using regular expression
function telephoneCheck(str) {
  //Regular expressions ftw
   var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
  }
