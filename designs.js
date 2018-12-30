// Select color input
const color = document.querySelector ('#colorPicker');
// Select size input
const height = document.querySelector ('#inputHeight');
const width = document.querySelector ('#inputWidth');
const sizePicker = document.querySelector ('#sizePicker');
const canvas = document.querySelector ('#pixelCanvas');

function clearOldGrid() {
canvas.innerHTML = '';
}
// When size is submitted by the user, call makeGrid()

function makeGrid() {
// Your code goes here!
	let tr, td;
	
	for (let i=0; i < height.value; i++) {
		tr = document.createElement('tr');
		canvas.appendChild(tr);
		for (let j=0; j < width.value; j++) {
			td = document.createElement('td');
			tr.appendChild(td);
		}
	}
}
	
function changeColor() {
	canvas.addEventListener('click', function(e) {
		e.preventDefault();
		if (e.target.nodeName === 'TD') {
			e.target.style.backgroundColor = color.value;
		}
	})
}

function removeColor() {
	canvas.addEventListener('dblclick', function(ev) {
		ev.preventDefault();
		if (ev.target.nodeName === 'TD') {
			ev.target.style.backgroundColor = '';
		}
	})
}

	sizePicker.addEventListener('submit', function(e) {
		e.preventDefault();
		clearOldGrid();
		makeGrid();
		changeColor();
		removeColor();
})
