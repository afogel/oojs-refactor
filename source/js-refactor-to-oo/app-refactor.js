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
  $('#roller button.roll').on('click', this.rollDice.bind(controller));
};

DieController.prototype.addNewDie = function () {
  var die = new DieModel();
  this.collection.add(die);
  var dieTemplate = this.view.createDieTemplate(die.value);
  this.view.renderDieToContainer(dieTemplate);
};

DieController.prototype.rollDice = function () {
  var controller = this;
  var collection = this.collection.rollDice();
  $(collection).each(function(index, die) {
    this.view.renderNewValues(die.value, index)
  }.bind(controller));
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

DieView.prototype.renderNewValues = function (dieValue, index) {
  $($('.die')[index]).text(dieValue);
}

// ------------------------------------
// --------Model-----------------------
// ------------------------------------

var DieModel = function () {
  this.value = 0;
};

DieModel.prototype.roll = function () {
  this.value = Math.floor((Math.random()*6)+1);
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

  function rollDice () {
    $(collection).each(function(index, die) {
      die.roll();
    });
    return collection;
  }

  return {
    add: add,
    rollDice: rollDice
  }
}

// -------------------------------

$(document).ready(function () {
  var dieController = new DieController(new DieView(), diceCollection());
  dieController.bindEventListener();
});


