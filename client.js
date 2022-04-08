// establishes a connection with the game server
const net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',
    port: '50541',
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server")
  });

  conn.on("connect", () => {
    // setInterval(()=>{
    // console.log("Move: up")
    // conn.write("Move: up");
    // console.log("Move: left")
    // conn.write("Move: left")
    // },500)

  });
  
  conn.on("connect", () => {
    console.log("Name:SNK")


  });


  conn.on('name', () => {
    conn.write('Name:___');
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log('data: ', data)
  });


  return conn;
};

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


module.exports = {connect}