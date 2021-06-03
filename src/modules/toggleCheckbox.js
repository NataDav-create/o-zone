export default function toggleCheckbox() {
  let checkbox = document.getElementById('discount-checkbox');
  checkbox.addEventListener('change', function () {
    if (this.checked === true) {
      this.nextElementSibling.classList.add('checked');
    } else {
      this.nextElementSibling.classList.remove('checked');
    }
  })
};