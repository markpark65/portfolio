// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('header .nav-links li a');

window.addEventListener('scroll', ()=> {
    let current = '';
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - sectionHeight / 3)){
            current = section.getAttribute('id');
        }
    })

    navLi.forEach( a => {
        a.classList.remove('active');
        if(a.getAttribute('href').includes(current)){
            a.classList.add('active');
        }
    })
});