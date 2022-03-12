let func1 = function (e) {
    console.log(this);
    console.log(e);
}

let child2 = document.querySelector('.child2');
child2.addEventListener('click', func1);

let links = document.querySelectorAll('li');
for (let i = 0; i < links.length; i++) {
    (function () {
        console.log(this);
    }).call(links[i]);
}