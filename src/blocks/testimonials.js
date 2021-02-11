import '../plugins/materialize/carousel';

$(() => {
  const carousel = $('.testimonials__comments');

  carousel.carousel({
    fullWidth: true,
    indicators: true,
  });

  const startAutoplay = () => {
    carousel.carousel('next');
    setTimeout(startAutoplay, 5000);
  };

  setTimeout(startAutoplay, 5000);
});
