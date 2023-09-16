//Animated text//
const textHomeElement = document.querySelector(".animate-parrafo");
const textParrafoToAnimateEnglish = "websites.";
let currentIndexParrafoAnimated = 0;

function animateParrafo() {
	if (currentIndexParrafoAnimated < textParrafoToAnimateEnglish.length) {
		textHomeElement.textContent += textParrafoToAnimateEnglish.charAt(
			currentIndexParrafoAnimated,
		);
		currentIndexParrafoAnimated++;
		setTimeout(animateParrafo, 200);
	}
}
animateParrafo();

const textContactElement = document.querySelector(".animated-text");
const textToAnimate = "Todo feedback es bienvenido, contactame...";
let currentIndexTextAnimated = 0;

function animateText() {
	if (currentIndexTextAnimated < textToAnimate.length) {
		textContactElement.textContent += textToAnimate.charAt(
			currentIndexTextAnimated,
		);
		currentIndexTextAnimated++;
		setTimeout(animateText, 100);
	} else {
		setTimeout(() => {
			textContactElement.textContent = "";
			currentIndexTextAnimated = 0;
			requestAnimationFrame(animateText);
		}, 4000);
	}
}

animateText();
//Smooth-scroll //
const enlacesNav = document.querySelectorAll(".anchor-section");

enlacesNav.forEach((enlace) => {
	enlace.addEventListener("click", function (event) {
		event.preventDefault();
		const href = enlace.getAttribute("href");
		const sectionToGo = document.querySelector(href);
		if (sectionToGo) {
			sectionToGo.scrollIntoView({
				behavior: "smooth",
			});
		}
	});
});
// icon spinner //

//  mobile menu  //

window.addEventListener("load", () => {
	const buttonNavSettings = document.querySelector(".button-settings");
	buttonNavSettings.addEventListener("click", navAllSettings);
	navSettingsMobile.style.display = "none";
});

const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");
const navSettingsMobile = document.querySelector(".settings-mobile");
const inicioH1 = document.querySelector(".inicio-tittle-container");
const header = document.querySelector(".header");
const buttonsSection = document.querySelectorAll(".anchor-section");
let activeButton = false;

function navAllSettings() {
	activeButton = !activeButton;

	if (activeButton) {
		navSettingsMobile.classList.remove("inactive");
		navSettingsMobile.style.display = "";
		body.style.overflow = "hidden";
		inicioH1.classList.remove("up");
		inicioH1.classList.add("inactive");
		buttonsSection.forEach((button) => {
			button.addEventListener("click", () => {
				navSettingsMobile.style.display = "none";
				body.style.overflow = "visible";
				navSettingsMobile.classList.add("inactive");
				activeButton = false;
				inicioH1.classList.remove("inactive");
				inicioH1.classList.add("up");
			});
		});
		console.log("El botón fue presionado");
	} else {
		setTimeout(() => navSettingsMobile.style.display === "none", 200);
		navSettingsMobile.classList.add("inactive");
		body.style.overflow = "";
		inicioH1.classList.remove("inactive");
		inicioH1.classList.add("up");
	}
}

//bio options  //

const shortest = document.querySelector(".shortest");
const shorter = document.querySelector(".shorter");
const short = document.querySelector(".short");
const longer = document.querySelector(".longer");
const longest = document.querySelector(".longest");
const parrafoContainer = document.querySelector(".parrafoMultiple-container");
const parrafo = document.querySelector(".parrafo-multiple");
const elements = [shortest, shorter, short, longer, longest];
let lastClickedInput = null;

