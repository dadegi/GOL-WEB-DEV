const arrayBefore = document.getElementById('arrayBefore');
const arrayAfter = document.getElementById('arrayAfter');
const original = document.getElementById('original');
const splice1 = document.getElementById('splice1');
const splice2 = document.getElementById('splice2');
const splice3 = document.getElementById('splice3');
const splice4 = document.getElementById('splice4');
const original1 = document.getElementById('original1');
const arrSlice = document.getElementById('arrSlice');
const arrConcat = document.getElementById('arrConcat');
const insertedArr = document.getElementById('insertedArr');
const remove = document.getElementById('remove');
const shopList = document.getElementById('shopList');
const mappedArray = document.getElementById('mappedArray');
const filteredArray = document.getElementById('filteredArray');
const reducedArray = document.getElementById('reducedArray');
const exercise1 = document.getElementById('exercise1');

const arr1 = [];
arrayBefore.innerText = `Valori contenuti nell'array: ${arr1}`;

console.log(arr1);

arr1.push('Pippo');
arrayAfter.innerText = `Valori contenuti nell'array: ${arr1}`;

console.log(arr1);

let arr2 = new Array();

const studenti = ['Emanuele', 'Federico', 28, 'Rebecca', 'Gianluca'];

console.table(studenti);

studenti.push('Giovanna');
studenti.unshift('Maria');

console.table(studenti);

studenti.pop();
console.table(studenti);

let removed = studenti.shift();
console.log(`Studente rimosso: ${removed}`);
console.table(studenti);

// splice()
const myArray = [
	'Mario',
	'Aldo',
	'Maria',
	'Giovanna',
	'Nicola',
	'Francesca',
	'Antonio',
];
console.table(myArray);
original.innerText += myArray;

let removedNames = myArray.splice(5); // Glielementi rimossi vengono ritornati e possono essere memorizzati sotto forma di un nuovo array
console.log(removedNames);
splice1.innerText += myArray;

myArray.splice(1, 2);
splice2.innerText += myArray;

let otherRemoved = myArray.splice(2, 0, 'Francesco', 'Linda', 'Rebecca'); // Anche in questo caso gli elementi rimossi vengono restituiti: non avendo rimosso alcun elemento, viene generato un array vuoto
console.log(otherRemoved);
splice3.innerText += myArray;

myArray.splice(2, 1, 'Franca');
splice4.innerText += myArray;

// slice() e concat()
const newArray = [
	'Sole365',
	'Conad',
	'Coop',
	'Lidl',
	'MD',
	'Panorama',
	'Sigma',
	'Carrefour',
];
original1.innerText += newArray;

let slicedArr = newArray.slice(3, 5);
arrSlice.innerText += `array originale: ${newArray}, array creato con slice(): ${slicedArr}`;

const arrJoin = ['Pinguino', 'Pellicano', 'Euroesse'];
let concatArr = newArray.concat(arrJoin);

arrConcat.innerText += `array originale: ${newArray}, array creato con concat(): ${concatArr}`;
console.log(concatArr);

// Array di array
const complexArr = ['Paperino', 'Pippo', 'Pluto', ['Qui', 'Quo', 'Qua']];
insertedArr.innerText += complexArr;
console.table(complexArr);

let removedArr = complexArr.pop();
remove.innerText += `${removedArr}; array originario: ${complexArr}`;

// Iterazione e destrutturazione
// forEach
newArray.forEach((element, index) => {
	let newItem = document.createElement('li');
	newItem.innerText = element;
	shopList.appendChild(newItem);
});

// for
for (let i = 0; i < newArray.length; i++) {
	let newItem = document.createElement('li');
	newItem.innerText = newArray[i];
	shopList.appendChild(newItem);
}

// map(), filter(), reduce(). join()
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let squaresArray = numbersArray.map((element) => {
	return element * element;
});

mappedArray.innerText += squaresArray;

let oddArray = numbersArray.filter((element) => {
	return element % 2 === 0;
});

filteredArray.innerText += oddArray;

reducedArray.innerText = squaresArray.reduce((acc, cur) => acc + cur, 0);

let joinedArray = newArray.join('/');
console.log(`${joinedArray} di tipo ${typeof joinedArray}`);

// Esercizio 1
let numArray = [2, 5, 9, 6, 4, 13, 18];
let solution1 = numArray
	.filter((element) => element % 2 !== 0)
	.reduce((acc, cur) => acc + cur, 0);

// Modo tradizionale
// let myOdd = numArray.filter(element => element % 2 !== 0);
// let solution1 = myOdd.reduce((acc, cur) => acc + cur, 0);

exercise1.innerText += solution1;
