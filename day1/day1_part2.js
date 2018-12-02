var fs = require('fs');

var dataArray = [];
var previousFrequencies = {};
var stopIterating = false;

function dataCallback(lastFrequency) {
  var newFrequency = dataArray.reduce(function(acc, val, index) {
    if (previousFrequencies[acc]) {
      stopIterating = true;
      return acc;
    } else {
      previousFrequencies[acc] = true;
    }

    var integer = parseInt(val);
    return (isNaN(integer))
      ? acc
      : acc + integer;
  }, lastFrequency || 0);

  if (stopIterating) {
    console.log(newFrequency);
  } else {
    // remove newFrequency from library, will cause false positive if not deleted
    previousFrequencies[newFrequency] = false;
    dataCallback(newFrequency);
  }
};

fs.readFile('day1.txt', 'utf8', function(err, data) {
  dataArray = data.split('\n');
  dataCallback();
});
