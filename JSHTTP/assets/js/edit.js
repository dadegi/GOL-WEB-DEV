const REQUEST_URL = 'https://jsonplaceholder.typicode.com/posts/';

const postTitle = document.getElementById('postTitle');
const userPost = document.getElementById('userPost');
const postBody = document.getElementById('postBody');
const sendPost = document.getElementById('sendPost');

document.addEventListener('DOMContentLoaded', getPost);

let myPosts = JSON.parse(localStorage.getItem('myPosts'));

let postId;

let post;

async function getPost() {
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	postId = urlParams.get('id');
	console.log(postId);
	try {
		const response = await fetch(REQUEST_URL + postId);
		let oldPost = await response.json();
		post = oldPost;
		console.log(post);
		printPost();
	} catch (error) {
		console.log('Errore: ', error);
	}
}

function printPost() {
	postTitle.value = post.title;
	userPost.value = post.userId;
	postBody.value = post.body;
}

sendPost.addEventListener('click', function (e) {
	e.preventDefault();
	post.title = postTitle.value;
	post.userId = parseInt(userPost.value);
	post.body = postBody.value;
	console.log(post);
	modifyPost();
});

function modifyPost() {
	for (let i = 0; i < myPosts.length; i++) {
		if (myPosts[i].id == postId) {
			myPosts[i] = post;
			console.log(myPosts[i]);
			alert('Post modificato!');
			break;
		}
	}
	localStorage.setItem('myPosts', JSON.stringify(myPosts));
	location.href = 'index.html';
}
