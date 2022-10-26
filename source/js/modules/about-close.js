const aboutBtn = document.querySelector('.about__btn');
const hiddenBlock = document.querySelector('.about__hidden-block');

export const aboutClose = () => {
  if (aboutBtn) {
    if (hiddenBlock) {
      hiddenBlock.classList.add('about__hidden-block--close');
      aboutBtn.classList.add('about__btn--active');

      const openBtnText = aboutBtn.textContent;
      const closeBtnText = aboutBtn.dataset.openText;

      aboutBtn.addEventListener('click', () => {
        if (hiddenBlock.classList.contains('about__hidden-block--close')) {
          hiddenBlock.classList.remove('about__hidden-block--close');
          aboutBtn.textContent = closeBtnText;
        } else {
          hiddenBlock.classList.add('about__hidden-block--close');
          aboutBtn.textContent = openBtnText;
        }
      });
    }
  }
};
