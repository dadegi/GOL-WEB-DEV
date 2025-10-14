document.addEventListener('DOMContentLoaded', function () {
	document.getElementById('pageTitle').innerText =
		'JAVASCRIPT INTRO - Prime lezioni';
});

const verifyAge = document.getElementById('verifyAge');
const verifyHour = document.getElementById('verifyHour');
const verifyResult = document.getElementById('verifyResult');
const verifyNumber = document.getElementById('verifyNumber');
const order = document.getElementById('order');
const dayName = document.getElementById('dayName');
const switchOrder = document.getElementById('switchOrder');
const openTime = document.getElementById('openTime');
const numberList = document.getElementById('numberList');
const oddNumbers = document.getElementById('oddNumbers');
const invertedOdd = document.getElementById('invertedOdd');
const whileNumbers = document.getElementById('whileNumbers');
const doWhileNumbers = document.getElementById('doWhileNumbers');
const breakCicle = document.getElementById('breakCicle');
const negative = document.getElementById('negative');
const nidify = document.getElementById('nidify');
const indentedCicle = document.getElementById('indentedCicle');

// IF base
let age = 15;
if (age >= 18) {
	verifyAge.innerText += 'Sei maggiorenne';
}

// IF - ELSE
let hour = 20;
if (hour < 12) {
	verifyHour.innerText += 'Buongiorno';
} else {
	verifyHour.innerText += 'Buon pomeriggio';
}

// IF - ELSE IF - ELSE
let result = 17;
if (result < 18) {
	verifyResult.innerText += 'Bocciato';
} else if (result < 24) {
	verifyResult.innerText += 'Sufficiente';
} else {
	verifyResult.innerText += 'Ottimo!';
}

let firstNumber = 2;
let secondNumber = 3;
let thirdNumber = 1;

// Ricerca numero maggiore
if (firstNumber > secondNumber && firstNumber > thirdNumber) {
	verifyNumber.innerText += firstNumber;
} else if (secondNumber > thirdNumber) {
	verifyNumber.innerText += secondNumber;
} else {
	verifyNumber.innerText += thirdNumber;
}

// Ordine numerico ascendente
if (firstNumber < secondNumber && firstNumber < thirdNumber) {
	if (secondNumber < thirdNumber) {
		order.innerText +=
			firstNumber + ', ' + secondNumber + ', ' + thirdNumber;
	} else {
		order.innerText +=
			firstNumber + ', ' + thirdNumber + ', ' + secondNumber;
	}
} else if (secondNumber < thirdNumber) {
	if (firstNumber < thirdNumber) {
		order.innerText +=
			secondNumber + ', ' + firstNumber + ', ' + thirdNumber;
	} else {
		order.innerText +=
			secondNumber + ', ' + thirdNumber + ', ' + firstNumber;
	}
} else if (firstNumber < secondNumber) {
	order.innerText += thirdNumber + ', ' + firstNumber + ', ' + secondNumber;
} else {
	order.innerText += thirdNumber + ', ' + secondNumber + ', ' + firstNumber;
}

// SWITCH - CASE
let dayNumber = 5;
switch (dayNumber) {
	case 1:
		dayName.innerText += 'Lunedì';
		break;

	case 2:
		dayName.innerText += 'Martedì';
		break;

	case 3:
		dayName.innerText += 'Mercoledì';
		break;

	case 4:
		dayName.innerText += 'Giovedì';
		break;

	case 5:
		dayName.innerText += 'Venerdì';
		break;

	case 6:
		dayName.innerText += 'Sabato';
		break;

	default:
		dayName.innerText += 'Domenica';
}

// Ordine numerico
switch (true) {
	case firstNumber < secondNumber && secondNumber < thirdNumber:
		switchOrder.innerText +=
			firstNumber + ', ' + secondNumber + ', ' + thirdNumber;
		break;

	case firstNumber < thirdNumber && thirdNumber < secondNumber:
		switchOrder.innerText +=
			firstNumber + ', ' + thirdNumber + ', ' + secondNumber;
		break;

	case secondNumber < firstNumber && firstNumber < thirdNumber:
		switchOrder.innerText +=
			secondNumber + ', ' + firstNumber + ', ' + thirdNumber;
		break;

	case secondNumber < thirdNumber && thirdNumber < firstNumber:
		switchOrder.innerText +=
			secondNumber + ', ' + thirdNumber + ', ' + firstNumber;
		break;

	case thirdNumber < secondNumber && secondNumber < firstNumber:
		switchOrder.innerText +=
			thirdNumber + ', ' + secondNumber + ', ' + firstNumber;
		break;

	default:
		switchOrder.innerText +=
			thirdNumber + ', ' + firstNumber + ', ' + secondNumber;
}

// OPERATORE TERNARIO
let nowTime = 19;
let opened = nowTime > 20 || nowTime < 3 ? 'aperto' : 'chiuso';
openTime.innerText += opened;

// CICLO FOR
for (let i = 1; i <= 5; i++) {
	numberList.innerHTML += '<li>Numero ' + i + '</li>';
}

// Lista numeri dispari
for (let i = 1; i < 21; i++) {
	if (i % 2 !== 0) {
		oddNumbers.innerHTML += '<li>Numero ' + i + '</li>';
	}
}

// Lista inversa
for (let i = 20; i > 0; i--) {
	if (i % 2 !== 0) {
		invertedOdd.innerHTML += '<li>Numero ' + i + '</li>';
	}
}

// WHILE / DO-WHILE
// Lista while
let firstI = 10;
while (firstI <= 5) {
	whileNumbers.innerHTML += '<li>Numero ' + firstI + '</li>';
	firstI++;
}

let secondI = 10;

do {
	doWhileNumbers.innerHTML += '<li>Numero ' + secondI + '</li>';
	secondI++;
} while (secondI <= 5);

// BREAK e CONTINUE
for (let i = 0; i < 10; i++) {
	if (i === 5) {
		breakCicle.innerHTML += '<li>Numero 5 saltato!</li>';
		continue;
	}
	if (i === 8) {
		breakCicle.innerHTML += '<li>Nomero 8 trovato, ciclo interrotto</li>';
		break;
	}
	breakCicle.innerHTML += '<li>Numero ' + i + '</li>';
}

studentList = [
	'Mario Rossi, esame positivo',
	'Aldo Bianchi, esame negativo',
	'Maria Verdi, esame positivo',
	'Giovanna Neri, esame negativo',
	'Nicola Gialli, esame negativo',
];

for (let i = 0; i < studentList.length; i++) {
	if (studentList[i].endsWith('positivo')) continue;
	negative.innerHTML += '<li>' + studentList[i] + '</li>';
}

// CICLI ANNIDATI
for (let i = 1; i <= 3; i++) {
	for (let j = 1; j <= 3; j++) {
		nidify.innerHTML += '<h4>' + i + ', ' + j + '</h4>';
	}
}

for (let i = 1; i < 6; i++) {
	let newRow = document.createElement('tr');
	for (let j = 1; j < 5; j++) {
		let newCell = document.createElement('td');
		newCell.innerText = 'COLONNA ' + j;
		newRow.appendChild(newCell);
	}
	indentedCicle.appendChild(newRow);
}
