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

module.exports = {connect}