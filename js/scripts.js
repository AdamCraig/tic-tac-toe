// BUSINESS LOGIC

function Player (mark) {
  var markType = mark;
}

function Space (location, state) {
  var location = location;
  var state = state;
}

function Board (spaces) {
  var occupiedSpaces = new Array(9);
}

function Game (turn, gameOver) {
  var turn = 0;
  var gameOver = false;
}

Player.prototype.mark = function() {
  return Player.mark;
}

Board.prototype.find = function(row, column) {

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
    console.log(inputtedSpace);

    $("#space" + inputtedSpace).text("X");

  });
});
