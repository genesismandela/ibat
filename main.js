// 'use strict';
// =================== HOME PAGE ===================
// HEADER MAIL ICON SHOW AND HIDE EMAIL
const mailIcon = document.querySelector(".header-home__contact__mail-icon");
mailIcon.addEventListener("click", function () {
	const myEmail = document.querySelector(".header-home__contact__email");

	if (myEmail.style.visibility === "visible") {
		myEmail.style.visibility = "hidden";
	} else {
		myEmail.style.visibility = "visible";
	}
});

// // Look for .hamburger
// const hamburger = document.querySelector(".hamburger");
// // On click
// hamburger.addEventListener("click", function() {
//     // Toggle class "is-active"
//     hamburger.classList.toggle("is-active");
//     // Do something else, like open/close menu
// });

// ==================== HOME PAGE MODALS ====================
// DECLARING BODY TAG TO CHANGE THE OVERFLOW THEN MODAL IS OPENED AND CLOSED.
const wholeBody = document.getElementById("home");

// BURGER TO CLOSE THE MODAL (Variable)
const btnClose = document.querySelector(".hamburger");
// OVERLAY TO CLOSE THE MODAL (Variable)
const overlay = document.querySelector(".tech__modal__overlay");

// Function EXPRESSION THAT OPENS THE MODAL
const openModal = function () {
	modalWindow = document.querySelector(".tech__modal").style.display = "flex";
	// SET DISPLAY to FLEX! REMEMBER THE TROUBLES WRITING 'BLOCK'

	btnClose.classList.add("is-active"); // SET THE BUTTON TO X EVERYTIME THAT MODAL IS OPENED
	wholeBody.style.overflow = "hidden"; // STOP BODY SCROLLING WHEN MODAL OPENED

	console.log("Modal window opened");
};

// Function EXPRESSION THAT CLOSE THE MODAL
const closeModal = function () {
	modalWindow = document.querySelector(".tech__modal").style.display = "none";

	btnClose.classList.remove("is-active"); // REMOVE CLASS TO AVOID ANIMATION WHEN MODAL IS OPENED AGAIN
	wholeBody.style.overflow = "visible"; // SET BODY TO DEFAULT OVERFLOW
	console.log("Modal window closed");

	// SET EVERY TECHMODAL TO NONE EVERYTIME THAT MAIN MODAL IS CLOSED
	htmlModal = document.querySelector(
		".tech__modal__window--html",
	).style.display = "none";
	cssModal = document.querySelector(
		".tech__modal__window--css",
	).style.display = "none";
	sassModal = document.querySelector(
		".tech__modal__window--sass",
	).style.display = "none";
	jsModal = document.querySelector(
		".tech__modal__window--javascript",
	).style.display = "none";
};

// DECLARE ALL IMAGES IN A VARIABLE AND SET A LOOP TO OPEN THE MODAL WHEN ANY OF THEM IS CLICKED
const techImage = document.querySelectorAll(".tech__image");
// LOOP
for (var i = 0; i < techImage.length; i++) {
	techImage[i].addEventListener("click", openModal);
}

// CLOSE MODAL WHEN X BTN OR OVERLAY ARE CLICKED AND IF ESC IS PRESSED
btnClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
// KEYDOWN ESC TO CLOSE THE MODAL
window.addEventListener("keydown", (e) => {
	console.log(e.key);
	if (e.key === "Escape") {
		closeModal();
	}
});

// CREATE FUNCTIONS TO OPEN SPECIFIC TECH MODAL WINDOW FOR EACH IMAGE CLICK
// html
function openHTML() {
	openModal;
	htmlModal = document.querySelector(
		".tech__modal__window--html",
	).style.display = "flex";
	console.log("HTML opened");
}
// css
function openCSS() {
	openModal;
	cssModal = document.querySelector(
		".tech__modal__window--css",
	).style.display = "flex";
	console.log("CSS opened");
}
// sass
function openSASS() {
	openModal;
	cssModal = document.querySelector(
		".tech__modal__window--sass",
	).style.display = "flex";
	console.log("SASS opened");
}
// javascript
function openJS() {
	openModal;
	jsModal = document.querySelector(
		".tech__modal__window--javascript",
	).style.display = "flex";
	console.log("JS opened");
}

// DECLARING AN IMAGE FOR EACH TECH IMAGE
// const htmlImage = document.querySelector('.tech__image--html');
// const cssImage = document.querySelector('.tech__image--css');
// const jsImage = document.querySelector('.tech__image--javascript');

// htmlImage.addEventListener('click', openHTML);
// cssImage.addEventListener('click', openCSS);
// jsImage.addEventListener('click', openJS);
