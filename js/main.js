$(function () {
  "use strickt";
  $(".navLinks ul li a").click(function (e) {
    e.preventDefault();
    $('html, body').animate( {
        scrollTop: $("#" + $(this).data('scroll')).offset().top + (-50)
    },1000)
  });
});
