// Function call that initiates the consoleText function with the given arguments
// (array of words, target element ID, array of colors)
consoleText(
  ['In the digital realm, the outsider sees what others miss.'], // Text to animate
  'text', // ID of the HTML element where the text will be displayed
  ['tomato', 'rebeccapurple', 'lightblue'] // Colors to cycle through for the text
);

function consoleText(words, id, colors) {
  // If colors are not provided, default to white
  if (colors === undefined) colors = ['#fff'];

  // Variable to track the visibility of the cursor underscore
  var visible = true;

  // Get the element with the ID 'console' (for showing a blinking underscore)
  var con = document.getElementById('console');

  // Tracks the current number of letters displayed from the word
  var letterCount = 1;

  // Determines the direction of text flow (1 for forward, -1 for backward)
  var x = 1;

  // Flag to check if we're waiting before displaying the next letter or word
  var waiting = false;

  // Get the target element where the text will be displayed
  var target = document.getElementById(id);

  // Set the initial color of the text using the first color in the colors array
  target.setAttribute('style', 'color:' + colors[0]);

  // Set an interval to update the text every 120ms (for typing animation)
  window.setInterval(function() {
    
    // If all letters are removed and we're not in a waiting state
    if (letterCount === 0 && waiting === false) {
      waiting = true; // Set waiting to true to start a delay

      // Clear the text by showing only the substring from 0 to letterCount (empty string)
      target.innerHTML = words[0].substring(0, letterCount);

      // After 1 second, rotate the word and color arrays and start typing the next word
      window.setTimeout(function() {
        // Move the first color to the end of the array and use the next color
        var usedColor = colors.shift();
        colors.push(usedColor);

        // Move the first word to the end of the array and use the next word
        var usedWord = words.shift();
        words.push(usedWord);

        // Set x to 1 to start typing forward again
        x = 1;

        // Update the text color with the new first color
        target.setAttribute('style', 'color:' + colors[0]);

        // Start adding letters (increase letter count)
        letterCount += x;

        // End the waiting period
        waiting = false;
      }, 1000); // 1-second delay
    }

    // If the entire word is typed out and we're not waiting
    else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true; // Set waiting to true to start a delay

      // After 1 second, start deleting the word (reverse the direction of x)
      window.setTimeout(function() {
        x = -1; // Set x to -1 to start deleting letters
        letterCount += x; // Reduce the letter count
        waiting = false; // End the waiting period
      }, 1000); // 1-second delay
    }

    // If neither condition above is true, continue typing or deleting the word
    else if (waiting === false) {
      // Display the current portion of the word (substring from 0 to letterCount)
      target.innerHTML = words[0].substring(0, letterCount);

      // Update the letter count (either increase or decrease based on x)
      letterCount += x;
    }
  }, 120); // Interval set to update every 120ms

  // Set another interval to toggle the visibility of the blinking underscore
  window.setInterval(function() {
    if (visible === true) {
      // Hide the underscore by adding the 'hidden' class
      con.className = 'console-underscore hidden';
      visible = false; // Mark the underscore as hidden
    } else {
      // Show the underscore by removing the 'hidden' class
      con.className = 'console-underscore';
      visible = true; // Mark the underscore as visible
    }
  }, 400); // Interval set to update every 400ms
}
