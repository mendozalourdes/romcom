// Create variables targetting the relevant DOM elements here 👇
var title = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var cover = document.querySelector('.cover-image');


// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇


// Create your event handlers and other functions here 👇


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createRandomCover() {
  showRandomTitle();
  showRandomTagline1();
  showRandomTagline2();
  showRandomPhoto();
  currentCover = new Cover(cover, title, tagline1, tagline2);
  console.log(currentCover);
}
function showRandomTitle() {
  title.innerText = titles[getRandomIndex(titles)];
}
function showRandomTagline1() {
  tagline1.innerText = descriptors[getRandomIndex(descriptors)];
}
function showRandomTagline2() {
  tagline2.innerText = descriptors[getRandomIndex(descriptors)];
}
function showRandomPhoto() {
  cover.src = covers[getRandomIndex(covers)];
}
