$(document).ready(function() {

	console.log("hey");
	function createQDivs (){
		for(var i = 0; i < questions.length; i++){			
			var qNum = ("Question " + (i + 1));
			var qDiv = document.createElement("div");
			var qNumHeader = document.createElement("h3");
			var strong = document.createElement("STRONG");
			var t = document.createTextNode(qNum);
			qNumHeader.setAttribute("class", qNum);
			qDiv.setAttribute("id", qNum);
			document.getElementById("main").appendChild(qDiv);
			document.getElementById(qNum).appendChild(qNumHeader);
			qDiv.appendChild(qNumHeader);
			strong.appendChild(t);
			qNumHeader.appendChild(strong);
		}
	}

	//loops through the questions obj and appends the questions to the corresponding q number
	function displayQuestions() {
		for(var i = 0; i < questions.length; i ++){
			var q = document.createTextNode(questions[i].question);
			var qNum = ("Question " + (i + 1));
			var qHead = document.createElement("h4");
			qHead.appendChild(q);
			var x = document.getElementById(qNum);
			// console.log(x);
			x.appendChild(qHead);
			
			
		}
	}

	//creates the select elements needed for options while appending them to the questions
	function createSelectEl() {
		for(var i = 0; i < questions.length; i ++){
			var qNum = ("Question " + (i + 1));
			var selectId = ("q" + (i + 1));
			var selectEl = document.createElement("select");
			var attributes = ["data-placeholder", "class", "id"];
			var values = ["", "chosen-select", selectId];
			var x = document.getElementById(qNum);
			x.appendChild(selectEl);

			for(var j = 0; j < attributes.length; j ++) {
				selectEl.setAttribute(attributes[j], values[j]);
			}
			createOptEl(selectEl);
			chosenDiv(x, i);
		}
	}

	//creates the list of options 1(Strongly Disagree)-5(Strongly Agree)
	function createOptEl(selectEl) {
		for(var i = 0; i <= 5; i++) {
			var optEl = document.createElement("option");
			if(i === 0) {
				optEl.setAttribute("value", "");
			}else{
				optEl.setAttribute("value", i);
				if( i === 1) {
					var t = document.createTextNode("1 (Strongly Disagree)");
					optEl.appendChild(t);
				}else if(i === 5) {
					var t = document.createTextNode("5 (Strongly Agree)");
					optEl.appendChild(t);
				}else{
					var t = document.createTextNode(i);
					optEl.appendChild(t);
				}
			}
			selectEl.appendChild(optEl);
		}
	}

	function chosenDiv(x, i) {

		var div = document.createElement("div");
		var chosenId = ("q" + i + "_chosen");
		var attributes = ["class", "id", "style"];
		var values = ["chosen-container chosen-container-single", chosenId, "width: 5%"];
		x.appendChild(div);
		for(var j = 0; j < attributes.length; j ++) {
			div.setAttribute(attributes[j], values[j]);
		}
	}

	// call this first to create question divs
	createQDivs();
	//call this next to append and display questions
	displayQuestions();
	//call this third to create divs to hold the options
	createSelectEl();
});