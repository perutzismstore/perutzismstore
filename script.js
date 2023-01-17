let count = 2

var nextSlide = function() {
  if (count < 4) {
    if (count == 1) {
      document.getElementById("pstp-blue").style.display = "block";
      document.getElementById("pstp-rainbow").style.display = "none";
    } else if (count == 2) {
      document.getElementById("pstp-pink").style.display = "block";
      document.getElementById("pstp-blue").style.display = "none";
    } else if (count == 3) {
      document.getElementById("pstp-white").style.display = "block";
      document.getElementById("pstp-pink").style.display = "none";
    }    
    count++; 
  } else if (count == 4) {
    document.getElementById("pstp-rainbow").style.display = "block";
    document.getElementById("pstp-white").style.display = "none";
    count = 1;
  }
};

window.onload = function() {
  setInterval(function() {
    nextSlide()
  }, 2000);
}
