// let a = 'red';
// let b = 'blue';

// console.log(a);
// console.log(b);

// let temp = a;
// a = b;
// b = temp;

// console.log(a);
// console.log(b);


// let role = 'guest';

// switch (role) {
//     case 'guest':
//         console.log('Guest User');
//         break;
    
//     case 'moderator':
//         console.log('Moderator User');
//         break;
// }

// console.log('Hello World' + role);



// for-in
// const person = {
//     name: 'Mosh',
//     age: 30
// };

// for (let key in person)
//     console.log(key, person[key]);


// for-of
// const colors = ['red', 'green', 'blue'];

// for (let color of colors)
//     console.log(color);








// Object-oriented Programming (OOP)

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function () {
//         console.log('draw');
//     }
// };

// circle.draw();


// // Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw() {
//             console.log('Factory draw');
//         }
//     };
// }

// const myCircle = createCircle(1);
// myCircle.draw();

// // Constructure Function
// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('Constructor draw');
//     }
// }

// let circle = new Circle(5);
// circle.draw();



// let circle = {
//     radius: 1
// };

// circle = {}

// circle.color = 'yellow';
// circle.draw = function() {}

// // delete circle.color;
// // delete circle.draw;

// console.log(circle);



// function Circle(radius) {
//     this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// }

// const Circle1 = new Function('radius', `
// this.radius = radius;
//     this.draw = function() {
//         console.log('draw');
//     }
// `);

// const circle = new Circle(1);

// const another = new Circle();



// const another = {};
// for (let key in circle)
//     another[key] = circle[key];


// const another = Object.assign({}, circle);



// const another = { ...circle };


// let name = 'John';

// const text = 
// `Hi ${name},

// Thank you for your email.
// You have now made ${3 + 2} orders.

// Regards,
// Thomas`;

// console.log(text);






// const address = {
//     street: '24 Willow Grove',
//     city: 'Dundalk',
//     zipcode: 00000
// };


// function showAddress(address) {
//     for (let key in address)
//         console.log(key, address[key]);
// }

// showAddress(address);


// // Constructor
// function Address() {
//     this.street = '24 Willow Grove';
//     this.city = 'Dundalk';
//     this.zipcode = 00000;
// }

// const constructorAddress = new Address();

// // Factory
// function address() {
//     return {
//         street: '24 Willow Grove',
//         city: 'Dundalk',
//         zipcode: 00000
//     };
// }

// const factoryAddress = address();


// function showAddress(Address) {
//     for (let key in Address)
//         console.log(key, Address[key]);
// }

// showAddress(constructorAddress);


// function showAddress(address) {
//     for (let key in address)
//         console.log(key, address[key]);
// }

// showAddress(factoryAddress);




// let address1 = new Address('a', 'b', 'c');
// let address2 = new Address('a', 'b', 'c');


// function Address(street, city, zipCode) {
//     this.street = street;
//     this.city = city;
//     this.zipCode = zipCode;
// }

// function areEqual(address1, address2) {
//     for (let key in address1) {
//         if (address1[key] !== address2[key])
//             return false;
//     }

//     return true;

// }

// console.log(areEqual(address1, address2));


// function areSame(address1, address2) {
//     return address1 === address2
// }

// console.log(areSame(address1, address2));



// const blogPost = {
//     title: 'Harry Potter',
//     body: 'Wizzards and Shit',
//     author: 'J K Rowling',
//     views: 5,
//     comments: [
//         { author: 'Thomas Hanahoe', body: 'Is good shit' },
//         { author: 'Joe Blogs', body: 'Is bad shit' }
//     ],
//     isLive: true
// }

// function Comment(author, body) {
//     this.author = author;
//     this.body = body;
// }

// function Post(title, body, author, views, comments, isLive) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = views;
//     this.comments = comments;
//     this.isLive = isLive;
// }

// function Post(title, body, author) {
//     this.title = title;
//     this.body = body;
//     this.author = author;
//     this.views = 0;
//     this.comments = [];
//     this.isLive = false;
// }


// const comment1 = new Comment('Thomas Hanahoe', 'Is good shit');
// const comment2 = new Comment('Joe Bloggs', 'Is bad shit');

// let comments = [comment1, comment2];

// const post1 = new Post('Harry Potter', 'Wizzards and Shit', 'J K Rowling', 5, comments, false);
// const post2 = new Post('Lord Of The Rings', 'Elves and Shit', 'J R R Tolking');

// console.log(post1);
// console.log(post2);





// // Function Declaration
// function walk() {
//     console.log('walk');
// }

// // Named Function Expression
// const run = function run() {
//     console.log('run');
// };

// let move = run;
// run();
// move();



// function sum(a, b) {
//     return a + b;
// }

// console.log(sum());

// console.log(sum(1));

// console.log(sum(1, 2));

// console.log(sum(1, 2, 3, 4, 5));



// function sum(a, b) {
//     let total = 0;
//     for (let value of arguments)
//         total += value;
//     return total;
// }

// console.log(sum(1, 2, 3, 4, 5));




// function sum(discount, ...prices) {
//     const total = prices.reduce((a, b) => a + b);
//     return total * (1 - discount);
// }

// console.log(sum(0.1, 20, 30, 1));



// function interest(principal, rate = 3.5, years = 5) {
//     return principal * rate / 100 * years;
// }

// console.log(interest(10000))


// const person = {
//     firstName: 'Thomas',
//     secondName: 'Hanahoe',

    // get firstName() {
    //     return this.firstName;
    // },
//     get secondName() {
//         return this.secondName;
//     },

//     set setFirstName(firstName) {
//         this.firstName = firstName;
//     },

//     set setSecondName(secondName) {
//         this.secondName = secondName;
//     }
// };

// person.setFirstName = 'Thomas2';
// person.setSecondName = 'Hanahoe2';

// console.log(person);


// const person = {
//     firstName: 'Mosh',
//     lastName: 'Hamedani',
//     // get fullName() {
//     //     return `${person.firstName} ${person.lastName}`;
//     // },
//     // set fullName(value) {
//     //     const parts = value.split(' ');
//     //     this.firstName = parts[0];
//     //     this.lastName = parts[1];
//     // },

//     set setFirstName(value) {
//         this.firstName = value;
//     },

//     get getFirstName() {
//         return this.firstName;
//     },
// };

// // person.fullName = 'John Smith';
// person.setFirstName = 'Hello';

// console.log(person);
// console.log(person.getFirstName);






// function callbackFunction() {
//     console.log("This is called from within the callbackFunction");
// };

// function otherFunction(callbackFunction) {
//     console.log("This is called from within the otherFunction");
//     callbackFunction();
// }

// otherFunction(callbackFunction);



// function otherFunction(function1, number) {
//     console.log("This is called from within the otherFunction");
//     function1();
//     console.log(`The value of number: ${number}`);
// }

// otherFunction(function () {
//     console.log("This is called from within the callbackFunction");
// }, 3000);



// function otherFunction(function1, number) {
//     console.log("This is called from within the otherFunction");
//     function1();
//     console.log(`The value of number: ${number}`);
// }

// otherFunction(() => {
//     console.log(`This is called from within the callbackFunction`);
// }, 3000);





// const courses = [
//     { id: 1, name: 'a'},
//     { id: 2, name: 'b'}
// ]

// const course = courses.find(course => course.name === 'a');

// console.log(course);


// const person = {
//     firstName: 'Thomas',
//     lastName: 'Hanahoe',
//     set fullName(value) {
//         if (typeof value !== 'string')
//             throw new Error("value given was not of type string");

//         const parts = value.split(' ');
//         this.firstName = parts[0];
//         this.lastName = parts[1];
//     }
// };

// try {
//     person.fullName = null;
// }
// catch (e) {
//     console.log(e);
//     window.alert(`${e}`);
// }

// try {
//     person.fullName = "Joe Bloggs";
// }
// catch (e) {
//     console.log(e);
//     window.alert(`${e}`);
// }

// console.log(person);




// function sum(...rest) {
//     let total = 0;

//     console.log(rest);

//     for (let arg of rest)
//         console.log(`array element: ${arg}`);

//     // if (Array.isArray(rest)) {
//     //     console.log("array");
//     //     for (let arg of rest)
//     //         total = total + arg;
//     // }
//     // else {
//     //     console.log("Is hit");
//     //     for (let arg of rest)
//     //         total += arg;
//     // }
    
//     return total;
// }


// // console.log(sum(1, 2, 3, 4, 5));

// let array = [1, 2, 3, 4, 5];
// console.log(sum(array));



// let circle = {
//     radius: 1, // read and write
//     area: 3, // read only
//     set setRadius(input) {
//         this.radius = input;
//     },
//     get getRadius() { return this.radius},
//     get getArea() { return this.area},
//     // setRadius: function (input) {
//     //     this.radius = input;
//     // }
// };


// console.log(circle.getRadius);
// console.log(circle.getArea);

// console.log(circle.setRadius = 7);
// console.log(circle.getRadius);



// function User(name, age) {
//     this.name = name;
//     this.age = age;
// };


// const U1 = new User("Thomas", 27);
// const U2 = new User("Bob", 22);



// function Circle(radius) {
//     // Instance members
//     this.radius = radius;
// }

// // Prototype memb
// Circle.prototype.draw = function () {
//     console.log('draw');
// }

// const c1 = new Circle(1);
// const c1 = new Circle(1);

// Circle.prototype.toString = function() {
//     return 'Circle with radius ' + this.radius;
// }



// function Shape(color) {
//     this.color = color;
// }

// Shape.prototype.duplicate = function() {
//     console.log('duplicate');
// }

// function Circle(radius, color) {
//     Shape.call(this, color);

//     this.radius = radius;
// }

// Circle.prototype = Object.create(Shape.prototype);
// Circle.prototype.constructor = Circle;

// Circle.prototype.draw = function() {
//     console.log('draw');
// }

// const s = new Shape();
// const c = new Circle(1, 'red');



// class Circle {
//     constructor(radius) {
//         this.radius = radius;
//     }

//     // Instance Method
//     draw() {
//     }

//     // Static Method
//     static parse(str) {
//         const radius = JSON.parse(str).radius;
//         return new Circle(radius);
//     }
// }

// const circle = Circle.parse('{ "radius": 1 }');
// console.log(circle);



// 'use strict';

// const Circle = function() {
//     this.draw = function() { console.log(this); }
// };

// const c = new Circle();

// //Method Call
// c.draw();

// const draw = c.draw;

// // Function Call
// draw();



class Circle {
    draw() {
        console.log(this);
    }
}

const c = new Circle();
const draw = c.draw;
draw();











