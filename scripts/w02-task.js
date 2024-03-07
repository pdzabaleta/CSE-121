/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */


let fullName = 'Pablo Zabaleta';
const currentYear = new Date().getFullYear();
const profilePicture = 'images/personal.jpg';

/* Step 3 - Element Variables */


const nameElement = document.getElementById('name');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#home picture img');
const foodElement = document.getElementById('food');




/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;

yearElement.textContent = currentYear;

imageElement.setAttribute('src', profilePicture);

imageElement.setAttribute('alt', `Profile image of ${fullName}`);



/* Step 5 - Array */

let food = ['pizza', 'burger', 'cheese'];
foodElement.textContent = food;

let anotherFavoriteFood = 'sushi';

food.push(anotherFavoriteFood);
foodElement.innerHTML += `<br>${food}`;

food.shift();
foodElement.innerHTML += `<br>${food}`;

food.pop();
foodElement.innerHTML += `<br>${food}`;


