  var swiper = new Swiper('.swiper-container', {
    loop: true, // Loop through slides
    direction: 'vertical',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // Settings for devices <= 480px (e.g., mobile)
      480: {
        slidesPerView: 1, // Show 1 slide at a time
        spaceBetween: 10, // Adjust space between slides
      },
      // Settings for devices <= 768px (e.g., tablet)
      768: {
        slidesPerView: 2, // Show 2 slides at a time
        spaceBetween: 20,
      },
      // Default for larger screens (e.g., desktop)
      1024: {
        slidesPerView: 3, // Show 3 slides at a time
        spaceBetween: 30,
      },
    },
  });
