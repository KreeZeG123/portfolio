document.addEventListener('DOMContentLoaded', function () {
    // Sélectionnez les éléments du carrousel
    const carouselContainer = document.querySelector('.carousel-container');
    const slides = document.querySelectorAll('.carousel-slide');
    const captions = document.querySelectorAll('.carousel-caption');
    const paragraph = document.querySelector('#project-index');

    let currentIndex = 0;

    // Fonction pour afficher la diapositive suivante
    function showNextSlide() {
        hideSlide(currentIndex);
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        paragraph.innerText ="Projet "+(currentIndex+1)+"/"+slides.length;
    }

    // Fonction pour afficher une diapositive spécifique
    function showSlide(index) {
        slides[index].classList.remove('display-hidden');
        if ( !captions[index].classList.contains('display-hidden')) {
            captions[index].classList.add('display-hidden');
        }
    }

    // Fonction pour masquer une diapositive spécifique
    function hideSlide(index) {
        slides[index].classList.add('display-hidden');
        if ( !captions[index].classList.contains('display-hidden')) {
            captions[index].classList.add('display-hidden');
        }
    }

    // Ajouter des gestionnaires d'événements de survol à chaque image
    slides.forEach((slide, index) => {
        const image = slide.querySelector('img');

        image.addEventListener('click', () => {
            if ( window.innerWidth > 666 ) {
                showNextSlide();
                clearInterval(carouselInterval);
                startCarousel();
            }
        });

        image.addEventListener('mouseover', () => {
            if ( captions[index].classList.contains('display-hidden')) {
                captions[index].classList.remove('display-hidden');
            }
        });
        

        image.addEventListener('touchstart', () => {
            if ( captions[index].classList.contains('display-hidden')) {
                captions[index].classList.remove('display-hidden');
            }
        });

        captions[index].addEventListener('mouseover', () => {
            if ( captions[index].classList.contains('display-hidden')) {
                captions[index].classList.remove('display-hidden');
            }
            image.classList.add('caption-hovered');
        });

        captions[index].addEventListener('mouseout', () => {
            if ( captions[index].classList.contains('display-hidden')) {
                captions[index].classList.remove('display-hidden');
            }
            image.classList.remove('caption-hovered');
        });

        image.addEventListener('mouseout', () => {
            if ( !captions[index].classList.contains('display-hidden')) {
                captions[index].classList.add('display-hidden');
                image.classList.remove('caption-hovered');
            }
        });
    });


    // Démarrez le carrousel
    let carouselInterval;
    function startCarousel() {
        carouselInterval  = setInterval(showNextSlide, 5000); // Changez l'intervalle selon vos préférences (en millisecondes)
    }

    // Affichez la première diapositive et démarrez le carrousel
    showSlide(currentIndex);
    startCarousel();
});
