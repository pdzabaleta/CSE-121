/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function Add (number1, number2){
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);
    document.querySelector('#sum').value = Add(addNumber1, addNumber2);

}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);
/* Function Expression - Subtract Numbers */

function subtract (subtract1, subtract2){
    return subtract1 - subtract2;

}

function subtractNumbers (){
    let subtract1 = Number(document.querySelector('#subtract1').value);
    let subtract2 = Number(document.querySelector('#subtract2').value);
    document.querySelector('#difference').value = subtract(subtract1, subtract2);
}
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);
/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);
    document.querySelector('#product').value = multiply(factor1, factor2);
}
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);


/* Open Function Use - Divide Numbers */

function divide(dividend, divisor) {
    return dividend / divisor;
}

function divideNumbers (){
    let dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);
    document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */

document.querySelector('#getTotal').addEventListener('click', function(){
    let subtotal = parseFloat(document.querySelector('#subtotal').value);
    let membershipChecked =  document.querySelector('#member').checked; // Check if the membership checkbox is checked to apply a discount
    if (membershipChecked) { // Apply discount IF the membership checkbox is checked
        subtotal *= 0.8; 
    }


    let totalSpan = document.querySelector('#total');
    totalSpan.textContent = subtotal.toFixed(2);
})  
/* ARRAY METHODS - Functional Programming */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
let arrayElement = document.querySelector('#array');
arrayElement.textContent = numbersArray.join(', ');

/* Output Odds Only Array */
// let oddsElement  = document.querySelector('#odds');
// let oddsNumbers =  numbersArray.filter(function(number){
//     return number % 2 !== 0;
// });
// oddsElement.textContent = oddsNumbers.join(', ');


document.querySelector('#odds').innerHTML =  numbersArray.filter(number => number % 2 !== 0);   
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);   
/* Output Sum of Org. Array */

document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number, 0);  
/* Output Multiplied by 2 Array */

document.querySelector('#multiplied').innerHTML = numbersArray.map(number => number * 2);
/* Output Sum of Multiplied by 2 Array */

const multipliedArray = numbersArray.map(element => element * 2);

// Use reduce() to sum the elements of the multiplied array
const sum = multipliedArray.reduce((sum, number) => sum + number, 0);

document.querySelector('#sumOfMultiplied').innerHTML = sum;