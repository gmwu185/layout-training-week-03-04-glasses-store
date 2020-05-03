$(function() {
  $('.js-navbar__toggler').click(function(e) {
    e.preventDefault();
    $('.l-navbar__dropdown').toggleClass('active', 200);
  });
  if ( $('nav').is('.js-navbar--topFixed') == true ) {
    $('body').addClass('js-navbar--topFixedPush')
  }
});