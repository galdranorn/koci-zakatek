window.addEventListener('load', () => {
  const $metamorphosis = document.querySelector('[metamorphosis]');
  const $mBars = document.querySelector('[m-bars]');
  const $mNavPrev = document.querySelector('[m-nav-prev]');
  const $mNavNext = document.querySelector('[m-nav-next]');

  let mCarouselState = {};
  let eventsSet = [];
  let animTimer;

  const setMState = () => {
    mCarouselState = {
      index: parseInt(document.querySelector('[m-tab-active]').dataset.mTabIndex),
      activeTab: document.querySelector('[m-tab-active]'),
      activeBar: document.querySelector('[m-bar-active]'),
      windowWidth: window.innerWidth
    }
  };

  const goToMSlide = (target) => {
    $metamorphosis.classList.remove('pos1');
    $metamorphosis.classList.remove('pos2'),
    $metamorphosis.classList.remove('pos3'),
    $metamorphosis.classList.add(`pos${target}`);
  };

  const updateMBars = (target) => {
    const newActiveBar = document.querySelector(`[data-m-bar-index="${target}"]`);

    mCarouselState.activeBar.classList.remove('active');
    mCarouselState.activeBar.removeAttribute('m-bar-active');
    newActiveBar.classList.add('active');
    newActiveBar.setAttribute('m-bar-active', '');
  };

  const imageSwitcher = (target) => {
    const $image = document.querySelector(`[data-m-image="${target}"]`);

    const resetAnim = () => {
      clearTimeout(animTimer);
      animTimer = setTimeout(switchImg, 7000);
    };

    const setBefore = () => {
      $image.classList.remove('after');
      $image.classList.add('before');
      $image.removeAttribute('data-image-state');
      $image.setAttribute('data-image-state', 'before');
      resetAnim();
    };

    const setAfter = () => {
      $image.classList.remove('before');
      $image.classList.add('after');
      $image.removeAttribute('data-image-state');
      $image.setAttribute('data-image-state', 'after');
      resetAnim();
    };

    const switchImg = () => {
      const currentState = document.querySelector(`[data-m-image="${target}"]`).dataset.imageState;
      (currentState === 'before') ? setAfter() : setBefore();
    };

    if (!eventsSet.includes(parseInt(target))) {
      $image.addEventListener('click', () => switchImg());
      eventsSet.push(parseInt(target));
    };
    
    resetAnim();
  };

  const updateMTabs = (target) => {
    const newActiveTab = document.querySelector(`[data-m-tab-index="${target}"]`);
    
    mCarouselState.activeTab.classList.remove('active');
    mCarouselState.activeTab.removeAttribute('m-tab-active');

    newActiveTab.classList.add('active');
    newActiveTab.setAttribute('m-tab-active', '');
  };

  const updateMNav = (target) => {
    $mNavPrev.classList.remove('disabled');
    $mNavNext.classList.remove('disabled');

    if (target == 0) {
      $mNavPrev.classList.add('disabled');
    } else if (target == 3) {
      $mNavNext.classList.add('disabled');
    }
  };

  const metamorphosis = (target) => {
    setMState();
    goToMSlide(target);
    updateMTabs(target);
    updateMBars(target);
    updateMNav(target);
    imageSwitcher(target);
  };

  metamorphosis(0);

  $metamorphosis.addEventListener('click', (e) => {
    const targetIndex = e.target.dataset.mTabIndex;
    if (targetIndex) metamorphosis(targetIndex);
  });

  $mBars.addEventListener('click', (e) => {
    const targetIndex = e.target.dataset.mBarIndex;
    if (targetIndex) metamorphosis(targetIndex);
  });

  $mNavPrev.addEventListener('click', () => {
    setMState();
    const targetIndex = mCarouselState.index - 1;
    if (targetIndex >= 0) metamorphosis(targetIndex);
  });

  $mNavNext.addEventListener('click', () => {
    setMState();
    const targetIndex = mCarouselState.index + 1;
    if (targetIndex < 4) metamorphosis(targetIndex);
  });
}, { passive: true })
