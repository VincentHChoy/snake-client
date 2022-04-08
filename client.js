const { IP, PORT } = require("./constants");
console.log(IP);
// establishes a connection with the game server
const net = require("net");
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.on("connect", () => {
    console.log("Successfully connected to game server");
  });
  
  conn.on('connect', () => {
    conn.write('Name: VC');
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    console.log('data: ', data);
  });


  return conn;
};

module.exports = {connect};