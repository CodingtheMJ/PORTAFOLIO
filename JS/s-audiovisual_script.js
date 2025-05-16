document.querySelectorAll('.carousel').forEach(carousel => {
  const images = carousel.querySelectorAll('img');
  let currentIndex = 0;

  const showImage = index => {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
  };

  carousel.querySelector('.prev-btn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  carousel.querySelector('.next-btn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });
});
