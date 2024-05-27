
// Mostrar y ocultar el menú en dispositivos móviles
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});

// Desplazamiento suave a las secciones
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 60, // Ajusta según la altura del encabezado fijo
            behavior: 'smooth'
        });

        // Ocultar el menú después de hacer clic en un enlace
        if (window.innerWidth <= 768) {
            document.querySelector('.navbar').classList.remove('active');
        }
    });
});
