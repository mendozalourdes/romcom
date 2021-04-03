// Create variables targetting the relevant DOM elements here 👇
var title = document.querySelector('.cover-title');
var tagline1 = document.querySelector('.tagline-1');
var tagline2 = document.querySelector('.tagline-2');
var cover = document.querySelector('.cover-image');
var showRandomCvrBtn = document.querySelector('.random-cover-button');
var makeYourCvrBtn = document.querySelector('.make-new-button');
var viewSavedCoversBtn = document.querySelector('.view-saved-button');
var saveCoverBtn = document.querySelector('.save-cover-button');
var homeBtn = document.querySelector('.home-button');
var formView = document.querySelector('.form-view');
var homeView = document.querySelector('.home-view');
var savedCoverView = document.querySelector('.saved-view');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
window.addEventListener('load', createRandomCover);
showRandomCvrBtn.addEventListener('click', createRandomCover);
makeYourCvrBtn.addEventListener('click', switchFormView);
viewSavedCoversBtn.addEventListener('click', viewSavedCovers);

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

function switchFormView() {
  formView.classList.remove('hidden');
  homeView.classList.add('hidden');
  showRandomCvrBtn.classList.add('hidden');
  homeBtn.classList.remove('hidden');
  saveCoverBtn.classList.add('hidden');
}

function viewSavedCovers() {
  savedCoverView.classList.remove('hidden');
  homeView.classList.add('hidden');
  formView.classList.add('hidden');
  showRandomCvrBtn.classList.add('hidden');
  saveCoverBtn.classList.add('hidden');
  homeBtn.classList.remove('hidden');
}
