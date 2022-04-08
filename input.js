// const {connect} = require('./client')

let connection
const setupInput = function (conn) {
  const stdin = process.stdin;
  stdin.setRawMode(true)
  stdin.setEncoding("utf8")
  stdin.resume();
  stdin.on("data", handleUserInput);
  connection = conn
  return stdin;
}

const handleUserInput = function (key) {

  if (key === '\u0003') { //ctrl c exits code
    process.exit();
  }
  if (key === `w`) {
    console.log("Move: up")
    connection.write("Move: up");
  }
  if (key === `s`) {
    console.log("Move: down")
    connection.write("Move: down");

  }
  if (key === `a`) {
    console.log("Move: left")
    connection.write("Move: left");

  }
  if (key === `d`) {
    console.log("Move: right")
    connection.write("Move: right");

  }
  // your code here
};
// console.log("Move: left")

// conn.write("Move: up");
// conn.write("Move: left")



module.exports = { setupInput }