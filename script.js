let Module = 
  (function () {
    let privFunc = function () {
      console.log('I am private Function');
    }
    return {
      publicMethod: () => `I am public Method!`,
      callingPrivFunc: () => privFunc()
    }
  })();

console.log(Module.publicMethod());
Module.callingPrivFunc();