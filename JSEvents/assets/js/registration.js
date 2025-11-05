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

btnSendForm.addEventListener('click', function (e) {
	e.preventDefault();
	events();
});

function events() {
	console.log(checkForm());
}

function checkForm() {
    let validForm = false;
    let okFor = false;
	if (userSurname.value !== '') {
		validForm = true;
	} else {
		return false;
	}
	const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
	if (regexEmail.test(userEmail.value)) {
		validForm = true;
	} else {
		return false;
	}
	const radioItems = document.querySelectorAll('#courses input');
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
