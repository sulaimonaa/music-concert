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

// adding featured speakers dynamically
const featuredSpeakersList = [{
  artistImg: './images/ayodeji.png',
  artistName: 'Sulaimon Ayodeji',
  artistProfile: '9 years performing gospel art',
  artistBio: 'A seasoned gospel singer, started ministeration in 2014 with vast experience in gospel sound',
}, {
  artistImg: './images/donald.png',
  artistName: 'Sulaimon Donald',
  artistProfile: '9 years performing gospel art',
  artistBio: 'A seasoned gospel singer, started ministeration in 2014 with vast experience in gospel sound',
}, {
  artistImg: './images/busayo.png',
  artistName: 'Sulaimon Temitope',
  artistProfile: '9 years performing gospel art',
  artistBio: 'A seasoned gospel singer, started ministeration in 2014 with vast experience in gospel sound',
}, {
  artistImg: './images/desmond.png',
  artistName: 'Desire Desmond',
  artistProfile: '9 years performing gospel art',
  artistBio: 'A seasoned gospel singer, started ministeration in 2014 with vast experience in gospel sound',
}, {
  artistImg: './images/donald2.png',
  artistName: 'Sulaimon Donald',
  artistProfile: '9 years performing gospel art',
  artistBio: 'A seasoned gospel singer, started ministeration in 2014 with vast experience in gospel sound',
}, {
  artistImg: './images/desmond2.png',
  artistName: 'Dieko Desmond',
  artistProfile: '9 years performing gospel art',
  artistBio: 'A seasoned gospel singer, started ministeration in 2014 with vast experience in gospel sound',
}];

featuredSpeakersList.forEach((speakers) => {
  const list = document.getElementById('featuredSpeakers');
  const listItem = document.createElement('div');
  listItem.classList.add('featured-wrap');
  listItem.innerHTML = `<div class='featured-speakers-2 d-block d-md-flex'>
      <div class='featured-speakers-1 d-flex justify-content-center mb-3 mb-md-0'>
        <img src='${speakers.artistImg}' alt='speaker one' class='mx-auto mb-4 mb-md-0' />
        <div class="d-flex flex-column justify-content-center align-items-start">
          <h5 class='primary m-0'>${speakers.artistName}</h5>
          <div class='fs-line my-3'></div>
          <h6 class='secondary-color font-italic'>${speakers.artistProfile}</h6>
          <p>${speakers.artistBio}</p>
        </div>
      </div>
    </div>`;
  list.appendChild(listItem);
});