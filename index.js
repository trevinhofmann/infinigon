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

Infinigon.Board = Board;
Infinigon.Piece = Piece;

module.exports = Infinigon;
