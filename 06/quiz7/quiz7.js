const $bug = document.querySelector("#bug");
const $box = document.querySelector(".box");
const $point = document.querySelector("#point");
const $life = document.querySelector("#life");

const createBug = () => {
  const newBug = document.createElement("div");
  newBug.id = "bug";
  // 빨간타겟이 box영역에서만 랜덤으로 출현
  const randomTop = Math.floor(Math.random() * 381);
  const randomLeft = Math.floor(Math.random() * 381);
  newBug.style.top = `${randomTop}px`;
  newBug.style.left = `${randomLeft}px`;
  newBug.addEventListener("click", clickBug);
  $box.append(newBug);
};

//빨간타겟을 클릭하면 점수 +1
const clickBug = (e) => {
  $point.innerText = +$point.innerText + 1;
  e.target.remove();
  setTimeout(createBug, 2000);
};
$bug.addEventListener("click", clickBug);

// 빨간타겟을 클릭못하면 생명 -1
const clickBox = (e) => {
  if (e.target.id === "bug") return;
  $life.innerText = +$life.innerText - 1;
  // 생명이 0이면 gameover 메세지 출력
  if ($life.innerText === "0") {
    alert("Game Over!");
    $box.removeEventListener("click", clickBox);
    $bug.removeEventListener("click", clickBug);
  }
};
$box.addEventListener("click", clickBox);
