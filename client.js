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

  // conn.on("connect", () => {
  //   // setInterval(()=>{
  //   // console.log("Move: up")
  //   // conn.write("Move: up");
  //   // console.log("Move: left")
  //   // conn.write("Move: left")
  //   // },500)

  // });
  
  conn.on('connect', () => {
    conn.write('Name: VC');
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log('data: ', data)
  });


  return conn;
};

module.exports = {connect}