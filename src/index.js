import './favicons/favicons';
import './main.scss';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('./blocks/', true, /\.js|scss$/));
