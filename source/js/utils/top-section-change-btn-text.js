const topSectionBtn = document.querySelector('.top-section__btn');
const breakpoint = window.matchMedia('(max-width:767px)');
const mobileText = topSectionBtn.dataset.mobileText;
const btnText = topSectionBtn.textContent;


export const changeTextOnMobile = () => {
  const breakpointChecker = () => {
    if (breakpoint.matches) {
      topSectionBtn.textContent = mobileText;
    } else {
      topSectionBtn.textContent = btnText;
    }
  };
  breakpoint.addListener(breakpointChecker);
  breakpointChecker();

};
