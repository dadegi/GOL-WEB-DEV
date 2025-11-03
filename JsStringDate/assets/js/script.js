const userName = document.getElementById('userName');
const btnSend = document.getElementById('sendName');
const oldName = document.getElementById('oldName');
const newName = document.getElementById('newName');

btnSend.addEventListener('click', () => {
	let initialName = userName.value;
	let newMark = document.createElement('mark');
	newMark.innerText = initialName;
	oldName.appendChild(newMark);
	// Aliminazione spazi iniziali e finali
	let trimmedName = initialName.trim();
	// Modifica in maiuscolo del primo carattere
	trimmedName = trimmedName.split('');
	let firstCharacter = trimmedName[0];
	firstCharacter = firstCharacter.toUpperCase();
	trimmedName.shift();
	trimmedName.unshift(firstCharacter);
	// Eliminazione spazi interni
	for (let i = 0; i < trimmedName.length; i++) {
		trimmedName.forEach((element, index) => {
			if (element === ' ') {
				trimmedName.splice(index, 1);
			}
		});
	}
	let normalizedName = trimmedName.join('');
	newName.innerText = normalizedName;
});

// Data odierna
let thisDay = new Date().getDate();
let thisMonth = new Date().getMonth();
let thisYear = new Date().getFullYear();
console.log(`Oggi è il ${thisDay} / ${thisMonth + 1} / ${thisYear}`);
// Formato locale
let today = new Date().toLocaleDateString();
console.log(today);
// Operazioni su date
let startCourse = new Date(2025, 8, 29);
let endCourse = new Date(2025, 10, 12);
let daysPassed = (endCourse - startCourse) / (1000 * 60 * 60 * 24);
console.log(parseInt(daysPassed));

// Verifica compleanno e maggiore età
const btnSendDate = document.getElementById('sendDate');
const greetings = document.getElementById('greetings');
const adult = document.getElementById('adult');

btnSendDate.addEventListener('click', () => {
	const birthDate = parseInt(document.getElementById('birthDate').value);
	const birthMonth = parseInt(document.getElementById('birthMonth').value);
	const birthYear = parseInt(document.getElementById('birthYear').value);
	let nowDate = new Date().getDate();
	let nowMonth = new Date().getMonth();
	let thisYear = new Date().getFullYear();
	let userAge = thisYear - birthYear;

	greetings.innerText = '';
	adult.innerText = '';

	// Compleanno
	if (nowDate === birthDate && nowMonth + 1 === birthMonth) {
		greetings.innerText = `Auguri di buon compleanno per i tuoi ${userAge} anni!!! 🤡🎂🥳🎉`;
	} else {
		greetings.innerText = 'Dai, non manca molto... 😉';
	}
	// Maggiore età
	if (userAge >= 18 && nowMonth + 1 >= birthMonth && nowDate >= birthDate) {
		adult.innerText = 'Sei Maggiorenne! 😁';
	} else {
		adult.innerText = 'Non sei maggiorenne!';
	}
});
