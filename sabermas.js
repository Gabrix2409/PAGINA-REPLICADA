// JavaScript para la funcionalidad de la página de Gruples

// Menú de navegación móvil
const navToggle = document.createElement('div');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '<span></span><span></span><span></span>';
document.querySelector('.header-container').appendChild(navToggle);

const nav = document.querySelector('nav ul');
navToggle.addEventListener('click', () => {
    nav.classList.toggle('show');
});

// Cerrar el menú al hacer clic en un enlace (para pantallas pequeñas)
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('show');
    });
});

// Validación del formulario de contacto
const contactForm = document.querySelector('form');
const nombreInput = document.querySelector('#nombre');
const emailInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');

contactForm.addEventListener('submit', (e) => {
    let errorMessage = '';

    if (nombreInput.value.trim() === '') {
        errorMessage += 'Por favor, introduce tu nombre.\n';
    }

    if (!validateEmail(emailInput.value)) {
        errorMessage += 'Por favor, introduce un correo electrónico válido.\n';
    }

    if (mensajeInput.value.trim() === '') {
        errorMessage += 'Por favor, introduce un mensaje.\n';
    }

    if (errorMessage) {
        e.preventDefault();
        alert(errorMessage);
    }
});

// Función de validación de correo electrónico
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Desplazamiento suave a las secciones
const sectionLinks = document.querySelectorAll('nav ul li a');

sectionLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 50, // Ajustar el desplazamiento
            behavior: 'smooth'
        });
    });
});
