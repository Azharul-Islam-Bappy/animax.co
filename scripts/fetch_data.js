// script is used for fetching data

// DOM elements
let container = selectElemByID("container")
let quoteHolder = selectElemByID("quote-holder");
let quoteAuthor = selectElemByID("quote-author");

// quote data url
const url = "data_files/data_one.json";

// function for selecting elements by their IDs
function selectElemByID(id) {
  return document.querySelector(`#${id}`);
}
// function for adding html child element
function addChild(parentElem, childElem) {
  parentElem.append(childElem);
}


function fetchData(url, callback) {
  fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error("couldn't fetch data");
      }
      return response.json();
    })
    .then(data => {
      
      callback(data);
    })
    // .catch(() => console.error("Something went wrong!!"));
}
fetchData(url, displayQuote);

// function for selecting random quotes and display it
function displayQuote(data) {
  
  const today = new Date().getDate();
  const date = localStorage.getItem("quoteDate");
  let randomIndex;
  
  if (date == today) {
    randomIndex  = JSON.parse(localStorage.getItem("savedIndex")); 
  }
  
  else{
    randomIndex = Math.floor(Math.random() * data.length);
  }
  const dailyQuote = data[randomIndex];
  localStorage.setItem("savedIndex",JSON.stringify(randomIndex));
  localStorage.setItem("quoteDate",JSON.stringify(today));
  
  
  
  quoteHolder.innerText = dailyQuote.quote;
  quoteAuthor.innerText = "— " + dailyQuote.character;
  addChild(container,quoteHolder);
  addChild(container,quoteAuthor);
}

