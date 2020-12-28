$(() => {
  const carousel = $('.carousel');
  carousel.carousel({ fullWidth: true, indicators: true });

  const autoplay = () => {
    carousel.carousel('next');
    setTimeout(autoplay, 5000);
  };

  autoplay();
});
