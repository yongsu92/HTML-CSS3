const options = document.querySelector('.options')
let activeOption1 = document.querySelector('.active')
let activeOption2 = document.querySelector('.active')

options.addEventListener('click',function(e){
  if(e.target.classList.contains('option')){
  if(e.target.dataset.value !== activeOption.dataset.value ){
    activeOption.classList.remove('active');
    e.target.classList.add('active');
    activeOption = e.target;
  }
  }
})

