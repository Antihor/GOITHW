// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

// const { default: iziToast } = require('izitoast');

// const productsRef = document.querySelector('#ingredients');
// let arr = [];
// ingredients.forEach(elt => {
//   const item = document.createElement('li');
//   item.classList.add('item');
//   item.textContent = `${elt}`;
//   arr.push(item);
// });
// productsRef.append(...arr);
// const markup = ingredients.map(
//   ingredient => `<li class="item">${ingredient}</li>`
// );

// productsRef.innerHTML = markup.join('');

// const images = [
//   {
//     url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
//     alt: 'White and Black Long Fur Cat',
//   },
//   {
//     url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
//   },
//   {
//     url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
//     alt: 'Group of Horses Running',
//   },
// ];

// const galleryRef = document.querySelector('.gallery');

// const markup = images
//   .map(({ url, alt }) => {
//     return `<li><img src="${url}" alt="${alt}" width="320" /></li>`;
//   })
//   .join('');

// galleryRef.insertAdjacentHTML('afterbegin', markup);

// const counterRef = document.querySelector('#value');
// const decrementBtn = document.querySelector('[data-action="decrement"]');
// const incrementBtn = document.querySelector('[data-action="increment"]');

// let counterValue = 0;

// decrementBtn.addEventListener('click', () => {
//   counterValue -= 1;
//   counterRef.textContent = counterValue;
// });
// incrementBtn.addEventListener('click', () => {
//   counterValue += 1;
//   counterRef.textContent = counterValue;
// });

// const inputRef = document.querySelector('#name-input');
// const outputRef = document.querySelector('#name-output');

// inputRef.addEventListener('input', onInput);

// function onInput(evt) {
//   evt.currentTarget.value !== ''
//     ? (outputRef.textContent = evt.currentTarget.value)
//     : (outputRef.textContent = 'Anonymous');
// }

// const inputRef = document.querySelector('#validation-input');
// const inputLength = inputRef.dataset.length;

// inputRef.addEventListener('input', onInput);

// function onInput(evt) {
//   if (Number(inputLength) === evt.currentTarget.value.length) {
//     inputRef.classList.remove('invalid');
//     return inputRef.classList.add('valid');
//   } else {
//     inputRef.classList.remove('valid');
//     return inputRef.classList.add('invalid');
//   }
// }
// import iziToast from 'izitoast';

const btn = document.querySelector('.button');

btn.addEventListener('click', onClick);

function onClick() {
  console.log(iziToast);
}
