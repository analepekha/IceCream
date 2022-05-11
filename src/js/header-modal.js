(() => {
  const menuBtnRef = document.querySelector('[mobile-modal-open]');
  const menuHeaderRef = document.querySelector('[header-modal-open]');
  const mobileMenuRef = document.querySelector('[header-modal]');
  const mobileBtnClose = document.querySelector('[header-modal-close]');

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