
var board = document.getElementById("board");
for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 2; j++) {
    // TODO : 여기에 필요한 코드를 작성해주세요.
    const blackPan = document.createElement("span");
    blackPan.className = "black";
    const whitePan = document.createElement("span");       
    whitePan.className = "white";
    if (i % 2 === 1) {
      board.append(whitePan, blackPan);
    } else {
      board.append(blackPan, whitePan);
    }
  }
}
const $board = document.querySelector('#board');
const $span = document.querySelector('span');

$board.addEventListener('click', (event) => {
  // $span.classList.remove('red');
  for(let i = 0; i < $board.children.length; i++){
    $board.children[i].classList.remove('red');
  }
  
  if (event.target.nodeName === 'SPAN') {
    event.target.classList.add('red');
  }
})