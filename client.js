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

module.exports = connect;


 // setInterval(function(){conn.write('Move: up')},50);
// "Move: up" - move up one square (unless facing down)
// "Move: down" - move down one square (unless facing up)
// "Move: left" - move left one square (unless facing right)
// "Move: right" - move left one square (unless facing left)