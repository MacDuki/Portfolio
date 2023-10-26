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
const blinkCursorElement = document.querySelector(".blink-cursor");
const textToAnimate = "Todo feedback es bienvenido, contactame... ";
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
const home = document.querySelector("#inicio");
const proyect = document.querySelector("#proyectos");
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
const contactTittle = document.querySelector(".contact-tittle");
const buttonNavSettings = document.querySelector(".button-settings");
const aboutWidthAviable = aboutMe.offsetWidth;
const aboutWidthPx = (aboutWidthAviable * 100) / 100;
const personalizedTextsSp = ["Inicio", "Sobre mi", "Proyectos", "Contacto"];
const personalizedTextsEng = ["Home", "About Me", "Projects", "Contact"];
const liElements = navbar.getElementsByTagName("li");
const ionIconsContact = document.querySelectorAll(".logo-contact");
const skillIcons = document.querySelectorAll(".skill-icon");
const techSkilsContainer = document.querySelector(".tech-skills");
const contactContainer = document.querySelector(".principal-contact-container");
const animatedTextContainer = document.querySelector(
  ".animated-text-container"
);
const footer = document.querySelector(".footer");
const tittleProjects = document.querySelectorAll(".tittle-proyect");
const descriptionProjects = document.querySelectorAll(".description-project");
const actionPhrases = document.querySelectorAll(".action-phrase");
const spanForm = document.querySelectorAll(".span-form");
const legendTittle = document.querySelector(".legend-tittle");

let activeButton = false;
let textParrafoToAnimate = "paginas web.";
let currentIndexParrafoAnimated = 0;
let codeFinished = false;
let currentIndexTextAnimated = 0;
let lastClickedInput = null;
let proyectCounter = 1;
let currentIndex = 0;
let parrafoContainerBoxShadow = "0 0 10px rgba(0,0,0,.1)";
let parrafoContainerBoxShadowAnimation = "";
let parrafoContainerBorder = "1px solid var(--main-secondBackground-color";
const animationBorderFlag = false;
let isBlinking = false;
parrafoCounter.textContent = `${proyectCounter}/3`;

//animationBorder
/*
function animationBorderAbout(xmove, direction, velocity) {
	const blurValue = "1rem";
	if (animationBorderFlag) {
		if (direction === 1) {
			if (xmove < aboutWidthPx * 1.1) {
				xmove += velocity;
			} else {
				direction = -1;
			}
		} else {
			if (xmove > -aboutWidthPx * 1.1) {
				xmove -= velocity;
			} else {
				direction = 1;
			}
		}
		aboutMe.style.boxShadow = `${xmove}px 0 ${blurValue} 0px #23a6d5`;
		setTimeout(() => animationBorderAbout(xmove, direction, velocity), 100); // Intervalo de 100ms entre cada cambio
	}
}
*/
//function parrafoMultiple close

function parrafoMultipleClose(isClosed) {
  elements.forEach((element) => {
    if (isClosed) {
      element.checked = false;
      lastClickedInput = null;
      parrafoContainer.style.height = "0";
      parrafoContainer.style.boxShadow = "none";
      parrafoContainer.style.border = "none";
      setTimeout(() => {
        parrafo.remove();
      }, 400);
    }
  });
}

