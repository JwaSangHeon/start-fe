const $btn = document.querySelector("#search-btn");
const $input = document.querySelector("#search-text");
const $result = document.querySelector("#result");
const url = "https://dapi.kakao.com/v2/search/web";
const headers = {
  Authorization: "KakaoAK 8e6158141cb85535608c40f1fbab53e0",
};
const success = (data) => {
  const { documents } = data;
  console.log(documents);

  $result.innerHTML = `<ul class="list-group list-group-flush">`;
  documents.forEach((ele) => {
    $result.innerHTML += `<li class="list-group-item"><h2><a href=${ele.url}><${ele.title}</a></h2><p>${ele.contents}</p></li>`;
  });
  $result.innerHTML += `</ul>`;
};
const error = () => {
  alert("데이터를 가져올 수 없습니다");
};

const search = () => {
  const { value } = $input;
  if (value === "") {
    alert("검색어를 입력하세요");
    return;
  }
  fetch(`${url}?query=${value}`, { headers })
    .then((res) => res.json())
    .then(success)
    .catch(error);
};

$btn.addEventListener("click", search);
