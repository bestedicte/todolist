const toDos = [];
const inputText = document.getElementById('new-todo');
const addToDoButton = document.getElementById('add-button');
const list = document.getElementById('list');

const addToDo = () => {
	if (inputText.value.length) {
		toDos.push(inputText.value);
		console.log(toDos);
		inputText.value = '';
	}
	list.innerHTML = '';
	toDos.map((toDo) => {
		const newListItem = document.createElement('LI');
		const toDoText = document.createTextNode(toDo);
		newListItem.appendChild(toDoText);
		list.appendChild(newListItem);
		newListItem.addEventListener('click', () => {
			newListItem.classList.toggle('completed');
		});
		newListItem.addEventListener('dblclick', () => {
			const toDoIndex = toDos.indexOf(toDo);
			console.log(toDoIndex);
			toDos.splice(toDoIndex, 1);
			addToDo();
		});
	});
};

addToDoButton.addEventListener('click', addToDo);

inputText.addEventListener('keyup', (event) => {
	if (event.keyCode === 13) {
		addToDo();
	}
});
