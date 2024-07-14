// Set the date we're counting down to
var countDownDate = new Date("July 16, 2024 00:00:00").getTime();

// Update the count down every 1 second
var countdownFunction = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="countdown"
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "Happy Birthday!";
  }
}, 1000);

// Generate unlimited balloons
const balloonColors = [
    '#FF5733', '#FFC300', '#DAF7A6', '#FFC0CB', '#6495ED',
    '#FF6347', '#40E0D0', '#FF4500', '#8A2BE2', '#D2691E',
    '#DC143C', '#FF1493', '#FFD700', '#ADFF2F', '#7FFF00',
    '#00FF7F', '#FF00FF', '#1E90FF', '#FF69B4', '#EE82EE',
    '#8B0000', '#00CED1', '#FFDAB9', '#FFB6C1', '#DDA0DD'
];

const balloonsContainer = document.querySelector('.balloons');

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.style.left = `${Math.random() * 100}%`;
    balloon.style.animationDuration = `${Math.random() * 10 + 10}s`; // Slower speed
    balloon.innerText = 'I-Love-Jutt';
    balloonsContainer.appendChild(balloon);
    setTimeout(() => {
        balloonsContainer.removeChild(balloon);
    }, 20000); // Remove balloon after it completes its animation
}

setInterval(createBalloon, 1000); // Create a new balloon every second
