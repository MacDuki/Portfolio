

// Button mobile menu  //

window.addEventListener('load', () => {
    let buttonNavSettings = document.querySelector('.button-settings');
    buttonNavSettings.addEventListener('click', navAllSettings);
  }); 

 
// let toggleNavSettingsMobile = () => {
//     const navSettingsMobile = document.querySelector('.settings-mobile');
//     const body = document.querySelector('body');
//     navSettingsMobile.classList.toggle('inactive');
//     body.style.overflow = 'hidden';
// }
const body = document.querySelector('body');
const navSettingsMobile = document.querySelector('.settings-mobile');
let activeButton = false;
function navAllSettings() {
  activeButton = !activeButton;
  
  if (activeButton) {
    navSettingsMobile.classList.remove('inactive');
    body.style.overflow = 'hidden';
    console.log("El botón fue presionado");
  } else {
    navSettingsMobile.classList.add('inactive');
    body.style.overflow = '';
    console.log("El botón fue presionado nuevamente");
  }
}

//bio options (help) //

const shortest = document.querySelector('.shortest');
const shorter = document.querySelector('.shorter');
const short = document.querySelector('.short');
const long = document.querySelector('.long');
const longer = document.querySelector('.longer');
const longest = document.querySelector('.longest'); 
const sectionSobreMi = document.querySelector('#sobre-mi');
const parrafo = document.querySelector('.parrafo-multiple');
const elements = [shortest, shorter, short, long, longer, longest];

elements.forEach(element => {
  element.addEventListener('click', () => {
    if (element === elements[0]) {
    parrafo.textContent = "Lo intenta...";
    }
    else if (element === elements[1]) {
        parrafo.remove
        parrafo.textContent = "Tengo que hacer este mas largo, lo suficiente como para que pueda meter más info ";
        sectionSobreMi.insertBefore(parrafo, sectionSobreMi.children[2]);
        console.log("shorter");
    }
    else if (element === elements[2]) {
        parrafo.remove
        parrafo.textContent = " Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀";
        sectionSobreMi.insertBefore(parrafo, sectionSobreMi.children[2]);
        console.log("Short");
    }
    else if (element === elements[3]) {
        parrafo.remove
        parrafo.textContent = "Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀";
        sectionSobreMi.insertBefore(parrafo, sectionSobreMi.children[2]);
        console.log("long");
    }
    else if (element === elements[4]) {
        parrafo.remove
        parrafo.textContent = "Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀";
        sectionSobreMi.insertBefore(parrafo, sectionSobreMi.children[2]);
        console.log("longer");
    }
    else if (element === elements[5]) {
        parrafo.remove
        parrafo.textContent = "Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀";
        sectionSobreMi.insertBefore(parrafo, sectionSobreMi.children[2]);
        console.log("longest");
    }
  });
});


//Navbar fixed (Stop)//
// Obtener el elemento de la navbar
const navbar = document.querySelector('.navbar');

// Obtener la posición de la sección deseada
const desiredSection = document.querySelector('#sobre-mi');
const desiredSectionPosition = desiredSection.offsetTop;

// Función para verificar la posición de desplazamiento y agregar/quitar la clase en la navbar
function handleNavbarPosition() {
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition >= desiredSectionPosition) {
    navbar.classList.add('fixed-navbar');
  } else {
    navbar.classList.remove('fixed-navbar');
  }
}

// Escuchar el evento de desplazamiento de la ventana
window.addEventListener('scroll', handleNavbarPosition);

// Ejecutar la función inicialmente para verificar la posición inicial de la página
handleNavbarPosition();

