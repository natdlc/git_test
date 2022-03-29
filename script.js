const Person = (name, age) => {
    let _name = name;
    let _age = age;
    const getName = () => _name;
    const getAge = () => _age;

    const addLastName = lastName => {
        _name = `${_name} ${lastName}`;
        return _name;
    };

    const liveForXYears = X => {
        return _age += +X;
    }
    
    return {
        getName, 
        addLastName,
        getAge,
        liveForXYears,
    };
};

const nodeDeveloper = Person('nat', 26);

console.log(nodeDeveloper.getName());
console.log(nodeDeveloper.addLastName('corpuz'));
console.log(nodeDeveloper.getAge());
console.log(nodeDeveloper.liveForXYears(5));
console.log(nodeDeveloper.liveForXYears(5));
console.log(nodeDeveloper.liveForXYears(5));