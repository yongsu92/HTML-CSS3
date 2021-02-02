(function() {
  "use strict";

  var carousel = document.getElementsByClassName('main__carousel')[0],
      slider = carousel.getElementsByClassName('carousel__slider')[0],
      items = carousel.getElementsByClassName('carousel__slider__item'),
      prevBtn = carousel.getElementsByClassName('carousel__prev')[0],
      nextBtn = carousel.getElementsByClassName('carousel__next')[0];
  
  var width, height, totalWidth, margin = 20,
      currIndex = 0,
      interval, intervalTime = 4000;
  
  function init() {
      resize();
      move(Math.floor(items.length / 2));
      bindEvents();
    
//      timer();
  }
  
  function resize() {
//      width = Math.max(window.innerWidth * .25, 275),
      width = window.innerHeight * .4,
      height = window.innerHeight * .4,
      totalWidth = width * items.length;
    
      slider.style.width = totalWidth + "px";
    
      for(var i = 0; i < items.length; i++) {
          let item = items[i];
          item.style.width = (width - (margin * 2)) + "px";
          item.style.height = height + "px";
      }
  }
  
  function move(index) {
    
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
  
  function timer() {
      clearInterval(interval);    
      interval = setInterval(() => {
        move(++currIndex);
      }, intervalTime);    
  }
  
  function prev() {
    move(--currIndex);
//    timer();
  }
  
  function next() {
    move(++currIndex);    
//    timer();
  }
  
  
  function bindEvents() {
      window.onresize = resize;
      prevBtn.addEventListener('click', () => { prev(); });
      nextBtn.addEventListener('click', () => { next(); });    
  }


  function sliderEventHandler (e){
    let targetElem = e.target;
    if(targetElem.classList.contains('gallery__image')){
      alert(targetElem.dataset.index);
      let targetParentNode = targetElem.parentNode;
      while(!targetParentNode.classList.contains("carousel__slider__item")){
            targetParentNode = targetParentNode.parentNode;
      }
      targetParentNode.classList.add("image__scale__up");
    }
  }
  
  slider.addEventListener('click',sliderEventHandler);

  
  init();
  
})();