const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    effect: 'fade',
    loop: true,
    speed:1000,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    autoplay:{
        delay: 5000,
    },
   
    
  });