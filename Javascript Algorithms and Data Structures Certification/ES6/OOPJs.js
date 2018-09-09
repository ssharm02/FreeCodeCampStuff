//Free Code camp Objects
let dog = {
    name: 'Buddy',
    numLegs: 4
  };

  //Access object properties using dot notation
  let dog = {
    name: "Spot",
    numLegs: 4
  };
  // Add your code below this line
  console.log(dog.name);
  console.log(dog.numLegs);

  //Create function on an object
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return 'This dog has 4 legs.'}
  };
  
  dog.sayLegs();

  //code reuse with this keyword
  let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
  };
  
  dog.sayLegs();

  //constructor function
  function dog() {
    this.name = 'Buddy';
    this.color = 'Blonde';
    this.numLegs = 4;
  }

  //use constructor to create objects
  function Dog() {
    this.name = "Rupert";
    this.color = "brown";
    this.numLegs = 4;
  }
  // Add your code below this line
  let hound = new Dog();

  //Constructor to recieve arguments
  function Dog(name, color) {
    this.name = name;
    this.color = color;
    this.numLegs = 4;
  }
  
  let terrier = new Dog('Daogo', 'brown');

  //verify constructor using instance]of 
  function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog('Daogo', 'brown');

//Verify constructor using instanceof
/* jshint expr: true */

function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
  }
  
  // Add your code below this line
  
  
  let myHouse = new House(4);
  myHouse instanceof House;

  //Understand own properties
  function Bird(name) {
    this.name = name;
    this.numLegs = 2;
  }
  
  let canary = new Bird("Tweety");
  let ownProps = [];
  // Add your code below this line
  
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }
  }
  //Use Prototype Properties to Reduce Duplicate Code
  //A better way is to use Bird’s prototype. 
  //The prototype is an object that is shared among ALL instances of Bird
  function Dog(name) {
    this.name = name;
  }
  
  
  Dog.prototype.numLegs = 4;
  // Add your code above this line
  let beagle = new Dog("Snoopy");

  //Iterate over all properties both OWN and Prototypes
  function Dog(name) {
    this.name = name;
  }
  
  Dog.prototype.numLegs = 4;
  
  let beagle = new Dog("Snoopy");
  
  let ownProps = [];
  let prototypeProps = [];
  
  // Add your code below this line 
  for (let property in beagle) {
    if (beagle.hasOwnProperty(property)) {
      ownProps.push(property);
    } else {
      prototypeProps.push(property);
    }
  }
  

  