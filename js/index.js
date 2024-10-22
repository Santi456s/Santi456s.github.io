window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
});

document.querySelectorAll('.scroll-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        setTimeout(() => {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }, 500); 
    });
});


let slideIndex = 0;
            showSlide(slideIndex);

        function nextSlide() {
            showSlide(slideIndex += 1);
            }

        function prevSlide() {
            showSlide(slideIndex -= 1);
            }

        function showSlide(index) {
            const slides = document.querySelectorAll('.slide');
                if (index >= slides.length) {
                    slideIndex = 0;
                }
                if (index < 0) {
                    slideIndex = slides.length - 1;
                }
                
            }

    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    const form = document.querySelector('.contact-form');
        form.addEventListener('submit', function(e) { 
            e.preventDefault();
            const formData = new FormData(form);
            fetch('https://formspree.io/f/xnqoqzqz', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    alert('Mensaje enviado');
                } else {
                    alert('Ocurrió un error');
                }
            }
            );
            form.reset();
            });


document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    leftArrow.addEventListener('click', function() {
        currentSlide = (currentSlide > 0) ? currentSlide - 1 : slides.length - 1;
        showSlide(currentSlide);
    });

    rightArrow.addEventListener('click', function() {
        currentSlide = (currentSlide < slides.length - 1) ? currentSlide + 1 : 0;
        showSlide(currentSlide);
    });

    // Mostrar el primer slide al cargar la página
    showSlide(currentSlide);
});


