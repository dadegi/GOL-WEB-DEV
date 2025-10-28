const defaultArg = document.getElementById('defaultArg');

const firstPhrase = () => {
	setTimeout(() => {
		document.getElementById('first').innerText =
			'Questa frase sarà scritta per seconda';
	}, 1000);
};

const secondPhrase = () => {
	document.getElementById('second').innerText =
		'Questa frase sarà scritta per prima';
};

firstPhrase();
secondPhrase();

// this contestuale e this lessicale
const contestual = {
	lexicalValue: 'lessicale',
	metodo: function () {
		setTimeout(function () {
			console.log(this.lexicalValue);
		}, 100);
	},
};

const lexical = {
	contestualValue: 'contestuale',
	metodo: function () {
		setTimeout(() => {
			console.log(this.contestualValue);
		}, 100);
	},
};

contestual.metodo();
lexical.metodo();

function sumDefault(num1 = 5, num2 = 10) {
	let thisSum = num1 + num2;
	switch (true) {
		case num1 === 5 && num2 === 10:
			defaultArg.innerText = `Il risultato della somma è ${thisSum}; sono stati usati i parametri di default`;
			break;

		case num2 === 10:
			defaultArg.innerText = `Il risultato della somma è ${thisSum}; è stato usato il secondo parametro di default`;
			break;

		default:
			defaultArg.innerText = `Il risultato della somma è ${thisSum}; sono stati usati gli argomenti passati`;
	}
}

sumDefault();

function outer() {
	function internal() {
		return 'Sono la funzione interna';
	}
	console.log('Chiamata dalla funzione esterna');
	return internal();
}
console.log(outer());

// Funzione di callback
function showMessage() {
	console.log('Operazione completata');
}

function execute(time, callback) {
	setTimeout(() => {
		console.log(`Sono passati ${time / 1000} secondi`);
		callback();
	}, time);
}

execute(3000, showMessage);
