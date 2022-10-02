AOS.init();

window.addEventListener('scroll' , function(){
  let header = document.querySelector('.header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active', windowPosition);
})







$('.portfolio__carousel').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    centerPadding: '25px',
    arrows: false,
    dots:true,
    autoplaySpeed:2000,
    centerMode:true,
  });