(function(){
//  const person = new Object();
//  const person = {};
  // property
//  person.name = '일분이';
//  person.age = 10;
//  // method
//  // 함수도 값이다. 객체이기 때문에.
//  person.introduce = function(){
//    console.log('안녕하세요. 저는 일분이이고, 나이는 10살이에요.')
//  };
//  
//  person.introduce();
  
  
  // 생성자 함수 constructor
//  function Person(nickName,age){
//    this.nickName = nickName;
//    this.age = age;
//  }
  
  //  모든 객체에 introduce를 가지고 있으면 메모리에 좋지 못하다. 
  // 공통 메소드는 공유를 하는 것이 좋다.
  
//  Person.prototype.introduce = function(){
//      console.log(`안녕하세요. 저는 ${this.nickName}입니다. 나이는 ${this.age}살 입니다.`);
//    }
  // new 함수가 생성자로써 호출되기를 원할때 사용한다.
//  const person1 = new Person("일분이",10); // instance
//  const person2 = new Person("이분이",8);
//  
//
//  
//  person1.introduce();
//  person2.introduce();
//  
//  const person = {
//    nickName:'일분이',
//    age:10,
//    introduce:function(){
//      console.log(`안녕하세요, 저는 ${this.nickName}입니다. 나이는 ${this.age}입니다.`);
//    }
//  }
  // name은 window 전역 변수로 지정되어 있기 때문에 사용시 주의해야 한다.
  
  function Card(number,color){
    this.number = number;
    this.color= color;
    this.init();
  }
  // 모듈화에 응용이 가능하다.
  Card.prototype = {
    constructor:Card,
    init:function(){
      const mainElem = document.createElement('div');
      mainElem.style.color = this.color
      mainElem.innerHTML = this.number;
      mainElem.classList.add('card');
      document.body.appendChild(mainElem);
    }
  };
  
  const card1 = new Card(1,"green");
  const card2 = new Card(7,"blue");
  console.log(card1);
  
})();