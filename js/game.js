var hidden_code ;
var active_checker ;

function get_input() {
	var combination = ["a", "b", "c", "d"];
	combination[0] = $('#checker1').data('code');
	combination[1] = $('#checker2').data('code');
	combination[2] = $('#checker3').data('code');
	combination[3] = $('#checker4').data('code');
	return combination;
	
}

function display_hidden(){
	var code_color = { a: 'blue', b: 'red', c: 'green', d: 'yellow', e: 'black', f: 'white'};
	$("#hidden1").css('background-color', code_color[hidden_code[0]]);
	$("#hidden2").css('background-color', code_color[hidden_code[1]]);
	$("#hidden3").css('background-color', code_color[hidden_code[2]]);
	$("#hidden4").css('background-color', code_color[hidden_code[3]]);
	$( '#submit').hide();
    $( '#color-picker' ).hide();
    $( '#hidden-div' ).show();

	

}
function appendLog(comb, score) {
	var log = "<p>";              
	log += "<a href=\"#\" class=\"btn btn-default btn-circle\" ";
	log += "style=\"background-color:";
	log += $('#checker1').css('background-color');
	log += " \" disabled ></a> ";

	log += "<a href=\"#\" class=\"btn btn-default btn-circle\" ";
	log += "style=\"background-color:";
	log += $('#checker2').css('background-color');
	log += " \" disabled ></a> ";

	log += "<a href=\"#\" class=\"btn btn-default btn-circle\" ";
	log += "style=\"background-color:";
	log += $('#checker3').css('background-color');
	log += " \" disabled ></a> ";

	log += "<a href=\"#\" class=\"btn btn-default btn-circle\" ";
	log += "style=\"background-color:";
	log += $('#checker4').css('background-color');
	log += " \" disabled ></a> ";
	
	log += score + "</p>";

	$("#log-div").prepend(log);     // Append new elements
}

function get_combination() {

	var code = ["a", "b", "c", "d"];
	var range = ["a", "b", "c", "d", "e", "f"];
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
		display_hidden();}
	appendLog(player_comb, score);
}

$(document).ready(function(){
    hidden_code = get_combination();
    $( '#submit').show();
    $( '#color-picker' ).hide();
    $( '#hidden-div' ).hide();
    

    
    $( ".checker" ).click(function(){
    	active_checker = '#'+ this.id ;
    	//console.log($(this).data('code'));
    	$( '.checker' ).css('opacity', 0.2);
    	$( this ).css('opacity', 1);
    	$( "#color-picker").show();
    	$( '#submit' ).hide();
    });

    $( ".picker" ).click(function(){
    	var picked_color = $( this ).css('background-color');
    	var picked_code = $( this ).data('code');
    	$(active_checker).css('background-color', picked_color);
    	$(active_checker).data('code', picked_code);
    	$( '.checker' ).css('opacity', 1);
    	$( '#color-picker' ).hide();
    	$( '#submit').show();
    })

    $( "#submit" ).click(function(){
    	main();
    });
});