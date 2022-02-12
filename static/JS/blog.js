var i = 0;
function read() {
  if (!i) {
    document.getElementById("readmore").style.display = "inline";
    document.getElementById("dots").style.display = "none";
    document.getElementById("read").innerHTML = "Read Less";
    i = 1;
  } else {
    document.getElementById("readmore").style.display = "none";
    document.getElementById("dots").style.display = "inline";
    document.getElementById("read").innerHTML = "Read more";
    i = 0;
  }
}

var i = 0;
function readHealth() {
  if (!i) {
    document.getElementById("readmorehealth").style.display = "inline";
    document.getElementById("dotshealth").style.display = "none";
    document.getElementById("readhealth").innerHTML = "Read Less";
    i = 1;
  } else {
    document.getElementById("readmorehealth").style.display = "none";
    document.getElementById("dotshealth").style.display = "inline";
    document.getElementById("readhealth").innerHTML = "Read more";
    i = 0;
  }
}


var i = 0;
function readPhone() {
  if (!i) {
    document.getElementById("readmorephone").style.display = "inline";
    document.getElementById("dotsphone").style.display = "none";
    document.getElementById("readphone").innerHTML = "Read Less";
    i = 1;
  } else {
    document.getElementById("readmorephone").style.display = "none";
    document.getElementById("dotsphone").style.display = "inline";
    document.getElementById("readphone").innerHTML = "Read more";
    i = 0;
  }
}