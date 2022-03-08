const person1 = {
  name: "Hunter",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person1.name; // "Hunter"
person1.sayHello();

const person2 = {
  name: "Zuka",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person2.name; // "Zuka"
person2.sayHello();

const person3 = {
  name: "Daze",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person3.name; // "Daze"
person3.sayHello();

const person4 = {
  name: "Dear",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person4.name; // "Dear"
person4.sayHello();

const person5 = {
  name: "Cream",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person5.name; // "Cream"
person5.sayHello();

// function Person(name, city, age) {
//   this.name = name; // creating a property on the object called "name".
//   this.city = city;
//   this.age = age;
// }

// Person.prototype.sayHello = function () {
//   console.log(
//     `Hello, my name is ${this.name}, I am ${this.age} years old, and I live in ${this.city}`
//   );
// };

class Person {
  constructor(name, city, age) {
    // new Person calls this function
    this.name = name; // creating a property on the object called "name".
    this.city = city;
    this.age = age;
  }

  sayhello() {
    // this is a method
    console.log(
      `Hello, my name is ${this.name}, I am ${this.age} years old, and I live in ${this.city}`
    );
  }
}

const person6 = new Person("Raid", "Birmingham", 27); // creatings an instance of the class Person.
const person7 = new Person("Tie", "San Francisco", 18);

person6.sayHello();
person7.sayHello();

console.log(String.prototype);

// Inheritance

class Vehicle {
  constructor(manufacturer, type, numOfWheels) {
    this.manufacturer = manufacturer;
    this.type = type;
    this.numOfWheels = numOfWheels;
  }
  aboutVehicle() {
    console.log(
      `This is a ${this.manufacturer} ${this.type}. It has ${this.numOfWheels} wheels.`
    );
  }
}

const vehicle = new Vehicle("Honda", "Sedan", "4");
vehicle.aboutVehicle();

class Truck extends Vehicle {
  constructor(manufacturer, type, numOfWheels, numOfDoors, hasBed) {
    super(manufacturer, type, numOfWheels); // calls the parent constructor function, (on line 90)
    this.numOfDoors = numOfDoors;
    this.hasBed = hasBed;
  }

  aboutVehicle() {
    if (this.hasBed) {
      console.log(
        `This is a ${this.manufacturer} ${this.type}. It has ${this.numOfWheels} ${this.numOfWheels}, it has a truck bed and has ${this.numOfDoors} doors.`
      );
    }
  }
}

const truck = new Truck("Ford", "F150", 4, 4, true);
truck.aboutVehicle();
