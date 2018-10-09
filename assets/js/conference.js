$(document).ready(function(){
  addListeners();
});

if ($('#lightgallery').length > 0) {
  var $gallery = $('#lightgallery');

  $($gallery).lightGallery();

  var $grid = $gallery.masonry({
    itemSelector: '.gallery-list__item',
    columnWidth: '.grid-sizer',
    gutter: 0,
    percentPosition: true,
    transitionDuration: '100ms'
  });

  $grid.imagesLoaded().progress( function() {
    $grid.masonry('layout');
  });
}

function addListeners() {
  $('#siteNavOpen').on('click', navToggleClickHandler);
  $('#cfpSubmit').on('click', cfpSubmitHandler);
}

function toggleNav() {
  $('#siteNav').toggleClass('open');
  $('body').toggleClass('nav-is-open');
}

function formHandler(url) {
  var data = {};
  var $form = $('#cfpForm');
  var endpoint = $form.attr('data-endpoing');
  var inputs = $form.find('.form-input');
  for (var i=0; i<inputs.length; i++) {
    data[inputs[i].name] = inputs[i].value;
  }
  var thanks = function (response) {
    $form.hide();
    $('#cfpSuccess').show();
  }
  $.post(url, data, thanks).fail(thanks);
  return false;
}

function navToggleClickHandler() {
  toggleNav();
}

function cfpSubmitHandler() {
  formHandler('https://grafanacon-la-2019.herokuapp.com/abstracts/new');
}
