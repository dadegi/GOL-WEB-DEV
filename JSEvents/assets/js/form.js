// Evento input
const nome = document.getElementById('nome');
const output = document.getElementById('output');

nome.addEventListener('input', () => {
	output.innerText = nome.value;
});

const birthDate = document.getElementById('birthDate');
const dateSelected = document.getElementById('dateSelected');

birthDate.addEventListener('input', () => {
	dateSelected.innerText = `La tua data di nascita è ${birthDate.value}`;
});

// Evento change
// select
const lingua = document.getElementById('lingua');
lingua.addEventListener('change', () => {
	if (lingua.value !== '') {
		document.getElementById(
			'language'
		).innerText = `Hai scelto la lingua ${lingua.value}`;
	} else {
		document.getElementById('language').innerHTML = '&nbsp;';
	}
});

// checkbox
const programming = document.getElementById('programming');
const HTML = document.getElementById('HTML');
const css = document.getElementById('CSS');
const JS = document.getElementById('JS');

HTML.addEventListener('change', () => {
	let programmingItems = document.querySelectorAll('#programming li');
	if (HTML.checked === true) {
		let newItem = document.createElement('li');
		newItem.innerText = `${HTML.value} `;
		programming.appendChild(newItem);
	} else {
		for (let i = 0; i < programmingItems.length; i++) {
			if (programmingItems[i].textContent === 'HTML ') {
				programmingItems[i].remove();
			}
		}
	}
});

css.addEventListener('change', () => {
	let programmingItems = document.querySelectorAll('#programming li');
	if (css.checked === true) {
		let newItem = document.createElement('li');
		newItem.innerText = `${css.value} `;
		programming.appendChild(newItem);
	} else {
		for (let i = 0; i < programmingItems.length; i++) {
			if (programmingItems[i].textContent === 'CSS ') {
				programmingItems[i].remove();
			}
		}
	}
});

JS.addEventListener('change', () => {
	let programmingItems = document.querySelectorAll('#programming li');
	if (JS.checked === true) {
		let newItem = document.createElement('li');
		newItem.innerText = `${JS.value} `;
		programming.appendChild(newItem);
	} else {
		for (let i = 0; i < programmingItems.length; i++) {
			if (programmingItems[i].textContent === 'JavaScript ') {
				programmingItems[i].remove();
			}
		}
	}
});

// radio button
const duration = document.getElementById('duration');
const ft = document.getElementById('FT');
const pt = document.getElementById('PT');
const serale = document.getElementById('serale');

ft.addEventListener('change', () => {
	if (ft.checked === true) {
		duration.innerText = `Hai selezionato il corso ${ft.value}`;
	} else {
		duration.innerHTML = '&nbsp;';
	}
});

pt.addEventListener('change', () => {
	if (pt.checked === true) {
		duration.innerText = `Hai selezionato il corso ${pt.value}`;
	} else {
		duration.innerHTML = '&nbsp;';
	}
});

serale.addEventListener('change', () => {
	if (serale.checked === true) {
		duration.innerText = `Hai selezionato il corso ${serale.value}`;
	} else {
		duration.innerHTML = '&nbsp;';
	}
});

// Eventi focus (lato CSS) e blur
const userEmail = document.getElementById('userEmail');
const emailError = document.getElementById('emailError');

userEmail.addEventListener('blur', (e) => {
	if (userEmail.value === '') {
		emailError.innerText = 'Inserire una email valida!';
	} else {
		emailError.innerHTML = '&nbsp;';
	}
});

// Rimozione listener
const rowAdded = document.getElementById('rowAdded');
const btnAddRow = document.getElementById('addRow');
const stopRow = document.getElementById('stopRow');
let countRow = 1;

btnAddRow.addEventListener('click', (e) => {
	if (countRow <= 3) {
		let newInput = document.createElement('input');
		newInput.setAttribute('type', 'text');
		newInput.setAttribute('placeholder', `Preferenza ${countRow}`);
		newInput.setAttribute('id', `preference${countRow}`);
		rowAdded.appendChild(newInput);
		countRow++;
		if (countRow === 4) {
			btnAddRow.style.backgroundColor = 'burlywood';
		}
	} else {
		stopRow.innerText = 'Hai raggiunto il numero massimo di preferenze!';
		btnAddRow.removeEventListener('click');
	}
});
// Normalmente quando un button deve smettere di funzionare lo si disabilita, impedendo all'utente di cliccare
