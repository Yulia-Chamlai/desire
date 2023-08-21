const menuBtn = document.querySelector('.menu__btn');
const rightsideMenu = document.querySelector('.rightside');
const closeBtn = document.querySelector('.rightside__btn');

menuBtn.addEventListener('click', function () {
    rightsideMenu.classList.remove('rightside-hide');
    rightsideMenu.classList.add('rightside-show');   
});
closeBtn.addEventListener('click', function () {    
    rightsideMenu.classList.add('rightside-hide');
    rightsideMenu.classList.remove('rightside-show');
});
$('.top-slider').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
  });
  var mixer = mixitup('.gallery__inner', {
    load:{
        filter: '.living'
    }
  });
    
  