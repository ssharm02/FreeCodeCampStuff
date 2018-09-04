//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
  ];
  
  
  function lookUpProfile(firstName, prop) {
    let contact = contacts.find((x) => x.firstName === firstName);
    console.log(contact)
    return contact ? contact.hasOwnProperty(prop) ? contact[prop] : 'No such property' : 'No such contact';
  }
//   function lookUpProfile(firstName, prop) {    
//     var result = contacts.filter(x => x.firstName == firstName)

//     if (result.length === 0) {
//         return "No such contact";
//     } else {
//         return result[0][prop] ? result[0][prop] : "No such property";
//     }
// }
  // Change these values to test your function
  lookUpProfile("Akira", "likes");
  lookUpProfile("Bob", "number");

  let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
console.log(result)

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result2 = petRegex.test(petString);
console.log(result2)

let myString2 = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result3 = fccRegex.test(myString2);

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/i; // Change this line
let result4 = extractStr.match(codingRegex); // Change this line

"Hello, World!".match(/Hello/);
// Returns ["Hello"]
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
console.log(ourStr.match(ourRegex));
// Returns ["expressions"]

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result8 = twinkleStar.match(starRegex); // Change this line

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result7 = unRegex.test(exampleStr);

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result9 = quoteSample.match(vowelRegex); // Change this line
console.log(vowelRegex);

let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result88 = quoteSample.match(alphabetRegex); // Change this line

let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

//Negated 
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/ig; // Change this line
let result = quoteSample.match(myRegex); // Change this line

let difficultSpelling = "Mississippi";
let myRegex = /s+/ig; // Change this line
let result = difficultSpelling.match(myRegex);

//lazy matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<h1>?/; // Change this line
let result = text.match(myRegex);

// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /cc*/ig; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);

let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);

let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);

let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/gi; // Change this line
let result = quoteSample.match(alphabetRegexV2).length;

//match everything except letters and numbers
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/gi; // Change this line
let result = quoteSample.match(nonAlphabetRegex).length;

//match all numbers
let numString = "Your sandwich will be $5.00";
let numRegex = /\d/gi; // Change this line
let result = numString.match(numRegex).length;

//match all non numbers
let numString = "Your sandwich will be $5.00";
let noNumRegex = /\D/gi; // Change this line
let result = numString.match(noNumRegex).length;

//restrict usernames
let username = "JackOfAllTrades";
let userCheck = /\D./; // Change this line
let result = userCheck.test(username);

//white space
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result = sample.match(countWhiteSpace);

//non whitespace
let sample = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result = sample.match(countNonWhiteSpace);

let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6} no/; // Change this line
let result = ohRegex.test(ohStr);

//specify lower num of matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);

let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result = timRegex.test(timStr);
//all or none
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result = favRegex.test(favWord);

let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true

//positive lookahaead
let sampleWord = "astronaut";
let pwRegex = /(?=\w{5,})(?=\D*\d+)/g; // Change this line
let result = pwRegex.test(sampleWord);

//capture group
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);

//search and replace
let huhText = "This sandwich is good.";
let fixRegex = /good/; // Change this line
let replaceText = "okey-dokey"; // Change this line
let result = huhText.replace(fixRegex, replaceText);

//replace whitespace from start and end
let hello = "   Hello, World!  ";
let wsRegex = /\S.*\S/; // Change this line
let result = hello.match(wsRegex); // Change this line