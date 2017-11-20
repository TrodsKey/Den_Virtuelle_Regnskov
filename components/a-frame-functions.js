//Used to create on hover color change
function createHoverColor(targetElId, desiredColor) {
	var targetEl = document.querySelector(targetElId); // the thing that gets the hover event
	var originalColor = targetEl.getAttribute("color");

	targetEl.addEventListener("mouseenter", function (evt) {
		targetEl.setAttribute("color", desiredColor);
	});
	targetEl.addEventListener("mouseleave", function (evt) {
		targetEl.setAttribute("color", originalColor);
	});
}

//used to make an object into a link
function createSceneChanger(targetElId, targetUrl) {
	var targetEl = document.querySelector(targetElId);
	targetEl.addEventListener("click", function (evt) {
		window.location = targetUrl; //name of page to navigate to goes here
	});
}

//used to make an object make another object visible
function createItemDisplayer(targetElId, displayElId) {
	var targetEl = document.querySelector(targetElId); //the thing that gets clicked
	
	targetEl.addEventListener("click", function (evt) {
		var displayEl = document.querySelector(displayElId);//the thing that gets displayed
		var displayers = document.querySelectorAll(".displayer")//array containing every single display item
		
		if (displayEl.getAttribute("visible")) { //if the thing getting displayed is visible
			for (i = 0; i < displayers.length; i++) {
				displayEl.setAttribute("visible", false) //hide it
			}
		} else { //if the thing getting displayed isn't visible
			for (i = 0; i < displayers.length; i++) {
				displayers[i].setAttribute("visible", false); //loop through all displayable items and hide them
			}
			displayEl.setAttribute("visible", true); //then make the thing visible
		}
	});
}

//used to make a video, and its corresponding player visible
function createVideoDisplayer(targetElId, displayElId, controllerElId) {
	var targetEl = document.querySelector(targetElId);//the thing that gets clicked
	
	targetEl.addEventListener("click", function (evt) {
		var displayEl = document.querySelector(displayElId); //the plane showing the video
		var controllerEl = document.querySelector(controllerElId); //the player
		var displayers = document.querySelectorAll(".displayer"); //array containing all display items
		if (displayEl.getAttribute("visible")) { //if the video/player is visible
			//hide them both
			displayEl.setAttribute("visible", false);
			controllerEl.setAttribute("visible", false);
		} else { // if the thing getting displayed isn't visible
			for (i = 0; i < displayers.length; i++) {
				displayers[i].setAttribute("visible", false);//loop through all displayable items and hide them
			}
			//then display video and player
			displayEl.setAttribute("visible", true);
			controllerEl.setAttribute("visible", true);
		}
	});
}

function changeimage(targetElId, displayElId) {
	var targetEl = document.querySelector(targetElId);
	targetEl.addEventListener("mouseenter", function (evt) {
		var displayEl = document.querySelector(displayElId);
		displayEl.setAttribute("visible", true);
	});
    targetEl.addEventListener("mouseleave", function (evt) {
		var displayEl = document.querySelector(displayElId);
		displayEl.setAttribute("visible", false);
	});
}

