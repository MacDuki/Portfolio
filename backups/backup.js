elements.forEach(element => {
    element.addEventListener('click', () => {
      if (lastClickedInput === element) {
        element.checked = false;
        lastClickedInput = null;
        parrafoContainer.style.maxHeight = '0';
        parrafoContainer.style.height = '0';
        parrafo.remove();
      } else {
        parrafoContainer.style.maxHeight = '';
        lastClickedInput = element;
        parrafoContainer.appendChild(parrafo);
      }
    });
  
    element.addEventListener('click', () => {
      if (element === elements[0]) { 
      parrafo.textContent = "Lo intenta...";
      parrafoContainer.style.height = '5rem';
      getComputedStyle(parrafoContainer).getPropertyValue('height');
      parrafoContainer.style.transition = 'height 0.5s ease-in-out';
      }
      else if (element === elements[1]) {
        parrafoContainer.style.height = '10rem';
        setTimeout(()=>{parrafo.textContent = "Tengo que hacer este mas largo, lo suficiente como para que pueda meter más info ";},200);
          getComputedStyle(parrafoContainer).getPropertyValue('height');
          parrafoContainer.style.transition = 'height 0.5s ease-in-out';
      }
      else if (element === elements[2]) {
        parrafoContainer.style.height = '20rem';
        setTimeout(()=>{parrafo.textContent = " Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀";},200)  
          getComputedStyle(parrafoContainer).getPropertyValue('height');
          parrafoContainer.style.transition = 'height 0.5s ease-in-out';
      }
      else if (element === elements[3]) {
        parrafoContainer.style.height ='30rem';
        setTimeout(()=>{
          parrafo.textContent = "Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀";
        },200)
          parrafoContainer.style.transition = 'height .5s ease-in-out';
          getComputedStyle(parrafoContainer).getPropertyValue('height');
      }
      else if (element === elements[4]) {
        parrafoContainer.style.height ='55rem';
        setTimeout(()=>{parrafo.textContent = "Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀 Me gusta la cocina de anime, me gusta sacar al chucho 😀";},200)
          
          
          getComputedStyle(parrafoContainer).getPropertyValue('height');
          parrafoContainer.style.transition = 'height 0.5s ease-in-out';
      }
    });
  
  });
  