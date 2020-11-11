var chipsInARow = 5;

//* Inserts bingo chips in the quadrant clicked
$(".quadrant").click(function (e) {
  if ($(e.target).is($(".quadrant")) && $(e.target).find(".chip").length > 0) {
    //removes chip from quadrant if you click a quadrant
    $(e.target).find(".chip").remove();
  } else if (
    $(e.target).parent().is($(".quadrant")) &&
    $(e.target).parent().find(".chip").length > 0
  ) {
    //removes chip from quadrant if you click an element in a quadrant
    $(e.target).parent().find(".chip").remove();
  } else if (
    $(e.target).parent().is($(".quadrant")) &&
    $(e.target).parent().find(".chip").length == 0
  ) {
    //adds chip from quadrant if you click a quadrant
    $(e.target).parent().prepend('<div class="chip">Chippy Chip</div>');
    checkWin(chipsInARow);
  } else {
    //adds chip from quadrant if you click an element in a quadrant
    $(e.target).prepend('<div class="chip">Chippy Chip</div>');
    checkWin(chipsInARow);
  }
});

function checkWin(chipsInARow) {
  var chips = 0;
  const quadrants = document.querySelectorAll(".quadrant");
  //*Check horizontal win
  for (var i = 0; i < quadrants.length; i = i + chipsInARow) {
    //looking only the left quadrants first
    if ($(quadrants[i]).find(".chip").length > 0) {
      for (j = i; j < i + chipsInARow; j++) {
        //checking the row
        if ($(quadrants[j]).find(".chip").length > 0) {
          chips++;
        }
      }
      if (chips == chipsInARow) {
        //checking for horizonal win
        setTimeout(function () {
          //so it shows the win before reseting
          displayModal();
        }, 100);
      }
    }
    chips = 0;
  }
  //*Check vertical win
  for (var i = 0; i < chipsInARow; i++) {
    //looking only at the top quadrants first
    if ($(quadrants[i]).find(".chip").length > 0) {
      for (j = i; j < quadrants.length; j = j + chipsInARow) {
        //checking the column
        if ($(quadrants[j]).find(".chip").length > 0) {
          chips++;
        }
      }
      if (chips == chipsInARow) {
        //checking for vertical win
        setTimeout(function () {
          //so it shows the win before reseting
          displayModal();
        }, 100);
      }
    }
    chips = 0;
  }
  //*Check diagonal win
  if ($(quadrants[0]).find(".chip").length > 0) {
    //checking the top left corner
    for (j = 0; j < quadrants.length; j = j + chipsInARow + 1) {
      //looking at the right diagonal
      if ($(quadrants[j]).find(".chip").length > 0) {
        chips++;
      }
    }
    if (chips == chipsInARow) {
      //checking for diagonal win
      setTimeout(function () {
        //so it shows the win before reseting
        displayModal();
      }, 100);
    }
  } else if ($(quadrants[chipsInARow - 1]).find(".chip").length > 0) {
    //checking the top right corner
    //!WARNING this may cause future erros: quadrants.length-1 is done so you doesn't look at bottom right chip
    for (
      j = chipsInARow - 1;
      j < quadrants.length - 1;
      j = j + chipsInARow - 1
    ) {
      //looking at the left diagonal
      if ($(quadrants[j]).find(".chip").length > 0) {
        chips++;
      }
    }
    if (chips == chipsInARow) {
      //checking for diagonal win
      setTimeout(function () {
        //so it shows the win before reseting
        displayModal();
      }, 100);
    }
  }
  return false;
}

//*Removes all chips from the board
function resetBoard() {
  const quadrants = document.querySelectorAll(".quadrant");
  for (j = 0; j < quadrants.length; j++) {
    if ($(quadrants[j]).find(".chip").length > 0) {
      $(quadrants[j]).find(".chip").remove();
    }
  }
}

//*Randomize the board
function randomizeBoard() {
  resetBoard(); // resets board so you can't get a bingo through randomizing the quadrants
  //Code taken from https://stackoverflow.com/questions/18483241/random-div-order-on-page-load
  var quadrants = $(".quadrant");
  for (var i = 0; i < quadrants.length; i++) {
    var target = Math.floor(Math.random() * quadrants.length - 1) + 1;
    var target2 = Math.floor(Math.random() * quadrants.length - 1) + 1;
    quadrants.eq(target).before(quadrants.eq(target2));
  }
}
