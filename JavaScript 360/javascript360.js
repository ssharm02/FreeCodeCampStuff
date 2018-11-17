//Array Concat property

let example1 = [1,2,3,4];
let example2 = [5,7,7,8];
let example3 = [true, false];
example1 = example1.concat(example2, example3);

console.log(example1)

//Array CopyWithIn

let example = [true, false, 1,2,3,4,5];

example = example.copyWithin(2, 0);
let y = example.copyWithin(-2);

console.log(example)

console.log(y)

//Array to Object using iterator
let example = [true, false, 1,2,3,4,5];

let iterator = example.entries();
for (let i = 0; i < example.length; i++) {
iterator.next().value;
console.log(iterator)
}
//Array Every function

let example = [1,2,3,4,5].every((element) => {
    return element > 1
});

console.log(example)
//Array Fill function 

let example = [1,2,3,4,5];
//value, index begin, end poit
example.fill(1,3,4);

console.log(example)

//Array Filter function 
let example = [1,2,3,4,5].filter((element)=> {
    return element < 4;
});

console.log(example)
//Array Find

let example = [1,2,3,4,5,6,7].find((element) => {
    return element > 4;
})

console.log(example);
//Array Find Index

let example = [1,2,3,4,5,6].findIndex((element)=> {
    return element > 3;
})

console.log(example)
//Array ForEach

let example = [1,2,3,4,5,6,7,8].forEach((element, index, array) => {
    console.log(element)
    console.log(index)
    console.log(array)
})

//Array Includes

let example = [1,2,3,4,5,6,7,8];

let y = example.includes(3, 4);

console.log(example)
console.log(y)

//Array indexOf

let example = [1,2,3,4,5,6,7,8];

let y = example.indexOf(8);

console.log(y)

//Array last index of

let example = [1,2,3,4,5,6,7,8,4];

let y = example.lastIndexOf(4)

console.log(y)

//Array Map
let example = [1,2,3,4,5,6,7,8,4];

let y = example.map((element, index, array)=> {
    return element + 2;

})

console.log(y)

//Array Map
let example = [1,2,3,4,5,6,7,8,4];

let y = example.map((element, index, array)=> {
    if (element > 3) {
        return element * 5;
    }
    return element + 2;

})

console.log(y)

let z = [1,2,3,4,5,6,7,8];

let x = z.reduce((a, b) =>  a + b, 0)
console.log(x)
 //Array Pop
let example = [1,2,3,4,5,6,5 ,7,8,4];

let x = example.pop();

console.log(x)
console.log(example);

//Array push
let example = [1,2,3,4,5,6,5 ,7,8,4];

let a = 10;

example.push(a,20,390);

console.log(example)

//Array Reduce
let example = [1,2,3,4,5,6,5 ,7,8,4].reduce((currentTotal, currentValue)=> {
    console.log(currentTotal);
    let target = 6;
    if (currentTotal === target) {
        console.log(currentTotal)
        console.log('index value is ', currentValue)
        return currentTotal + currentValue;
    }
    
    return currentTotal + currentValue;
    })
    
    //Array Shift - remove first value from array
let example = [1,2,3,4,5,6,5 ,7,8,4];

let example2 = example.shift();

console.log(example)

//Array Slice - copy array from certain elemt to certain element
let example = [1,2,3,4,5,6,5 ,7,8,4];

let example2 = example.slice(2,4);

console.log(example2)