$(document).ready(function() {

  $('.gallery-item').hover(function() {
    $(this).find('.img-title').fadeIn(2000);
  }, function() {
    $(this).find('.img-title').fadeOut(1000);
  });

});

$(document).ready(function() {
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    event.preventDefault();

    // Store hash
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function() {

      window.location.hash = hash;
    });
  });

  $(window).scroll(function() {
    $(".slideanim").each(function() {
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
})