$(".quadrant").click(function (e) {
    if($(e.target).find('.chip').length > 0){
        $(".chip").remove();
    }else{
        $(e.target).prepend('<div class="chip" draggable="true">Chippy Chip</div>');
    }
});