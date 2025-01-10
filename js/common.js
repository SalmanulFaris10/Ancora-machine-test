$(document).ready(function() {
    $('.promotion-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 870,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },

          ]
      });
      $('#events .event-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
              breakpoint: 1300,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 870,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },

          ]
      });
      $("#promotions .item").hover(function(){
        $(this).find(".hvr-content").stop().slideToggle("slow");
    })
});

const modalImage = document.getElementById('modalImage');
const galleryImages = document.querySelectorAll('[data-bs-img]');

galleryImages.forEach(img => {
img.addEventListener('click', function() {
    const imgSrc = this.getAttribute('data-bs-img');
    modalImage.setAttribute('src', imgSrc);
});
});