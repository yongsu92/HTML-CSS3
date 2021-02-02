//const init = () => {

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
  move(Math.floor(items.length / 2)+1);
  bindEvents();


function resize() {

//      width = Math.max(window.innerWidth * .25, 275),
  width = window.innerHeight * .25,
  height = window.innerHeight * .25,
  totalWidth = width * items.length;

  slider.style.width = totalWidth + "px";

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
          title.style.transform = "perspective(1200px)";
      } else {
        item.classList.remove('carousel__slider__item--active');
          box.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
          title.style.transform = "perspective(1200px) rotateY(" + (i < (index - 1) ? 40 : -40) + "deg)";
          
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
//}

//export default {init};