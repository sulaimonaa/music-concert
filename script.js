const toggler = document.querySelector('.navbar-toggler');
const menuUl = document.querySelector('.collapse');
const closeBtn = document.querySelector('.close-btn');
const close_btn = document.querySelector('.closeBtn');
const top_banner = document.querySelector('#top-banner');
const usp = document.querySelector('#usp');
const featured_speakers = document.querySelector('#featured-speakers');
const partners = document.querySelector('#partners');
const footer = document.querySelector('#footer');
const bodyWrap = document.querySelector('#body');

toggler.addEventListener('click', () => {
    menuUl.classList.toggle('show');
    menuUl.classList.add('show-menu');
    toggler.classList.toggle = 'hide';
    closeBtn.style.display = 'block';
    bodyWrap.style.overflow = 'hidden';
    top_banner.classList.add('blur');
    usp.classList.add('blur');
    featured_speakers.classList.add('blur');
    partners.classList.add('blur');
    footer.classList.add('blur');
})


close_btn.addEventListener('click', () => {
    menuUl.classList.toggle('show');
    menuUl.classList.remove('show-menu');
    closeBtn.style.display = 'none';
    toggler.classList.add('menu-icon');
    bodyWrap.style.overflow = 'scroll';
    top_banner.classList.remove('blur');
    usp.classList.remove('blur');
    featured_speakers.classList.remove('blur');
    partners.classList.remove('blur');
    footer.classList.remove('blur');
})