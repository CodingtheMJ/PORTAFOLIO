

document.querySelectorAll('.nav-button').forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    btn.querySelector('.label').style.color = 'black';
  });
  btn.addEventListener('mouseleave', () => {
    btn.querySelector('.label').style.color = 'transparent';
  });
});
