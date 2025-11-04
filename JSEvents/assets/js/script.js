const btnAlert = document.getElementById('printAlert');
const btnHTML = document.getElementById('printHTML');
const printed = document.getElementById('printed');

// Eventi del mouse
// click
const printConsole = (e) => {
	console.log("sono scatenata dall'evento onclick nell'HTML");
	console.log(
		`Hai cliccato su ${e.target} che si trova alle coordinate X: ${e.clientX}; Y: ${e.clientY}`
	); // Da errore perché l'attributo onclick in HTML è gestito dal documento
};

btnAlert.onclick = function () {
	alert("sono scatenato dall'evento onclick in JavaScript");
	console.log(
		`Hai cliccato su ${e.target} che si trova alle coordinate X: ${e.clientX}; Y: ${e.clientY}`
	); // Da errore perché l'evento onclick è gestito dal documento
};

btnHTML.addEventListener('click', function (e) {
	printed.innerText = 'sono scatenato da un eventListener';
	console.log(
		`Hai cliccato su ${e.target} che si trova alle coordinate X: ${e.clientX}; Y: ${e.clientY}`
	); // Restituisce le informazioni perché è JavaScript che è in ascolto dell'evento e lo gestisce
});

// moouseover - mouseout
const box = document.getElementById('box');
box.addEventListener('mouseover', () => {
	document.querySelector('#box h3').innerText = 'sfondo giallo';
	box.style.color = 'black';
});

box.addEventListener('mouseout', () => {
	document.querySelector('#box h3').innerText = 'sfondo rosso';
	box.style.color = 'white';
});

// Eventi della tastiera: keydown - keyup
const keydown = document.getElementById('keydown');
const enter = document.getElementById('enter');

document.addEventListener('keydown', (e) => {
	console.log(`Hai premuto ${e.key}`);
	keydown.innerText = `Hai premuto ${e.key}`;
    if (e.key === 'Enter') {
        enter.innerText = 'Con enter posso avviare una qualsiasi funzione';
    } else {
        enter.innerHTML = '&nbsp;'
    }
});
