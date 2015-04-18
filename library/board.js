'use strict';

function Board(options) {

  if (!options) {
    throw new Error('options must be specified');
  }

  if (!options.size || !options.size.width || !options.size.height) {
    throw new Error('options.size must be specified');
  }

  this.size = {
    width: options.size.width,
    height: options.size.height
  };

  this.pieces = {};

}

Board.prototype.addPiece = function(id, piece) {
  this.pieces[id] = piece;
};

Board.prototype.removePiece = function(id) {
  delete this.pieces[id];
};

Board.prototype.getPiece = function(id) {
  for (var i in this.pieces) {
    if (this.pieces[i].id == id) {
      return this.pieces[i].id;
    }
  }
};

Board.prototype.update = function() {
  for (var i in this.pieces) {
    this.pieces[i].update();
  }
};

module.exports = Board;
