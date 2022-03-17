function factoryFunc (name) {
    return {name}
};

let newObj = factoryFunc('new Obj!');

newObj.greet = function () {
    console.log(this.name + ' is my name');
}

console.log(newObj);

newObj.greet();