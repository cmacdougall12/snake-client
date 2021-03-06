const net = require("net");
const {IP, PORT} = require('./constants');

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('connection to game server established')
    conn.write('Name: CAM');
   
  });

  conn.on('data', (data) => {
    console.log('Message from game server: ', data);
  });

  return conn;

};

module.exports = connect;


