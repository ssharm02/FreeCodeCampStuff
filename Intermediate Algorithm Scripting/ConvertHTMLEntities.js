/*
Convert HTML Entities 
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities

Sarthak Sharma ssharm02
*/

function convertHTML(str) {
  // &colon;&rpar;
  //regular expressions is used to replace HTML elements using the str.replace
str = str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,"&apos;");
  return str;
}
