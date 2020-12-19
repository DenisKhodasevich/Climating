import { sidenav } from 'materialize-css';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('./', true, /\.js|scss$/));

$(() => {
  $('.sidenav').sidenav();
});