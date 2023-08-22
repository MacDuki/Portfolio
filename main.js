

//  mobile menu  //

window.addEventListener('load', () => {
    let buttonNavSettings = document.querySelector('.button-settings');
    buttonNavSettings.addEventListener('click', navAllSettings);
    navSettingsMobile.style.display='none';
  }); 

const navbar = document.querySelector('.navbar');
const body = document.querySelector('body');
const navSettingsMobile = document.querySelector('.settings-mobile');
const inicioH1 = document.querySelector('.inicio-tittle');
const header = document.querySelector('.header')
const buttonsSection = document.querySelectorAll('.button-section');
let activeButton = false;

function navAllSettings() {
  activeButton = !activeButton;
  
  if (activeButton) {
    navSettingsMobile.classList.remove('inactive');
    navSettingsMobile.style.display=''
    body.style.overflow = 'hidden';
    inicioH1.style.marginTop = '4.5rem'
    header.style.borderWidth = "0";
    header.style.borderStyle = "";
    header.style.borderColor = "";
    buttonsSection.forEach(button => {
        button.addEventListener('click', () => {
          navSettingsMobile.style.display='none';
          body.style.overflow = 'visible';
          navSettingsMobile.classList.add('inactive');
          activeButton = false;
          inicioH1.style.marginTop = '1.5rem'
          header.style.borderWidth = "2px";
          header.style.borderStyle = "solid";
          header.style.borderColor = "red";
          console.log("Escucho al boton de sección")
      });
    })
    console.log("El botón fue presionado");
  } else {
    setTimeout(()=>navSettingsMobile.style.display='none',800)
    navSettingsMobile.classList.add('inactive');
    body.style.overflow = '';
    inicioH1.style.marginTop = '1.5rem'
    header.style.borderWidth = "2px";
    header.style.borderStyle = "solid";
    header.style.borderColor = "red";
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
const sectionSobreMi = document.querySelector('.formContainer');
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








