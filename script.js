let obj1 = {
  prop1 () {
    return `function from prop1 in obj1`;
  },
  prop2: `string from prop2 in obj1`,
  prop3: true,
}

let obj2 = {
  prop4 () {
    return `Function from prop4 in obj2`
  },
  prop5: `string from prop5 in obj2`,
  prop6: false,
}

const returnedObj = Object.assign(Object.create(obj1), obj2)

console.log(`Returned OBJ:`)
console.log(returnedObj);
console.log(`\nobj1: `);
console.log(obj1);
console.log(`\nobj2: `);
console.log(obj2);

console.log(returnedObj.prop1());

// const proto = {
//   hello () {
//     return `Hello, my name is ${ this.name }`;
//   }
// };

// const greeter = (name) => Object.assign(Object.create(proto), {
//   name
// });

// const george = greeter('george');
// console.log(george);

// const msg = george.hello();

// console.log(msg);