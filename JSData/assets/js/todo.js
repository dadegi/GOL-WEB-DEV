const task = document.getElementById('task');
const insert = document.getElementById('insert');
const taskList = document.getElementById('taskList');
const errorDiv = document.getElementById('error');
const tasks = [];

function createTask() {
	if (!checkForm()) {
		return;
	} else {
		let newtask = task.value;
		createList(newtask);
		printList();
		clearForm();
	}
}

function checkForm() {
	if (task.value === '') {
		errorDiv.style.visibility = 'visible';
		return false;
	} else {
		errorDiv.style.visibility = 'hidden';
		return true;
	}
}

function createList(task) {
	tasks.push(task);
}

const printList = () => {
	if (tasks.length === 0) {
		return;
	} else {
		taskList.innerHTML = '';
		for (let i = 0; i < tasks.length; i++) {
			let newItem = document.createElement('li');
			newItem.innerText = tasks[i];
			let btnClear = document.createElement('button');
			btnClear.setAttribute('type', 'button');
			btnClear.setAttribute('onclick', `clearTask(${i});`);
			btnClear.innerHTML = '❌';
			newItem.appendChild(btnClear);
			taskList.appendChild(newItem);
		}
	}
};

const clearTask = (index) => {
	tasks.splice(index, 1);
	printList();
};

const clearForm = () => {
	task.value = '';
};
