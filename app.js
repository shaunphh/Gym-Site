const navSlide =() => {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.navlinks');
  const navLinks = document.querySelectorAll('.navlinks li');
  // const nav = document.querySelector('.navlink');

  menu.addEventListener('click',() => {
    nav.classList.toggle('nav-active');
  });

  //animate navLinks
  // navLinks.forEach((link, index) => {
  //   link.style.animation = 'navLinkFade 0.5s ease forwards ${index/7+ 0.3}s';
  //   // console.log(index/5 + 0.3)
  // });
}

navSlide();
