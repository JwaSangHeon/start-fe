console.log('04');


// .getElementById()
// const element = document.getElementById('wrap');
// console.log(element);


// .querySelector()
// const element = document.querySelector('.item');
// console.log(element);


// .querySelectorAll()
// const elements =  document.querySelectorAll('div');
// console.log(elements);

// Emmet

// .createElement()
const div = document.createElement('div');
div.style.border = '5px solid lightgreen';
div.innerHTML = 'hello!';

document.body.append(div);

// .appendChild()
// const span = document.createElement('span');
// const textNode = document.createTextNode('hello!'); 
// span.appendChild(textNode);
// document.querySelector('#debug').appendChild(span);


// .innerHTML
const text = '<span>hello!!!!</span>'; 
document.querySelector('#debug').innerHTML = text;

// .remove()
const el = document.getElementById('wrap');
el.remove();

// .removeChild()
const list = document.getElementById('list'); 
list.removeChild(list.children[0]); 

// Event 등록 방법
// window.onload=function(){
//   console.log("load");
// };

window.addEventListener('load', function(){
  console.log("load!!!!");
});

window.addEventListener('load', function(){
  console.log("load222!!!!");
});

// callback
var clickCount = 0;
function popup(event){
    console.log(++clickCount);
    console.log(arguments, this ,event ,event.type,event.currentTarget);
}
document.body.addEventListener('click', popup);

document.body.addEventListener('click', function(){
    console.log("click");
});

list.style.border = '5px solid black';


// 이벤트 위임
// var app = document.getElementById("list");

// app.addEventListener("click", function(event) {
//     if(event.target.nodeName == "LI"){
//         //한개의 event리스너로 모든 li에 click이벤트 등록과 비슷
//     }
// });


// 이벤트 전파 중지
// const link = document.querySelector('a');
// link.addEventListener('click', (event) => {
//   event.preventDefault();// 기본이벤트 정지
//   window.open('http://www.naver.com');
// });

// event.stopPropagation(); // 이벤트 전파 중지
