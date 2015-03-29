;

// ------------------------------------
// --------Controller------------------
// ------------------------------------
var DieController = function (view) {
  this.view = view;
};

DieController.prototype.bindEventListener = function () {
  var controller = this;
  $('#roller button.add').on('click', this.addNewDie.bind(controller));
};

DieController.prototype.addNewDie = function () {
  var die = new DieModel();
  var dieTemplate = this.view.createDieTemplate(die.value);
  this.view.renderDieToContainer(dieTemplate);
}

// ------------------------------------
// --------View------------------------
// ------------------------------------
var DieView = function () {};

DieView.prototype.renderDieToContainer = function (dieTemplate) {
  $('.dice').append(dieTemplate);
};

DieView.prototype.createDieTemplate = function (dieValue) {
  return '<div class="die">' + dieValue + '</div>';
};

// ------------------------------------
// --------Model-----------------------
// ------------------------------------

var DieModel = function () {
  this.value = 0;
};

// -------------------------------

$(document).ready(function () {
  var dieController = new DieController(new DieView());
  dieController.bindEventListener();
});


