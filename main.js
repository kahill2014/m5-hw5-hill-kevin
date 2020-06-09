/* Change background color of boxes on hover */
var boxes = document.getElementsByClassName('box');
for (var i=0; i < boxes.length; i++){
	boxes[i].addEventListener("mouseover", function(){
		for (var k=0; k < boxes.length; k++){
			boxes[k].classList.add("hover-box");
		}
	}, false);
	boxes[i].addEventListener("mouseout", function(){
		for (var k=0; k < boxes.length; k++){
			boxes[k].classList.remove("hover-box");
		}
	}, false);
}
var newEl = document.createElement('p');
/* Box 1 clicked - display message */
document.getElementById('box-1').addEventListener('click', function(){
	newEl.innerText = 'Oooh - so close, but no cigar';
	document.getElementById('box-results').append(newEl);
}, false);

/* Box 2 clicked - display message */
document.getElementById('box-2').addEventListener('click', function(){
	newEl.innerText = 'DING DING DING - We have a winner';
	document.getElementById('box-results').append(newEl);
}, false);

/* Box 3 clicked - display message */
document.getElementById('box-3').addEventListener('click', function(){
	newEl.innerText = 'Oops, butter luck next time';
	document.getElementById('box-results').append(newEl);
}, false);
