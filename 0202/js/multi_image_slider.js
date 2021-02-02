var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  let i;
  const x = document.querySelectorAll(".mySlides");
  console.log(x);
  if(n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

const numberOfslider = 5;
const wrapper = document.querySelector('.wrapper')
for (let i=0; i<numberOfslider;i++){
  const mySlider = document.createElement('div')
  
  mySlider.className = 'mySlides'
  wrapper.appendChild(mySlider);
}