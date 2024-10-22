document.addEventListener("DOMContentLoaded", function() {
    const sobreNosotrosLink = document.querySelector('#sobreNosotrosLink');
    const nosotrosSection = document.querySelector('#nosotros');
    const elements = document.querySelectorAll('.nosotros .equipo-containerInt, .nosotros .equipo-containerVar');

    function animateNosotrosSection() {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('show');
            }, index * 700); // Delay each element by 0.5 seconds
        });
    }

    sobreNosotrosLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        animateNosotrosSection();
        // Optionally, scroll to the #nosotros section
        nosotrosSection.scrollIntoView({ behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
        const rect = nosotrosSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            animateNosotrosSection();
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sobreNosotrosLink = document.querySelector('#sobreNosotrosLink');
    const nosotrosSection = document.querySelector('#nosotros');
    const elements = document.querySelectorAll('.nosotros .equipo-containerInt, .nosotros .equipo-containerVar');
    const visionMisionElements = document.querySelectorAll('.visionYmision .viymi .vision, .visionYmision .viymi .mision, .visionYmision .lema');
    const visionMisionSection = document.querySelector('.visionYmision');

    function animateNosotrosSection() {
        elements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('show');
            }, index * 700); // Delay each element by 0.5 seconds
        });
    }

    function animateVisionMisionSection() {
        visionMisionElements.forEach((element, index) => {
            setTimeout(() => {
                element.classList.add('show');
            }, index * 700); // Delay each element by 0.5 seconds
        });
    }

    sobreNosotrosLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default anchor behavior
        animateNosotrosSection();
        // Optionally, scroll to the #nosotros section
        nosotrosSection.scrollIntoView({ behavior: 'smooth' });
    });

    window.addEventListener('scroll', function() {
        const nosotrosRect = nosotrosSection.getBoundingClientRect();
        if (nosotrosRect.top < window.innerHeight && nosotrosRect.bottom >= 0) {
            animateNosotrosSection();
        }

        const visionMisionRect = visionMisionSection.getBoundingClientRect();
        if (visionMisionRect.top < window.innerHeight && visionMisionRect.bottom >= 0) {
            animateVisionMisionSection();
        }
    });
});