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

////////Stage 1
  //function for like input1 button
  let likebtn = document.querySelector('#likebtn');
  let dislikebtn=document.querySelector('#dislikebtn');

  let input1 = document.querySelector('#input1');
  let input2 = document.querySelector('#input2');

  likebtn.addEventListener('click',()=>{
      input1.value = parseInt(input1.value) +1;
      input1.style.color = "#12ff00";
  })


  //function for input2 dislike button

  dislikebtn.addEventListener('click',()=>{
      input2.value = parseInt(input1.value) +1;
      input2.style.color = "red";
  })


  //////Stage 2
  /// function for likebtn11 button
  let likebtn11 = document.querySelector('#likebtn11');
  let dislikebtn11 = document.querySelector('#dislikebtn11');

  let input11 = document.querySelector('#input11');
  let input22 = document.querySelector('#input22');

  likebtn11.addEventListener('click',()=>{
    input11.value = parseInt(input11.value) +1;
    input11.style.color = "#12ff00";

  })

  dislikebtn11.addEventListener('click',()=>{
    input22.value = parseInt(input22.value) +1;
    input22.style.color = "red";

  })


  /////////Stage 3
  // function of button like button111
  let likebtn111 = document.querySelector('#likebtn111');
  let dislikebtn111=document.querySelector('#dislikebtn111');

  let input111 = document.querySelector('#input111');
  let input222 = document.querySelector('#input222');

  likebtn111.addEventListener('click',()=>{
      input111.value = parseInt(input111.value) +1;
      input111.style.color = "#12ff00";
  })


  //function for input222 dislike button

  dislikebtn111.addEventListener('click',()=>{
      input222.value = parseInt(input222.value) +1;
      input222.style.color = "red";
  })



    ////First Function
    $(document).ready(function(){
      $('#show-popup-btn').click(function(){
        $('#popup-container').show();
      })
  
      //close btn
      $('#close-btn').click(function(){
        $('#popup-container').hide();
      })
    })
  
  //////Second Function
    $(document).ready(function(){
      $('#show-popup-btn1').click(function(){
        $('#popup-container1').show();
      })
  
      //close btn
      $('#close-btn1').click(function(){
        $('#popup-container1').hide();
      })
    })
    
    ///Third atttempt
    $(document).ready(function(){
      $('#show-popup-btn2').click(function(){
        $('#popup-container2').show();
      })
  
      //close btn
      $('#close-btn2').click(function(){
        $('#popup-container2').hide();
      })
    })
  