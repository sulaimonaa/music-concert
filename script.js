const toggler = document.querySelector('.navbar-toggler');
const menuUl = document.querySelector('.collapse');
const closeBtn = document.querySelector('.close-btn');
const closeButton = document.querySelector('.closeBtn');
const topBanner = document.querySelector('#top-banner');
const usp = document.querySelector('#usp');
const featuredSpeakers = document.querySelector('#featured-speakers');
const partners = document.querySelector('#partners');
const footer = document.querySelector('#footer');
const bodyWrap = document.querySelector('#body');

toggler.addEventListener('click', () => {
  menuUl.classList.toggle('show');
  menuUl.classList.add('show-menu');
  toggler.classList.toggle = 'hide';
  closeBtn.style.display = 'block';
  bodyWrap.style.overflow = 'hidden';
  topBanner.classList.add('blur');
  usp.classList.add('blur');
  featuredSpeakers.classList.add('blur');
  partners.classList.add('blur');
  footer.classList.add('blur');
});

closeButton.addEventListener('click', () => {
  menuUl.classList.toggle('show');
  menuUl.classList.remove('show-menu');
  closeBtn.style.display = 'none';
  toggler.classList.add('menu-icon');
  bodyWrap.style.overflow = 'scroll';
  topBanner.classList.remove('blur');
  usp.classList.remove('blur');
  featuredSpeakers.classList.remove('blur');
  partners.classList.remove('blur');
  footer.classList.remove('blur');
});