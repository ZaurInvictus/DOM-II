// MOUSEOVER
const logo = document.querySelector('.logo-heading');
logo.addEventListener('mouseover', (event) => {
  event.target.style.color = 'green';
});

// KEYDOWN
const nav = document.querySelector('a');
nav.addEventListener('keydown', (event) => {
  event.target.style.color = 'blue';
});
console.log(nav)


// WHEEL
const headerP = document.querySelector('header p');
headerP.addEventListener('wheel', (event) => {
  event.target.style.fontSize = '2.2rem';
});


// DRAG / DROP 
const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

// Fill listeners
fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

// Loop through empty boxes and add listeners
for (const empty of empties) {
  empty.addEventListener('dragover', dragOver);
  empty.addEventListener('dragenter', dragEnter);
  empty.addEventListener('dragleave', dragLeave);
  empty.addEventListener('drop', dragDrop);
}

// Drag Functions
function dragStart() {
  this.className += ' hold';
  setTimeout(() => (this.className = 'invisible'), 0);
}
function dragEnd() {
  this.className = 'fill';
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
  this.className += ' hovered';
}
function dragLeave() {
  this.className = 'empty';
}
function dragDrop() {
  this.className = 'empty';
  this.append(fill);
}


// LOAD
window.addEventListener('load', (event) => {
  console.log('page is fully loaded');
});


//FOCUS
const input = document.querySelector('.input');
input.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
});


//RESIZE 
const heightOutput = document.querySelector('#height');
const widthOutput = document.querySelector('#width');

function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}

window.onresize = reportWindowSize;



//DBLCLICK
const headerImg = document.querySelector('header img');
headerImg.addEventListener('dblclick', (event) => {
   event.target.style.width = '50%';
});
