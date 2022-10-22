/*Header Scroll Background */
window.addEventListener('scroll' , function(){
  let header = document.querySelector('.header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
});

  /*Scroll Top */
  const scrollBtn = document.querySelector('.scroll__btn');
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top:0,
      behavior: "smooth"
    })
  });
  window.addEventListener('scroll', () => {
    if (this.scroll >= 400) {
      scrollBtn.classList.add('show')
    }
    else {
      scrollBtn.classList.remove('show');
    }
  });

  /*Mobile Navigation Menu */
  const mobileMenu = document.querySelector('.mobile__menu');
  const closeMenu = document.querySelector('.close__menu');
  const openMenu = document.querySelector('.nav__menu');

  openMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
  });

  closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('is-active');
  });

  /*NavLink Scrool Anchor Point Configuration */
  const anchorPoint = document.querySelectorAll('a[href^="#"]');
  anchorPoint.forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior : "smooth"
      })
    })
  });

  /*Number Counter */
  let counterNums = document.querySelector('#count-num');
  let interval = 3000;

  counterNums.forEach((counterNum) => {
    let startValue = 0;
    let endValue = parseInt(counterNum.getAttribute('.data-val'));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
      startValue += 1;
      counterNum.textContext = startValue;
      if (startValue == endValue){
        clearInterval(counter);
      }
    },duration);
  });

  /*Slick Slider Configuration */

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

