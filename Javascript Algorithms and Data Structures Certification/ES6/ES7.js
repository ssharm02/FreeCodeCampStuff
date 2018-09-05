//ES6 

//let vs var
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();


// let scope
function checkScope() {
    "use strict";
      let i = "function scope";
      if (true) {
        let i = "block scope";
        console.log("Block scope i is: ", i);
      }
      console.log("Function scope i is: ", i);
      return i;
    }

    function printManyTimes(str) {
        "use strict";
      
        // change code below this line
      
        const SENTENCE = str + " is cool!";
        for(let i = 0; i < str.length; i+=2) {
          console.log(SENTENCE);
        }
      
        // change code above this line
      
      }
      printManyTimes("freeCodeCamp");

      //mutate const array
      const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line
s[0] = 2;
s[1] = 5;
s[2] = 7;
  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();

//prevent object mutation -> freeze object so it doesnt mutate
function freezeObj() {
    "use strict";
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // change code below this line
  Object.freeze(MATH_CONSTANTS);
  
    // change code above this line
    try {
      MATH_CONSTANTS.PI = 99;
    } catch( ex ) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  //arrow functions -> annon functions
  const magic = () => {
    "use strict";
    return new Date();
  };

  //passing arguments into arrow functions
  const myConcat = (arr1, arr2) => {
    "use strict";
    return arr1.concat(arr2);
  };
  // test your code
  console.log(myConcat([1, 2], [3, 4, 5]));


  //higher order arrow functions
  const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // need to review chaining
  const squaredIntegers = arr.filter((number) => number % 1 === 0).map((elem) => elem * elem);
  
  console.log(squaredIntegers);

  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

//default parameters for functions
const increment = (function() {
    "use strict";
    return function increment(number, value = 1) {
      return number + value;
    };
  })();
  console.log(increment(5, 2)); // returns 7
  console.log(increment(5)); // returns NaN

  function sum(...args) {
    const sum = [];
    sum[0] = 0;
    for(let i = 0; i < args.length; i++){
      sum[0] += args[i]; 
    }
    return sum[0];
  };
console.log(sum(1, 2, 3)); // 6

//better method for using spread operator
const sum = function sum(...args ) {
    return args.reduce((a, b) => a + b, 0);
  };
console.log(sum(1, 2, 3)); // 6

// Use the spread operator to evalue arrays in place
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);