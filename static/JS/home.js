const quote = document.getElementById("quote");
  const author = document.getElementById("author");
  const butn = document.getElementById("btn");

  butn.addEventListener("click",getQuote);

  function getQuote(){
    fetch("http://api.quotable.io/random")
    .then(res =>res.json())
    .then(data => {
      quote.innerHTML = `"${data.content}"`;
      author.innerHTML = data.author;

    })
  }
