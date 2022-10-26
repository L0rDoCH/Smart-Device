const accordions = document.querySelectorAll('.accordion');

const accordionClose = (tab) => {
  const tabTitle = tab.querySelector('.accordion__title');
  const tabContent = tab.querySelector('.accordion__content');

  tabTitle.classList.add('accordion__title--closed');
  tabContent.classList.remove('accordion__content--active');
};

const accordionOpen = (tab) => {
  const tabTitle = tab.querySelector('.accordion__title');
  const tabContent = tab.querySelector('.accordion__content');

  tabTitle.classList.remove('accordion__title--closed');
  tabContent.classList.add('accordion__content--active');
};

export const accordionsStart = () => {
  accordions.forEach((tab) => {
    accordionClose(tab);

    const tabTitle = tab.querySelector('.accordion__title');
    tabTitle.addEventListener('click', () => {
      if (tabTitle.classList.contains('accordion__title--closed')) {
        accordions.forEach((openTab) => {
          accordionClose(openTab);
        });
        accordionOpen(tab);
      } else {
        accordionClose(tab);
      }
    });
  });
};
