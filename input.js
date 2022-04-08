const setupInput = function (){
  const stdin = process.stdin;
  stdin.setRawMode(true)
  stdin.setEncoding("utf8")
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
}

const handleUserInput = function () {

  if (key === '\u0003') { //ctrl c exits code
    process.exit();
  }
  // your code here
};

module.exports = {setupInput}