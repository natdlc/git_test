const obj1 = {
    prop1: 'prop 1',
    propNest: {
        propNest1: `prop nest`
    }
}

const obj2 = {
    prop2: `prop 2`
}

const newObj = {...obj1, ...obj2};
console.log(newObj);