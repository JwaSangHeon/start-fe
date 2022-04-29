const $btn = document.querySelector("#btn");
const $url = document.querySelector("#url");
const $log = document.querySelector("#log");

const onClickandPressEnter = async () => {
  if ($url.value === "") return;
  let res = await fetch($url.value)
    .then((response) => response.text())
    .catch((err) => err);
  $log.value = res;
};

const pressEnter = (e) => {
  if (e.keyCode === 13) {
    onClickandPressEnter();
  }
};

$btn.addEventListener("click", onClickandPressEnter);
$url.addEventListener("keypress", pressEnter);
