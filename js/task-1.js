// const makeChangeColor = function () {
//   const changeColor = function (color) {
//     console.log('changeColor --> this', this);
//     this.color = color;
//   };
//   return changeColor;
// };

// const updateColor = makeChangeColor();

// const hat = {
//   value: 0,
//   increment(value) {
//     this.value += value;
//   },

//   decrement(value) {
//     this.value -= value;
//   },
// };

// const fun = function (value, callback) {
//   callback(value);
// };

// fun(10, hat.increment.bind(hat));
// console.log(hat);

// const parent = {
//   name: 'Stacey',
//   surname: 'Moore',
//   age: 54,
//   heritage: 'Irish',
// };

// const child = Object.create(parent);
// child.name = 'Jason';
// child.age = 27;

// console.log(child);

// const protoName = parent.isPrototypeOf(child);
// console.log(protoName);

// const animal = {
//   legs: 4,
//   name: 'Kiv',
// };
// const dog = Object.create(animal);
// dog.name = 'Mango';

// for (const key in dog) {
//   if (dog.hasOwnProperty(key)) {
//     console.log(key);
//   }
// }

// const animal = { legs: 4 };
// const dog = Object.create(animal);
// dog.name = 'Mango';
// dog.age = 27;

// console.log(Object.keys(dog).map(qwe => qwe.age));

// console.log(Object.keys(dog)); // ["name"]
// console.log(Object.values(dog)); // ["Mango"]

// for (const key of Object.keys(dog)) {
//   console.log(key);
// }

// const objC = { c: 'objC prop' };

// const objB = Object.create(objC);
// objB.b = 'objB prop';

// const objA = Object.create(objB);
// objA.a = 'objA prop';

// console.log(objA); // { a: "objA prop", [[Prototype]]: objB }
// console.log(objB); // { b: "objB prop", [[Prototype]]: objC }
// console.log(objC); // { c: "objC prop", [[Prototype]]: Object }
