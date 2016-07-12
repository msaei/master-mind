var hidden_code ;
function get_input() {
	var combination = ["A", "B", "C", "D"];
	combination[0] = document.getElementById("first").value;
	combination[1] = document.getElementById("second").value;
	combination[2] = document.getElementById("third").value;
	combination[3] = document.getElementById("forth").value;
	return combination;
	
}
function appendText(comb, score) {
	var app_txt = "<p>";              
	app_txt += comb[0];
	app_txt += " - ";

	app_txt += comb[1];
	app_txt += " - ";

	app_txt += comb[2];
	app_txt += " - ";
              
	app_txt += comb[3];
	app_txt += " - ";
	app_txt += " ( ";
	app_txt += score;
	app_txt += " ) ";
	app_txt += "</p>";

	$("div.board").append(app_txt);     // Append new elements
}

function get_combination() {

	var code = ["A", "B", "C", "D"];
	var range = ["A", "B", "C", "D", "E", "F"];
	var random ;
	for (i=0; i<4; i++){

	random = Math.floor((Math.random() * 6));
	while(range[random]=="X"){ random = Math.floor((Math.random() * 6))}
	code[i] = range[random];
		//alert(code[i]);
	range[random] = "X";
	}
	return code;
}

function get_score(combination, goal) {
	var score = 0;
	for (i=0; i<4; i++){
		if (combination[i] == goal[i]){score += 10;}
		else { if (combination[i] == goal[0] || combination[i] == goal[1] || combination[i] == goal[2] || combination[i] == goal[3] ){score += 1;}}
			
	}
	return score;
}

function main() {
	var msg;
	var player_comb = get_input();
	var score = get_score(player_comb, hidden_code);
	if (score == 40){
		alert("you got it !");
		msg =  hidden_code[0] + " " + hidden_code[1] + " " + hidden_code[2] + " " + hidden_code[3];
		document.getElementById("hidden").innerHTML = msg;}
	appendText(player_comb, score);
}

$(document).ready(function(){
    hidden_code = get_combination();

});