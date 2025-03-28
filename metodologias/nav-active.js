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