function mouseDown(ele) {
  let isClick = false;
  let offset = [0, 0];
  ele.addEventListener("mousedown", (e) => {
    isClick = true;
    offset[0] = ele.offsetLeft - e.clientX;
    offset[1] = ele.offsetTop - e.clientY;
    console.log(e.clientX, e.clientY);
  });
  document.addEventListener("mousemove", (e) => {
    if (isClick) {
      console.log(e.clientX, e.clientY);
      ele.style.left = e.clientX + offset[0] + "px";
      ele.style.top = e.clientY + offset[1] + "px";
    }
  });
  document.addEventListener("mouseup", (e) => {
    isClick = false;
  });
}

mouseDown(document.querySelector(".box"));
mouseDown(document.querySelector(".box1"));
