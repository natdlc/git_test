<<<<<<< HEAD
const btn = document.querySelector('button');
const input = document.getElementById('name');
const updateStorage = e => {
  const nameVal = input.value;
  localStorage.setItem('nameVal', nameVal)
  console.log(localStorage);
  insertNameToDom(localStorage.getItem('nameVal'));
};

const insertNameToDom = nameValue => {
  const name = document.createElement('h1');
  name.innerText = nameValue;
  document.body.appendChild(name);
}

btn.addEventListener('click', updateStorage);

/* -=-=-=-=-=-=-=-=-=-=-=- */

console.log(localStorage);
=======
>>>>>>> cb9a6bdb2106e8767ccb9bb0e16797e0dfb0adae
