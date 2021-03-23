window.addEventListener('load', () => {
  const $wrapper = document.querySelector('[carousel]');
  const $tabs = document.querySelector('[tab]');
  const $barsWrapper = document.querySelector('[bars]')
  const $bars = document.querySelector('[bar]');

  let carouselState = {};

  const setState = () => {
    carouselState = {
      index: document.querySelector('[tab-active]').dataset.tabIndex,
      activeTab: document.querySelector('[tab-active]'),
      activeBar: document.querySelector('[bar-active]'),
      windowWidth: window.innerWidth
    }
  };

  const goToSlide = (target) => {
    $wrapper.classList.remove('pos1');
    $wrapper.classList.remove('pos2'),
    $wrapper.classList.remove('pos3'),
    $wrapper.classList.add(`pos${target}`);
  };

  const updateBars = (target) => {
    const newActiveBar = document.querySelector(`[data-bar-index="${target}"]`);

    carouselState.activeBar.classList.remove('active');
    carouselState.activeBar.removeAttribute('bar-active');
    newActiveBar.classList.add('active');
    newActiveBar.setAttribute('bar-active', '');
  };

  const updateTabs = (target) => {
    const newActiveTab = document.querySelector(`[data-tab-index="${target}"]`);
    
    carouselState.activeTab.classList.remove('active');
    carouselState.activeTab.removeAttribute('tab-active');
    newActiveTab.classList.add('active');
    newActiveTab.setAttribute('tab-active', '');
  };

  const carousel = (target) => {
    setState();
    goToSlide(target);
    updateTabs(target);
    updateBars(target);
  };

  $wrapper.addEventListener('click', (e) => {
    const targetIndex = e.target.dataset.tabIndex;
    if (targetIndex) { carousel(targetIndex); }
  });

  $barsWrapper.addEventListener('click', (e) => {
    const targetIndex = e.target.dataset.barIndex;
    if (targetIndex) { carousel(targetIndex); }
  });

}, { passive: true })
