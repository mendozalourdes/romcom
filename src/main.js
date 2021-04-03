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
var createNewBookBtn = document.querySelector('.create-new-book-button');
var inputCover = document.querySelector('#cover');
var inputTitle = document.querySelector('#title');
var input1Descriptor = document.querySelector('#descriptor1');
var input2Descriptor = document.querySelector('#descriptor2');

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = new Cover(cover, title, tagline1, tagline2);

// Add your event listeners here 👇
window.addEventListener('load', createRandomCover);
showRandomCvrBtn.addEventListener('click', createRandomCover);
makeYourCvrBtn.addEventListener('click', switchFormView);
viewSavedCoversBtn.addEventListener('click', viewSavedCovers);
homeBtn.addEventListener('click', goHomeView);
createNewBookBtn.addEventListener('click', preventEvent);
createNewBookBtn.addEventListener('click', createOwnBook);

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

function goHomeView() {
  savedCoverView.classList.add('hidden');
  homeView.classList.remove('hidden');
  savedCoverView.classList.add('hidden');
  showRandomCvrBtn.classList.remove('hidden');
  formView.classList.add('hidden');
  homeBtn.classList.add('hidden');
  saveCoverBtn.classList.remove('hidden');
}

function preventEvent(e) {
  e.preventDefault();
}

function pushNewCoverValues() {
  covers.push(inputCover.value);
  titles.push(inputTitle.value);
  descriptors.push(input1Descriptor.value);
  descriptors.push(input2Descriptor.value);
}

function createOwnBook() {
  currentCover = new Cover(cover, title, tagline1, tagline2)
  cover.src = inputCover.value
  title.innerHTML = inputTitle.value
  tagline1.innerHTML = input1Descriptor.value
  tagline2.innerHTML = input2Descriptor.value
  homeView.classList.remove('hidden');
  formView.classList.add('hidden');
  savedCoverView.classList.add('hidden');
  goHomeView();
  pushNewCoverValues();
}
