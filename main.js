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