// Switch Theme //
themeSwitch.addEventListener("change", () => {
  if (themeSwitch.checked) {
    legendTittle.style.color = "var(--main-secondBackground-color)";
    spanForm.forEach((span) => {
      span.style.color = "var(--main-secondBackground-color)";
    });

    descriptionProjects.forEach((description) => {
      description.style.color = "var(--main-secondBackground-color)";
    });
    actionPhrases.forEach((phrase) => {
      phrase.style.color = "var(--main-secondBackground-color)";
    });
    tittleProjects.forEach((tittle) => {
      tittle.style.color = "var(--main-secondBackground-color)";
    });
    footer.style.color = "var(--main-secondBackground-color)";
    footer.style.backgroundColor = "var(--main-backgroundNight-color)";
    contactContainer.style.border =
      " .1rem solid var(--main-secondBackground-color) ";
    animatedTextContainer.style.border =
      " .1rem solid var(--main-secondBackground-color) ";
    contactContainer.style.boxShadow = "";
    animatedTextContainer.style.boxShadow = "";
    proyectContainer.style.border = " 1.5px solid var(--main-background-color)";
    proyectContainer.style.boxShadow = "";
    skillIcons.forEach((icon) => {
      icon.style.color = "var(--main-secondBackground-color)";
    });
    ionIconsContact.forEach((icon) => {
      icon.style.color = "var(--main-secondBackground-color)";
    });
    blinkCursorElement.style.color = "var(--main-secondBackground-color)";
    textContactElement.style.color = "var(--main-secondBackground-color)";
    navSettingsMobile.style.backgroundColor =
      "var(--main-secondBackgroundNight-color";
    parrafoMultipleClose(true);
    parrafoContainerBoxShadowAnimation =
      "boxShadowAnimation 4s  infinite alternate";
    aboutMe.style.animation = "shadowNeon 8s linear infinite alternate";
    contact.style.animation = "shadowNeon 8s linear infinite alternate";
    proyect.style.animation = "shadowNeon 8s linear infinite alternate";
    /*header.style.boxShadow = "0 0 .5rem #dbe6f4";*/
    buttonNavSettings.style.color = "var(--main-secondBackground-color)";
    contactTittle.style.animation =
      "neon-animation 4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite alternate";
    proyectsTittle.style.animation =
      "neon-animation 4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite alternate";
    aboutMeTittle.style.animation =
      "neon-animation 4s cubic-bezier(0.165, 0.84, 0.44, 1) infinite alternate";
    parrafoContainerBorder = "1px solid var(--main-backgroundNight-color";
    parrafo.style.color = "var(--main-test-color)";
    parrafoContainer.style.border = "none";
    parrafoContainer.style.boxShadow = "none";
    parrafoContainer.style.backgroundColor =
      "var(--main-secondBackgroundNight-color)";
    contact.style.background = "rgb(4,11,20)";
    contact.style.background =
      "linear-gradient(90deg, rgba(4,11,20,1) 11%, rgba(2,8,16,1) 30%, rgba(2,8,16,1) 100%)";
    proyect.style.background = "rgb(2,8,16)";
    proyect.style.background =
      "linear-gradient(90deg, rgba(2,8,16,1) 3%, rgba(3,7,10,1) 12%, rgba(2,8,16,1) 31%, rgba(2,8,16,1) 40%)";
    aboutMe.style.background = "rgb(2,8,16)";
    aboutMe.style.background =
      "linear-gradient(90deg, rgba(2,8,16,1) 0%, rgba(2,8,16,1) 13%, rgba(5,19,28,1) 100%)";
    header.style.background = "rgb(0,16,41)";
    header.style.background =
      "linear-gradient(90deg, rgba(0,16,41,1) 0%, rgba(0,16,41,1) 13%, rgba(3,20,31,1) 100%)";
    home.style.background = "rgb(0,16,41)";
    home.style.background =
      "linear-gradient(90deg, rgba(0,16,41,1) 0%, rgba(0,16,41,1) 13%, rgba(3,20,31,1) 100%)";
    inicioTittle.style.color = "var(--main-secondBackground-color)";
    staticParrafo.style.color = "var(--main-secondBackground-color)";
  } else {
    legendTittle.style.color = "var(--main-black-color)";
    spanForm.forEach((span) => {
      span.style.color = "var(--main-black-color)";
    });
    descriptionProjects.forEach((description) => {
      description.style.color = "var(--main-black-color)";
    });
    actionPhrases.forEach((phrase) => {
      phrase.style.color = "var(--main-black-color)";
    });
    tittleProjects.forEach((tittle) => {
      tittle.style.color = "var(--main-black-color)";
    });
    footer.style.color = "var(--main-black-color)";
    footer.style.backgroundColor = "var(--main-background-color)";
    contactContainer.style.border =
      " 1rem solid var(--main-secondBackground-color) ";
    animatedTextContainer.style.border =
      " 1rem solid var(--main-secondBackground-color) ";
    contactContainer.style.boxShadow = "1rem  1rem .5rem rgba(0,0,0,.1)";
    animatedTextContainer.style.boxShadow = "1rem  1rem .5rem rgba(0,0,0,.1)";
    proyectContainer.style.border = "";
    proyectContainer.style.boxShadow = "0 .5rem  .5rem .5rem rgba(0,0,0,.1)";
    skillIcons.forEach((icon) => {
      icon.style.color = "var(--main-black-color)";
    });
    ionIconsContact.forEach((icon) => {
      icon.style.color = "var(--main-black-color)";
    });
    blinkCursorElement.style.color = "var(--main-black-color)";
    textContactElement.style.color = "var(--main-black-color)";
    navSettingsMobile.style.backgroundColor = "var(--main-black-color)";
    parrafoMultipleClose(true);
    parrafoContainerBoxShadowAnimation = "";
    aboutMe.style.boxShadow = "0 0 0 .1px var(--main-black-color)";
    contact.style.boxShadow = "0 0 0 .1px var(--main-black-color)";
    proyect.style.boxShadow = "0 5px .2rem var(--main-black-color)";
    header.style.boxShadow = "0 0 10px rgba(0,0,0,.09)";
    buttonNavSettings.style.color = "var(--main-black-color)";
    contactTittle.style.animation = "";
    proyectsTittle.style.animation = "";
    aboutMeTittle.style.animation = "";
    parrafo.style.color = "var(--main-black-color)";
    parrafoContainerBorder = "1px solid var(--main-secondBackground-color";
    parrafoContainerBoxShadow = "0 0 10px rgba(0,0,0,.1)";
    parrafoContainer.style.boxShadow = "none";
    parrafoContainer.style.border = "none";
    parrafoContainer.style.backgroundColor = "var(--main-background-color)";
    aboutMe.style.backgroundColor = "var(--main-secondBackground-color)";
    contact.style.backgroundColor = "var(--main-secondBackground-color)";
    home.style.background = "";
    aboutMe.style.background = "";
    proyect.style.background = "";
    contact.style.background = "";
    header.style.background = "";
    aboutMe.style.animation = "";
    contact.style.animation = "";
    proyect.style.animation = "";
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
  if (currentIndexTextAnimated <= textToAnimate.length) {
    // Agrega el indicador de escritura y las letras una por una
    textContactElement.textContent = textToAnimate.substring(
      0,
      currentIndexTextAnimated
    );
    if (isBlinking) {
      textContactElement.textContent += "|";
    }
    currentIndexTextAnimated++;
    setTimeout(animateText, 100);
  } else {
    currentIndexTextAnimated = 0;
    isBlinking = true;
    blinkCursor();
  }
}

function blinkCursor() {
  if (isBlinking) {
    blinkCursorElement.textContent = "";
    isBlinking = false;
  } else if (!isBlinking) {
    blinkCursorElement.textContent = "|";
    isBlinking = true;
  }
  setTimeout(blinkCursor, 500);
}

function handleScroll() {
  const rectContact = contact.getBoundingClientRect();
  const rectAbout = aboutMe.getBoundingClientRect();

  if (rectContact.top <= window.innerHeight && rectContact.bottom >= 0) {
    animateText();
    window.removeEventListener("scroll", handleScroll);
  }
}

window.addEventListener("scroll", handleScroll);
// Switch lenguage navbar

//Switch Lenguage //

lenguageSwitch.addEventListener("change", function () {
  elements.forEach((element) => {
    element.checked = false;
  });
  for (let i = 0; i < liElements.length; i++) {
    const anchorElement = liElements[i].getElementsByTagName("a")[0];
    anchorElement.textContent = personalizedTextsEng[i];
  }
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
    for (let i = 0; i < liElements.length; i++) {
      const anchorElement = liElements[i].getElementsByTagName("a")[0];
      anchorElement.textContent = personalizedTextsSp[i];
    }
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
      buttonNavSettings.name = "menu-outline";
    }
  });
});

