const n = 11;

gsap.timeline()
    .set('#container', {perspective:800})

for (let i=0; i<n; i++){ 
  
  let b = document.createElement('div');
  
  b.classList.add('box');
  b.addEventListener('click',function(){
    alert(i);
  });
  document.getElementById('container').appendChild(b);
  gsap.set(b, {
    left:'50%',
  	top:'70%',
    x:'-50%',
    y:'-50%',
    z:550,
  	width:300,
	  height:700,
    borderRadius:20,
    background:()=>'hsl('+(i/n*360)+',100%,50%)'
  });
  
  gsap.fromTo(b, {
    scaleY:0,
    // opacity:0.9,
    zIndex:()=>(i<n/2)?-i:i,
    rotationY:90+i/n*206.5,
    transformOrigin:String("50% 50% -1060%")
  },{
    scaleY:1,
    duration:1,
    delay:1-0.5*(i/n),
    ease:'elastic'
  })
  
  b.onmouseenter = (e)=>{ gsap.to(b, {duration:0.3, rotationX:-14, y:'-130%', ease:'back.out(6)'}); }  
  b.onmouseleave = (e)=>{ gsap.to(b, {duration:0.4, rotationX:0, y:'-50%'}); }
}

window.onmousemove = (e)=>{
  gsap.to('.box', {duration:1, rotationY:(i)=>45+i/n*206.5+90*(e.clientX/window.innerWidth) });
}