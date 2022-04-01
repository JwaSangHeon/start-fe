
$input = document.querySelector(".txt");
$addRed = document.querySelector(".add-red");
$addBtn = document.querySelector(".add-btn");
$deleteBtn = document.querySelector(".delete-btn");
$textBtn = document.querySelector(".text-btn");
$resetBtn = document.querySelector(".reset-btn");
$toggleBtn = document.querySelector(".toggle-btn");
$imageBtn = document.querySelector(".image-btn");
$box = document.querySelector(".box");

$addRed.addEventListener("click", () => {
  $box = document.querySelector(".box");
  $box.classList && $box.classList.add("red");
});

$addBtn.addEventListener("click", () => {
  $box = document.querySelector(".box");
  const addDiv = document.createElement("div");
  if ($box && $box.classList.contains("red")) {
    addDiv.classList.add("red");
  }
  addDiv.classList.add("box");
  document.body.appendChild(addDiv);
});

$deleteBtn.addEventListener("click", () => {
  $box = document.querySelector(".box");
  $box && $box.remove();
});

$textBtn.addEventListener("click", () => {
  $box = document.querySelectorAll(".box");
  $box.forEach((element) => {
    element.innerText = $input.value;
  });
});

$resetBtn.addEventListener("click", () => {
  $box = document.querySelectorAll(".box");
  $box.forEach((element) => {
    element.remove();
  });
});

$toggleBtn.addEventListener("click", () => {
  $box = document.querySelectorAll("div:not(:first-child)");
  $box.forEach((element) => {
    // if (element.classList.contains("box")) {
    //   element.classList.remove("box");
    // } else {
    //   element.classList.add("box");
    // }
    element.classList.toggle("box");
  });
});

$imageBtn.addEventListener("click", () => {
  $box = document.querySelectorAll(".box");
  $box.forEach((element) => {
    const img = '<img src="./img1.png">';
    element.innerHTML = img;
  });
});