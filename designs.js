$(document).ready(function () {
    let gridHeight, gridWidth, color;
    // Select color input
    $('#sizePicker').submit(function (evt) {
        evt.preventDefault();
        // Select size input
        gridHeight = $('#inputHeight').val();
        gridWidth = $('#inputWidth').val();
        // When size is submitted by the user, call makeGrid()
        makeGrid(gridHeight, gridWidth);
    });
    
    // Your code goes here!
    function makeGrid(height, width) {
        $('tr').remove();
        for (let i = 1; i <= height; i++) {
            $('#pixelCanvas').append('<tr id=row' + i + '></tr>');
            for (let j = 1; j <= width; j++) {
                $('#row' + i).append('<td></td>');
            }
        }
        //coloring the cells
        $('td').on('click', function () {
            color = $('#colorPicker').val();

            if ($(this).attr('style')) {
                $(this).removeAttr('style');
            } else {
                $(this).attr('style', 'background-color:' + color);
            }
        });

    }
});
