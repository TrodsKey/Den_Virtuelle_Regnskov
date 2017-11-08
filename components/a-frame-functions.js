function createHoverColor(targetElId, desiredColor) {
    var targetEl = document.querySelector(targetElId);
    var originalColor = targetEl.getAttribute("color");

    targetEl.addEventListener("mouseenter", function (evt) {
        targetEl.setAttribute("color", desiredColor);
    });
    targetEl.addEventListener("mouseleave", function (evt) {
        targetEl.setAttribute("color", originalColor)
    });
}

function createSceneChanger(targetElId, targetUrl) {
    var targetEl = document.querySelector(targetElId);
    targetEl.addEventListener("click", function (evt) {
        window.location = targetUrl //name of page to navigate to goes here
    })
}

function createItemDisplayer(targetElId, displayElId) {
    var targetEl = document.querySelector(targetElId);
    targetEl.addEventListener('click', function (evt) {
        var displayEl = document.querySelector(displayElId);
        displayEl.setAttribute("visible", !displayEl.getAttribute("visible"));
    });
}
