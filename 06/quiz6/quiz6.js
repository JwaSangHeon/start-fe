// const $ = (selector) => document.querySelector(selector);

const $num = document.querySelector("#num");
const $btn = document.querySelector("#btn");
const $result = document.querySelector("#result");

$btn.addEventListener("click", () => {
  const valueNum = Number($num.value);
  if (valueNum !== 0 || $num.value === "0") {
    $result.innerHTML = "";
    for (let i = 1; i < 9; i++) {
      $result.innerHTML += `<div>${valueNum} X ${i} = ${valueNum * i}</div>`;
    }
  } else {
    alert(`숫자를 입력해주세요`);
  }
});
