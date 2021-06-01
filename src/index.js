'use strict';

function toggleCheckbox() {
  let checkbox = document.getElementById('discount-checkbox');
  checkbox.addEventListener('change', function () {
    if (this.checked === true) {
      this.nextElementSibling.classList.add('checked');
    } else {
      this.nextElementSibling.classList.remove('checked');
    }
  })
};


function toggleCart() {
  const btnCart = document.getElementById('cart');
  const modalCart = document.querySelector('.cart');
  const closeBtn = document.querySelector('.cart-close');

  btnCart.addEventListener('click', () => {
    modalCart.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });

  closeBtn.addEventListener('click', () => {
    modalCart.style.display = 'none';
    document.body.style.overflow = '';
  });
}

function addCart() {
  const cards = document.querySelectorAll('.goods .card');
  const cartWrapper = document.querySelector('.cart-wrapper');
  const cartEmpty = document.getElementById('cart-empty');
  const countGoods = document.querySelector('.counter');


  cards.forEach((card) => {
    const btn = card.querySelector('button');
    btn.addEventListener('click', () => {
      const cardClone = card.cloneNode(true);
      cartWrapper.appendChild(cardClone);
      showData();

      const removeBtn = cardClone.querySelector('.btn');
      removeBtn.textContent = 'Delete';
      removeBtn.addEventListener('click', () => {
        cardClone.remove();
        showData();
      })
    })
  });

  function showData() {
    const cardsCart = cartWrapper.querySelectorAll('.card');
    const cardsPrice = cartWrapper.querySelectorAll('.card-price');
    const cardTotal = document.querySelector('.cart-total span');
    let sum = 0;

    countGoods.textContent = cardsCart.length;
    cardsPrice.forEach((cardPrice) => {
      let price = parseFloat(cardPrice.textContent);
      sum += price;
    });
    cardTotal.textContent = sum;

    if (cardsCart.length !== 0) {
      cartEmpty.remove();
    } else {
      cartWrapper.appendChild(cartEmpty)
    }

  }
}

function actionPage() {
  const cards = document.querySelectorAll('.goods .card');
  const discountCheckbox = document.getElementById('discount-checkbox');
  discountCheckbox.addEventListener('click', () => {
    cards.forEach((card) => {
      if (discountCheckbox.checked) {
        if (!card.querySelector('.card-sale')) {
          card.parentNode.style.display = 'none';
        }
      } else {
        card.parentNode.style.display = '';
      }
    })
  })
}

toggleCheckbox();
toggleCart();
addCart();
actionPage();