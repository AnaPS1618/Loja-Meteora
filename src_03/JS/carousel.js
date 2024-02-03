document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.querySelector('.carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const indicatorsContainer = document.querySelector('.indicators');
  
    let currentIndex = 0;
  
    // Criar indicadores
    for (let i = 0; i < carousel.children.length; i++) {
      const indicator = document.createElement('div');
      indicator.classList.add('indicator');
      indicatorsContainer.appendChild(indicator);
  
      indicator.addEventListener('click', () => {
        goToSlide(i);
      });
    }
  
    const indicators = document.querySelectorAll('.indicator');
  
    // Adicionar eventos aos botões de navegação
    prevButton.addEventListener('click', () => {
      goToSlide(currentIndex - 1);
    });
  
    nextButton.addEventListener('click', () => {
      goToSlide(currentIndex + 1);
    });
  
    // Função para navegar até um determinado slide
    function goToSlide(index) {
      if (index < 0) {
        index = carousel.children.length - 1;
      } else if (index >= carousel.children.length) {
        index = 0;
      }
  
      currentIndex = index;
  
      const translateValue = -index * 100 + '%';
      carousel.style.transform = 'translateX(' + translateValue + ')';
  
      // Atualizar indicadores
      indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === currentIndex);
      });
    }
  });