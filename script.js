const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

//red paragraph
const redPara = document.createElement('p');
redPara.style.color = 'red';
redPara.textContent = 'Hey I\'m red!';
container.appendChild(redPara);

//blue h3
const blueH3 = document.createElement('h3');
blueH3.style.color = 'blue';
blueH3.textContent = 'I\'m a blue h3!';
container.appendChild(blueH3);

//div black border
const divBlack = document.createElement('div');
divBlack.style.border = '1px solid black';
divBlack.style.backgroundColor = 'lightpink';
divBlack.classList.add('black-div');
container.appendChild(divBlack);

//h1 inside div black
const h1Child = document.createElement('h1');
h1Child.textContent = 'I\'m in a div';
divBlack.appendChild(h1Child);

//p inside div black
const pChild = document.createElement('p');
pChild.textContent = 'ME TOO!';
divBlack.appendChild(pChild);

//button
const btn = document.createElement('button');
btn.textContent = 'click me';
btn.onclick = clickers;
container.appendChild(btn);

function clickers(e) {
    e.target.style.background = 'blue';
}

//test
