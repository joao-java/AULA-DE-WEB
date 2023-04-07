
// ----------------- Slides
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const intervalTime = 2000; // tempo em milissegundos

let slideInterval = setInterval(nextSlide, intervalTime);

function nextSlide() {
  slides.scrollBy({
    left: slide[0].offsetWidth,
    behavior: 'smooth'
  });

  if (slides.scrollLeft + slides.offsetWidth >= slides.scrollWidth) {
    slides.scroll({
      left: 0,
      behavior: 'smooth'
    });
  }
}

function prevSlide() {
  slides.scrollBy({
    left: -slide[0].offsetWidth,
    behavior: 'smooth'
  });

  if (slides.scrollLeft === 0) {
    slides.scroll({
      left: slides.scrollWidth,
      behavior: 'smooth'
    });
  }
}

function goToSlide(index) {
  slides.scrollTo({
    left: slide[index].offsetLeft,
    behavior: 'smooth'
  });
}

const btnAnterior = document.querySelector('.anterior');
const btnProximo = document.querySelector('.proximo');

btnAnterior.addEventListener('click', prevSlide);
btnProximo.addEventListener('click', nextSlide);
