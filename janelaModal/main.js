const btnOpenModal = document.querySelector('.btnOpenModal');

btnOpenModal.addEventListener('click', () => {
    const modal = document.querySelector(".janelaModal");
    modal.classList.add('abrir');

    modal.addEventListener('click', (e) => {
        if (e.target.classList == 'Close' || e.target.classList == 'janelaModal') {
            modal.classList.remove('abrir');
        }
    });
});
