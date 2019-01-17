//Callback function 

function callback() {
    console.log("Coming from callback");
}

function higherOrder(fn) {
    console.log("About to call callback func");
    fn();
    console.log("Callback hasbeen invoked")
}

higherOrder(callback)

//callbacks used advance array methods
//browser events (click submit dom contented loaded)
//Ajax requests
//React development

function greet(name, formatter) {
    return `Hello ${formatter(name)}`;
}

function upperCaseName(name) {
    return name.toUpperCase();
}

console.log(greet("Sarthak", upperCaseName));

//For each
let array = [12, 10, 3, 1, 2, 5, 6];
let newArray = [];
array.forEach(function(number) {
    return newArray.push(number * 2);
})
console.log(newArray)


function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}
//find Index function 
array.findIndex(function(num, index, array) {
    console.log(index)
    console.log(array)
    console.log(num % 2 === 0);
    console.log(num === 10)
})

function findIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}

//Async code settimeout and setinterval
let timerId = setTimeout(() => {
    console.log('this function runs in 30 secs')
}, 30000);

setTimeout(function() {
    console.log('cancelling the first timeout', timerId)
    clearTimeout(timerId)
}, 2000);

function countDown(seconds) {
    let intervalId = setInterval(() => {
       seconds--;
       if (seconds > 0) {
           console.log("Timer: ", seconds);
       } else {
           console.log("Ring Ring Ring!!!");
           clearInterval(intervalId);
       }
    }, 1000);
}

console.log(countDown(10))



//Promises What is a promise

let promise1 = new Promise(function(resolve, reject) {
    resolve([1,2,3,4,5,7]);
});

promise1.then(function(arr) {
    console.log("Promise p1 resolved with data ", arr)
})

let p1 = new Promise(function(resolve, reject) {
    let num = Math.random();
    if (num < 0.5) {
        resolve(num);
    } else {
        reject(num);
    }
});

p1.then(function(result) {
    console.log("success: ", result);
}).catch(function(error) {
    console.log("error", error);
})

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    }, 4000);
});

promise2.then(function(data) {
    console.log('random int passed to resolve', data);
})

let promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    }, 3000);
});

promise.then(function(data) {
    console.log('random int passed to resolve: ', data);
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(Math.floor(Math.random() * 10));
        }, 300);
    });
}).then(function(data) {
    console.log("Second random int passed to resolve", data);
});

console.log(promise)

let promise = new Promise(function(resolve, reject) {
    resolve(5);
})

promise.then(function(data) {
    return data * 2;
}).then(function(data) {
    return data + 20;
}).then(function(data){
    console.log(data)
})

let promise = new Promise(function(resolve, reject) {
    resolve(5);
})

promise.then(function(data) {
    return data * 2;
}).then(function(data) {
    return data + 20;
}).then(function(data){
    console.log(data)
})

//
let john = {
    fullName: "Sarthak Sharma",
    bills: [124, 55, 67, 33, 33],
    calcTips: function() {
        this.tips = [];
        this.finalBill = [];

        for (let i = 0; i < this.bills.length; i++) {

            let percentage;
            let bill = this.bills[i];
            if (bill < 50) {
                percentage = .2;
            } else if (bill >= 50 && bill < 200) {
                percentage = .15;
            } else {
                percengae = .1;
            }
            this.tips[i] = bill * percentage;
            this.finalBill[i] = bill + bill * percentage;
        }
    }
}

john.calcTips();

console.log(john)