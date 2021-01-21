import 'materialize-css/js/cash';
import 'materialize-css/js/global';
import 'materialize-css/js/anime.min';
import 'materialize-css/js/waves';
import './plugins/materialize/scrollspy';
import './favicons/favicons';
import './main.scss';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('./blocks/', true, /\.js|scss$/));

$(() => {
  $('.scrollspy').scrollSpy();
});
