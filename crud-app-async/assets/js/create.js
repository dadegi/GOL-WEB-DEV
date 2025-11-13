document.getElementById('userForm').addEventListener('submit', (e) => {
	e.preventDefault();
	const users = loadLocal();
	const newUser = {
		id: Date.now(),
		name: document.getElementById('name').value.trim(),
		email: document.getElementById('email').value.trim(),
	};
	if (!newUser.name || !newUser.email) return alert('Compila tutti i campi.');
	users.push(newUser);
	saveLocal(users);
	createUser(newUser);
});

async function createUser(user) {
	try {
		const response = await fetch(API_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});
		const result = await response.json();
		console.log(result);
		alert('Utente registrato');
		location.href = 'index.html';
	} catch (error) {
		console.log('Errore: ', error);
	}
}
