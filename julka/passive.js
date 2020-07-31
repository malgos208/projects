
function check(){
	var aquestion1 = document.quiz1.question1.value;

	var correct = 0;


	if (aquestion1 == "13-07-2004") {
		correct++;

	
	var pictures = ["img/j1.jpg" ];
	var messages = ["PUZZLE"];
	var score;

	if (correct == 1) {
		score = 0;
	}


	document.getElementById("after_submit1").style.visibility = "visible";

	document.getElementById("message1").innerHTML = messages[score];

	document.getElementById("picture1").src = pictures[score];
	}
	
}

function check2(){
	var aquestion2 = document.quiz2.question2.value;

	var correct = 0;


	if (aquestion2 == "16200070100") {
		correct++;

	
	var pictures = ["img/j2.jpg" ];
	var messages = ["@16ste_urodziny"];
	var score;

	if (correct == 1) {
		score = 0;
	}


	document.getElementById("after_submit2").style.visibility = "visible";

	document.getElementById("message2").innerHTML = messages[score];

	document.getElementById("picture2").src = pictures[score];
	}
	
}


function check3(){
	var aquestion3 = document.quiz3.question3.value;

	var correct = 0;


	if (aquestion3 == "2g6d8Ri2") {
		correct++;

	
	var pictures = ["img/j3.jpg" ];
	var messages = ["Połóż się, a znajdziesz swoją odpowiedź"];
	var score;

	if (correct == 1) {
		score = 0;
	}


	document.getElementById("after_submit3").style.visibility = "visible";

	document.getElementById("message3").innerHTML = messages[score];

	document.getElementById("picture3").src = pictures[score];
	}
	
}

