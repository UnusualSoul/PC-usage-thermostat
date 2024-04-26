
// Increase the red-bar of thermost by 10% every X seconds
let initialHeight = 0;
input()
let increasingRedBar = setInterval(() => {
  // console.log('counting')
  initialHeight += 10;  
  const redBar = document.getElementById('red-bar');
  redBar.style.height = `${initialHeight}%`;
  if (initialHeight >= 100) {
    // console.log('stop')
    clearInterval(increasingRedBar);   
  }
}, 100);

