document.addEventListener('DOMContentLoaded', function() {


	// Deleting clicked task:


	const tasks = document.querySelectorAll("li");
	tasks.forEach(function(deleting) {
	    deleting.addEventListener("click", function() {
	    	const ifYes = confirm ("Do you really want to remove this task?");
	    	if (ifYes) { // Deletes task if confirmed:
	      		this.remove();
	      	}
	    });
	});

});


