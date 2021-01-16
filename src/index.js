import 'materialize-css/js/cash';
import 'materialize-css/js/global';
import 'materialize-css/js/anime.min';
import 'materialize-css/js/waves';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('./', true, /\.js|scss$/));

$(() => {
  $('.scrollspy').scrollSpy();
});
