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

module.exports = Board;
