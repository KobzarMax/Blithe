$(document).ready(function(){
    $('.integration-slider').slick({
        infinite: true,
        slidesToShow: 15,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        zIndex: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 7
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 6
            }
          },
          {
            breakpoint: 572,
            settings: {
              slidesToShow: 5
            }
          },
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 372,
            settings: {
              slidesToShow: 3
            }
          }
        ]
      });
})

const header = document.querySelector('.header')
const breakPoint = document.querySelector('.header-wrapper')

document.addEventListener('scroll', animateNavnarOnScroll)

function animateNavnarOnScroll() {
  let totalHeight = header.clientHeight + breakPoint.clientHeight
  if (window.scrollY >= totalHeight) {
    header.classList.add("sticky");
    header.classList.add("top-0");
  } else {
    header.classList.remove("sticky");
    header.classList.remove("top-0");
  }
}


const iconMenu = document.querySelector(".menu-icon");
const mobileMenuBlock = document.querySelector(".mobile-menu")

if (iconMenu) {
  
  iconMenu.addEventListener("click", function() {
    iconMenu.classList.toggle("_active");
    mobileMenuBlock.classList.toggle("_active");
    document.body.classList.toggle("_lock");
  })
}