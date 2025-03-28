// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Alternador de tema
const themeToggle = document.createElement('button');
themeToggle.id = 'themeToggler';
themeToggle.innerHTML = '🌓 Tema';
document.body.prepend(themeToggle);

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    localStorage.setItem('theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
});

// Cargar tema guardado
if(localStorage.getItem('theme') === 'light') document.body.classList.add('light-mode');

// Efecto de scroll
window.addEventListener('scroll', () => {
    document.querySelectorAll('.hidden').forEach(el => {
        if(el.getBoundingClientRect().top < window.innerHeight * 0.8) {
            el.classList.add('visible');
        }
    });
    
    // Botón Subir
    scrollTopBtn.style.display = (window.scrollY > 500) ? 'block' : 'none';
});

// Acordeón
document.querySelectorAll('h3').forEach(header => {
    header.style.cursor = 'pointer';
    header.addEventListener('click', () => {
        header.nextElementSibling.classList.toggle('collapsed');
    });
});

// Botón Subir
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.id = 'scrollTop';
document.body.appendChild(scrollTopBtn);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Navegación activa
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname.split('/').pop();
    
    document.querySelectorAll('.nav-links a').forEach(link => {
        const linkPath = link.getAttribute('href');
        if(currentPath === linkPath || (currentPath === '' && linkPath === 'index.html')) {
            link.classList.add('active');
            link.style.pointerEvents = 'none';
        }
    });
});