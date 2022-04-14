const $btn = document.querySelector("#btn");
const $box = document.querySelector("#box");
const $min = document.querySelector("#min");
const $max = document.querySelector("#max");

const onClick = (e) => {
  const num = Math.floor(
    Math.random() * ($max.value - $min.value) + 1 + $min.value
  );
  let startNum = num - 20;
  const timer = setInterval(() => {
    startNum++;
    if (startNum >= num) {
      clearInterval(timer);
      $box.innerText = num;
      e.target.disabled = false;
    } else {
      $box.innerText = startNum;
      e.target.disabled = true;
    }
  }, 10);
};

$btn.addEventListener("click", onClick);
