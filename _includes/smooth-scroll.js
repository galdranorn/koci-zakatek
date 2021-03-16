const navLinks = document.querySelectorAll('[data-nav-link]');
console.log(navLinks)
 
smoothScroll = (e) => {
  e.preventDefault();
  const href = e.target.getAttribute('href');
  const scrollTo = document.querySelector(href).offsetTop;

  scroll({ top: scrollTo, behavior: 'smooth' });
}

for (const link of navLinks) {
  link.addEventListener('click', (e) => smoothScroll(e));
}
 
