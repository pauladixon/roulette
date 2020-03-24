// init (reset)
// - start it at 0
// render
// - display win vs lose
// handleSpin (event listener)
// - onclick takes number and caches it
// - invoke findWinningNumber
// - invoke spinTheWheel (function )
// - collects the number from the spin
// - calls render (function declaration)
// findWinningNumber
// - generate winning number
// spinTheWheel
// - animate the wheel
// - stop at winning number
// checkResult
// - check for win

$(document).ready(function(){


    $('#submit').click(function(event){
        let $playerNumber = $('#input').val();
        console.log($playerNumber);
    });

})