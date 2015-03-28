;

// ------------------------------------
// --------Controller------------
// ------------------------------------
var DieController = function () {};

DieController.prototype.bindEventListener = function () {
  $('#roller button.add').on('click', function() {
    $('.dice').append('<div class="die">0</div>');
  });
};


$(document).ready(function () {
  var dieController = new DieController();
  dieController.bindEventListener();
});
