const carousel = document.querySelector('.flex.overflow-x-auto');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

prevButton.addEventListener('click', () => {
    carousel.scrollBy({ left: -carousel.clientWidth, behavior: 'smooth' });
});

nextButton.addEventListener('click', () => {
    carousel.scrollBy({ left: carousel.clientWidth, behavior: 'smooth' });
});
