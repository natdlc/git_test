function testObj(fname, lname, age) {
    let obj = Object.create(testObj.proto);
    obj.firstName = fname;
    obj.lastName = lname;
    obj.ageCount = age;
    return obj;
}

testObj.proto = {
    getData: function(birthDate) {
        return `My name is ${this.firstName} ${this.lastName}, I was born on ${birthDate} and I am ${this.ageCount} years old.`;
    }
}

let o = testObj('nat', 'corpuz', 26);
console.log(o.getData(1995));