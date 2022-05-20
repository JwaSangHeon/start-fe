function random(...args) {
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] !== "number") {
      console.log(-1);
      return -1;
    }
  }
  if (args.length === 1) {
    console.log(Math.round(Math.random() * args[0]));
    return;
  }
  console.log(Math.round(Math.random() * (args[1] - args[0])) + args[0]);
}

export default random;
