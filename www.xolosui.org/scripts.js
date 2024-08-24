document.addEventListener('DOMContentLoaded', function() {
  const scrollButtons = document.querySelectorAll('.scroll-button');

  scrollButtons.forEach(button => {
    button.addEventListener('click', function() {
      const container = this.parentElement.querySelector('.option-items');
      const direction = this.classList.contains('scroll-left-cat') || 
                        this.classList.contains('scroll-left-hat') || 
                        this.classList.contains('scroll-left-face') 
                        ? -1 
                        : 1;
      container.scrollBy({
        left: direction * 100, // Adjust the scroll amount as needed
        behavior: 'smooth'
      });
    });
  });
});

function changeBackground(src) {
  document.getElementById('bg').src = src;
}

function changeBody(src) {
  document.getElementById('bod').src = src;
}

function chanageHat(src) {
  document.getElementById('hat').src = src;
}
function chanageFace(src) {
  document.getElementById('face').src = src;
}
function chanageEye(src) {
  document.getElementById('eye').src = src;
}
function chanageSpecial(src) {
  document.getElementById('special').src = src;
}


function changeBackgroundEmpty() {
  document.getElementById('bg').src = "Empty.png";
}

function changeBodyEmpty() {
  document.getElementById('bod').src = "Empty.png";
}

function chanageHatEmpty() {
  document.getElementById('hat').src = "Empty.png";
}
function chanageFaceEmpty() {
  document.getElementById('face').src = "Empty.png";
}
function chanageEyeEmpty() {
  document.getElementById('eye').src = "Empty.png";
}
function chanageSpecialEmpty() {
  document.getElementById('special').src = "Empty.png";
}

function getRandomElement(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}


function generateRandom() {
  changeBackground(getRandomElement(["accessories/bgs/Bg1.png", "accessories/bgs/Bg2.png", "accessories/bgs/Bg3.png", "accessories/bgs/Bg4.png", "accessories/bgs/Bg5.png"]));
  changeBody(getRandomElement(["accessories/bodies/1 (3).png", "accessories/bodies/2 (3).png", "accessories/bodies/3 (3).png", "accessories/bodies/4 (3).png", "accessories/bodies/5 (3).png", "accessories/bodies/6 (3).png"]));
  chanageHat(getRandomElement(["accessories/hats/1.png", "accessories/hats/2.png", "accessories/hats/3.png", "accessories/hats/4.png", "accessories/hats/5.png", "accessories/hats/6.png", "accessories/hats/7 (2).png", "accessories/hats/8 (2).png", "accessories/hats/9.png", "accessories/hats/10.png"]));
  chanageFace(getRandomElement(["accessories/faces/7.png", "accessories/faces/8.png", "accessories/faces/7.png", "accessories/faces/7.png", "accessories/faces/7.png"]));
  chanageEye(getRandomElement(["accessories/eyes/1 (2).png", "accessories/eyes/2 (2).png", "accessories/eyes/3 (2).png", "accessories/eyes/4 (1).png", "accessories/eyes/5 (1).png", "accessories/eyes/6 (1).png"]));
  chanageSpecial(getRandomElement(["accessories/special/1 (4).png", "accessories/special/2 (4).png", "accessories/special/3 (4).png",
     "accessories/special/4 (2).png", "accessories/special/5 (2).png", "accessories/special/6 (2).png", "accessories/special/7 (1).png", "accessories/special/8 (1).png",
    "accessories/special/9 (1).png", "accessories/special/10 (1).png", "accessories/special/11.png","accessories/special/12.png","accessories/special/13.png","accessories/special/14.png"]));
}


function reset() {
  changeBackgroundEmpty();
  changeBodyEmpty();
  chanageHatEmpty();
  chanageFaceEmpty();
  chanageEyeEmpty();
  chanageSpecialEmpty();
}

