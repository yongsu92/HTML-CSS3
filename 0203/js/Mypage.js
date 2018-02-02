const profileItem = document.querySelector(".profile_menu");
const topBtn = document.querySelector(".move_to_top")



function manuclickHandler(e){
  const targetItem = e.target;
  if(targetItem.classList.contains("profile_menu_item")){
    let goToElem;
    if(targetItem.dataset.value === "1"){
      goToElem = document.querySelector('.second__section');
    }else if(targetItem.dataset.value === "2"){
      goToElem = document.querySelector('.third__section');
    }else if(targetItem.dataset.value === "3"){
      goToElem = document.querySelector('.forth__section');
    }
    scrollIt(goToElem)
  }
}

function scrollIt(ele){
  console.log(ele)
  topBtn.classList.add('move_to_top_show');
  window.scrollTo({
    'behavior':'smooth',
    'left':0,
    'top':ele.offsetTop
  });
}

function topclickHandler(){
  const first = document.querySelector(".profile_wrapper");
  scrollIt(first);
}

profileItem.addEventListener('click',manuclickHandler)


topBtn.addEventListener('click',topclickHandler)


window.addEventListener('scroll',function(){
  let position_2 = document.querySelector('.second__section').getBoundingClientRect().top;
  if(position_2 <= 0 ){
    topBtn.classList.add('move_to_top_show');
  }
  if(position_2 === window.innerHeight){

    topBtn.classList.remove('move_to_top_show');
  }
})