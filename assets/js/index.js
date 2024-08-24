document.addEventListener("DOMContentLoaded", function () {
  const priceSpan = document.querySelector('.js-price');
  const priceText = document.querySelector('.js-feature-text');
  const checkbox = document.getElementById('switchSizeLargeChecked');

  if (priceSpan && priceText && checkbox) {
    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
        // Mostrar precio con descuento
        priceSpan.innerHTML = priceSpan.getAttribute('data-price-discount');
        priceText.innerHTML = priceText.getAttribute('data-text');
      } else {
        // Mostrar precio sin descuento
        priceSpan.innerHTML = priceSpan.getAttribute('data-price');
        priceText.innerHTML = priceText.getAttribute('data-month');
      }
    });
  }

  const swiperContainer = document.querySelector('.swiper-container');
  if (swiperContainer) {
    var swiper = new Swiper(swiperContainer, {
      slidesPerView: 1.1, // Permite ver parte de la siguiente tarjeta
      spaceBetween: 8, // Espacio entre tarjetas
      centeredSlides: true,
      grabCursor: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Permite que los dots sean clicables
        dynamicBullets: true // Hace que los dots sean más pequeños o más grandes según la posición
      },
      breakpoints: {
        768: {
          slidesPerView: 2, // Desactiva el slider en pantallas más grandes
          centeredSlides: false,
        }
      }
    });
  }

  const header = document.querySelector(".header");
  if (header) {
    document.addEventListener("scroll", function () {
      if (window.scrollY > 20) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  }
});
