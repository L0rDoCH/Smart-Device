import animateScrollTo from 'animated-scroll-to';

const form = document.querySelector('.feedback');
const btn = document.querySelector('.top-section__btn');
const breakpointMobile = window.matchMedia('(max-width:767px)');
const breakpointTablet = window.matchMedia('(max-width:1023px)');

export const scrollToForm = () => {
  if (form) {
    if (btn) {
      const breakpointChecker = () => {
        if (breakpointMobile.matches) {
          btn.addEventListener('click', () => {
            animateScrollTo(form, {verticalOffset: -60, speed: 500});
          });
        } else {
          if (breakpointTablet.matches) {
            btn.addEventListener('click', () => {
              animateScrollTo(form, {verticalOffset: -90, speed: 500});
            });
          } else {
            btn.addEventListener('click', () => {
              animateScrollTo(form, {verticalOffset: -110, speed: 500});
            });
          }
        }
      };
      breakpointMobile.addListener(breakpointChecker);
      breakpointTablet.addListener(breakpointChecker);
      breakpointChecker();
    }
  }
};
