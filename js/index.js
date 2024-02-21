function start() {
	document.getElementById("intro").setAttribute("class", "hiddenintro");
	document.getElementById("header").removeAttribute("class", "mostrar");
	document.getElementById("game").removeAttribute("class", "mostrar");
	document.getElementById("footer").removeAttribute("class", "hidden");

	document.getElementById("rulesimg").addEventListener("click", mostrar, false);
	document.getElementById("exit").addEventListener("click", ocultar, false);
	var play = document.querySelectorAll(".play");
	for (var i = 0; i < play.length; i++) {
		play[i].addEventListener("click", game, false);
	}
}

function mostrar() {
	document.getElementById("rules_hidden").removeAttribute("class", "hidden");
}

function ocultar() {
	document.getElementById("rules_hidden").setAttribute("class", "hidden");//Hacer otra animacion si se puedezz
}
function game(event) {
	// console.log(event);
	img(event.target.innerText,"player");
	var elements = ["Lizard","Spock","Rock","Scissors","Paper"];
	var index = parseInt(Math.random()*5);
	// console.log(index);
	img(elements[index],"CPU");
	var result = event.target.innerText + elements[index];
	// console.log(result);
	// console.log(rules(result));
	document.getElementById("start").innerHTML=`<h1>${rules(result)}</h1>`;
}

function img(cosa, playersimg) {
	switch (cosa) {
		case "Lizard":
			document.getElementById(`${playersimg}`).style.backgroundImage = "url(../src/lizard.jpg)";
			document.getElementById(`${playersimg}`).style.boxShadow="0px 15px 15px rgb(135,222,135)";//
			if(playersimg == "player"){
				document.getElementById(`${playersimg}`).style.transform = "scaleX(-1)";
			}else{
				document.getElementById(`${playersimg}`).style.transform = "scaleX(1)";
			}
			break;
		case "Spock":
			document.getElementById(`${playersimg}`).style.backgroundImage = "url(../src/spock.jpeg)";
			document.getElementById(`${playersimg}`).style.transform = "scaleX(1)";
			document.getElementById(`${playersimg}`).style.boxShadow="0px 15px 15px rgb(128,179,255)";//
			break;
		case "Rock":
			document.getElementById(`${playersimg}`).style.backgroundImage = "url(../src/piedra.avif)";
			document.getElementById(`${playersimg}`).style.transform = "scaleX(1)";
			document.getElementById(`${playersimg}`).style.boxShadow="0px 15px 15px rgb(255,149,149)";
			break;
		case "Scissors":
			document.getElementById(`${playersimg}`).style.backgroundImage = "url(../src/scissors.webp)";
			document.getElementById(`${playersimg}`).style.boxShadow="0px 15px 15px rgb(229,128,255)";
			if(playersimg == "player"){
				document.getElementById(`${playersimg}`).style.transform = "scaleX(1)";
			}else{
				document.getElementById(`${playersimg}`).style.transform = "scaleX(-1)";
			}
			break;
		case "Paper":
			document.getElementById(`${playersimg}`).style.backgroundImage = "url(../src/paper.jpg)";
			document.getElementById(`${playersimg}`).style.transform = "scaleX(1)";
			document.getElementById(`${playersimg}`).style.boxShadow="0px 15px 15px rgb(255,221,85)";
			break;
		default:
			document.getElementById(`${playersimg}`).style.backgroundImage = "";

	}
}

function rules(result){
	switch(result){
		//TIES
		case "RockRock":
			return "TIE";
			break;
		case "PaperPaper":
			return "TIE";
			break;
		case "ScissorsScissors":
			return "TIE";
			break;
		case "LizardLizard":
			return "TIE";
			break;
		case "SpockSpock":
			return "TIE";
			break;
		//	WINS
			//SCISSORS
		case "ScissorsPaper":
			return "WIN";
			break;
		case "ScissorsLizard":
			return "WIN";
			break;
			//ROCK
		case "RockScissors":
			return "WIN";
			break;
		case "RockLizard":
			return "WIN";
			break;
			//PAPER
		case "PaperSpock":
			return "WIN";
			break;
		case "PaperRock":
			return "WIN";
			break;
			//LIZARD
		case "LizardPaper":
			return "WIN";
			break;
		case "LizardSpock":
			return "WIN";
			break;
			//SPOCK
		case "SpockScissors":
			return "WIN";
			break;
		case "SpockRock":
			return "WIN";
			break;
		//	LOSES como default para no repetir código
		default:
			return "LOSE";
		
	}
}