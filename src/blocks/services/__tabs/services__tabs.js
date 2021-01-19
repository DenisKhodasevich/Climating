import 'webpack-jquery-ui/tabs';
import 'webpack-jquery-ui/effects';

$(() => {
  $('.services__tabs').tabs({
    show: { effect: 'drop', duration: 800 },
  });
});
