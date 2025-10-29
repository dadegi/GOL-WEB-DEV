const user = document.getElementById('user');
const insert = document.getElementById('insert');
const usersList = document.getElementById('usersList');
const errorDiv = document.getElementById('error');
const title = document.querySelector('.title h1');

document.onload = () => {
	createUser();
};

function createUser() {
	if (!checkForm()) {
		return;
	} else {
		if (document.querySelector('table caption') === null) {
			createTable();
		}
		let newUser = user.value;
		printList(newUser);
	}
}

function checkForm() {
	if (user.value === '') {
		errorDiv.style.visibility = 'visible';
		return false;
	} else {
		errorDiv.style.visibility = 'hidden';
		return true;
	}
}

function createTable() {
	let newCaption = document.createElement('caption');
	newCaption.innerText = 'LISTA UTENTI';
	usersList.appendChild(newCaption);
	let newHead = document.createElement('thead');
	let trHead = document.createElement('tr');
	let newThName = document.createElement('th');
	newThName.innerText = 'NOME';
	let newThqualify = document.createElement('th');
	newThqualify.innerText = 'QUALIFICA';
	let newThDate = document.createElement('th');
	newThDate.innerText = 'DATA DI ISCRIZIONE';
	trHead.appendChild(newThName);
	trHead.appendChild(newThqualify);
	trHead.appendChild(newThDate);
	newHead.appendChild(trHead);
	usersList.appendChild(newHead);
}

const printList = (userName) => {
	title.classList.add('full');
	let newRow = document.createElement('tr');
	let newCellName = document.createElement('td');
	newCellName.innerText = userName;
	let newCellQualify = document.createElement('td');
	newCellQualify.innerText = 'Studente';
	let newCellDate = document.createElement('td');
	newCellDate.innerText = new Date();
	newRow.appendChild(newCellName);
	newRow.appendChild(newCellQualify);
	newRow.appendChild(newCellDate);
	usersList.appendChild(newRow);
	clearForm();
};

const clearForm = () => {
	user.value = '';
};
