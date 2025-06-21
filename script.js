// Adăugăm un efect de fade-in la încărcarea paginii
        document.addEventListener('DOMContentLoaded', function() {
            document.body.style.opacity = '0';
            setTimeout(function() {
                document.body.style.transition = 'opacity 0.5s ease-in';
                document.body.style.opacity = '1';
            }, 100);
        });

        // Asigurăm o navigare fluidă
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });