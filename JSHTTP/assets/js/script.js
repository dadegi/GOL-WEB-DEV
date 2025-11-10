const REQUEST_URL = 'https://jsonplaceholder.typicode.com/posts/';

const postsList = document.getElementById('postsList');
let posts = [];

document.addEventListener('DOMContentLoaded', getPosts);

// async function getPosts() {
// 	if (localStorage.getItem('myPosts')) {
// 		posts = JSON.parse(localStorage.getItem('myPosts'));
// 		printPosts();
// 	} else {
// 		try {
// 			const response = await fetch(REQUEST_URL);
// 			posts = await response.json();
// 			console.log(posts);
// 			printPosts();
// 		} catch (error) {
// 			console.log('Errore: ', error);
// 		}
// 	}
// }

async function getPosts() {
	if (localStorage.getItem('myPosts')) {
		posts = JSON.parse(localStorage.getItem('myPosts'));
		printPosts();
	} else {
		try {
			const response = await axios.get(REQUEST_URL);
			posts = response.data;
			console.log(posts);
			printPosts();
		} catch (error) {
			console.log('Errore: ', error);
		}
	}
}

function printPosts() {
	localStorage.setItem('myPosts', JSON.stringify(posts));
	postsList.innerHTML = '';
	posts.forEach((p) => {
		let newTr = document.createElement('tr');
		let idTd = document.createElement('td');
		idTd.innerText = p.id;
		let titleTd = document.createElement('td');
		titleTd.innerText = p.title;
		let bodyTd = document.createElement('td');
		bodyTd.innerText = p.body;
		let modTd = document.createElement('td');
		let modBtn = document.createElement('button');
		modBtn.setAttribute('type', 'button');
		modBtn.setAttribute(
			'onclick',
			`location.href = "edit.html?id=${p.id}"`
		);
		modBtn.innerText = 'MODIFICA';
		modTd.appendChild(modBtn);
		let delTd = document.createElement('td');
		let delBtn = document.createElement('button');
		delBtn.setAttribute('type', 'button');
		delBtn.setAttribute('onclick', `deletePost(${p.id});`);
		delBtn.innerText = 'ELIMINA';
		delTd.appendChild(delBtn);
		newTr.appendChild(idTd);
		newTr.appendChild(titleTd);
		newTr.appendChild(bodyTd);
		newTr.appendChild(modTd);
		newTr.appendChild(delTd);
		postsList.appendChild(newTr);
	});
}

async function deletePost(id) {
	try {
		await fetch(REQUEST_URL + id, {
			method: 'DELETE',
		});
		alert(`Post con id ${id} cancellato`);
		posts.splice(id - 1, 1);
		printPosts();
	} catch (error) {
		console.log(error);
	}
}

async function sendPost() {
	const newPost = {
		userId: 3,
		title: 'Articolo dal corso GOL WEB-DEV',
		body: "Questo articolo è inserito su jsonplaceholder/posts durante l'esemplificazione delle HTTP Request tramite fetch() e tramite libreria Axios",
		author: 'Pippo',
	};

	// try {
	// 	const response = await fetch(
	// 		'https://jsonplaceholder.typicode.com/posts',
	// 		{
	// 			method: 'POST',
	// 			headers: { 'Content-Type': 'application/json' },
	// 			body: JSON.stringify(newPost),
	// 		}
	// 	);

	// 	const data = await response.json();
	// 	console.log('Caratteristiche della risposta del server:', response);
	// 	console.log('Risposta del server: ', data);
	// 	alert('Post inviato');
	// } catch (error) {
	// 	console.error('Errore: ', error);
	// }
	try {
		await axios
			.post(REQUEST_URL, {
				title: newPost.title,
				body: newPost.body,
				userId: newPost.userId,
			})
			.then(function (response) {
				console.log(response.data);
				console.log(
					'Caratteristiche della risposta del server:',
					response
				);
				console.log('Risposta del server: ', response.data);
				alert('Post inviato');
			});
	} catch (error) {
		console.log('Error: ', error);
	}
}

sendPost();
