const promise = fetch("http.html");

promise.then((res) => {
  console.log("res : ", res);
  const textPromise = res.text();
  console.log("textPromise : ", textPromise);
  textPromise.then((data) => console.log(data));
});
