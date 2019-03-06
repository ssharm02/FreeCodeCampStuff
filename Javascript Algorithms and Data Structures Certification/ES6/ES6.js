var requests = [
  { url: "/photos", status: "complete" },
  { url: "/albums", status: "pending" },
  { url: "/users", status: "failed" }
];

var inProgress = requests.some(status => status.status === "pending");

var users = [
  { id: 21, hasSubmitted: true },
  { id: 62, hasSubmitted: false },
  { id: 4, hasSubmitted: true }
];

var hasSubmitted = users.every(user => user.hasSubmitted === true);

var trips = [{ distance: 34 }, { distance: 12 }, { distance: 1 }];

var totalDistance;

totalDistance = trips.reduce(function(x, y) {
  return x + y.distance;
}, 0);

var desks = [
  { type: "sitting" },

  { type: "standing" },

  { type: "sitting" },

  { type: "sitting" },

  { type: "standing" }
];

var deskTypes = desks.reduce(
  function(total, desk) {
    if (desk.type === "sitting") {
      ++total.sitting;
    }

    if (desk.type === "standing") {
      ++total.standing;
    }

    return total;
  },
  { sitting: 0, standing: 0 }
);

var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin;

admin = users.find(findAdmin => {
  return findAdmin.admin === true;
});

var accounts = [{ balance: -10 }, { balance: 12 }, { balance: 0 }];

var account;

account = accounts.find(bal => bal.balance === 12);

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers;

filteredNumbers = numbers.filter(nums => {
  return nums > 50;
});

var users = [
  { id: 1, admin: true },
  { id: 2, admin: false },
  { id: 3, admin: false },
  { id: 4, admin: false },
  { id: 5, admin: true }
];

var filteredUsers;

filteredUsers = users.filter(adminsOnly => {
  return adminsOnly.admin === true;
});
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 }
];

var speeds;

var speeds = trips.map(function(e) {
  return e.distance / e.time;
});

function handlePosts() {
  var posts = [
    { id: 23, title: "Daily JS News" },
    { id: 52, title: "Code Refactor City" },
    { id: 105, title: "The Brightest Ruby" }
  ];
  posts.forEach(function(post) {
    savePost(post);
  });
}

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];
var areas = [];
images.forEach(function(image) {
  areas.push(image.height * image.width);
});

const fibonacci = n => {
  if (n < 3) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};

const numbers = [1, 2, 3, 4, 5, 6];

let x = numbers.map(number => number * 2);
console.log(x);

//ES6 Classes
class Car {
  constructor({ title }) {
    this.title = title;
  }
  drive() {
    return "vrooom";
  }
}

const car = new Car({ title: "Toyota" }); //instance of car

class Toyota extends Car {
  constructor(options) {
    super(options); //calling car constructor
    this.color = options.color;
  }
  honk() {
    return "beep";
  }
}
const toyota = new Toyota({ color: "red", title: "daily driver" });
toyota.honk();

class Monster {
  constructor({ name }) {
    this.health = 100;
    this.name = name;
  }
}
class Snake extends Monster {
  constructor(options) {
    super(options);
  }

  bite(another) {
    return (another.health -= 10);
  }
}
const monster = new Monster({ name: "Buraot" });

promise = new Promise((resolve, reject) => {
  resolve(); //run the promise else reject it
});

promise = new Promise((resolve, reject) => {
  reject(); //run the promise else reject it
});

promise
  .then(() => {
    console.log("finally finished");
  })
  .then(() => {
    console.log("i am ran");
  })
  .catch(() => console.log("uhoh"));
