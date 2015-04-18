'use strict';

var Board = require('./library/board');
var Piece = require('./library/piece');

function Infinigon(options) {
  options = options || {
    size: {
      width: 1200,
      height: 1200
    }
  };
  this.board = new Board(options);
  this.runInterval = false;
}

Infinigon.prototype.start = function() {
  if (this.isRunning()){
    return;
  }
  var board = this.board;
  this.runInterval = setInterval(function(){
    board.update();
  }, 15);
};

Infinigon.prototype.pause = function() {
  if (!this.isRunning()) {
    return;
  }
  clearInterval(this.runInterval);
  this.runInterval = false;
};

Infinigon.prototype.isRunning = function() {
  return (this.runInterval != false);
};

Infinigon.prototype.createPiece = function(options) {
  options.board = this.board;
  return new Piece(options);
};

Infinigon.prototype.removePiece = function(id) {
  this.board.removePiece(id);
};

Infinigon.prototype.getInitialization = function() {
  var init = {
    board: {
      size: this.board.size
    },
    pieces: []
  };
  for (var i in this.board.pieces) {
    init.pieces.push(this.board.pieces[i].getOptions());
  }
  return init;
};

Infinigon.prototype.getUpdate = function () {
  var update = [];
  for (var i in this.board.pieces) {
    update.push(this.board.pieces[i].getUpdate());
  }
  return update;
};

Infinigon.Board = Board;
Infinigon.Piece = Piece;

module.exports = Infinigon;
