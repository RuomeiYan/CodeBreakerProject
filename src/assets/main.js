let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if (answer.value == '' || attempt.value == ''){
    	setHiddenFields();
    }
    if (validateInput(input.value)) {
    	attempt.value++;
    } else {
    	return false;
    }
    if (getResults(input.value)) {
    	setMessage("You Win! :)");
    	showAnswer(true);
    	showReplay();
    } else if (attempt.value >= 10){
    	setMessage("You Lose! :(");
    	showAnswer(false);
    	showReplay();
    } else {
    	setMessage("Incorrect, try again.");
    }
}

//implement new functions here
function setHiddenFields(){
	answer.value = Math.floor(Math.random()*10000).toString();
	while (answer.value.length < 4){
		answer.value = "0" + answer.value;
	}
	attempt.value = "0";
}

function setMessage(message){
	document.getElementById('message').innerHTML = message;
}

function validateInput(t){
	if (t.length == 4){
		return true;
	} else{
		setMessage("Guesses must be exactly 4 characters long.");
		return false;
	}
}

function getResults(input){
	let rs = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">"'
	let ct = 0;
	for (i = 0; i < 4; i++){
		if (answer.value.charAt(i) == input.charAt(i)){
			rs += '<span class="glyphicon glyphicon-ok"></span>';
			ct++;
		} else if (answer.value.indexOf(input.charAt(i)) > -1){
			rs += '<span class="glyphicon glyphicon-transfer"></span>';
		} else {
			rs += '<span class="glyphicon glyphicon-remove"></span>';
		}
	}
	rs += '</div></div>';
	document.getElementById('results').innerHTML += rs;
	if (ct == 4) {
		return true; 
	} else {
		return false;
	}
}

function showAnswer(t){
	document.getElementById("code").innerHTML = answer.value;
	if (t){
		document.getElementById("code").className += " success";
	} else {
		document.getElementById("code").className += " failure";
	}
}

function showReplay(){
	document.getElementById("guessing-div").style.display = "none";
	document.getElementById('replay-div').style.display = "block";
}






















