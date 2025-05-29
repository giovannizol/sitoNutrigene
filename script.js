const carousels = document.querySelectorAll('.carousels');

carousels.forEach(carousel => {
    const container = carousel.querySelector('.news-container');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');


    const scrollAmount = container.clientWidth / 3; // scroll di una card (circa 33%)

    prevBtn.addEventListener('click', () => {
    container.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
    });

    nextBtn.addEventListener('click', () => {
    container.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
    });
});
