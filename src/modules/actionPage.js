export default function actionPage() {
  const cards = document.querySelectorAll('.goods .card');
  const discountCheckbox = document.getElementById('discount-checkbox');
  const min = document.getElementById('min');
  const max = document.getElementById('max');
  const search = document.querySelector('.search-wrapper_input');
  const searchBtn = document.querySelector('.search-btn');
  const activeLi = document.querySelector('.catalog-list li.active');

  discountCheckbox.addEventListener('click', () => {
    cards.forEach((card) => {
      if (discountCheckbox.checked) {
        if (!card.querySelector('.card-sale')) {
          card.parentNode.style.display = 'none';
        }
      } else if (activeLi) {
        if (card.dataset.category !== activeLi.textContent) {
          card.parentNode.style.display = 'none';
        }

      } else {
        card.parentNode.style.display = '';
      }
    });
  });

  function filterPrice() {
    cards.forEach((card) => {
      const cardPrice = card.querySelector('.card-price');
      const price = parseFloat(cardPrice.textContent);
      if ((min.value && price < min.value) || (max.value && price > max.value)) {
        card.parentNode.style.display = 'none';
      } else {
        card.parentNode.style.display = '';
      }
    })
  };
  min.addEventListener('change', filterPrice);
  max.addEventListener('change', filterPrice);

  searchBtn.addEventListener('click', () => {
    const searchText = new RegExp(search.value.trim(), 'i');
    cards.forEach((card) => {
      const title = card.querySelector('.card-title');
      if (!searchText.test(title.textContent)) {
        card.parentNode.style.display = 'none';
      } else {
        card.parentNode.style.display = '';
      }
    });
    search.value = '';
  });
}