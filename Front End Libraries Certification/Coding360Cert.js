
/*
ES6 Destructuring 
*/
let exampleObject = {
    first: 'Sarthak',
    middle: 'S',
    last: 'Sharma',
    codingStatus: 'Learning'
};

let exampleArray = [2,3,4,5];

const {first, middle, last, codingStatus} = exampleObject;

const [second,third,forth, fifth] = exampleArray;
console.log(second);

console.log(exampleObject.codingStatus);

// USE
console.log(codingStatus)
console.log(last)

/*
OBject Literal Shorthand
*/
let first1 = 'Sarthak';
let middle1 = 'S';
let last1 = 'Sharma';
let codingStatus1 = 'Learning';

let ObjectTest = {
    first1,
    middle1,
    last1,
    codingStatus1
}
console.log(ObjectTest)

/*
For ...of loop
*/

const testArray1 = ['Hello', 'Bye', 'Hi', 'Yobo', 'Great'];

for (const word of testArray1) {
    console.log(word)
}

/*
Spread Operator

*/

const testArray2 = ['Hello', 'Sarthak', 'is', 'Great'];
const testArray3 = [1,2,3,4];
//get data straight out of array
testArray2.push(...testArray3);
console.log(testArray2);

/*
Rest Operator
*/


function add(...numbers) {
    console.log(numbers)
    for (const num of numbers) {
        console.log(num)
    }
}

add(2,3,45,6,73,5);
/*
Arrow Functions
*/


const exampleArray = [1,3,5,6,7,8,].map(function(element) {
    return element + 1;
});

console.log(exampleArray)

const exampleArray2 = [1,3,5,6,7,8,9].map((element, index) => {
if (true){
    return true;
}
return element + 1});
console.log(exampleArray2)

/*
Default Params
*/


function noParamsEntered(x, y = 10, z = 5) {

    console.log(x + y);
    return x + y;
}

noParamsEntered(5, 100);

/*
Arguments to array better to use the Rest operator
*/

function add() {
    
    let array = [];
    for (let i = 0; i < arguments.length; i++) {
        array.push(arguments[i]);
    }
    console.log(array)
    console.log(arguments);
    console.log(arguments[0])
    
}

add(5);
add(5, 6);
add(5,6,7)

/*
Closure
Dont create global variables
*/

let addEx = (function() {
    let total = 0;
    
    //return functions run after initial run
    return function(param1) {
        return total += param1;
    }
    })();
    
    console.log(addEx(5));
    console.log(addEx(10));
    console.log(addEx(15));
    
    // function add(num) {
    //     total += num;
    //     console.log(total);
    // }
    
    // add(1);
    // add(1);
    // add(1);