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

//used to change status of the image of the element when hovered/not hovered
function changeimage(targetElId, displayElId) {
	var targetEl = document.querySelector(targetElId); //the element that we're looking for
	targetEl.addEventListener("mouseenter", function (evt) { //when mouse enters the element
		var displayEl = document.querySelector(displayElId);
		displayEl.setAttribute("visible", true);    //make it visible
	});
    targetEl.addEventListener("mouseleave", function (evt) { //when mouse leaves the element
		var displayEl = document.querySelector(displayElId);
		displayEl.setAttribute("visible", false);   //hide it again
	});
}
//adding ambient sound
function audioControle() { //SOUND STATUS
  var sound = document.querySelector('#audio');
  if (isPlaying == true) {
    // Do pause.
    sound.components.sound.pauseSound(); 
    isPlaying = false;
  } else if (isPlaying == false){
    // Do play.
    sound.components.sound.playSound(); 
    isPlaying = true;
  }
}


//used to add sound when the mouse enters the element
function createHoverSound(targetElId) {
	var sound = document.querySelector(targetElId); // the element that gets the hover event
	sound.addEventListener("mouseenter", function (evt) { //when mouse enters the element
		sound.components.sound.playSound();  //play designated sound file
	});
	sound.addEventListener("mouseleave", function (evt) { //when cursor leaves the element
		sound.components.sound.pauseSound(); //stop the sound
	});
}
//play sound when an element is clicked
function createClickSound(targetElId) {
     var sound = document.querySelector(targetElId); //find the element that gets the click event
        sound.addEventListener('click', function () { //when the element is clicked
         sound.components.sound.playSound();  //play the sound file
         });
}
