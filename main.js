// This is js.file for pop-up html when a user clicks an extension button on browser 
document.addEventListener('DOMContentLoaded', function() {
  const submitButton = document.getElementById('countButton');
  const resetButton = document.getElementById('reset');

  submitButton.addEventListener('click', function() {
    let userInput = document.getElementById('userInput').value;
    let seconds = userInput * 60;
    startCountdown(seconds);
    //const startTime = Date.now() + seconds * 1000;
    const endTime = addMinutes(seconds);
    const interval = setInterval(() => {
      const timeRemaining = calculateTimeRemaining(endTime)
      console.log(timeRemaining);
      if(timeRemaining <= 0)
        clearInterval(interval);
    }, 500)
  });

  resetButton.addEventListener('click', function() {
    resetCountDown();
  })

});

// start countdown 
function startCountdown(seconds) {
  const redBar = document.getElementById('red-bar');
  const whiteSpace = document.getElementById('white-space');
  // this is javascript manipulating the css style transition 
  // which is a shorthand for transition-property, transition-duration, and transition-timing-function)
  // which in the line below are separated by spaces 
  redBar.style.transition = "height " + seconds + "s linear";
  redBar.style.height = whiteSpace.offsetHeight + "px";
}

// reset countdown 
function resetCountDown() {
  const redBar = document.getElementById('red-bar');
  redBar.style.transition = 'none';
  redBar.style.height = '1%';
}

function addMinutes(seconds) {
  if(seconds)
    return Date.now() + seconds*1000;
  else
    return Date.now() + 1000 // one minute;
}

//time
function calculateTimeRemaining(endTime){
  return endTime - Date.now();
}

/*
previous attempt to alert 
    // pop up with an input box => instead of pop-up, used input box. 
    // const minutes = prompt("how many minutes do you want to spend on the computer", "50");
    // const seconds = minutes * 60;

*/
