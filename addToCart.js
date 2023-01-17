function changeColor(color) {
  if (color == "Blue") {
    document.getElementById("current-color").innerText = color;
    document.getElementById("pstp-blue").style.display = "inline-block"
    document.getElementById("pstp-pink").style.display = "none"
    document.getElementById("pstp-white").style.display = "none"
    document.getElementById("pstp-rainbow").style.display = "none"
  } else if (color == "Pink") {
    document.getElementById("current-color").innerText = color;
    document.getElementById("pstp-blue").style.display = "none"
    document.getElementById("pstp-pink").style.display = "inline-block"
    document.getElementById("pstp-white").style.display = "none"
    document.getElementById("pstp-rainbow").style.display = "none"
  } else if (color == "White") {
    document.getElementById("current-color").innerText = color;
    document.getElementById("pstp-blue").style.display = "none"
    document.getElementById("pstp-pink").style.display = "none"
    document.getElementById("pstp-white").style.display = "inline-block"
    document.getElementById("pstp-rainbow").style.display = "none"
  } else if (color == "Rainbow") {
    document.getElementById("current-color").innerText = color;
    document.getElementById("pstp-blue").style.display = "none"
    document.getElementById("pstp-pink").style.display = "none"
    document.getElementById("pstp-white").style.display = "none"
    document.getElementById("pstp-rainbow").style.display = "inline-block"
  }
}

function addToCart(item) {
  let cart = localStorage.getItem('cart');
  
  if (item == "perutzCup") {
    if (cart === undefined || cart === null || cart.length === 0) {
      localStorage.setItem('cart', "<img src='/ProductColors/CyrusCup.png' height=16> 1x Perutz Cup<br>");
    } else {
      localStorage.setItem('cart', "<img src='/ProductColors/CyrusCup.png' height=16> 1x Perutz Cup<br>" + localStorage.getItem('cart'));
    }
  } else if (item == "toothpaster") {
    if (cart === undefined || cart === null || cart.length === 0) {
      if (document.getElementById("current-color").innerText == "Blue") {
        localStorage.setItem('cart', `<span class="dot-small"></span>&nbsp;&nbsp; 1x Blue Toothpaster<br>`);
      } else if (document.getElementById("current-color").innerText == "Pink") {
        localStorage.setItem('cart', `<span class="dot1-small"></span>&nbsp;&nbsp; 1x Pink Toothpaster<br>`);
      } else if (document.getElementById("current-color").innerText == "White") {
        localStorage.setItem('cart', `<span class="dot2-small"></span>&nbsp;&nbsp; 1x White Toothpaster<br>`);
      } else if (document.getElementById("current-color").innerText == "Rainbow") {
        localStorage.setItem('cart', `<span class="dot3-small"></span>&nbsp;&nbsp; 1x Rainbow Toothpaster<br>`);
      } 
    } else {
      if (document.getElementById("current-color").innerText == "Blue") {
        localStorage.setItem('cart', `<span class="dot-small"></span>&nbsp;&nbsp; 1x Blue Toothpaster<br>` + localStorage.getItem('cart'));
      } else if (document.getElementById("current-color").innerText == "Pink") {
        localStorage.setItem('cart', `<span class="dot1-small"></span>&nbsp;&nbsp; 1x Pink Toothpaster<br>` + localStorage.getItem('cart'));
      } else if (document.getElementById("current-color").innerText == "White") {
        localStorage.setItem('cart', `<span class="dot2-small"></span>&nbsp;&nbsp; 1x White Toothpaster<br>` + localStorage.getItem('cart'));
      } else if (document.getElementById("current-color").innerText == "Rainbow") {
        localStorage.setItem('cart', `<span class="dot3-small"></span>&nbsp;&nbsp; 1x Rainbow Toothpaster<br>` + localStorage.getItem('cart'));
      } 
    }
  }

  document.getElementById("added-cart-alert").style.display = "inline-block";
  setTimeout(function() {
    document.getElementById("added-cart-alert").style.display = "none"; 
  }, 5000);
}

function getCart() {
  let cart = localStorage.getItem('cart');

  if (cart === undefined || cart === null || cart.length === 0) {
    console.log("no cart");
  } else {
    document.getElementById("null-text").style.display = "none";
    document.getElementById("cart").style.display = "block";

    document.getElementById("cart").innerHTML += cart;
  }
}

function resetCart() {
  localStorage.removeItem('cart');
  location.reload();
}
