// const quotes = [
//   {
//     quote: "The best way to get started is to quit talking and begin doing.",
//     author: "Walt Disney"
//   },
//   {
//     quote: "Don’t let yesterday take up too much of today.",
//     author: "Will Rogers"
//   },
//   {
//     quote: "It’s not whether you get knocked down, it’s whether you get up.",
//     author: "Vince Lombardi"
//   },
//   {
//     quote: "Success is not in what you have, but who you are.",
//     author: "Bo Bennett"
//   },
//   {
//     quote: "Believe you can and you're halfway there.",
//     author: "Theodore Roosevelt"
//   }
// ];
// function generateQuote() {
//  const quoteDisplay = document.getElementById("quote");
//  const authorDisplay = document.getElementById("author");
//  let quotesNumber = Math.random() * 5;
//  let quotesNumber1 = Math.floor(quotesNumber);

//  let quote = quotes[quotesNumber1].quote;
//  let author = quotes[quotesNumber1].author;

//  quoteDisplay.innerText = quote;
//  authorDisplay.innerText = author;
// }




let quote = "";
let author = "";
const quoteDisplay = document.getElementById("quote");
const authorDisplay = document.getElementById("author");

async function generateQuote() {
  try {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();

    quote = data.content;
    author = data.author;

    quoteDisplay.textContent = quote;
    authorDisplay.textContent = author;

    console.log(author);

  } catch (error) {
    quoteDisplay.innerHTML = "click your network";
  }

  
}