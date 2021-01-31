(function(){
  const outputElem = document.querySelector('.output');
  const ilbuniElem = document.querySelector('.ilbuni');
  
  function showValue(){
    // scroll의 위치를 잡아낸다.
    //    outputElem.innerHTML = window.pageYOffset;
    // offsetTop은 처음의 위치만을 가지고 온다.
//    outputElem.innerHTML = ilbuniElem.offsetTop;
    outputElem.innerHTML = ilbuniElem.getBoundingClientRect().top;
    let positionY = ilbuniElem.getBoundingClientRect().top;
    
    if(positionY <= window.innerHeight/5){
      ilbuniElem.classList.add('zoom');
    }else{
      ilbuniElem.classList.remove('zoom');
    }
//    console.log(ilbuniElem.getBoundingClientRect());
  }

  window.addEventListener('scroll',function(){
    showValue();
  },false);
})();