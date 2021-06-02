let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(key) {

  if (key === '\u0003') {
    process.exit();
  }
  //up
  if (key === '\u0077') {
    connection.write('Move: up');
  }

  //down
  if (key === '\u0073') {
    connection.write('Move: down');

  }
  //right
  if (key === '\u0064') {
    connection.write('Move: right');
  }
  //left
  if (key === '\u0061') {
    connection.write('Move: left');
  }

  //messages
  if (key === '\u0031') {
    connection.write('Say: Got it!!');
  }
   if (key === '\u0032') {
    connection.write('Say: Hungry!!');
  }

  if (key === '\u0033') {
    connection.write('Say: Cya!!');
  }
};

module.exports = setupInput;

 // setInterval(function(){conn.write('Move: up')},50);
