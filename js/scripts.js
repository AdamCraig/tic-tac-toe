// BUSINESS LOGIC

function Player (mark) {
  var markType = mark;
}

function Space (location, state) {
  var location = location;
  var state = state;
}

function Board (occupiedSpaces) {
  this.occupiedSpaces = occupiedSpaces;
}

function Game (turn, gameOver) {
  var turn = 0;
  var gameOver = false;
}

Player.prototype.mark = function() {
  return Player.mark;
}

Board.prototype.find = function() {

}

Board.prototype.setMarkToSpace = function(input) {
  // var occupiedSpaces = new Array(9);
  // var inputtedSpace = input;
  // occupiedSpaces[inputtedSpace] = "X";
}

// game flow
//
// press play?
// initialize board - (clear values of all spaces)
// start round 1
// {
// get player1  input (which space to fill)
// according to space selected, fill space with player1 mark
//insert mark into specific index in array (not using push)
// check for winning condition
// switch turns
// get player2 input (which space to fill)
// according to space selected, fill space with player2 mark
// check for winning condition
// move to next round
// }
// loop rounds until there's a winner or the board is full
// check for winning condition
// if board is full and no winner, declare tie
//
//

// USER INTERFACE LOGIC
$(document).ready(function() {
  $("form#space-choice").submit(function(event) {
    event.preventDefault();

    var inputtedSpace = $("select.new-move").val();

    $("#space" + inputtedSpace).text("X");

    inputtedSpace = parseInt(inputtedSpace);

    var newBoard = new Board (new Array(9));
    newBoard.occupiedSpaces[inputtedSpace] = "X";

    console.log(newBoard);
    console.log(newBoard.occupiedSpaces);
  });
});
