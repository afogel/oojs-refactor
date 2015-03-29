;

// ------------------------------------
// --------Controller------------------
// ------------------------------------
var DieController = function (view, diceCollection) {
  this.view = view;
  this.collection = diceCollection;
};

DieController.prototype.bindEventListener = function () {
  var controller = this;
  $('#roller button.add').on('click', this.addNewDie.bind(controller));
};

DieController.prototype.addNewDie = function () {
  var die = new DieModel();
  this.collection.add(die);
  var dieTemplate = this.view.createDieTemplate(die.value);
  this.view.renderDieToContainer(dieTemplate);
};

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

// ------------------------------------
// --------Collection------------------
// ------------------------------------

function diceCollection () {
  var collection = [];

  function add(die) {
    collection.push(die);
    return collection;
  };

  return {
    add: add
  }
}

// -------------------------------

$(document).ready(function () {
  var dieController = new DieController(new DieView(), diceCollection());
  dieController.bindEventListener();
});


