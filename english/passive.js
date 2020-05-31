
function check(){
	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var question11 = document.quiz.question11.value;
	var question12 = document.quiz.question12.value;
	var question13 = document.quiz.question13.value;
	var question14 = document.quiz.question14.value;
	var question15 = document.quiz.question15.value;
	var question16 = document.quiz.question16.value;
	var question17 = document.quiz.question17.value;
	var question18 = document.quiz.question18.value;
	var correct = 0;


	if (question1 == "This house was built in 2020.") {
		correct++;
}
	if (question2 == "It is checked every day.") {
		correct++;
}
	if (question3 == "Food will be bought.") {
		correct++;
}	
	if (question4 == "The passport is being checked by custom officer.") {
		correct++;
	}
	if (question5 == "It can be done.") {
		correct++;
}
	if (question6 == "The meal has been cooked.") {
		correct++;
}	
	if (question7 == "The tea had been made.") {
		correct++;
	}
	if (question8 == "Her homework was being done.") {
		correct++;
}
	if (question9 == "Who was the meal prepared by?" || question9 == "What was prepared?") {
		correct++;
}	
	if (question10 == "When are animals fed?" || question10 == "Who are animals fed by?") {
		correct++;
	}
	
	if (question11 == "When will tests be checked?" || question11 == "Who will tests be checked by?") {
		correct++;
	}
	if (question12 == "When was this hospital built?" || question12 == "Who was this hospital built by?") {
		correct++;
	}
	if (question13 == "a") {
		correct++;
	}
	if (question14 == "a") {
		correct++;
	}
	if (question15 == "c") {
		correct++;
	}
	if (question16 == "a") {
		correct++;
	}
	if (question17 == "b") {
		correct++;
	}
	if (question18 == "b") {
		correct++;
	}
	
	
	var pictures = ["../img/win2.gif", "../img/moriarty.gif", "../img/ordinary.gif", "../img/loose2.gif", "../img/loose.gif" ];
	var messages = ["Udało ci się wykonać poprawnie wszystkie zadania. Gratulacje!", "Świetnie ci poszło!", "Oby tak dalej", "Mogło być lepiej", "Musisz jeszcze trochę poćwiczyć"];
	var score;

	if (correct == 0) {
		score = 4;
	}

	if (correct >= 1 && correct <= 8) {
		score = 3;
	}

	if (correct >= 9 && correct <= 12) {
		score = 2;
	}

	if (correct >= 13 & correct <= 17  ) {
		score = 1;
	}
	
	if (correct == 18) {
		score = 0;
	}

	document.getElementById("after_submit").style.visibility = "visible";

	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "Miałeś " + correct + " poprawnych odpowiedzi.";
	document.getElementById("picture").src = pictures[score];
	}
	
