var randomNumber = getRandomInt(1, 15);
var $count = 0;

// Reload the page 
$('#start_button').on('click', function () {
	location.reload();
})

// Add buttons
$(document).ready(function () {
    for (var $i = 1; $i < 16; $i++) {
        $('.numbers-list').append("<input type='button' class='numbers' value=" + $i + ">");
    }
});

// compare clicked number to random generated number
$('.numbers-list').on('click', '.numbers', function (e) {
    $count++;
    compareNumbers(randomNumber, $(this).val(), $count);
});

// Generate a random number between 1-15
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Comparison parts
function compareNumbers(rand, checked, $count) {
    if (rand > checked) {
        $('#result-message').html("It is bigger");
        $('#attempt-count').html($count);
    }
    else if (rand < checked) {
        $('#result-message').html("It is smaller");
        $('#attempt-count').html($count);
    }
    else if (rand = checked) {
        $('#result-message').html("It is correct");
        $('#attempt-count').html($count);
        $('.numbers').prop('disabled', true);
    }
}


