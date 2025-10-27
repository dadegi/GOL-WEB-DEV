// Variabili GLOBALI (global scope)
const resultSum = document.getElementById('resultSum');
const function1 = document.getElementById('function1');
const function2 = document.getElementById('function2');
const function3 = document.getElementById('function3');
const function4 = document.getElementById('function4');

let num1 = 5;
let num2 = 2;

scriptFlow();

function scriptFlow() {
	printSum();
	multiply(4, 3);
	multiply(num1, num2);
	sumParameter(num1, num2);
	sumParameter(num1, 'Pippo');
	sumParameter(12);
	sumParameter('pippo');
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
