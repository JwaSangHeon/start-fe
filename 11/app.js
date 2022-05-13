const url = "https://dapi.kakao.com/v2/search/web?query=이효리";
const $docs = document.querySelector(".docs");

function getFetch(url, callback) {
  const headers = {
    Authoriztion: "KakaoAK 8e6158141cb85535608c40f1fbab53e0",
  };
  fetch(url, { headers })
    .then((response) => response.json())
    .then((data) => callback(data));
}

getFetch(url, (data) => {
  const { documents } = data;
  console.log(documents);

  const docs = documents.map((document) => {
    console.log(document);
    return document.contents;
  });
  $docs.innerHTML = docs;
});
