import 'webpack-jquery-ui/effects';
import '../../../plugins/materialize/carousel';

$(() => {
  const carousel = $('.home__services');

  carousel.carousel({
    fullWidth: true,
    indicators: true,
  });

  const startAutoplay = () => {
    const content = $('.home__content');
    content.css('display', 'none');
    carousel.carousel('next');
    content.show('blind', 2000);
    setTimeout(startAutoplay, 5000);
  };

  setTimeout(startAutoplay, 5000);
});
