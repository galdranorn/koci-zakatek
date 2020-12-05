window.addEventListener('load', () => {

  const $navTrigger = document.getElementById('navTrigger');
  const $navBox = document.getElementById('navBox');

  const classes = {
    close: 'header-nav_icon-wrapper--close',
    open: 'header-nav_list--opened'
  };

  const openNav = () => {
    $navTrigger.classList.add(classes.close);
    $navBox.classList.add(classes.open);
  };

  const closeNav = () => {
    $navTrigger.classList.remove(classes.close);
    $navBox.classList.remove(classes.open);
  };

  $navTrigger.addEventListener('click', function(e) {
    e.target.dataset.function === 'open' ? openNav() : closeNav();
  });

  $navBox.addEventListener('click', () => { closeNav(); });
});
