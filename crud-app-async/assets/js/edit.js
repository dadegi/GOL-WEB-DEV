(async () => {
	await loadInitial();
	const params = new URLSearchParams(location.search);
	const id = parseInt(params.get('id'));
	const users = loadLocal();
	const user = users.find((u) => u.id === id);
	if (!user) location.href = 'index.html';

	document.getElementById('name').value = user.name;
	document.getElementById('email').value = user.email;

	document.getElementById('userForm').addEventListener('submit', (e) => {
		e.preventDefault();
		user.name = document.getElementById('name').value.trim();
		user.email = document.getElementById('email').value.trim();
		let modify = confirm("Sei sicuro? L'azione non potrà essere annullata");
		if (modify) {
			saveLocal(users);
			modifyUser(user);
		}
	});
})();

async function modifyUser(user) {
	try {
		const response = await fetch(API_URL + user.id, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(user),
		});
		const result = await response.json();
		console.log(result);
		alert('Utente modificato');
		location.href = 'index.html';
	} catch (error) {
		console.log('Errore: ', error);
	}
}
