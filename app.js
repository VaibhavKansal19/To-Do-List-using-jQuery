$('.btn-success').click(function() {
    if ($('#event').val().length != 0) {
        var x = $('.list').html();
        var y = `<div class="alert alert-success alert-dismissible fade in"><a href="#" class="close" data-dismiss="alert"><i class="glyphicon glyphicon-trash"></i></a>`+$('#event').val()+`</div>`;
        $('.list').html(y + x);
        $('#event').val("");
    } 
    else alert("Enter some Text!");
});

$(document).on('click', '.alert', function() {
    if ($(this).css('text-decoration-line') == "none") {
        $(this).css('text-decoration-line', 'line-through');
        $(this).css('color', 'red');
    }
    else {
        $(this).css('text-decoration-line', 'none');
        $(this).css('color', 'black');
    }
});
