document.querySelectorAll('.media-carousel').forEach((carousel) => {
  let index = 0;
  const slides = [...carousel.querySelectorAll('img, video')];
  const dots = carousel.querySelectorAll('.dots span');

  function showSlide(i) {
    slides.forEach((el, j) => {
      el.style.display = i === j ? 'block' : 'none';
      dots[j].style.backgroundColor = i === j ? '#444' : '#000';
    });
  }

  carousel.addEventListener('mouseenter', () => {
    carousel.interval = setInterval(() => {
      index = (index + 1) % slides.length;
      showSlide(index);
    }, 2000);
  });

  carousel.addEventListener('mouseleave', () => {
    clearInterval(carousel.interval);
    index = 0;
    showSlide(index);
  });
});
