const factoryFunc1 = var1 => {
    const sayVar = () => console.log(var1);
    const func1Method = () => console.log('factfunc 1 method');
    return {sayVar, func1Method};
}

const factoryFunc2 = var2 => {
    const prototype = factoryFunc1(var2);
    const func2Method = () => console.log('factfunc2 method');
    return Object.assign({}, prototype, {func2Method});
}

const newConstant = factoryFunc2('nat');
newConstant.func2Method();