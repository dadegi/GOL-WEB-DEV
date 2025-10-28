const user = document.getElementById('user');
const insert = document.getElementById('insert');
const usersList = document.getElementById('usersList');
const errorDiv = document.getElementById('error');

document.onload = () => {
	createUser();
};

function createUser() {
	if (!checkForm()) {
		return;
	} else {
		let newUser = user.value;
		printList(newUser);
	}
}

function checkForm() {
	if (user.value === '') {
		errorDiv.style.display = 'block';
		return false;
	} else {
		errorDiv.style.display = 'none';
		return true;
	}
}

function printList(userName) {
	let newItem = document.createElement('li');
	newItem.innerText = `Utente ${userName}`;
	usersList.appendChild(newItem);
	clearForm();
}

function clearForm() {
	user.value = '';
}
