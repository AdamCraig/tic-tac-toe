// BUSINESS LOGIC

function Player (mark) {
  this.mark = mark;
}

// function Space (location, state) {
//   this.location = location;
//   this.state = state;
// }

function Board (occupiedSpaces) {
  this.occupiedSpaces = occupiedSpaces;
}

// function Game (winner) {
//   this.winner = winner;
//   // this.turn = turn;
//   // this.gameOver = gameOver;
//   // var turn = 0;
//   // var gameOver = false;
// }

// Player.prototype.mark = function() {
//   return Player.mark;
// }

// Board.prototype.initialize = function () {
// }

// Board.prototype.find = function() {
// }

Board.prototype.setMarkToSpace = function(input) {
  // var occupiedSpaces = new Array(9);
  // var inputtedSpace = input;
  // occupiedSpaces[inputtedSpace] = "X";
}

Board.prototype.checkWinningConditionX = function(allMarks) {
  if ( (allMarks[0] === "X") && (allMarks[1] === "X") && (allMarks[2] === "X") ) {
    return true;
  } else if ( (allMarks[3] === "X") && (allMarks[4] === "X") && (allMarks[5] === "X") ) {
    return true;
  } else if ( (allMarks[6] === "X") && (allMarks[7] === "X") && (allMarks[8] === "X") ) {
    return true;
  } else if ( (allMarks[0] === "X") && (allMarks[3] === "X") && (allMarks[6] === "X") ) {
    return true;
  } else if ( (allMarks[1] === "X") && (allMarks[4] === "X") && (allMarks[7] === "X") ) {
    return true;
  } else if ( (allMarks[2] === "X") && (allMarks[5] === "X") && (allMarks[8] === "X") ) {
    return true;
  } else if ( (allMarks[0] === "X") && (allMarks[4] === "X") && (allMarks[8] === "X") ) {
    return true;
  } else if ( (allMarks[2] === "X") && (allMarks[4] === "X") && (allMarks[6] === "X") ) {
    return true;
  } else {
    return false;
  }
}

Board.prototype.checkWinningConditionO = function(allMarks) {
  if ( (allMarks[0] === "O") && (allMarks[1] === "O") && (allMarks[2] === "O") ) {
    return true;
  } else if ( (allMarks[3] === "O") && (allMarks[4] === "O") && (allMarks[5] === "O") ) {
    return true;
  } else if ( (allMarks[6] === "O") && (allMarks[7] === "O") && (allMarks[8] === "O") ) {
    return true;
  } else if ( (allMarks[0] === "O") && (allMarks[3] === "O") && (allMarks[6] === "O") ) {
    return true;
  } else if ( (allMarks[1] === "O") && (allMarks[4] === "O") && (allMarks[7] === "O") ) {
    return true;
  } else if ( (allMarks[2] === "O") && (allMarks[5] === "O") && (allMarks[8] === "O") ) {
    return true;
  } else if ( (allMarks[0] === "O") && (allMarks[4] === "O") && (allMarks[8] === "O") ) {
    return true;
  } else if ( (allMarks[2] === "O") && (allMarks[4] === "O") && (allMarks[6] === "O") ) {
    return true;
  } else {
    return false;
  }
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

  var board = new Board (new Array(9));

  $("form#space-choice").submit(function(event) {
    event.preventDefault();

    var inputtedSpace = $("select.new-move").val();

    $("#space" + inputtedSpace).text("X");

    inputtedSpace = parseInt(inputtedSpace);

    board.occupiedSpaces[inputtedSpace] = "X";

    console.log(board);
    console.log(board.occupiedSpaces);

    board.checkWinningConditionX(board.occupiedSpaces);

    console.log(board.checkWinningConditionX(board.occupiedSpaces));

    // newBoard.checkWinningCondition();
    // console.log(newBoard.checkWinningCondition);

  });

  $("form#space-choice #markO").click(function() {
    var inputtedSpace = $("select.new-move").val();

    $("#space" + inputtedSpace).text("O");

    inputtedSpace = parseInt(inputtedSpace);

    board.occupiedSpaces[inputtedSpace] = "O";

    console.log(board);
    console.log(board.occupiedSpaces);

    board.checkWinningConditionO(board.occupiedSpaces);

    console.log(board.checkWinningConditionO(board.occupiedSpaces));

  });
});
