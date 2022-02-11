function Cat(name, breed, color) {
    this.name = name;
    this.breed = breed;
    this.color = color;
    this.greeting = () => console.log(`Hello, said ${this.name} the ${this.breed}.`);
}

let cat1 = new Cat('kid', 'orange tabby', 'yellow white');