// 2주차 실습

var name = 'sangheon';
// 이름을 찍는다.
console.log(name);

var isMan = true;
var isManString = 'true';
console.log(isMan);
console.log(isManString);

function log(str){
  console.log(str);
}
log('hello');

var img ={};
img.width = 100;
img.height = 200;
console.log(img);

var arr = [1,2,3,4,5];
console.log(arr);

console.log(1+1);
console.log(name+'hello');

var me = {
  age : 25,
  name: 'sangheon',
  isMan: true,
  sayHello: function(){
    console.log('hello');
  },
};

me.sayHello();

console.log(arr.length);

for(var i=0; i<arr.length; i++){
  console.log(arr[i]);
}
console.log(i);