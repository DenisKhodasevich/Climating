import 'materialize-css/js/cash';
import 'materialize-css/js/global';
import 'materialize-css/js/anime.min';
import 'materialize-css/js/waves';
import '../plugins/materialize/scrollspy';

$(() => {
  $('.climating__preloader').delay(1700).fadeOut('slow');
  $('.scrollspy').scrollSpy();
});
