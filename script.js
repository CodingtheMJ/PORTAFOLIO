// Mostrar botón de volver arriba
const scrollTopBtn = document.createElement("button");
scrollTopBtn.textContent = "↑ Volver arriba";
scrollTopBtn.className = "btn btn-light position-fixed bottom-0 end-0 m-4 d-none";
document.body.appendChild(scrollTopBtn);

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    scrollTopBtn.classList.remove("d-none");
  } else {
    scrollTopBtn.classList.add("d-none");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Mostrar/ocultar detalles del proyecto
const botonesToggle = document.querySelectorAll(".btn-toggle-detalles");
botonesToggle.forEach(btn => {
  btn.addEventListener("click", () => {
    const detalles = btn.nextElementSibling;
    if (detalles.classList.contains("d-none")) {
      detalles.classList.remove("d-none");
      btn.textContent = "Ocultar detalles";
    } else {
      detalles.classList.add("d-none");
      btn.textContent = "Mostrar detalles";
    }
  });
});

// Cambiar fondo de navbar al hacer scroll
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-opacity-75");
  } else {
    navbar.classList.remove("bg-opacity-75");
  }
});
