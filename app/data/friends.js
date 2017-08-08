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

	//creates the options and elements needed for options while appending them to the questions
	function createOptions() {
		for(var i = 0; i < questions.length; i ++){
			var qNum = ("Question " + (i + 1));
			var optDiv = document.createElement("div");
			var optBtn = document.createElement("button");
			var optList = document.createElement("ul");
			var btnText = document.createTextNode("Select an Option");
			var x = document.getElementById(qNum);
			var menu = ("dropdownMenu" + (i+1));
			var attributes = ["class", "type", "id", "data-toggle", "aria-haspopup", "aria-expanded"];
			var values = ["btn btn-default dropdown-toggle", "button", menu, "dropdown", "true", "true"];
			optList.setAttribute("class", "dropdown-menu");
			optList.setAttribute("aria-labelledby", menu);
			optBtn.appendChild(btnText);
			optDiv.appendChild(optList);
			optDiv.setAttribute("class", "dropdown");
			optDiv.appendChild(optBtn);
			x.appendChild(optDiv);

			for(var j = 0; j < attributes.length; j ++) {
				optBtn.setAttribute(attributes[j], values[j]);
			}
			createList();

		}
	}
	function createList() {
		for(var m = 1; m <= 5; m++) {
				var count = 1;
				var list = document.createElement("li");
				var rating;
				console.log(rating);
				if(count === 1){
					rating = document.createTextNode(1 + "Strongly Disagree");
					// rating.appendChild(disagree); 
					console.log(rating);
					count++;
				}else if (count === 5) {
					rating = document.createTextNode(5 + "Strongly Agree");
				}else{
					rating = document.createTextNode(m);
				}
				count++;
				list.appendChild(rating);
				optList.appendChild(list);
			}
	}
	createQDivs();
	displayQuestions();
	createOptions();
});