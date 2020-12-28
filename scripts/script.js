document.addEventListener('DOMContentLoaded', function() {

// Setting variables:
	// let newTask = document.querySelector('#task').value;
	const fullList = document.querySelector('ul');


	// Takes input value:

	// document.querySelector("#task").addEventListener('input', function(){
		
	// 	newTask = this.value;
	// });

	// Calls function for inserting value to HTML and clears input field:

	document.querySelector('#submit-btn').addEventListener("click", function() {
		if (document.querySelector('#task').value.length) {
			saveItemInStorage();
			loadLists();
			resetDate();
			resetTask();
			resetTime();
		} else {
			alert ("The field is empty. Please insert the new task");
		}
	});

	function loadLists() {
		listItems();
		addCheckButtonEvents();
		addDeleteButtonEvents();
	};

	function saveItemInStorage() {
		const items = getItems() || [];
		items.push({'task': getTask(), 'date': getDate(), 'time': getTime()});
		sessionStorage.setItem('items', JSON.stringify(items));
	};

	function deleteItemFromStorage(itemIndex) {
		const items = [];
		getItems().forEach((list, index) => {
			if (index !== parseInt(itemIndex)) {
				items.push(list)
			}
		});
		sessionStorage.setItem('items', JSON.stringify(items));
	};

	function getItems() {
		if (sessionStorage.items) {
			return JSON.parse(sessionStorage.items);
		}
		return null;
	};

	// Functions for getting and reseting deadline date value:

	function getDate(){
		if (document.querySelector('#task-date').value.length) {
			return document.querySelector('#task-date').value;
		} else {
			return ("NO DATE");
		}
	};

	function resetDate() {
		document.querySelector('#task-date').value = '';
 
	};

	// Functions for getting and reseting task value:

	function getTask(){
		return document.querySelector('#task').value;
	};

	function resetTask() {
		document.querySelector('#task').value = '';
 
	};

	// Functions for getting and reseting deadline time value:

	function getTime(){
		return document.querySelector('#task-time').value;
	};

	function resetTime() {
		document.querySelector('#task-time').value = '';
 
	};


	// Function for inserting value to HTML:

	function listItems(){
		fullList.innerHTML = '';
		getItems().forEach((item, index) => {
			fullList.insertAdjacentHTML( 'beforeend', listHTMLString(item, index) );
		});

	};

	function listHTMLString(item, index) {
		return `<li class='list-content'> \
			<div> \
				<p class='task-to-do'><span>TASK: </span>${item.task}</p> \
				<p>DEADLINE: <span class='deadline'>${item.date} ${item.time}</span></p> \
			</div> \
			<div> \
				<i class='fas fa-check'></i> \
				<i class='fas fa-trash' data-list-index='${index}'></i> \
			</div> \
		</li>`
	}



	// Deleting task:

	function addDeleteButtonEvents() {
		document.querySelectorAll(".fa-trash").forEach(function(deleting) {
		    deleting.addEventListener('click', function() {
		    	const ifConfirmed = confirm ("Do you really want to remove this task?");
		    	if (ifConfirmed) { // Deletes task if confirmed:
		      		deleteItemFromStorage(this.dataset.listIndex);
		      		loadLists();
		      	}
		    });
		});
	};

	// Marking task as done:

	function addCheckButtonEvents () {
		document.querySelectorAll(".fa-check").forEach(function(checking) {
			checking.addEventListener('click', function () {
				this.classList.add('checked');
				// document.querySelector('#to-do-list').appendChild('li');
				this.closest('li').appendChild(document.querySelector('#to-do-list'));
				this.parentElement.previousElementSibling.firstElementChild.classList.add('completed');
			});
		});
	};

	//Sorting tasks by date:

	loadLists();

});


