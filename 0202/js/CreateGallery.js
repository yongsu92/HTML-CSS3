const init = () => {

"use strict";
// const carousel = document.querySelector('main__carousel');
const slider = document.querySelector('.carousel__slider');
console.log(slider);
const  items = document.querySelectorAll('.carousel__slider__item');
console.log(items)
const  prevBtn = document.querySelector('.carousel__prev');
const  nextBtn = document.querySelector('.carousel__next');

var width, height, totalWidth, margin = 20,
  currIndex = 0;

  resize();
  move(Math.floor(items.length / 2));
  bindEvents();


function resize() {

//      width = Math.max(window.innerWidth * .25, 275),
  width = window.innerHeight * .25,
  height = window.innerHeight * .25,
  totalWidth = width * items.length;

  slider.style.width = totalWidth + "px";
  console.log(slider.style.width);
  for(var i = 0; i < items.length; i++) {
      let item = items[i];
      item.style.width = (width - (margin * 2)) + "px";
      item.style.height = height + "px";
  }
}

function move(index) {
  console.log("move",index);
  if(index < 1) index = items.length;
  if(index > items.length) index = 1;
  currIndex = index;

  for(var i = 0; i < items.length; i++) {
      let item = items[i],
          box = item.getElementsByClassName('item__3d-frame')[0],
          title = item.getElementsByClassName('item__title')[0];
      if(i == (index - 1)) {
          item.classList.add('carousel__slider__item--active');
          box.style.transform = "perspective(1200px)";
      } else {
        item.classList.remove('carousel__slider__item--active');
          box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
          
      }
  }

  slider.style.transform = "translate3d(" + ((index * -width) + (width / 2) + window.innerWidth / 2) + "px, 0, 0)";
}


function prev() {
move(--currIndex);
}

function next() {
move(++currIndex);    
}


function bindEvents() {
  window.onresize = resize;
  prevBtn.addEventListener('click', () => { prev(); });
  nextBtn.addEventListener('click', () => { next(); });    
}


function sliderEventHandler (e){
let targetElem = e.target;
  if(targetElem.classList.contains('gallery__image')){
    alert(targetElem.dataset.value,"디테일 페이지로 이동");
    // let targetParentNode = targetElem.parentNode;
    // while(!targetParentNode.classList.contains("carousel__slider__item")){
    //       targetParentNode = targetParentNode.parentNode;
    // }
    console.log(targetElem.dataset.index);
    move(Number(targetElem.dataset.index)+1);
  }else{
    console.log(targetElem)
  }
}
const mainCarousel = document.querySelector('.main__carousel');
mainCarousel.addEventListener('click',sliderEventHandler);

// drag and drop/////////////

const filles = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');
const btn = document.querySelector('.gallery_list_btn');
let target;

// Fill Listeners
for (const fill of filles){
  fill.addEventListener('dragstart',dragStart);
  fill.addEventListener('dragend',dragEnd);
}

// Loop through empties and call drag events

for (const empty of empties){
  empty.addEventListener('dragover',dragOver);
  empty.addEventListener('dragenter',dragEnter);
  empty.addEventListener('dragleave',dragLeave);
  empty.addEventListener('drop',dragDrop);
}


//Drag function
function dragStart(e){
  target = e.target;
  this.classList.add('hold');
  setTimeout(()=> this.classList.add('invisible'),0); // 핵심
}

function dragEnd(){
    console.log('end');

    this.className = "fill";

}

function dragOver(e){
  e.preventDefault();
}

function dragEnter (e){
 e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function dragDrop(){
    this.className = 'empty';
  this.append(target);
}


btn.addEventListener('click',clickEventHandler);

function clickEventHandler(e){
  const galleryIdArray = [];

  e.preventDefault();
  const emptyContainer = document.querySelectorAll('.carousel__slider .empty');
  for (const emptyItem of emptyContainer){
    let item = emptyItem.childNodes;
      console.log(item);
    if (item[1]){
      galleryIdArray.push(item[1].dataset.value);
    }
  }
 alert(galleryIdArray);
}








}

export default {init};