const login = document.getElementById('login');
const userName = document.getElementById('userName');
const userPass = document.getElementById('userPass');
const btnSendLogin = document.getElementById('sendLogin');
const loginError = document.getElementById('loginError');

localStorage.removeItem('loggedUser');

btnSendLogin.addEventListener('click', function (e) {
	e.preventDefault();
	if (userName.value === 'pippo@pippo.com' && userPass.value === '123456') {
		localStorage.setItem('loggedUser', userName.value);
		loginError.style.visibility = 'hidden';
		location.href = 'usersList.html';
	} else {
		localStorage.removeItem('loggedUser');
		loginError.style.visibility = 'visible';
		login.reset();
	}
});
