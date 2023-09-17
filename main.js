//Animated text variables//
let parrafo1 = "Lo intenta...";
let parrafo2 =
	"Soy estudiante de programación web tanto del back-end como del front-end aunque personalmente prefiero el front.";
let parrafo3 =
	"Soy estudiante de programación web tanto del back-end como del front-end aunque personalmente prefiero el front. <br>" +
	"A lo largo de este año he trabajado para aprender las bases de la programación de manera solida y en simultaneo aplicar lo aprendido en tecnologías como Html, Css y Javascript.";
let parrafo4 =
	"Soy estudiante de programación web tanto del back-end como del front-end aunque personalmente prefiero el front. <br/>" +
	"A lo largo de este año he trabajado para aprender las bases de la programación de manera solida y en simultaneo aplicar lo aprendido en tecnologías como Html, Css y Javascript.<br/><br/>" +
	"Actualmente estoy  profundizado mis conocimientos en React como librería principal de Js, frameworks como Frame-motion, Rome, e.t.c. <br/>" +
	"Además de continuar aprendiendo sobre desarrollo web estoy cursando clases de inglés ( B1) para mejorar mi capacidad de comunicarme en un entorno global.";
let parrafo5 =
	"Soy estudiante de programación web tanto del back-end como del front-end aunque personalmente prefiero el front. <br/>" +
	"A lo largo de este año he trabajado para aprender las bases de la programación de manera solida y en simultaneo aplicar lo aprendido en tecnologías como Html, Css y Javascript.<br/><br/>" +
	"Actualmente estoy  profundizado mis conocimientos en React como librería principal de Js, frameworks como Frame-motion, Rome, e.t.c. <br/>" +
	"Además de continuar aprendiendo sobre desarrollo web estoy cursando clases de inglés ( B1) para mejorar mi capacidad de comunicarme en un entorno global.<br/><br/>" +
	"Mi viaje en la industria tech recién comienza pero ha sido una montaña rusa de aprendizaje y crecimiento. Más allá de las habilidades técnicas, he aprendido a resolver problemas de manera creativa y comprometerme con el aprendizaje continuo como filosofía personal.";
const lenguageLabel = document.querySelector(".lenguage-label");
const animateParrafo = document.querySelector(".animate-parrafo");
const textContactElement = document.querySelector(".animated-text");
const textToAnimate = "Todo feedback es bienvenido, contactame...";
const shortest = document.querySelector(".shortest");
const shorter = document.querySelector(".shorter");
const short = document.querySelector(".short");
const longer = document.querySelector(".longer");
const longest = document.querySelector(".longest");
const parrafo = document.querySelector(".parrafo-multiple");
const elements = [shortest, shorter, short, longer, longest];
const parrafoContainer = document.querySelector(".parrafoMultiple-container");
const lenguageSwitch = document.querySelector(".lenguage-switch");
const lenguageSwitchSpan = document.querySelector(".lenguage-span");
const inicioTittle = document.querySelector(".inicio-tittle");
const inicioTittleName = document.querySelector(".inicio-tittle-name");
const staticParrafo = document.querySelector(".static-parrafo");
const navbar = document.querySelector(".navbar");
const body = document.querySelector("body");
const aboutMe = document.querySelector("#sobre-mi");
const contact = document.querySelector("#contacto");
const navSettingsMobile = document.querySelector(".settings-mobile");
const inicioH1 = document.querySelector(".inicio-tittle-container");
const header = document.querySelector(".header");
const buttonsSection = document.querySelectorAll(".anchor-section");
const enlacesNav = document.querySelectorAll(".anchor-section");
const leftArrow = document.querySelector(".proyect-left-arrow");
const rightArrow = document.querySelector(".proyect-right-arrow");
const proyectContainer = document.querySelector(".proyect-container");
const allCardsProyect = document.querySelectorAll(".card-container");
const parrafoCounter = document.querySelector(".proyect-counter");
const aboutMeTittle = document.querySelector(".about-me-tittle");
const proyectsTittle = document.querySelector(".tittle-proyects");
const themeSwitch = document.querySelector(".theme-switch");
let activeButton = false;
let textParrafoToAnimate = "paginas web.";
let currentIndexParrafoAnimated = 0;
let codeFinished = false;
let currentIndexTextAnimated = 0;
let lastClickedInput = null;
let proyectCounter = 1;
let currentIndex = 0;
parrafoCounter.textContent = `${proyectCounter}/3`;

