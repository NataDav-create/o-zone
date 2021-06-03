import actionPage from './actionPage';

export default function renderCatalog() {
  const cards = document.querySelectorAll('.goods .card');
  const catalogList = document.querySelector('.catalog-list');
  const catalogBtn = document.querySelector('.catalog-button');
  const catalogWrapper = document.querySelector('.catalog');
  const categories = new Set();
  cards.forEach((card) => {
    categories.add(card.dataset.category);
  });
  categories.forEach((item) => {
    const li = document.createElement('li');
    li.textContent = item;
    catalogList.appendChild(li)
  });

  const allLi = catalogList.querySelectorAll('li');

  catalogBtn.addEventListener('click', (e) => {
    if (catalogWrapper.style.display) {
      catalogWrapper.style.display = '';
    } else {
      catalogWrapper.style.display = 'block';
    }
    if (e.target.tagName === 'LI') {
      cards.forEach((card) => {
        if (card.dataset.category === e.target.textContent) {
          card.parentNode.style.display = '';
        } else {
          card.parentNode.style.display = 'none';
        }
      })
      allLi.forEach((elem) => {
        if (elem === e.target) {
          elem.classList.add('active');
        } else {
          elem.classList.remove('active');
        }
      });
      actionPage();
    }
  });
}