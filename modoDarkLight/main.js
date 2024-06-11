const trilho = document.querySelector('.trilho')

const body= document.querySelector('body')

trilho.addEventListener('click', () => {
    trilho.classList.toggle('dark')
    body.classList.toggle('dark')
})