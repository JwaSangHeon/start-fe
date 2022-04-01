
$box = document.querySelector("#box");
let isClick = false;
let offset = [0, 0]
$box.addEventListener("mousedown", (e) => {
  isClick = true;
  // console.dir($box.offsetLeft);
  // posi[0] = e.
  offset[0] = $box.offsetLeft - e.clientX;
  offset[1] = $box.offsetTop - e.clientY;
  console.log(e.clientX, e.clientY);
});
document.body.addEventListener("mousemove", (e) => {
  if (isClick) {
    console.log(e.clientX, e.clientY);
    $box.style.left = e.clientX + offset[0] + "px";
    $box.style.top = e.clientY + offset[1] + "px";
  }
});
$box.addEventListener("mouseup", (e) => {
  isClick = false;
});