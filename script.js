// const proto = {
//     hello () {
//         return `Hello, my name is ${ this.name }`;
//     }
// };
  
// const greeter = name => Object.assign(Object.create(proto), {name});

// console.log(`greeter: `)
// console.log(greeter);
// console.log(typeof greeter);
// console.log(`\n`)

// console.log(`greeter('nat'): `)
// console.log(greeter('nat'));
// console.log(typeof greeter('nat'));
// console.log(`\n`)

// const george = greeter('george');

// console.log(`george: `)
// console.log(george)
// console.log(typeof george);
// console.log(`\n`)

// const msg = george.hello();

// console.log(msg);

const factoryFunc = name => {return {name}};

let newPerson = Object.create(factoryFunc('nat'));
console.log(newPerson);