(() => {
  const menuBtnRef = document.querySelector('[menu-button]');
  const mobileMenuRef = document.querySelector('[header-menu]');
  const mobileBtnClose = document.querySelector('[menu-close]');

  menuBtnRef.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });

  mobileBtnClose.addEventListener('click', () => {
    mobileMenuRef.classList.toggle('is-open');
  });
})();