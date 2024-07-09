const logh = document.querySelector('#Log')
const modalbg = document.querySelector('.modal-background')
const modal = document.querySelector('.modal')

logh.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalbg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});