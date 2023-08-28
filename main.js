//Smooth-scroll //
  const enlacesNav = document.querySelectorAll(".anchor-section");

  enlacesNav.forEach(enlace => {
    enlace.addEventListener("click", function (event){
      event.preventDefault();
      const href = enlace.getAttribute("href");
      const sectionToGo = document.querySelector(href);
      if (sectionToGo) {
        sectionToGo.scrollIntoView({
          behavior: "smooth"
        })
      }
    })
  })
// icon spinner //
function initializeAnimation() {
  const iconList = document.querySelector('.icon-list');
  const icons = iconList.querySelectorAll('.icon');
  const iconContainer = document.querySelector('.icon-container');

  let totalWidth = 0;
  icons.forEach(icon => {
      totalWidth += icon.offsetWidth + parseInt(getComputedStyle(icon).marginLeft) + parseInt(getComputedStyle(icon).marginRight) - 10;
  });

  const iconCount = Math.ceil(iconContainer.offsetWidth / totalWidth) * icons.length;
  for (let i = 0; i < iconCount; i++) {
      icons.forEach(icon => {
          iconList.appendChild(icon.cloneNode(true)); // Duplica los íconos
          console.log(`He duplicado ${i}`)
          console.log(`TotalWidth = ${totalWidth}`)
          console.log (`IconCount = ${iconCount}`)
          
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
const inicioH1 = document.querySelector('.inicio-tittle-container');
const header = document.querySelector('.header')
const buttonsSection = document.querySelectorAll('.anchor-section');
let activeButton = false;

function navAllSettings() {
  activeButton = !activeButton;
  
  if (activeButton) {
    navSettingsMobile.classList.remove('inactive');
    navSettingsMobile.style.display=''
    body.style.overflow = 'hidden';
    inicioH1.classList.remove('up');
    inicioH1.classList.add('inactive');
    buttonsSection.forEach(button => {
        button.addEventListener('click', () => {
          navSettingsMobile.style.display='none';
          body.style.overflow = 'visible';
          navSettingsMobile.classList.add('inactive');
          activeButton = false;
          inicioH1.classList.remove('inactive');
          inicioH1.classList.add('up');
      });
    })
    console.log("El botón fue presionado");
  } else {
    setTimeout(()=>navSettingsMobile.style.display='none',200)
    navSettingsMobile.classList.add('inactive');
    body.style.overflow = '';
    inicioH1.classList.remove('inactive');
    inicioH1.classList.add('up');
  }
}

//bio options  //

const shortest = document.querySelector('.shortest');
const shorter = document.querySelector('.shorter');
const short = document.querySelector('.short');
const longer = document.querySelector('.longer');
const longest = document.querySelector('.longest'); 
const parrafoContainer = document.querySelector('.parrafoMultiple-container');
const parrafo = document.querySelector('.parrafo-multiple');
const elements = [shortest, shorter, short, longer, longest];
let lastClickedInput = null;

elements.forEach(element => {
  element.addEventListener('click', () => {
    if (lastClickedInput === element) {
      element.checked = false;
      lastClickedInput = null;
      parrafoContainer.style.height = '0';
      setTimeout(()=>{parrafo.remove()},400);
    } else if (element === elements[0] && element !== lastClickedInput)  {
      lastClickedInput = element;
      parrafoContainer.appendChild(parrafo);
      parrafo.textContent = "Lo intenta...";
      parrafoContainer.style.height = '5rem';
      getComputedStyle(parrafoContainer).getPropertyValue('height');
      parrafoContainer.style.transition = 'height 0.5s ease-in-out';
    }
     else if (element === elements[1] && element !== lastClickedInput) {
      lastClickedInput = element;
      parrafoContainer.appendChild(parrafo);
      parrafoContainer.style.height = '10rem';
      setTimeout(()=>{parrafo.textContent = "Tengo que hacer este mas largo, lo suficiente como para que pueda meter más info ";},200);
        getComputedStyle(parrafoContainer).getPropertyValue('height');
        parrafoContainer.style.transition = 'height 0.5s ease-in-out';
    }
    else if (element === elements[2] && element !== lastClickedInput) {
      lastClickedInput = element;
      parrafoContainer.appendChild(parrafo);
      parrafoContainer.style.height = '20rem';
      setTimeout(()=>{parrafo.textContent = " Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀";},200)  
        getComputedStyle(parrafoContainer).getPropertyValue('height');
        parrafoContainer.style.transition = 'height 0.5s ease-in-out';
    }
    else if (element === elements[3] && element !== lastClickedInput) {
      lastClickedInput = element;
      parrafoContainer.appendChild(parrafo);
      parrafoContainer.style.height ='30rem';
      setTimeout(()=>{
        parrafo.textContent = "Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀";
      },200)
        parrafoContainer.style.transition = 'height .5s ease-in-out';
        getComputedStyle(parrafoContainer).getPropertyValue('height');
    }
    else if (element === elements[4] && element !== lastClickedInput) {
      lastClickedInput = element;
      parrafoContainer.appendChild(parrafo);
      parrafoContainer.style.height ='55rem';
      setTimeout(()=>{parrafo.textContent = "Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀";},200)
        getComputedStyle(parrafoContainer).getPropertyValue('height');
        parrafoContainer.style.transition = 'height 0.5s ease-in-out';
    }
  });
});

           // proyectSlider animation //
           
const leftArrow = document.querySelector('.proyect-left-arrow');
const rightArrow = document.querySelector('.proyect-right-arrow');
const proyectContainer = document.querySelector('.proyect-container');
const allCardsProyect = document.querySelectorAll('.card-container');
const parrafoCounter = document.querySelector('.proyect-counter');
let proyectCounter = 1;
parrafoCounter.textContent=`${proyectCounter}/3`
let currentIndex = 0;

rightArrow.addEventListener('click', () => {
  if (proyectCounter <3){proyectCounter++
    parrafoCounter.textContent=`${proyectCounter}/3`}
    else if (proyectCounter === 3){
      proyectCounter=1;
      parrafoCounter.textContent=`${proyectCounter}/3`
    }
  hideAllCards();
  currentIndex = (currentIndex + 1) % allCardsProyect.length;
  const nextCard = allCardsProyect[currentIndex];
  nextCard.classList.remove('hidden');
  nextCard.style.display = ''; 
  nextCard.classList.add('card-appear');
});

leftArrow.addEventListener('click', () => {
  if(proyectCounter > 1){ proyectCounter--
    parrafoCounter.textContent=`${proyectCounter}/3`}
    else if (proyectCounter === 1){
      proyectCounter=3;
      parrafoCounter.textContent=`${proyectCounter}/3`
    }
  hideAllCards();
  currentIndex = (currentIndex - 1 + allCardsProyect.length) % allCardsProyect.length;
  const nextCard = allCardsProyect[currentIndex];
  nextCard.classList.remove('hidden');
  nextCard.style.display = '';
  nextCard.classList.add('card-appear'); 
});

function hideAllCards() {
  allCardsProyect.forEach(card => {
    card.style.display = 'none';
    card.classList.add('hidden');
    card.classList.remove('card-appear');
  });
}
  




