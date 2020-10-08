var chipsInARow = 3;

 //* Inserts bingo chips in the quadrant clicked 
$(".quadrant").click(function (e) {
    if($(e.target).is($(".quadrant")) 
        && $(e.target).find('.chip').length > 0){//removes chip from quadrant if you click a quadrant
        $(e.target).find('.chip').remove();
    }else if($(e.target).parent().is($(".quadrant")) 
        && $(e.target).parent().find('.chip').length > 0){//removes chip from quadrant if you click an element in a quadrant
        $(e.target).parent().find('.chip').remove();
    }else if($(e.target).parent().is($(".quadrant")) 
        && $(e.target).parent().find('.chip').length == 0){//adds chip from quadrant if you click a quadrant
        $(e.target).parent().prepend('<div class="chip" draggable="true">Chippy Chip</div>');
        if(checkWin(chipsInARow)){
            alert('BINGO!');
            reset();
        }
    }else{//adds chip from quadrant if you click an element in a quadrant
        $(e.target).prepend('<div class="chip" draggable="true">Chippy Chip</div>');
        if(checkWin(chipsInARow)){
            alert('BINGO!');
            reset();
        }
    }
});

function checkWin(chipsInARow){
    var chips = 0;
    const quadrants = document.querySelectorAll(".quadrant");
    //*Check horizontal win
    for(var i=0; i<quadrants.length; i=i+chipsInARow){//looking only the left quadrants first
        if($(quadrants[i]).find('.chip').length > 0){
            for(j = i; j<i+chipsInARow; j++){ //checking the row
                if($(quadrants[j]).find('.chip').length > 0){
                    chips++; 
                }
            }
            if(chips == chipsInARow){//checking for horizonal win
                return true;
            }
        }
        chips = 0;
    }
    //*Check vertical win
    for(var i=0; i<chipsInARow; i++){//looking only at the top quadrants first
        if($(quadrants[i]).find('.chip').length > 0){
            for(j = i; j<quadrants.length; j=j+chipsInARow){//checking the column
                if($(quadrants[j]).find('.chip').length > 0){
                    chips++;
                }
            }
            if(chips == chipsInARow){//checking for vertical win
                return true;
            }
        }
        chips = 0;
    }
    //*Check diagonal win
    if($(quadrants[0]).find('.chip').length > 0){//checking the top left corner
        for(j = 0; j<quadrants.length; j=j+chipsInARow+1){//looking at the right diagonal
            if($(quadrants[j]).find('.chip').length > 0){
                chips++;
            }
        } 
        if(chips == chipsInARow){//checking for diagonal win
            return true;
        }
    }else if($(quadrants[chipsInARow-1]).find('.chip').length > 0){//checking the top right corner
        //!WARNING this may cause future erros: quadrants.length-1 is done so you doesn't look at bottom right chip
        for(j = chipsInARow-1; j<quadrants.length-1; j=j+chipsInARow-1){//looking at the left diagonal
            if($(quadrants[j]).find('.chip').length > 0){
                chips++;
            }
        }  
        if(chips == chipsInARow){//checking for diagonal win
            return true;
        }  
    }
    return false;
}

//*Removes all chips from the board
function reset(){
    const quadrants = document.querySelectorAll(".quadrant");
    for(j = 0; j<quadrants.length; j++){
        if($(quadrants[j]).find('.chip').length > 0){
            $(quadrants[j]).find('.chip').remove();
        }
    }
}