// Switch Theme //
themeSwitch.addEventListener("change", () => {
	if (themeSwitch.checked) {
		aboutMe.style.backgroundColor = "var(--main-secondBackgroundNight-color)";
		contact.style.backgroundColor = "var(--main-secondBackgroundNight-color)";
		body.style.backgroundColor = "var(--main-backgroundNight-color)";
		inicioTittle.style.color = "var(--main-secondBackground-color)";
		staticParrafo.style.color = "var(--main-secondBackground-color)";
	} else {
		aboutMe.style.backgroundColor = "var(--main-secondBackground-color)";
		contact.style.backgroundColor = "var(--main-secondBackground-color)";
		body.style.backgroundColor = "var(--main-background-color)";
		inicioTittle.style.color = "var(--main-black-color)";
		staticParrafo.style.color = "var(--main-black-color)";
	}
});

//animated text logic //
function variableTextLenguage(idioma) {
	if (idioma === "ing") {
		textParrafoToAnimate = "websites.";
		animateParrafo.textContent = "";
		currentIndexParrafoAnimated = 0;
		animateTextParrafo(textParrafoToAnimate);
	} else if (idioma === "esp") {
		animateParrafo.textContent = "";
		currentIndexParrafoAnimated = 0;
		textParrafoToAnimate = "paginas web.";
		animateTextParrafo(textParrafoToAnimate);
	}
}
function animateTextParrafo(text) {
	codeFinished = false;
	lenguageLabel.style.pointerEvents = "none";
	if (currentIndexParrafoAnimated < text.length) {
		animateParrafo.textContent += text.charAt(currentIndexParrafoAnimated);
		currentIndexParrafoAnimated++;
		setTimeout(function () {
			animateTextParrafo(text);
		}, 200);
	} else if (currentIndexParrafoAnimated === text.length) {
		codeFinished = true;
		lenguageLabel.style.pointerEvents = "all";
	}
}
animateTextParrafo(textParrafoToAnimate);
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

//Switch Lenguage //

