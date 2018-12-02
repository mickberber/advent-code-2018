var fs = require('fs');

function fileReducer(err, data) {
  var dataArray = data.split('\n');

  var frequency = dataArray.reduce(function(acc, val, index) {
    var integer = parseInt(val);
    return (isNaN(integer))
      ? acc
      : acc + integer;
  }, 0);

  console.log(frequency);
}

fs.readFile('day1.txt', 'utf8', fileReducer);
