// console.log(`Today I had:
//     - Breakfast
//     - Lunch
//     - Dinner`);

// const greet = name => `Hello, ${name}!`;
// console.log(greet('John')); // Hello, John!

// const sayHello = () => 'Hello, world!';
// console.log(sayHello()); // Hello, world!

// const add = (a, b) => a + b;
// console.log(add(2, 3)); // 5

//Single-Line Function Body (Implicit Return):
// const multiply = (x, y) => x * y;
// console.log(multiply(4, 5)); // 20

//Multi-Line Function Body
// const getFullName = (firstName, lastName) => {
//   const fullName = `${firstName} ${lastName}`;
//   return fullName;
// };
// console.log(getFullName("Hamza", "Aydin"));

//Returnin an Object
const createUser = (name, age) => ({ name, age });
console.log(createUser("Alice", 30));

//Arrow Functions in Callbacks
const numbers = [1, 2, 3, 4];
const squares = numbers.map((num) => num * num);
console.log(squares);
