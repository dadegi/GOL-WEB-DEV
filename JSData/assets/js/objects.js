const myArray = ['Pippo', 'Pluto', 'Paperino'];

const persona = {
	nome: 'Mario',
	cognome: 'Rossi',
	indirizzo: {
		via: 'Roma',
		civico: 20,
		citta: 'Milano',
	},
	birthYear: 1995,
	email: undefined,
	iscritto: true,
	corsi: ['HTML', 'CSS', 'JavaScript'],
	eta: function () {
		const thisYear = new Date().getFullYear();
		return thisYear - this.birthYear;
	},
};

console.log(persona);
console.table(persona);

document.getElementById('thisArray').innerText = myArray;

// Destrutturazione classica, sintassi [nome_oggetto.proprietà]
document.getElementById('thisObject').innerText = `Ti chiami ${persona.nome} ${
	persona.cognome
}, hai ${persona.eta()} anni, sei nato nel ${
	persona.birthYear
} la tua email è ${persona.email}, la tua iscrizione è ${persona.iscritto};
il tuo indirizzo è: via ${persona.indirizzo.via} ${persona.indirizzo.civico}, ${
	persona.indirizzo.citta
}.
Ti sei iscritto ai corsi di ${persona.corsi}`;

// Destrutturazione moderna, con estrapolazione delle proprietà in una costante di tipo oggetto
const { nome, cognome, email, birthYear, iscritto, corsi } = persona;
const { via, civico, citta } = persona.indirizzo;

document.getElementById(
	'thisObject'
).innerText = `Ti chiami ${nome} ${cognome}, hai ${persona.eta()} anni, sei nato nel ${birthYear} la tua email è ${email}, la tua iscrizione è ${iscritto};
il tuo indirizzo è: via ${via} ${civico}, ${citta}.
Ti sei iscritto ai corsi di ${corsi}`;

const user = {
	name: 'John',
	surname: 'Doe',

	greet: function () {
		// Funzione per nelle funzioni normali il this è contestuale, quindi legge l'oggetto
		console.log(`Ciao ${this.name} ${this.surname}`);
	},

	arrowGreet: () => {
		// Non funziona perché nelle arrow function il this è lessicale, quindi non legge l'oggetto
		console.log(`Ciao ${this.name} ${this.surname}`);
	},
};

user.greet();
user.arrowGreet();

console.log(Object.keys(user));
console.log(Object.values(user));

for (let key in user) {
	console.log(`${key}: ${user[key]}`);
}

// *************************************************************
// Creazione dinamica array di oggetti

const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userYear = document.getElementById('userYear');
const btnSendForm = document.getElementById('sendForm');
const studentsList = document.getElementById('studentsList');
const frmInsert = document.getElementById('insertStudent');

const newList = [];
const newStudent = {
	userName: '',
	userEmail: '',
	userAge: 0,
};

btnSendForm.addEventListener('click', function (e) {
	e.preventDefault();
	let newUserName = userName.value;
	let newUserEmail = userEmail.value;
	let newUserBirth = parseInt(userYear.value);
	const insertNew = { ...newStudent };
	insertNew.userName = newUserName;
	insertNew.userEmail = newUserEmail;
	insertNew.userAge = calcolaEta(newUserBirth);
	manageJson(insertNew);
	newList.push(insertNew);
	console.log(newList);
	printList();
	clearForm();
});

const calcolaEta = (year) => {
	let thisYear = new Date().getFullYear();
	return thisYear - year;
};

function printList() {
	if (newList.length !== 0) {
		document.getElementById('titleList').innerText = 'Lista studenti';
	}
	studentsList.innerHTML = '';
	for (let i = 0; i < newList.length; i++) {
		let newItem = document.createElement('li');
		newItem.innerText = `${newList[i].userName}, ${newList[i].userEmail} di anni ${newList[i].userAge}`;
		studentsList.appendChild(newItem);
	}
}

const clearForm = () => {
	frmInsert.reset();
};

function manageJson(newObject) {
	let objectString = JSON.stringify(newObject);
	console.log('Oggetto in formato stringa: ' + objectString);
	let parseString = JSON.parse(objectString);
	console.log('Stringa in formato oggetto: ', parseString);
}
