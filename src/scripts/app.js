
window.addEventListener('scroll' , function(){
  let header = document.querySelector('.header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
})


//Slick Slider Zone

$('.portfolio__carousel').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  centerPadding: '10px',
  arrows: false,
  dots:true,
  autoplaySpeed:2000,
  centerMode:true,
  responsive: [
    {
      breakpoint:1280,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 2,
      },
    },
    {
      breakpoint:992,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
      },
    },
    {
      breakpoint:480,
      settings: {
        slidesToScroll: 1,
        slidesToShow: 1,
        centerMode: true,
        dots: false,
      },
    },
  ]
});

  AOS.init();

  const mobileMenu = document.querySelector('.mobile__menu');
  const closeMenu = document.querySelector('.close__menu');
  const openMenu = document.querySelector('.nav__menu');

  openMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
  })

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('is-active');
  })
