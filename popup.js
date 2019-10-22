//helper methods
function getInput() {
	return document.getElementById("input").value;
}

function setOutput(output) {
	document.getElementById('result').textContent = output;
}

//transform text methods
function spongebobify() {
	var input = getInput();
	input = input.toLowerCase();
	/*
	var flag = false;
	while (!flag) {
		countUpper = 0;
		//generating string with random upper/lower casing
		var output = "";
		for (var i = 0; i < input.length; i++) {
			var temp = Math.floor(Math.random() * 2);
			if (temp == 1) {
				output += input.charAt(i).toUpperCase();
				countUpper++;
			} else {
				output += input.charAt(i).toLowerCase();
			}
		}

		//validation of string
		if (countUpper < (0.7 * input.length) && countUpper > (0.3 * inpinputut.length)) {
			flag = true;
		}
	}
	*/

	var spaces = [];
	var sum_spaces = 0;
	for (var i = 0; i < 100; i++) {
		sum_spaces += Math.floor(Math.random() * 2) + 1
		spaces.push(sum_spaces)
	}

	output = "";
	index = 0;
	spaces_index = 0;
	//output += input.charAt(0);
	while (index < input.length) {
		if (index == spaces[spaces_index]) {
			output += input.charAt(index).toUpperCase();
			spaces_index += 1
		} else {
			output += input.charAt(index).toLowerCase();
		}
		index += 1;
	}
	
	setOutput(output);
}

function vaporwaveify() {
	var input = getInput();
	var output = "";

	for (var i = 0; i < input.length; i++) {
		output += input.charAt(i).toUpperCase() + " ";
	}
	setOutput(output);
}

function stringify() {
	var input = getInput();
	var output = "";

	for (var i = 1; i <= input.length; i++) {
		if (input.charAt(i) != ' ') {
			output += input.substring(0, i) + '     ';
		}
	}
	setOutput(output);
}

//copy-pasta methods
function darth_tragedy() {
	setOutput("Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not. It's not a story the Jedi would tell you. It's a Sith legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. Ironic. He could save others from death, but not himself.");
}

//set on-click methods
document.getElementById('vaporwave').onclick = vaporwaveify;
document.getElementById('spongebob').onclick = spongebobify;
document.getElementById('stringify').onclick = stringify;
document.getElementById('darth_tragedy').onclick = darth_tragedy;
