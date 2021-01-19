import 'materialize-css/js/cash';
import 'materialize-css/js/global';
import 'materialize-css/js/anime.min';
import 'materialize-css/js/waves';
import './plugins/materialize/scrollspy';
import './plugins/materialize/carousel';
import './favicons/favicons';
import './main.scss';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('./blocks/', true, /\.js|scss$/));

$(() => {
  $('.scrollspy').scrollSpy();

  const carousel = $('.carousel');
  carousel.carousel({ fullWidth: true, indicators: true });

  const autoplay = () => {
    carousel.carousel('next');
    setTimeout(autoplay, 5000);
  };

  autoplay();
});
