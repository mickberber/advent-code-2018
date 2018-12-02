var fs = require('fs');

fs.readFile('day1.txt', 'utf8', function(err, data) {
  var dataArray = data.split('\n');

  var frequency = dataArray.reduce(function(acc, val, index) {
    if (typeof acc === 'string') {
      acc = parseInt(acc);
    }

    var integer = parseInt(val);
    return (typeof integer === 'number' && !isNaN(integer))
      ? acc + integer
      : acc;
  });

  console.log(frequency)
});