elements.forEach((element, index) => {
	element.addEventListener("click", () => {
		if (lastClickedInput === element) {
			element.checked = false;
			lastClickedInput = null;
			parrafoContainer.style.height = "0";
			parrafoContainer.setAttribute("style", " box-shadow: none");
			setTimeout(() => {
				parrafo.remove();
			}, 400);
		} else if (element !== lastClickedInput) {
			switch (index) {
				case 0:
					lastClickedInput = element;
					parrafoContainer.appendChild(parrafo);
					parrafoContainer.setAttribute(
						"style",
						" box-shadow: 0 0 10px rgba(0,0,0,.1)",
					);
					parrafo.textContent = "Lo intenta...";
					parrafoContainer.style.height = "5rem";
					getComputedStyle(parrafoContainer).getPropertyValue("height");
					parrafoContainer.style.transition = "height 0.5s ease-in-out";
					break;

				case 1:
					lastClickedInput = element;
					parrafoContainer.appendChild(parrafo);
					parrafoContainer.setAttribute(
						"style",
						" box-shadow: 0 0 10px rgba(0,0,0,.1)",
					);
					parrafoContainer.style.height = "13rem";
					setTimeout(() => {
						parrafo.innerHTML =
							"Soy estudiante de programación web tanto del back-end como del front-end aunque personalmente prefiero el front. <br>" +
							"A lo largo de este año he trabajado para aprender las bases de la programación de manera solida y en simultaneo aplicar lo aprendido en tecnologías como Html, Css y Javascript.";
					}, 200);
					getComputedStyle(parrafoContainer).getPropertyValue("height");
					parrafoContainer.style.transition = "height 0.5s ease-in-out";
					break;

				case 2:
					lastClickedInput = element;
					parrafoContainer.appendChild(parrafo);
					parrafoContainer.setAttribute(
						"style",
						" box-shadow: 0 0 10px rgba(0,0,0,.1)",
					);
					parrafoContainer.style.height = "20rem";
					setTimeout(() => {
						parrafo.innerHTML =
							"Soy estudiante de programación web tanto del back-end como del front-end aunque personalmente prefiero el front. <br/>" +
							"A lo largo de este año he trabajado para aprender las bases de la programación de manera solida y en simultaneo aplicar lo aprendido en tecnologías como Html, Css y Javascript.<br/><br/>" +
							"Actualmente estoy  profundizado mis conocimientos en React como librería principal de Js, frameworks como Frame-motion, Rome, e.t.c. <br/>" +
							"Además de continuar aprendiendo sobre desarrollo web estoy cursando clases de inglés ( B1) para mejorar mi capacidad de comunicarme en un entorno global.";
					}, 200);
					getComputedStyle(parrafoContainer).getPropertyValue("height");
					parrafoContainer.style.transition = "height 0.5s ease-in-out";
					break;

				case 3:
					lastClickedInput = element;
					parrafoContainer.appendChild(parrafo);
					parrafoContainer.setAttribute(
						"style",
						" box-shadow: 0 0 10px rgba(0,0,0,.1)",
					);
					parrafoContainer.style.height = "30rem";
					setTimeout(() => {
						parrafo.innerHTML =
							"Soy estudiante de programación web tanto del back-end como del front-end aunque personalmente prefiero el front. <br/>" +
							"A lo largo de este año he trabajado para aprender las bases de la programación de manera solida y en simultaneo aplicar lo aprendido en tecnologías como Html, Css y Javascript.<br/><br/>" +
							"Actualmente estoy  profundizado mis conocimientos en React como librería principal de Js, frameworks como Frame-motion, Rome, e.t.c. <br/>" +
							"Además de continuar aprendiendo sobre desarrollo web estoy cursando clases de inglés ( B1) para mejorar mi capacidad de comunicarme en un entorno global.<br/><br/>" +
							"Mi viaje en la industria tech recién comienza pero ha sido una montaña rusa de aprendizaje y crecimiento. Más allá de las habilidades técnicas, he aprendido a resolver problemas de manera creativa y comprometerme con el aprendizaje continuo como filosofía personal.";
					}, 200);
					parrafoContainer.style.transition = "height .5s ease-in-out";
					getComputedStyle(parrafoContainer).getPropertyValue("height");
					break;

				case 4:
					lastClickedInput = element;
					parrafoContainer.appendChild(parrafo);
					parrafoContainer.setAttribute(
						"style",
						" box-shadow: 0 0 10px rgba(0,0,0,.1)",
					);
					parrafoContainer.style.height = "35rem";
					setTimeout(() => {
						parrafo.textContent =
							"Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀";
					}, 200);
					getComputedStyle(parrafoContainer).getPropertyValue("height");
					parrafoContainer.style.transition = "height 0.5s ease-in-out";
					break;
			}
		}
	});
});

// proyectSlider animation //

const leftArrow = document.querySelector(".proyect-left-arrow");
const rightArrow = document.querySelector(".proyect-right-arrow");
const proyectContainer = document.querySelector(".proyect-container");
const allCardsProyect = document.querySelectorAll(".card-container");
const parrafoCounter = document.querySelector(".proyect-counter");
let proyectCounter = 1;
parrafoCounter.textContent = `${proyectCounter}/3`;
let currentIndex = 0;

rightArrow.addEventListener("click", () => {
	if (proyectCounter < 3) {
		proyectCounter++;
		parrafoCounter.textContent = `${proyectCounter}/3`;
	} else if (proyectCounter === 3) {
		proyectCounter = 1;
		parrafoCounter.textContent = `${proyectCounter}/3`;
	}
	hideAllCards();
	currentIndex = (currentIndex + 1) % allCardsProyect.length;
	const nextCard = allCardsProyect[currentIndex];
	nextCard.classList.remove("hidden");
	nextCard.style.display = "";
	nextCard.classList.add("card-appear");
});

leftArrow.addEventListener("click", () => {
	if (proyectCounter > 1) {
		proyectCounter--;
		parrafoCounter.textContent = `${proyectCounter}/3`;
	} else if (proyectCounter === 1) {
		proyectCounter = 3;
		parrafoCounter.textContent = `${proyectCounter}/3`;
	}
	hideAllCards();
	currentIndex =
		(currentIndex - 1 + allCardsProyect.length) % allCardsProyect.length;
	const nextCard = allCardsProyect[currentIndex];
	nextCard.classList.remove("hidden");
	nextCard.style.display = "";
	nextCard.classList.add("card-appear");
});

function hideAllCards() {
	allCardsProyect.forEach((card) => {
		card.style.display = "none";
		card.classList.add("hidden");
		card.classList.remove("card-appear");
	});
}
