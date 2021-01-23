(function() {
  "use strict";
 
  var carousel = document.getElementsByClassName('carousel')[0],
      slider = carousel.getElementsByClassName('carousel__slider')[0],
      items = carousel.getElementsByClassName('carousel__slider__item'),
      prevBtn = carousel.getElementsByClassName('carousel__prev')[0],
      nextBtn = carousel.getElementsByClassName('carousel__next')[0];
 
  var width, height, totalWidth, margin = 20,
      currIndex = 0,
      interval, intervalTime = 4000;
 
  // 1번 실행
  function init() {
      // 사이즈 조절
      resize();
      move(Math.floor(items.length / 2));
      bindEvents();
 
      timer();
  }
  // 화면의 크기에 반응하여 크기를 변환하는 함수
  function resize() {
      width = window.innerHeight *.5
//    width=275;
      // width : 275px
      height = window.innerHeight *.5
//    height=275;
      // height : 585px
      totalWidth = width * items.length;
      //  1100px
      slider.style.width = totalWidth + "px";
      // 
 
      for(var i = 0; i < items.length; i++) {
          let item = items[i];
          item.style.width = (width - (margin * 2)) + "px";
          item.style.height = height + "px";
      }
  }
 
  
  // 전체 길이의 절반 값이 들어간다.
  function move(index) {
      // 예외처리
      if(index < 1) index = items.length;
      if(index > items.length) index = 1;
      
      currIndex = index;
 
      for(var i = 0; i < items.length; i++) {
          let item = items[i],
              box = item.getElementsByClassName('item__3d-frame')[0];
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
 
  
  function timer() {
      clearInterval(interval);    
      interval = setInterval(() => {
        move(++currIndex);
      }, intervalTime);    
  }
 
  function prev() {
    move(--currIndex);
    timer();
  }
 
  function next() {
    move(++currIndex);    
    timer();
  }
 
 
  function bindEvents() {
      window.onresize = resize;
      prevBtn.addEventListener('click', () => { prev(); });
      nextBtn.addEventListener('click', () => { next(); });    
  }
 
 // 1번 실행
  init(); 
 
})();