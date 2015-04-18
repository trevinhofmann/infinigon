'use strict';

var Board = require('./library/board');
var Piece = require('./library/piece');

function Infinigon() {
  var options = {
    size: {
      width: 1200,
      height: 1200
    }
  };
  this.board = new Board(options);
  this.runInterval = false;
}

Infinigon.Board = Board;
Infinigon.Piece = Piece;

module.exports = Infinigon;
