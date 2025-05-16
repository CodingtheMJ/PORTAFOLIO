document.querySelectorAll('.project').forEach(project => {
  const images = project.querySelectorAll('.carousel-image');
  let index = 0;
  let interval;

  project.addEventListener('mouseenter', () => {
    if (images.length === 0) return;
    images.forEach(img => img.classList.remove('active'));
    images[0].classList.add('active');
    index = 0;

    interval = setInterval(() => {
      images[index].classList.remove('active');
      index = (index + 1) % images.length;
      images[index].classList.add('active');
    }, 2000);
  });

  project.addEventListener('mouseleave', () => {
    clearInterval(interval);
    images.forEach(img => img.classList.remove('active'));
  });
});
