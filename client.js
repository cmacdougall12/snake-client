const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
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

console.log("Connecting ...");
connect();

module.exports = connect;

