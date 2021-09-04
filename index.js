$(document).ready(function () {
    $('#cypher').change(function (e) {
        if (e.target.value == 'caesar') {
            $('.caesar-value').show();
        } else {
            $('.caesar-value').hide();
        }
    });

    $('#caesar_value').change(function (e) {
        $('#change_caesar_value').val(e.target.value);
    });

    $('#change_caesar_value').change(function (e) {
        $('#caesar_value').val(e.target.value);
    });

    $('#crypto_form').submit(function (e) {
        e.preventDefault();

        var value = $('#message').val();
        var method = $('#method').val();
        var cypher = $('#cypher').val();
        var caesar_value = $('#change_caesar_value').val();

        if(value.length < 10) {
            alert('A mensagem deve conter no minimo 10 caracteres');
            return;
        }

        var result = cryptography(value, method, cypher, caesar_value);

        $('#result').val(result);

    });

});

function cryptography(value, method, cypher, caesar_value = 3) {
    if (cypher == 'caesar') {
        return caesar_cypher(value, method, caesar_value);
    } else {
        return base64(value, method);
    }
}


function base64(value, method) {
    
}

function caesar_cypher(value, method, caesar_value) {

}
