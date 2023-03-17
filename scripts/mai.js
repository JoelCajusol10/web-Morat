// Obtener la fecha actual y mostrarla en el encabezado de la página
const currentDate = new Date();
const currentDateString = currentDate.toLocaleDateString();
const headerDateElement = document.getElementById('header-date');
headerDateElement.textContent = currentDateString;

// Desplazamiento suave al hacer clic en los enlaces de navegación
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    const topOffset = targetElement.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: topOffset,
      behavior: 'smooth'
    });
  });
});

// Validación de formulario de contacto
const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name-input');
const emailInput = document.getElementById('email-input');
const messageTextarea = document.getElementById('message-textarea');
const submitButton = document.getElementById('submit-button');

submitButton.addEventListener('click', e => {
  e.preventDefault();
  if (nameInput.value === '' || emailInput.value === '' || messageTextarea.value === '') {
    alert('Por favor complete todos los campos');
  } else {
    alert('Gracias por su mensaje!');
    contactForm.reset();
  }
});
