(async () => {
	await loadInitial();
	const tbody = document.querySelector('#userTable tbody');
	const users = loadLocal();

	function render() {
		tbody.innerHTML = users
			.map(
				(u) => `
		<tr>
			<td>${u.name}</td>
			<td>${u.email}</td>
			<td>
				<a href="edit.html?id=${u.id}" class="btn">Modifica</a> |
				<a href="#" data-id="${u.id}" class="delete">Elimina</a>
			</td>
		</tr>
    `
			)
			.join('');
	}

	render();

	tbody.addEventListener('click', (e) => {
		if (e.target.classList.contains('delete')) {
			const id = parseInt(e.target.dataset.id);
			const idx = users.findIndex((u) => u.id === id);
			let delUser = confirm(
				"Sei sicuro? L'azione non potrà essere annullata"
			);
			if (delUser) {
				if (idx > -1) {
					users.splice(idx, 1);
					saveLocal(users);
					deleteApi(idx);
					render();
				}
			}
		}
	});
})();

async function deleteApi(userId) {
	try {
		const response = await fetch(API_URL + userId, {
			method: 'delete',
		});
		const data = await response.json();
		console.log(response);
		alert('Utente cancellato');
	} catch (error) {
		console.log('Errore: ', error);
	}
}