//  mobile menu  //

window.addEventListener("load", () => {
  buttonNavSettings.addEventListener("click", navAllSettings);
  navSettingsMobile.style.display = "none";
});

function navAllSettings() {
  activeButton = !activeButton;

  if (activeButton) {
    buttonNavSettings.name = "close-outline";
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
  } else {
    buttonNavSettings.name = "menu-outline";
    setTimeout(() => navSettingsMobile.style.display === "none", 200);
    navSettingsMobile.classList.add("inactive");
    body.style.overflow = "";
    inicioH1.classList.remove("inactive");
    inicioH1.classList.add("up");
  }
}

//bio options  //
(function parrafoMultiple() {
  elements.forEach((element, index) => {
    element.addEventListener("click", () => {
      if (lastClickedInput === element) {
        element.checked = false;
        lastClickedInput = null;
        parrafoContainer.style.height = "0";
        parrafoContainer.style.boxShadow = "none";
        parrafoContainer.style.border = "none";
        setTimeout(() => {
          parrafo.remove();
        }, 400);
      } else if (element !== lastClickedInput) {
        switch (index) {
          case 0:
            lastClickedInput = element;
            parrafoContainer.appendChild(parrafo);
            parrafoContainer.style.boxShadow = parrafoContainerBoxShadow;
            parrafo.textContent = parrafo1;
            parrafoContainer.style.border = parrafoContainerBorder;
            parrafoContainer.style.height = "5rem";
            getComputedStyle(parrafoContainer).getPropertyValue("height");
            parrafoContainer.style.transition =
              "height 0.5s ease-in-out, box-shadow 0.5s ease-in-out";
            parrafoContainer.style.animation =
              parrafoContainerBoxShadowAnimation;
            break;

          case 1:
            lastClickedInput = element;
            parrafoContainer.appendChild(parrafo);
            parrafoContainer.style.boxShadow = parrafoContainerBoxShadow;
            parrafoContainer.style.border = parrafoContainerBorder;
            parrafoContainer.style.height = "8rem";
            setTimeout(() => {
              parrafo.innerHTML = parrafo2;
            }, 200);
            getComputedStyle(parrafoContainer).getPropertyValue("height");
            parrafoContainer.style.transition =
              "height 0.5s ease-in-out, box-shadow 0.5s ease-in-out";
            parrafoContainer.style.animation =
              parrafoContainerBoxShadowAnimation;
            break;

          case 2:
            lastClickedInput = element;
            parrafoContainer.appendChild(parrafo);
            parrafoContainer.style.boxShadow = parrafoContainerBoxShadow;
            parrafoContainer.style.border = parrafoContainerBorder;
            parrafoContainer.style.height = "13rem";
            setTimeout(() => {
              parrafo.innerHTML = parrafo3;
            }, 200);
            getComputedStyle(parrafoContainer).getPropertyValue("height");
            parrafoContainer.style.transition =
              "height 0.5s ease-in-out, box-shadow 0.5s ease-in-out";
            parrafoContainer.style.animation =
              parrafoContainerBoxShadowAnimation;
            break;

          case 3:
            lastClickedInput = element;
            parrafoContainer.appendChild(parrafo);
            parrafoContainer.style.boxShadow = parrafoContainerBoxShadow;
            parrafoContainer.style.border = parrafoContainerBorder;
            parrafoContainer.style.height = "22rem";
            setTimeout(() => {
              parrafo.innerHTML = parrafo4;
            }, 200);
            parrafoContainer.style.transition =
              "height 0.5s ease-in-out, box-shadow 0.5s ease-in-out";
            parrafoContainer.style.animation =
              parrafoContainerBoxShadowAnimation;
            getComputedStyle(parrafoContainer).getPropertyValue("height");
            break;

          case 4:
            lastClickedInput = element;
            parrafoContainer.appendChild(parrafo);
            parrafoContainer.style.boxShadow = parrafoContainerBoxShadow;
            parrafoContainer.style.border = parrafoContainerBorder;
            parrafoContainer.style.height = "35rem";
            parrafoContainer.style.transition =
              "height 0.5s ease-in-out, box-shadow 0.5s ease-in-out";
            setTimeout(() => {
              parrafo.innerHTML = parrafo5;
            }, 200);
            getComputedStyle(parrafoContainer).getPropertyValue("height");

            parrafoContainer.style.animation =
              parrafoContainerBoxShadowAnimation;
            break;
        }
      }
    });
  });
})();

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
