const log = i => console.log(i);
const dir = i => console.dir(i);

const div = document.querySelector('div');

log(div);
dir(div);

div.addEventListener('click', (e) => {
    log(e);
    e.target.style = 'transform: translate(50px)';
});