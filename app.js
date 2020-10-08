/**
 * Inserts bingo chips in the quadrant clicked
 */
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
    }else{//adds chip from quadrant if you click an element in a quadrant
        $(e.target).prepend('<div class="chip" draggable="true">Chippy Chip</div>');
    }
});