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
  for (let i = 0; i < str.length; i += 2) {
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
  } catch (ex) {
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
const squareList = arr => {
  "use strict";
  // need to review chaining
  const squaredIntegers = arr
    .filter(number => number % 1 === 0)
    .map(elem => elem * elem);

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
  for (let i = 0; i < args.length; i++) {
    sum[0] += args[i];
  }
  return sum[0];
}
console.log(sum(1, 2, 3)); // 6

//better method for using spread operator
const sum = function sum(...args) {
  return args.reduce((a, b) => a + b, 0);
};
console.log(sum(1, 2, 3)); // 6

// Use the spread operator to evalue arrays in place
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);

//Use Destructuring Assignment to Assign variables from objects
function getLength(str) {
  "use strict";

  // change code below this line
  const { length: len } = str; // change this
  console.log(str);
  console.log(len);
  // change code above this line

  return len; // you must assign length to len in line
}

console.log(getLength("FreeCodeCamp"));

//Destructuring assignment to assign variables from nested objects
function getMaxOfTmrw(forecast) {
  "use strict";
  // change code below this line
  const {
    tomorrow: { max: maxOfTomorrow }
  } = forecast; // change this line
  console.log(maxOfTomorrow);
  // change code above this line
  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

//Use Destructing assignment to assign variables from arrays
let a = 8,
  b = 6;
(() => {
  "use strict";
  // change code below this line
  [b, a] = [a, b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";
  // change code below this line
  const { tomorrow: tempOfTomorrow } = avgTemperatures; // change this line
  // change code above this line
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name); // => should be 'carrot'

//Getters and Setters in JavaScript
function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(temperature) {
      this._temperature = temperature;
    }
    get temperature() {
      return (5 / 9) * (this._temperature - 32);
    }
    set temperature(tempCels) {
      this._temperature = (tempCels * 9) / 5 + 32;
    }
  }
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
