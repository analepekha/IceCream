(() => {
  const menuBtnRef = document.querySelector('[data-mobile-modal-open]');
  const menuHeaderRef = document.querySelector('[data-header-modal-open]');
  const mobileMenuRef = document.querySelector('[data-header-modal]');
  const mobileBtnClose = document.querySelector('[data-header-modal-close]');

  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-hidden');
  });
  menuHeaderRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-hidden');
  });

  mobileBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-hidden');
  });
})();