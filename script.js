const btnOpen = document.querySelector('.btn__contact')
const btnClose = document.querySelector('.close-modal')
const burgerMenu = document.querySelector('.navbar__burger');
const navMenu = document.querySelector('.navbar__list');

btnOpen.addEventListener('click', () => {
    document.querySelector('.modal').classList.add('modal__active')
})

btnClose.addEventListener('click',() => {
    document.querySelector('.modal').classList.remove('modal__active')
})

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('active')
    navMenu.classList.toggle('active')
})
document.querySelectorAll('.navbar__list').forEach(n => n.addEventListener('click', () => {
    burgerMenu.classList.remove('active')
    navMenu.classList.remove('active')
}))

const smoothLinks = document.querySelectorAll("a[href^='#']");
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener("click", function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute("href");

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
};