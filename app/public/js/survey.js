$(document).ready(function() {

	// Chosen CSS
    var config = {
      '.chosen-select'           : {},
      '.chosen-select-deselect'  : {allow_single_deselect:true},
      '.chosen-select-no-single' : {disable_search_threshold:10},
      '.chosen-select-no-results': {no_results_text:'Oops, nothing found!'},
      '.chosen-select-width'     : {width:"95%"}
    }
    for (var selector in config) {
      $(selector).chosen(config[selector]);
    }

    // Capture the form inputs 
    $("#submit").on("click", function(){

    	// Form validation
    	function validateForm() {
		  var isValid = true;
		  $('.form-control').each(function() {
		    if ( $(this).val() === '' )
		        isValid = false;
		  });

		  $('.chosen-select').each(function() {

		  	if( $(this).val() === "")
		  		isValid = false
		  })
		  return isValid;
		}

		// If all required fields are filled
		if (validateForm() == true)
		{
			// Create an object for the user's data
	    	var userData = {
	    		name: $("#name").val(),
	    		photo: $("#photo").val(),
	    		scores: [$("#q1").val(), $("#q2").val(), $("#q3").val(), $("#q4").val(), $("#q5").val(), $("#q6").val(), $("#q7").val(), $("#q8").val(), $("#q9").val(), $("#q10").val(), ]
	    	};
	    	console.log(userData);

	    	// Grab the URL of the website
	    	var currentURL = window.location.origin;

	    	// AJAX post the data to the friends API. 
	    	$.post(currentURL + "/api/friends", userData, function(data){

	    		// Grab the result from the AJAX post so that the best match's name and photo are displayed.
	    		$("#matchName").text(data.name);
	    		$('#matchImg').attr("src", data.photo);

		    	// Show the modal with the best match 
		    	$("#resultsModal").modal('toggle');

	    	});
		}
		else
		{
			alert("Please fill out all fields before submitting!");
		}
    	
    	return false;
    });


	//creates the divs that hold each question and corresponding element
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

	//loops through the questions obj creates a h4 element and appends the questions to the corresponding q number
	function displayQuestions() {
		for(var i = 0; i < questions.length; i ++){
			var q = document.createTextNode(questions[i].question);
			var qNum = ("Question " + (i + 1));
			var qHead = document.createElement("h4");
			qHead.appendChild(q);
			//question div
			var x = document.getElementById(qNum);
			// console.log(x);
			x.appendChild(qHead);
			
			
		}
	}

	//creates the select elements needed for options while appending them to the questions header
	function createSelectEl() {
		for(var i = 0; i < questions.length; i ++){
			var qNum = ("Question " + (i + 1));
			var selectId = ("q" + (i + 1));
			var selectEl = document.createElement("select");
			var attributes = ["data-placeholder", "class", "id"];
			var values = ["", "chosen-select", selectId];
			//question div
			var x = document.getElementById(qNum);
			x.appendChild(selectEl);

			//loops through attributes and values array setting attributes for the select element
			for(var j = 0; j < attributes.length; j ++) {
				selectEl.setAttribute(attributes[j], values[j]);
			}
			//the selectEL is passed to append the options to
			createOptEl(selectEl);
			//passes the question div and i variable to the chosenDiv function.
			//the question div is used to append the chosen div to.
			//the i variable is passed to help set the chosen div id keeping it inline with question number
			// chosenDiv(x, i);
		}
	}

	//creates the list of options 1(Strongly Disagree)-5(Strongly Agree)
	function createOptEl(selectEl) {
		//loops through creating a blank option for user input and 5 others with the 1st and 5th 
		//labled to give example of rating
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

	//creates a div to hold the 
	// function chosenDiv(x, i) {

	// 	var div = document.createElement("div");
	// 	var chosenId = ("q" + (i + 1) + "_chosen");
	// 	var attributes = ["class", "id", "style"];
	// 	var values = ["chosen-container chosen-container-single", chosenId, "width: 5%"];
	// 	//appends the created div to the question div id passed to it
	// 	x.appendChild(div);
	// 	for(var j = 0; j < attributes.length; j ++) {
	// 		div.setAttribute(attributes[j], values[j]);
	// 	}
	// }

	// call this first to create question divs
	createQDivs();
	//call this next to append and display questions
	displayQuestions();
	//call this third to create divs to hold the options
	createSelectEl();
});