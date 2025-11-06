if (!localStorage.getItem('loggedUser')) {
	document.write('');
	location.href = '403.html';
}

const admin = document.getElementById('admin');
const users = document.getElementById('users');

let list = [];

document.addEventListener('DOMContentLoaded', init);

function init() {
	welcome();
	readList();
	printList();
}

function welcome() {
	admin.innerText = `Benvenuto ${localStorage.getItem('loggedUser')}`;
}

function readList() {
	list = JSON.parse(localStorage.getItem('users'));
	console.log(list);
}

function printList() {
	for (let i = 0; i < list.length; i++) {
		let newItem = document.createElement('li');
		newItem.innerText = `${list[i].name} ${list[i].surname}`;
		users.appendChild(newItem);
	}
}
