document.addEventListener('DOMContentLoaded', function() {

let newTask = document.querySelector("#task").value;
document.querySelector("#task").addEventListener("click", "input", function(){
	newTask = this.val();
});

document.querySelector('input[type=submit]').click(function() {
	if (newTask.length) {
		appendNew();
		this.val('');
	}
});

function appendNew(){
	document.querySelector('ul').append('<li>' + newTask + '</li>');
}



});


