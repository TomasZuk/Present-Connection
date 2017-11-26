$('button.read').on("click", function() {
    $.get('/read', (data) => {
        $('div.fileContent').html(data);
    });
});

$('button.clear').on("click", function() {
    $.get('/clear', () => {
        let div = $('div.alertMessage');
        div.html('');
        let alert = $('<div/>');
        alert.addClass('alert alert-warning').text('Text has been deleted.');
        div.html(alert);
    });
});

$('span.append').on("click", function(e) {
    e.preventDefault();
    let textInputTag = $('#textToAppend');
    let text = $('#textToAppend').val();
    $.post('/write', {text: text}, (data) => {
        $('div.fileContent').html(data);
        let div = $('div.alertMessage');
        let alert = $('<div/>');

        if (text.length > 100) {
            div.html('');
            alert.addClass('alert alert-success').text('Text added to file.');
        } else {
            div.html('');
            alert.addClass('alert alert-success').text('Text added to file: ' + text);
        }

        div.html(alert);
        textInputTag.val('');
    });
});