import { sidenav, scrollSpy, pushpin } from 'materialize-css';

function requireAll(requireContext) {
  return requireContext.keys().map(requireContext);
}

requireAll(require.context('./', true, /\.js|scss$/));

$(() => {
  $('.sidenav').sidenav();
  $('.scrollspy').scrollSpy();
  const initPushpin = () => $('.pushpin').pushpin({ top: $('.header__info').height() });
  initPushpin();
  $(window).on('resize', () => initPushpin());
});
