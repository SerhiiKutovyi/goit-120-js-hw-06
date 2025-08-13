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

// class Car {}
// const qwe = new Car();
// console.log(qwe);

// class User {
//   constructor() {
//     console.log('constructor call');
//   }
// }

// const mango = new User();
// console.log(mango);

// class User {
//   constructor(name, email) {
//     console.log(name, email);
//   }
// }

// const mango = new User('Mango', 'mango@mail.com');
// console.log(mango);

// class User {
//   constructor(name, email) {
//     // Ініціалізація властивостей екземпляра
//     this.name = name;
//     this.email = email;
//   }
// }

// const mango = new User('Mango', 'mango@mail.com');
// console.log(mango);

// const poly = new User('Poly', 'poly@mail.com');
// console.log(poly);

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }
// }

// console.log(new Car({ brand: 'Audi', model: 'Q3', price: 36000 }));
// console.log(new Car('BMW', 'X5', 58900));
// console.log(new Car('Nissan', 'Murano', 31700));

// class User {
//   constructor(params) {
//     this.name = params.name;
//     this.email = params.email;
//   }

//   getEmail() {
//     return this.email;
//   }

//   getName() {
//     return this.name;
//   }

//   changeEmail(newName) {
//     this.name = newName;
//   }
// }

// const mango = new User({
//   name: 'Mango',
//   email: 'mango@mail.com',
// });

// // mango.changeEmail('Kiwi');

// console.log(mango.getEmail(), mango.getName());

// class Car {
//   constructor(params) {
//     this.brand = params.brand;
//     this.model = params.model;
//     this.price = params.price;
//   }

//   getPrice() {
//     return this.price;
//   }

//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

class Car {
  #brand;
  #model;
  #price;

  constructor(params) {
    this.#brand = params.brand;
    this.#model = params.model;
    this.#price = params.price;
  }

  get brand() {
    return this.#brand;
  }

  set brand(newBrand) {
    this.#brand = newBrand;
  }

  get model() {
    return this.#model;
  }

  set model(newModel) {
    this.#model = newModel;
  }

  get price() {
    return this.#price;
  }

  set price(newPrice) {
    this.#price = newPrice;
  }
}
