function setupFlipCard() {
    const flipCard = document.querySelector('.flip-card');
    const flipToBackButton = document.getElementById('flip-to-back');
    const flipToFrontButton = document.getElementById('flip-to-front');
  
    flipToBackButton.addEventListener('click', function() {
      flipCard.classList.add('flip');
    });
  
    flipToFrontButton.addEventListener('click', function() {
      flipCard.classList.remove('flip');
    });
  
    flipCard.addEventListener('transitionend', function(event) {
      if (event.propertyName === 'transform') {
        const isFlipped = flipCard.classList.contains('flip');
        flipToBackButton.style.opacity = isFlipped ? 0 : 1;
        flipToFrontButton.style.opacity = isFlipped ? 1 : 0;
        flipToBackButton.style.pointerEvents = isFlipped ? 'none' : 'auto';
        flipToFrontButton.style.pointerEvents = isFlipped ? 'auto' : 'none';
      }
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    setupFlipCard();
  });