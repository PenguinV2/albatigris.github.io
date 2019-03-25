// init Isotope
/* isotope js i nav-content e uygula demek
*/
$('#nav-content').isotope({
    // options
  });
  // filter items on button click
  $('#nav-filter').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $('#nav-content').isotope({ filter: filterValue });
  });

  $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});