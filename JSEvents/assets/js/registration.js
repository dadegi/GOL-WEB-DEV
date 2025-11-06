const userName = document.getElementById('userName');
const userSurname = document.getElementById('userSurname');
const surnameError = document.getElementById('surnameError');
const userAddress = document.getElementById('userAddress');
const userCAP = document.getElementById('userCAP');
const userCity = document.getElementById('userCity');
const userProv = document.getElementById('userProv');
const userPhone = document.getElementById('userPhone');
const userEmail = document.getElementById('userEmail');
const userMailError = document.getElementById('userMailError');
const languages = document.getElementById('languages');
const courses = document.getElementById('courses');
const startCourse = document.getElementById('startCourse');
const btnSendForm = document.getElementById('sendForm');

const province = [];

const radioItems = document.querySelectorAll('#courses input');

const newUser = {
	name: '',
	surname: '',
	address: {
		street: '',
		CAP: '',
		city: '',
		province: '',
	},
	contacts: {
		phone: 0,
		email: '',
	},
	languages: [],
	courses: '',
	startCourse: '',
};

document.addEventListener('DOMContentLoaded', getProv);

async function getProv() {
	await fetch('assets/js/province.json')
		.then((data) => {
			return data.json();
		})
		.then((prov) => {
			prov.forEach((element) => {
				province.push(element.prov_nome);
			});
		})
		.then(() => {
			for (let i = 0; i < province.length; i++) {
				let newOption = document.createElement('option');
				newOption.setAttribute('value', province[i]);
				newOption.innerText = province[i];
				userProv.appendChild(newOption);
			}
		});
}

userSurname.addEventListener('blur', function () {
	if (userSurname.value !== '') {
		surnameError.style.visibility = 'hidden';
	} else {
		surnameError.style.visibility = 'visible';
	}
});

userEmail.addEventListener('blur', function () {
	const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	if (regexEmail.test(userEmail.value)) {
		userMailError.style.visibility = 'hidden';
	} else {
		userMailError.style.visibility = 'visible';
	}
});

btnSendForm.addEventListener('click', function (e) {
	e.preventDefault();
	events();
});

function events() {
	if (!checkForm()) {
		console.log('Form non valido!');
		return;
	} else {
		createObject();
	}
}

function checkForm() {
	let validForm = false;
	let okFor = false;
	if (userSurname.value !== '') {
		surnameError.style.visibility = 'hidden';
		validForm = true;
	} else {
		surnameError.style.visibility = 'visible';
		return false;
	}
	const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	if (regexEmail.test(userEmail.value)) {
		userMailError.style.visibility = 'hidden';
		validForm = true;
	} else {
		userMailError.style.visibility = 'visible';
		return false;
	}
	for (let i = 0; i < radioItems.length; i++) {
		if (radioItems[i].checked === true) {
			validForm = true;
			okFor = true;
			break;
		} else {
			validForm = false;
			okFor = false;
		}
	}
	if (startCourse.value !== '') {
		validForm = true;
	} else {
		return false;
	}
	if (validForm === true && okFor === true) {
		return true;
	} else {
		return false;
	}
}

function createObject() {
	newUser.name = userName.value;
	newUser.surname = userSurname.value;
	newUser.address.street = userAddress.value;
	newUser.address.CAP = userCAP.value;
	newUser.address.city = userCity.value;
	newUser.address.province = userProv.value;
	newUser.contacts.phone = userPhone.value;
	newUser.contacts.email = userEmail.value;
	const checkItems = document.querySelectorAll('#languages input');
	for (let i = 0; i < checkItems.length; i++) {
		if (checkItems[i].checked === true) {
			newUser.languages.push(checkItems[i].value);
		}
	}
	for (let i = 0; i < radioItems.length; i++) {
		if (radioItems[i].checked === true) {
			newUser.courses = radioItems[i].value;
		}
	}
	newUser.startCourse = startCourse.value;
	console.log(newUser);
}
