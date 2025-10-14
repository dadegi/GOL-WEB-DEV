// alert('Hello World!');

document.getElementById('pageTitle').innerText =
	'JAVASCRIPT INTRO - Prime lezioni';

console.log('Benvenuti nel mondo JavaScript');

let iva = 0.2;

function saluta() {
	alert('Ciao, hai clicccato il pulsante!');
}

// Variabili con let
let myLetName; // Dichiarazione di variabile (assegnazione del nome alla variabile)
myLetName = 'Dario'; // Definizione di variabile (assegnazione di un valore alla variabile)
document.getElementById('firstLet').innerText = myLetName;

{
	let myLetName = 'Pippo';
	document.getElementById('secondLet').innerText += myLetName;
}

document.getElementById('thirdLet').innerText = myLetName;

// Variabili con var
var myVarName = 'Dario';
document.getElementById('firstVar').innerText = myVarName;

{
	var myVarName = 'Pippo';
	document.getElementById('secondVar').innerText += myVarName;
}

document.getElementById('thirdVar').innerText = myVarName;

// Variabili con const
const currentYear = 2025; // Le costanti DEVONO essere dichiarate e definite nello stesso momento

document.getElementById('constant').innerText = currentYear;

// Errore: non è possibile ridefinire una costante
// currentYear = 2026;

// document.getElementById('constant').innerText = currentYear;

let changeVariable = 'Brian';

console.log('Il tipo della variabile è ' + typeof changeVariable);

changeVariable = 27;

console.log('Il tipo della variabile è cambiato: ' + typeof changeVariable);

let realNumber = 25;

console.log('Il tipo della variabile è ' + typeof realNumber);

let fakeNumber = '25';

console.log('Il tipo della variabile è ' + typeof fakeNumber);

let firstUndefined;

console.log('Il tipo della variabile è ' + firstUndefined);

let firstNull = null;

console.log('Il tipo della variabile è ' + firstNull);

// Tipizzazione dinamica (le variabili possono cambiare tipo e valore durante il flusso), comportamento di undefined e null
let undefinedVariable;

let firstResult = 4 * undefinedVariable;

document.getElementById('firstVariable').innerText =
	firstResult + ' ' + typeof firstResult;

let nullVariable = null;

let secondResult = 4 * nullVariable;

document.getElementById('secondVariable').innerText =
	secondResult + ' ' + typeof secondResult;

nullVariable = 3; // nullVariable cambia valore e tipo

secondResult = 4 * nullVariable;

document.getElementById('thirdVariable').innerText = secondResult;
