(() => {
  const refs = {
    openMobileBtn: document.querySelector('.mobile-open__btn'),
    closeMobileBtn: document.querySelector('.mobile-close__btn'),
    mobile: document.querySelector('.mobile-menu'),
  };

  refs.openMobileBtn.addEventListener('click', toggleMobile);
  refs.closeMobileBtn.addEventListener('click', toggleMobile);

  function toggleMobile() {
    document.body.classList.toggle('mobile-open');
    refs.mobile.classList.toggle('mobile--is-hidden');
  }
})();
