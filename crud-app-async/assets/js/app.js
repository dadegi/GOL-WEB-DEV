const API_URL = 'https://jsonplaceholder.typicode.com/users/';

function loadLocal() {
	return JSON.parse(localStorage.getItem('users')) || [];
}
function saveLocal(users) {
	localStorage.setItem('users', JSON.stringify(users));
}

async function loadInitial() {
	if (loadLocal().length === 0) {
		const resp = await fetch(API_URL);
		const data = await resp.json();
		saveLocal(data);
	}
}
