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
    if (method == 'crypto') {
        btoa
        return btoa(value);
    } else {
        return atob(value);
    }
}

function caesar_cypher(value, method, caesar_value) {
    if (method == 'crypto') {
        return caesar_crypto(value, caesar_value)
    } else {
        return caesar_unrypto(value, caesar_value)
    }
}

function caesar_crypto (word, jump) {
    var result = '';
  
    for(var i = 0; i < word.length; i++) {
      var letter = word[i].charCodeAt();
      if(letter > 64 && letter < 91) {
        letter += jump;
        if(letter > 90) {
          result += String.fromCharCode((letter) - 26)
        } else {
          result += String.fromCharCode(letter)
        }
      } else if(letter > 96 && letter < 123) {
        letter += jump;
        if(letter > 122) {
          result += String.fromCharCode((letter) - 26);
        } else {
          result += String.fromCharCode(letter);
        }
      } else {
        result+=word[i];
      }
    }
    
    return result;
  }
  
  function caesar_uncrypto (word, jump) {
    var result = '';
  
    for(var i = 0; i < word.length; i++) {
      var letter = word[i].charCodeAt();
      if(letter > 64 && letter < 91) {
        letter -= jump;
        if(letter < 65) {
          result += String.fromCharCode(letter + 26)
        } else {
          result += String.fromCharCode(letter)
        }
      } else if(letter > 96 && letter < 123) {
        letter -= jump;
        if(letter < 97) {
          result += String.fromCharCode(letter + 26);
        } else {
          result += String.fromCharCode(letter);
        }
      } else {
        result+=word[i];
      }
    }
    
    return result;
  }