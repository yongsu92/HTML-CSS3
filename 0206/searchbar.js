let check;  
let input = document.querySelector('.search__input');  
let text = document.querySelector('.search__p');
let search = document.querySelector('.search__bar');
let trigger = true;

input.addEventListener('click', () => {
  if (trigger) {
    search.classList.add('active');
  
    check = () => {
      let cur, oldVal;
      cur = input.value;
      
      if (cur !== oldVal) {
        text.innerHTML = input.value;
      }

      return oldVal = cur;
    };
  
    const sentinel = setInterval(check, .1);
  }
});

input.addEventListener('blur', () => {
  trigger = false;
  input.style.pointerEvents = 'none';

  input.value = '';
  text.innerHTML = '';
  search.classList.add('remove');

  setTimeout(() => {
    search.classList.add('done');

    setTimeout(() => {
      search.classList.remove('active', 'remove');

      setTimeout(() => {
        search.classList.remove('done');
        trigger = true;
        input.style.pointerEvents = 'all';
      }, 100);
    }, 100);
  }, 800);
});
