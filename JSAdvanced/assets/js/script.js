// Variabili GLOBALI (global scope)
const resultSum = document.getElementById('resultSum');
const function1 = document.getElementById('function1');
const function2 = document.getElementById('function2');
const function3 = document.getElementById('function3');
const function4 = document.getElementById('function4');
const returnValue = document.getElementById('returnValue');
const anonymous = document.getElementById('anonymous');
const simpleArrow = document.getElementById('simpleArrow');

let num1 = 5;
let num2 = 2;
let stop1 = 15;
let stop2 = 20;
let signal = false;

scriptFlow();

function scriptFlow() {
	printSum();
	multiply(4, 3);
	multiply(num1, num2);
	sumParameter(num1, num2);
	sumParameter(num1, 'Pippo');
	sumParameter(12);
	sumParameter('pippo');
	stop(stop1, stop2);
	stop2 = 12;
	stop(stop1, stop2);
	print(6);
	sum();
}

function printSum() {
	let localSum = num1 + num2;
	resultSum.innerText = 'Il risultato della somma è ' + localSum;
}

function multiply(val1, val2) {
	if (val1 === num1 && val2 === num2) {
		console.log('I parametri in ingresso sono due variabili globali!');
		console.log('I parametri in ingresso sono ' + val1 + ' ' + val2);
		console.log('Il risultato della moltiplicazione è: ' + val1 * val2);
	} else {
		console.log(
			'I parametri in ingresso sono valori fissi passati a codice!'
		);
		console.log('I parametri in ingresso sono ' + val1 + ' ' + val2);
		console.log('Il risultato della moltiplicazione è: ' + val1 * val2);
	}
}

function sumParameter(val1, val2) {
	if (typeof val1 === 'number' && typeof val2 === 'number') {
		function1.innerText = 'Il risultato della somma è ' + (val1 + val2); // Somma
	} else if (typeof val1 === 'number' && typeof val2 === 'string') {
		function2.innerText = 'Il risultato della somma è ' + (val1 + val2); // Concatena
	} else if (typeof val1 === 'string' && val2 === undefined) {
		function4.innerText = 'Il risultato della somma è ' + (val1 + val2); // Concatena stringa e undefined quando il primo parametro non è un numero
	} else if (val2 === undefined) {
		function3.innerHTML =
			'Il secondo parametro è ' +
			typeof val2 +
			'<br />Il risultato della somma è ' +
			(val1 + val2); // Da errore NaN perché è arrivato un solo parametro, che per JS è il primo, quindi il secondo è undefined
	}
}

function stop(val1, val2) {
	if (val1 <= 15 || val2 >= 20) {
		returnKey.innerText = 'I valori non soddisfano la condizione';
		return;
	} else {
		returnKey.innerText =
			'Il primo valore è ' + val1 + ' e il secondo valore è ' + val2;
	}
}

function square(val1) {
	return val1 * val1;
}

function print(num1) {
	if (signal === false) {
		if (num1 <= 4) {
			returnValue.innerText =
				'Il quadrato di ' + num1 + ' è ' + square(num1);
		} else {
			returnValue.innerText = 'Il valore è maggiore di quattro: ' + num1;
		}
	} else {
		anonymous.innerText = 'Il risultato della funzione anonima è ' + num1;
		signal = false;
	}
	console.log('Funzione principale eseguita');
}

// Funzione anonima utilizzata come funzione di callback con la funzione print, ma solo per generare un valore
const anonymousSum = function (num1, num2) {
	let mySum = num1 + num2;
	signal = true;
	console.log('Funzione callback eseguita');
	return mySum;
};

print(anonymousSum(9, 15)); // L'invocazione della funzione anonima va messa qui perché le funzioni anonime non sono soggette a hoisting

function sum() {
	// Variabili LOCALI (local scope)
	let num3 = 3;
	let num4 = 8;
	console.log('Operazioni interne alla funzione');
	console.log(
		'La somma delle variabili interne (local scope) alla funzione è ' +
			(num3 + num4)
	);
	console.log(
		'La somma delle variabili esterne (global scope) alla funzione è ' +
			(num1 + num2)
	);
}

console.log('***********************************************');
console.log('Operazioni esterne alla funzione');
console.log(
	'La somma delle variabili interne (local scope) alla funzione è ' +
		(num3 + num4) // Questa riga genera un errore, perché num3 e num4 sono variabili locali della funzione sum(). L'errore è BLOCCANTE, JavaScript non va più avanti
);
console.log(
	'La somma delle variabili esterne (global scope) alla funzione è ' +
		(num1 + num2)
);

console.log('❌ ERRORE!');
