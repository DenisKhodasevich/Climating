$(() => {
  $('.contacts__link').each(function () {
    $(this).on('mouseover', () => $(this).addClass('pulse'));
    $(this).on('mouseout', () => $(this).removeClass('pulse'));
  });
});
