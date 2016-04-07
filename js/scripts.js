// BUSINESS LOGIC
function Player (mark, playerColor) {
  this.mark = mark;
  this.playerColor = playerColor;
}

function Board (occupiedSpaces) {
  this.occupiedSpaces = occupiedSpaces;
}

function Game (turn) {
  this.turn = turn;
}

Board.prototype.checkIfSpaceTaken = function (marksOnBoard, inputtedSpace) {
  if ( marksOnBoard[inputtedSpace] === "X" || marksOnBoard[inputtedSpace] === "O") {
    $("#space" + inputtedSpace).addClass("wiggle");
    setTimeout(function() { $("#space" + inputtedSpace).removeClass("wiggle"); }, 2000);
    return true;
  } else {
    return false;
  }
}

Board.prototype.setMarkToSpace = function(marksOnBoard, inputtedSpace, playerMark, playerColor) {
  $("#space" + inputtedSpace).text(playerMark);
  $("#space" + inputtedSpace).css("background-color", playerColor);
  marksOnBoard[inputtedSpace] = playerMark;
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

// USER INTERFACE LOGIC
$(document).ready(function() {

  var game = new Game (0);
  var board = new Board (new Array(9));
  var player1 = new Player ("X", "#D9534F");
  var player2 = new Player ("O", "#5BC0DE");

  $("form#space-choice").submit(function(event) {
    event.preventDefault();

    var inputtedSpace = $("select.new-move").val();

    if ( (board.checkIfSpaceTaken(board.occupiedSpaces, inputtedSpace) ) === false) {
      board.setMarkToSpace(board.occupiedSpaces, inputtedSpace, player1.mark, player1.playerColor);

      game.turn++;
      $("#markX").slideUp();
      $("#markO").delay(500).slideDown();

      inputtedSpace = parseInt(inputtedSpace);

      if ( (board.checkWinningConditionX(board.occupiedSpaces) ) === true) {
        setTimeout(function() { $("#markO").hide(); }, 500);
        $(".new-move").hide();
        $(".player-mark").prepend("Player X");
        $(".result").fadeIn();
        $("#play-again").fadeIn();
      } else if ( (board.checkWinningConditionX(board.occupiedSpaces) ) === false && game.turn === 9) {
        setTimeout(function() { $("#markO").hide(); }, 500);
        $(".new-move").hide();
        $(".tie-game").fadeIn();
        $("#play-again").fadeIn();
      }
    }
  });

  $("form#space-choice #markO").click(function() {

    var inputtedSpace = $("select.new-move").val();

    if ( (board.checkIfSpaceTaken(board.occupiedSpaces, inputtedSpace) ) === false) {
      board.setMarkToSpace(board.occupiedSpaces, inputtedSpace, player2.mark, player2.playerColor);

      game.turn++;
      $("#markO").slideUp();
      $("#markX").delay(500).slideDown();

      inputtedSpace = parseInt(inputtedSpace);

      if ( (board.checkWinningConditionO(board.occupiedSpaces) ) === true) {
        setTimeout(function() { $("#markX").hide(); }, 500);
        $(".new-move").hide();
        $(".player-mark").prepend("Player O");
        $(".result").fadeIn();
        $("#play-again").fadeIn();
      } else if ( (board.checkWinningConditionO(board.occupiedSpaces) ) === false && game.turn === 9) {
        setTimeout(function() { $("#markX").hide(); }, 500);
        $(".new-move").hide();
        $(".tie-game").fadeIn();
        $("#play-again").fadeIn();
      }
    }
  });
});
