(function($){
  
  $('a.hijax').click(function (e) {
    e.preventDefault(); // Stop browser from loading the URL.
    $.ajax({
      url: $(this).attr('href'),
    }).done(function (markup) {
      $('#content').html(markup);
    });
  });


























})(jQuery);