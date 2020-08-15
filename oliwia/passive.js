
function check(){
	var aquestion1 = document.quiz1.question1.value;

	var correct = 0;


	if (aquestion1 == "20-08-2005") {
		correct++;

	
	var messages = ["PUZZLE"];
	var score;

	if (correct == 1) {
		score = 0;
	}


	document.getElementById("after_submit1").style.visibility = "visible";

	document.getElementById("message1").innerHTML = messages[score];

	}
	
}

function check2(){
	var aquestion2 = document.quiz2.question2.value;

	var correct = 0;


	if (aquestion2 == "JOSH") {
		correct++;

	

	var messages = ["Połóż się"];
	var score;

	if (correct == 1) {
		score = 0;
	}


	document.getElementById("after_submit2").style.visibility = "visible";

	document.getElementById("message2").innerHTML = messages[score];


	}
	
}


function check3(){
	var aquestion3 = document.quiz3.question3.value;

	var correct = 0;


	if (aquestion3 == "theballadofmonalisa") {
		correct++;

	
	var pictures = ["img/wydluzone.jpg" ];
	var messages = [""];
	var score;

	if (correct == 1) {
		score = 0;
	}


	document.getElementById("after_submit3").style.visibility = "visible";

	document.getElementById("message3").innerHTML = messages[score];
	document.getElementById("picture3").src = pictures[score];

	}
	
}

function check4(){
	var aquestion4 = document.quiz4.question4.value;

	var correct = 0;


	if (aquestion4 == "3if2youI") {
		correct++;

	

	var messages = ["@oliwiaucoward"];
	var score;

	if (correct == 1) {
		score = 0;
	}


	document.getElementById("after_submit4").style.visibility = "visible";

	document.getElementById("message4").innerHTML = messages[score];


	}
	
}

function check5(){
	var aquestion5 = document.quiz5.question5.value;

	var correct = 0;


	if (aquestion5 == "joshlerisreal") {
		correct++;

	

	var messages = ["Ósmy utwór albumu Vices & Virtues"];
	var score;

	if (correct == 1) {
		score = 0;
	}


	document.getElementById("after_submit5").style.visibility = "visible";

	document.getElementById("message5").innerHTML = messages[score];


	}
	
}

