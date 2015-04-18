'use strict';

function Piece(options) {

  if (!options) {
    throw new Error('options must be specified');
  }

  if (!options.id) {
    throw new Error('options.id must be specified');
  }

  if (!options.board) {
    throw new Error('options.board must be specified');
  }

  if (!options.position || !options.position.x || !options.position.y) {
    throw new Error('options.position must be specified');
  }

  this.id = options.id;

  this.board = options.board;

  this.class = options.class || 'piece';

  this.size = options.size || 50;

  this.borderSize = options.borderSize || 3;

  this.position = {
    x: options.position.x,
    y: options.position.y
  };

  this.target = options.target || {
    x: this.position.x,
    y: this.position.y
  };

  this.speed = options.speed || 2;

  if (options.weapon) {
    this.weapon = options.weapon;
    this.weapon.last = 0;
  }

  this.board.addPiece(this);

  if (options.lifespan) {
    var piece = this;
    setTimeout(function() {
      piece.deconstruct();
    }, options.lifespan);
  }

}

module.exports = Piece;
