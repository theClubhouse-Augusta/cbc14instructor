let todos = {
	complete: [],
	incomplete: []
};

document.addEventListener('DOMContentLoaded', function() {

	fetchCategories();
});

function fetchCategories() {
	let xhr = new XMLHttpRequest();
	xhr.onload = function() {
		categories = JSON.parse(this.responseText);

		loadCategories();
	};
	xhr.open('GET', 'http://localhost:8888');
	xhr.send();
}

function loadCategories() {
	let categoryHTML = '';
	for ( let i = 0; i < categories.category.length; i++ ) {
		categoryHTML = categoryHTML + `<li class="category" data-complete="1" id="${todos.incomplete[i].id}">${todos.incomplete[i].name}</li>`;
	}
	document.getElementById('category').innerHTML = categoryHTML;
}