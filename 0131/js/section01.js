(function () {
  const stageElem = document.querySelector('.stage');
  // 현재 활성화된 아이템을 저장하고 있는 변수
  // 전역 변수로 설정해 주어 조금 더 범용적으로 사용이 가능하다.
  // 여러개 중 하나만 활성화 시키는 방법
  let currentItem;
  
  function activate(elem){
      elem.classList.add('door-opened');
      currentItem = elem;    
  }
    
  function inactivate(elem){
      elem.classList.remove('door-opened');
  }
  
  function doorHandler(event){
    const targetElem = event.target;
    
    // DOM에 접근하는 것은 연산 속도가 가장 느린것 중 하나이다.
    if(currentItem){
      inactivate(currentItem);
    }
    
    if(targetElem.classList.contains('door-body')){
      activate(targetElem.parentNode);
    }
  }
  stageElem.addEventListener('click',doorHandler);
  const userCheck = prompt('Select number 1~3',"1");
  activate(document.querySelector(`.door:nth-child(${userCheck})`));
})();