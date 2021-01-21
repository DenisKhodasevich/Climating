import 'materialize-css/js/forms';
import '../../plugins/materialize/modal';

$(() => {
  const order = $('.order');
  order.modal();
  const input = order.find('input');

  order.on('submit', () => {
    let isFormValid = true;

    input.each(function () {
      if ($(this).val() === '') {
        isFormValid = false;
        $(this).addClass('invalid');
      }
    });

    return isFormValid;
  });
});
