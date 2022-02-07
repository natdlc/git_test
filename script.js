const container = document.querySelector('.container');
const child2 = document.querySelector('.box-2');
let newDiv = document.createElement('div');
newDiv.classList.add('new');
newDiv.textContent = 'hello';
container.insertBefore(newDiv, child2);
container.removeChild(child2);