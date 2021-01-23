const starUl = document.querySelectorAll('.item');

starUl.forEach(ele => {
  ele.addEventListener('click',function(){
    let li = ele;
    let ul = document.querySelector('ul');
    let rating = document.querySelector('.rating');
    let last = document.querySelector('.current');
    
    if (!rating.classList.contains('animate-left') && !rating.classList.contains('animate-right')){
      last.classList.remove('current');
      console.log(ul.children);
      let items = ul.children;
      starUl.forEach(ele =>{
        let current = ele;
        console.log(current);
        current.toggleClass('active',ele.indexOf() > current.indexOf(ele));
        console.log(ele);
      });
    }
    
  })
})