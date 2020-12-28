$(() => {
  $('.sidenav').sidenav();
  const initPushpin = () => $('.pushpin').pushpin({ top: $('.header__info').height() });
  initPushpin();
  $(window).on('resize', () => initPushpin());
});
