let currentImage = 0;
        const images = document.querySelectorAll('.image-slide');

        function showImage(index) {
            images.forEach((image, i) => {
                image.classList.toggle('active', i === index);
            });
        }

        function prevImage() {
            currentImage = (currentImage > 0) ? currentImage - 1 : images.length - 1;
            showImage(currentImage);
        }

        function nextImage() {
            currentImage = (currentImage < images.length - 1) ? currentImage + 1 : 0;
            showImage(currentImage);
        }

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.services-slide');
    const leftArrow = document.querySelector('.services-left-arrow');
    const rightArrow = document.querySelector('.services-right-arrow');
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


document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev', 'next');
            if (i === index) {
                slide.classList.add('active');
            } else if (i === (index - 1 + slides.length) % slides.length) {
                slide.classList.add('prev');
            } else if (i === (index + 1) % slides.length) {
                slide.classList.add('next');
            }
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

    // Show the first slide initially
    showSlide(currentSlide);
});

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slide');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev', 'next');
            if (i === index) {
                slide.classList.add('active');
            } else if (i === (index - 1 + slides.length) % slides.length) {
                slide.classList.add('prev');
            } else if (i === (index + 1) % slides.length) {
                slide.classList.add('next');
            }
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

    // Show the first slide initially
    showSlide(currentSlide);
});

