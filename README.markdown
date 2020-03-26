# ROULETTE

Psuedocode for the overall game play.

## HTML

1. Import design elements into HTML.
2. Isolate each element to make each piece of the design interactable.
3. Add replay button


## CSS

1. Add in additional styling for the page.
2. Rebuild any elements that cannot be brought in - possibly the grid board.
1. key frame animation


## JavaScript

1. Define constants and variables
   - Player's choices - 3 choices of different numbers
   - Wheel's number
1. Cache element variables
1. Event Listeners
   - Wait for player to choose their number. Save the player's choice.
   - Wait for the player to spin the wheel.
1. Functions
   - Spin the wheel when initiated (init function)
     - Let wheel spin 3 times 
     - Then land on a random number
     - Collect the number when the wheel stops
   - Evaluate (Render and Winning functions)
     - Weigh the wheel's number against the player's numbers
     - If the number matches with one of the player's, display YOU WIN!
   - Reinitialize when replay button is called (init function)




   css translate -> add event listener -> add html



   - init (reset)
      - start it at 0
   - render
      - display win vs lose
   - handleSpin (event listener)
      - onclick takes number and caches it
      - invoke findWinningNumber
      - invoke spinTheWheel (function )
      - collects the number from the spin
      - calls render (function declaration)
   - findWinningNumber
      - generate winning number
   - spinTheWheel
      - animate the wheel
      - stop at winning number
   - checkResult
      - check for win