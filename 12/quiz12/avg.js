function avg(...args) {
  if (typeof args[0] === "object") {
    args = [...args[0]];
  }
  let sum = args.filter((ele) => typeof ele === "number");
  const num = sum.length;
  sum = sum.reduce((pre, cur) => pre + cur, 0);
  console.log(sum / num);
}

export default avg;
