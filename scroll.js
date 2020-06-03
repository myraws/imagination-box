$(document).on('scroll', function() {

  var pixelsFromTop = $(document).scrollTop()

  if (pixelsFromTop > 50) {
    $('header').addClass('hidden')
  } else {
    $('header').removeClass('hidden')
  }

  if (pixelsFromTop < 600) {
    $('body').css('background-color', '#f9f9f9')
  } else if (pixelsFromTop < 1400) {
    $('body').css('background-color', '#FBC1BB')
  } else if (pixelsFromTop < 2200) {
    $('body').css('background-color', '#BFB0D3')
  } else if (pixelsFromTop < 3000) {
    $('body').css('background-color', '#D5EFF3')
  } else if (pixelsFromTop < 3800) {
    $('body').css('background-color', '#E0F9F4')
  } else {
    $('body').css('background-color', '#FDE4E4')
  }

var documentHeight = $(document).height()
var windowHeight = $(window).height()

var difference = documentHeight - windowHeight

var percentage = 100 * pixelsFromTop / difference

$('.bar').css('width', percentage + '%')


})