lenguageSwitch.addEventListener("change", function () {
	elements.forEach((element) => {
		element.checked = false;
	});
	parrafoContainer.style.height = "0";
	if (lenguageSwitch.checked) {
		proyectsTittle.textContent = "Projects";
		aboutMeTittle.textContent = "About me";
		inicioTittle.textContent = "Hello, my name is";
		inicioTittleName.textContent = "Peter";
		staticParrafo.textContent = "I make";
		lenguageSwitchSpan.textContent = "Ing";
		parrafo1 = "He tries...";
		parrafo2 =
			"I am a student of web programming, both back-end and front-end, although I personally prefer front-end.";
		parrafo3 =
			"I am a web programming student of both back-end and front-end although I personally prefer front-end. <br>" +
			"Throughout this year I have worked to learn the basics of programming in a solid way and simultaneously apply what I have learned in technologies such as Html, CSS and Javascript.";
		parrafo4 =
			"I am a web programming student of both the back-end and the front-end although I personally prefer the front-end. <br/>" +
			"Throughout this year I have worked to learn the basics of programming in a solid way and simultaneously apply what I have learned in technologies such as Html, CSS and Javascript.<br/><br/>" +
			"I am currently deepening my knowledge in React as the main Js library, frameworks such as Frame-motion, Rome, etc. <br/>" +
			"In addition to continuing to learn about web development, I am taking English classes (B1) to improve my ability to communicate in a global environment.";
		parrafo5 =
			"I am a web programming student of both the back-end and the front-end although I personally prefer the front-end. <br/>" +
			"Throughout this year I have worked to learn the basics of programming in a solid way and simultaneously apply what I have learned in technologies such as Html, CSS and Javascript.<br/><br/>" +
			"I am currently deepening my knowledge in React as the main Js library, frameworks such as Frame-motion, Rome, etc. <br/>" +
			"In addition to continuing to learn about web development, I am taking English classes (B1) to improve my ability to communicate in a global environment.<br/><br/>" +
			"My journey in the tech industry is just beginning but it has been a roller coaster of learning and growth. Beyond technical skills, I have learned to solve problems creatively and commit to continuous learning as a personal philosophy.";
		const idioma = "ing";
		variableTextLenguage(idioma);
	} else {
		proyectsTittle.textContent = "Proyectos";
		aboutMeTittle.textContent = "Sobre Mí";
		inicioTittle.textContent = "Hola, mi nombre es";
		inicioTittleName.textContent = "Pedro";
		staticParrafo.textContent = "Desarrollo";
		lenguageSwitchSpan.textContent = "Esp";
		parrafo1 = "Lo intenta...";
		parrafo2 =
			"Soy estudiante de programación web tanto del back-end como del front-end aunque personalmente prefiero el front.";
		parrafo3 =
			"Soy estudiante de programación web tanto del back-end como del front-end aunque personalmente prefiero el front. <br>" +
			"A lo largo de este año he trabajado para aprender las bases de la programación de manera solida y en simultaneo aplicar lo aprendido en tecnologías como Html, Css y Javascript.";
		parrafo4 =
			"Soy estudiante de programación web tanto del back-end como del front-end aunque personalmente prefiero el front. <br/>" +
			"A lo largo de este año he trabajado para aprender las bases de la programación de manera solida y en simultaneo aplicar lo aprendido en tecnologías como Html, Css y Javascript.<br/><br/>" +
			"Actualmente estoy  profundizado mis conocimientos en React como librería principal de Js, frameworks como Frame-motion, Rome, e.t.c. <br/>" +
			"Además de continuar aprendiendo sobre desarrollo web estoy cursando clases de inglés ( B1) para mejorar mi capacidad de comunicarme en un entorno global.";
		parrafo5 =
			"Soy estudiante de programación web tanto del back-end como del front-end aunque personalmente prefiero el front. <br/>" +
			"A lo largo de este año he trabajado para aprender las bases de la programación de manera solida y en simultaneo aplicar lo aprendido en tecnologías como Html, Css y Javascript.<br/><br/>" +
			"Actualmente estoy  profundizado mis conocimientos en React como librería principal de Js, frameworks como Frame-motion, Rome, e.t.c. <br/>" +
			"Además de continuar aprendiendo sobre desarrollo web estoy cursando clases de inglés ( B1) para mejorar mi capacidad de comunicarme en un entorno global.<br/><br/>" +
			"Mi viaje en la industria tech recién comienza pero ha sido una montaña rusa de aprendizaje y crecimiento. Más allá de las habilidades técnicas, he aprendido a resolver problemas de manera creativa y comprometerme con el aprendizaje continuo como filosofía personal.";
		const idioma = "esp";
		variableTextLenguage(idioma);
	}
});

//Smooth-scroll //

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

//  mobile menu  //

window.addEventListener("load", () => {
	const buttonNavSettings = document.querySelector(".button-settings");
	buttonNavSettings.addEventListener("click", navAllSettings);
	navSettingsMobile.style.display = "none";
});

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
					parrafo.textContent = parrafo1;

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
					parrafoContainer.style.height = "8rem";
					setTimeout(() => {
						parrafo.innerHTML = parrafo2;
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
					parrafoContainer.style.height = "13rem";
					setTimeout(() => {
						parrafo.innerHTML = parrafo3;
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
					parrafoContainer.style.height = "25rem";
					setTimeout(() => {
						parrafo.innerHTML = parrafo4;
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
						parrafo.innerHTML = parrafo5;
					}, 200);
					getComputedStyle(parrafoContainer).getPropertyValue("height");
					parrafoContainer.style.transition = "height 0.5s ease-in-out";
					break;
			}
		}
	});
});

// proyectSlider animation //

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
