var lastScrollTop=0;
var delta = 5;
var fixBox = document.querySelector('.bottomNav');
var fixBoxHeight =  fixBox.offsetHeight;
console.log(fixBoxHeight);


// scroll event
window.onscroll = function(e){
  didScroll = true;
}

// 0.25초 마다 스크롤 여부를 체크하여 스크롤 둥이면 hasScrolled호출
setInterval(function(){
  if(didScroll){
    hasScrolled();
    didScroll=false;
  }
},250);

function hasScrolled(){
  var nowScrollTop = window.scrollY;
  if(Math.abs(lastScrollTop-nowScrollTop) <= delta){
    return;
  }
  if(nowScrollTop > lastScrollTop && nowScrollTop >=500){
    //scroll down
    console.log('scroll down');
    fixBox.classList.remove('show');
    fixBox.classList.add('showup');
  }else{
    if(nowScrollTop+window.innerHeight < document.body.offsetHeight){
      //scroll up
      fixBox.classList.add('show');
      fixBox.classList.remove('showup');
    }
  }
  lastScrollTop = nowScrollTop;
}