// console.log('03');

// if('test'){
//   console.log('test');
// }

// call by value
// var a = 1;
// var b = a;
// b = 2;
// console.log(a, b);


// call by reference
// var a = [1];
// var b = a;
// b[0] = [2];
// console.log(a, b);

// var a = { x: 1 };
// var b = a;
// b.x = 2;
// console.log(a, b);

//call by value
// function byValue(count) {
//   count = count + 2;
// }
// var count = 3;
// byValue(count);
// console.log(count);

//call by reference
// function byReference(count) {
//   count.push('2');
// }
// var count = ['1'];
// byReference(count);
// console.log(count);

// const isMan = true;

// if(isMan){
//   console.log('남자');
// } else {
//   console.log('난 여자인가?');
// }

// var gender = isMan ? '남자' : '여자'; // 삼항 연산자
// console.log(gender);

// alert('alert');

// var who = prompt('당신은 누구세요?');

// var isDelete = confirm('정말 삭제합니까?');

// var enc = encodeURIComponent('카카오');
// decodeURIComponent(enc);

// isNaN('1'); //숫자 여부

// parseInt('12');
// parseInt('09', 10); //항상 두번째 인자 주는 습관
// parseFloat('10.33');

// var name = 'global';
// function test() {
//   console.log(name);
//   var name = 'local';
//   console.log(name);
// }
// test();

// //함수또한
// test2();
// function test2() {
//   console.log('test');
// }

// // 익명 즉시실행함수, 스코프 보호
// (function() {
//   //코드
// })();

// 정규 표현식

var text = 'abc def ghi jkl abc def'; // 대상 문자열
var testReg = /abc/; // 찾을 문자열
var result = testReg.test(text);
var result2 = text.match(testReg);
var result3 = text.replace(testReg,'가나다');

console.log(result); // true
console.log(result2);
console.log(result3);

