// icon spinner //
function initializeAnimation() {
  const iconList = document.querySelector('.icon-list');
  const icons = iconList.querySelectorAll('.icon');
  const iconContainer = document.querySelector('.icon-container');

  let totalWidth = 0;
  icons.forEach(icon => {
      totalWidth += icon.offsetWidth + parseInt(getComputedStyle(icon).marginLeft) + parseInt(getComputedStyle(icon).marginRight);
  });

  const iconCount = Math.ceil(iconContainer.offsetWidth / totalWidth) * icons.length;
  for (let i = 0; i < iconCount; i++) {
      icons.forEach(icon => {
          iconList.appendChild(icon.cloneNode(true)); // Duplica los íconos
          console.log(`He duplicado ${i}`)
      });
  }

  iconList.style.width = totalWidth * iconCount + 'px';
  let scrollPos = 0;

  let startTime = performance.now();

  function animateMarquee(now) {
          const delta = (now - startTime) * 0.05; // Ajusta el factor de velocidad según sea necesario
          startTime = now;
          scrollPos += delta; // Velocidad del desplazamiento
          if (scrollPos >= totalWidth) {
              scrollPos -= totalWidth; // Reiniciar el desplazamiento desde la mitad
          }
          iconList.style.transform = `translateX(-${scrollPos}px)`;
      requestAnimationFrame(animateMarquee);
  }

  requestAnimationFrame(animateMarquee);
}
function removeUnusedIcons(iconList, iconCount) {
  const icons = iconList.querySelectorAll('.icon');
  if (icons.length > iconCount * 2) {
      icons.forEach(icon => {
          if (iconList.children.length > iconCount) {
              iconList.removeChild(iconList.children[0]); // Elimina el ícono más antiguo
              console.log('He eliminado iconos')
          }
      });
  }
}

//  mobile menu  //

window.addEventListener('load', () => {
    let buttonNavSettings = document.querySelector('.button-settings');
    buttonNavSettings.addEventListener('click', navAllSettings);
    navSettingsMobile.style.display='none';
    initializeAnimation();
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
    inicioH1.classList.remove('up');
    inicioH1.classList.add('inactive');
    header.style.borderWidth = "0";
    header.style.borderStyle = "";
    header.style.borderColor = "";
    buttonsSection.forEach(button => {
        button.addEventListener('click', () => {
          navSettingsMobile.style.display='none';
          body.style.overflow = 'visible';
          navSettingsMobile.classList.add('inactive');
          activeButton = false;
          inicioH1.classList.remove('inactive');
          inicioH1.classList.add('up');
          header.style.borderWidth = "2px";
          header.style.borderStyle = "solid";
          header.style.borderColor = "#4A90E2";
          console.log("Escucho al boton de sección")
      });
    })
    console.log("El botón fue presionado");
  } else {
    setTimeout(()=>navSettingsMobile.style.display='none',200)
    navSettingsMobile.classList.add('inactive');
    body.style.overflow = '';
    inicioH1.classList.remove('inactive');
    inicioH1.classList.add('up');
    header.style.borderWidth = "2px";
    header.style.borderStyle = "solid";
    header.style.borderColor = "#4A90E2";
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








