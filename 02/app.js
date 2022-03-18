// // 2주차 실습

// var name = 'sangheon';
// // 이름을 찍는다.
// console.log(name);

// var isMan = true;
// var isManString = 'true';
// console.log(isMan);
// console.log(isManString);

// function log(str){
//   console.log(str);
// }
// log('hello');

// var img ={};
// img.width = 100;
// img.height = 200;
// console.log(img);

// var arr = [1,2,3,4,5];
// console.log(arr);

// console.log(1+1);
// console.log(name+'hello');

// var me = {
//   age : 25,
//   name: 'sangheon',
//   isMan: true,
//   sayHello: function(){
//     console.log('hello');
//   },
// };

// me.sayHello();

// console.log(arr.length);

// for(let i=0; i<arr.length; i++){
//   console.log(arr[i]);
// }



// create
var todos = ['운동'];

var todo = '게임';
todos.push(todo);
console.log(todos);

//read
todos.forEach((todo) => {
  console.log(todo);
});

// update
var updateTodo = '게임';
var updateIndex = todos.findIndex((todo) =>{
  return todo === updateTodo;
});
console.log(updateIndex);
todos[updateIndex] = '공부';
console.log(todos);

// delete
var deleteTodo = '공부';
var newTodos = todos.filter(function(todo) {
  return todo !== deleteTodo;
});
console.log(newTodos);