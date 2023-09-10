const profileButton = document.querySelector('.header-btns-list__btn-profile')
const profileDropdown = document.querySelector('.profile-dropdown')

let timeout = null;

function onEnter() {
  clearTimeout(timeout);
  profileDropdown.classList.toggle('hide-dropdown');
}

function onLeave() {
  timeout = setTimeout(() => profileDropdown.classList.toggle('hide-dropdown'), 300);
}

profileButton.addEventListener('mouseenter', onEnter);
profileDropdown.addEventListener('mouseenter', onEnter);

profileButton.addEventListener('mouseleave', onLeave);
profileDropdown.addEventListener('mouseleave', onLeave);