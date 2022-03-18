const factoryFunc1 = var1 => {
    const prototypeCreator = () => {
        const method1 = () => console.log('hello');
        const method2 = () => console.log('hello');
        const method3 = () => console.log('hello');
        const method4 = () => console.log('hello');
        const method5 = () => console.log('hello');
        const method6 = () => console.log('hello');
        return {method1, method2, method3, method4, method5, method6}
    }
    const prototype = prototypeCreator();
    const sayVar = () => console.log(var1);
    const func1Method = () => console.log('factfunc 1 method');
    return {sayVar, func1Method, prototype};
}

const factoryFunc2 = var2 => {
    const prototype = factoryFunc1(var2);
    const func2Method = () => console.log('factfunc2 method');
    return Object.assign({}, prototype, {func2Method});
}

const newConstant = factoryFunc2('nat');
console.log(newConstant.prototype.method1());