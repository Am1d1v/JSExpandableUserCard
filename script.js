

const card = document.querySelector('.card');
const toggle = document.querySelector('.card-toggle')


toggle.addEventListener('click', () => {
    card.classList.toggle('active');
});


