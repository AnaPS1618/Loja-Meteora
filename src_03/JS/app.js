document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll("#carousel-slide");
    let currentIndex = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
      });
    }
  
    function nextSlide() {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  
    setInterval(nextSlide, 2000);
  });


//menu//
  const botaoHambuerguer = document.querySelector('#menu_hamburguer_img')
  const fecharMenu = document.querySelector('#fechar_menu')

  botaoHambuerguer.addEventListener('click', mostarMenu)
  fecharMenu.addEventListener('click', fecharMenuX)

  function mostarMenu(){
    const menuNav = document.querySelector('#menu_nav')

    if(menuNav.style.display === 'none'){
        return menuNav.style.display = 'block'
    }
    
}

  function fecharMenuX(){
    const menuNav = document.querySelector('#menu_nav')

    if(menuNav.style.display === 'block'){
      return menuNav.style.display = 'none'
  }
  }