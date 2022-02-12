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