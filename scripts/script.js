document.addEventListener('DOMContentLoaded', function() {

// Setting variables:
	// let newTask = document.querySelector('#task').value;
	const fullList = document.querySelector('ul');


	// Takes input value:

	document.querySelector("#task").addEventListener('input', function(){
		newTask = this.value;
	});

	// Calls function for inserting value to HTML and clears input field:

	document.querySelector('#submit-btn').addEventListener("click", function() {
		appendNew();
		resetDate();
		resetTask();
	});

	// Functions for getting and reseting deadline value:

	function getDate(){
		return document.querySelector('#task-date').value;
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

	// Function for inserting value to HTML:

	function appendNew(){
		// fullList.appendChild('<li>' + newTask + '</li>');
		fullList.insertAdjacentHTML( 'beforeend', listHTMLString() );
		// var li = document.createElement("li");
		// li.appendChild(document.createTextNode(document.querySelector('#task').value));
		// document.querySelector('ul').appendChild(li);

	};

	function listHTMLString() {
		debugger
		return `<li class='list-content'> \
			<div> \
				<p class='task-to-do'><span>TASK: </span>${getTask()}</p> \
				<p>DEADLINE: <span class='deadline'>${getDate()}</span></p> \
			</div> \
			<div> \
				<i class='fas fa-check'></i> \
				<i class='fas fa-trash'></i> \
			</div> \
		</li>`
	}



	// Deleting task:


	const deletingIcon = document.querySelectorAll(".fa-trash");
	deletingIcon.forEach(function(deleting) {
	    deleting.addEventListener('click', function() {
	    	const ifYes = confirm ("Do you really want to remove this task?");
	    	if (ifYes) { // Deletes task if confirmed:
	      		this.closest('li').remove();
	      	}
	    });
	});

	// Marking task as done:

	const doneIcon = document.querySelectorAll(".fa-check");
	doneIcon.forEach(function(checking) {
		checking.addEventListener('click', function () {
			this.classList.add('checked');
			this.parentElement.previousElementSibling.firstElementChild.classList.add('completed');
		});
	});

	//Sorting tasks by date:




});

