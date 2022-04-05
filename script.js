const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');

const today = 'apr-05-2022';
const lists = {};
lists.sublists = {};

localStorage.setItem(today, JSON.stringify(lists));

p1.addEventListener('keyup', e => {
  const parsed = JSON.parse(localStorage.getItem(today));
  parsed.sublists.p1 = e.target.innerText;
  localStorage.setItem(today, JSON.stringify(parsed));
  console.log(localStorage.getItem(today));
})