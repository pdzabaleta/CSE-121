/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: "Pablo Zabaleta",
    photo: "images/personal.jpg",
    favoriteFoods: [
        'Pizza',
        'Burguer',
        'Beef'
    ],
    hobbies: [
        'Gaming',
        'Social Media',
        'Gym'
    ],
    placesLived:[]
};





/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
    place: 'Anaco, VE',
    length: '17 years'
    },
    {
    place: 'Concepcion, CL',
    length: '3 Years'
    },
    {
    place: 'Los Angeles, CL',
    length: '1 Years'
    }
);

    


/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;
/* Favorite Foods List*/

myProfile.favoriteFoods.forEach((meal) => {
    let li = document.createElement('li');
    li.textContent = meal;
    document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobbie) => {
    let li = document.createElement('li');
    li.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */

myProfile.placesLived.forEach((places) => {

    let dl = document.createElement('dl');
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');

    dt.textContent = places.place;
    dd.textContent = places.length;

    dl.appendChild(dt);
    dl.appendChild(dd);

    document.querySelector('#places-lived').appendChild(dl);
});
