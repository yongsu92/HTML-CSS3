const filles = document.querySelectorAll('.fill');
const empties = document.querySelectorAll('.empty');
const btn = document.querySelector('.btn');
const galleryIdArray = [];
let target;

// Fill Listeners
for (const fill of filles){
  fill.addEventListener('dragstart',dragStart);
  fill.addEventListener('dragend',dragEnd);
}

// Loop through empties and call drag events

for (const empty of empties){
  empty.addEventListener('dragover',dragOver);
  empty.addEventListener('dragenter',dragEnter);
  empty.addEventListener('dragleave',dragLeave);
  empty.addEventListener('drop',dragDrop);
}


//Drag function
function dragStart(e){
  target = e.target;
  this.classList.add('hold');
  setTimeout(()=> this.classList.add('invisible'),0); // 핵심
}

function dragEnd(){
  this.className = "fill";
}

function dragOver(e){
  e.preventDefault();
}

function dragEnter (e){
 e.preventDefault();
  this.classList.add('hovered');
}

function dragLeave() {
  this.classList.remove('hovered');
}

function dragDrop(){
  this.className = 'empty';
  this.append(target);
}


btn.addEventListener('click',clickEventHandler);

function clickEventHandler(e){
  e.preventDefault();
  const emptyContainer = document.querySelectorAll('.empty__container .empty');
  for (const emptyItem of emptyContainer){
    let item = emptyItem.childNodes;
    if (item[0]){
      galleryIdArray.push(item[0].dataset.value);
    }
  }
 alert(galleryIdArray);
}