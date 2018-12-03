var fs = require('fs');

var multiplesOfTwo = 0;
var multiplesOfThree = 0;

function valueCounter(acc, val, index) {
  acc[val] = acc[val] || 0;
  acc[val]++;
  return acc;
};

function countIncrementer(countLib) {
  var multiplesOfTwoCounted = false;
  var multiplesOfThreeCounted = false;

  for (var key in countLib) {
    if (!multiplesOfTwoCounted && countLib[key] === 2) {
      multiplesOfTwo++;
      multiplesOfTwoCounted = true;
    }

    if (!multiplesOfThreeCounted && countLib[key] === 3) {
      multiplesOfThree++;
      multiplesOfThreeCounted = true;
    }
  }
};

function stringSplitter(string) {
  var stringArray = string.split('');
  if (!stringArray.length) return;

  var countLib = stringArray.reduce(valueCounter, {});
  countIncrementer(countLib);
};

function fileReader(err, data) {
  var dataArray = data.split('\n');
  dataArray.forEach(stringSplitter);

  console.log(multiplesOfTwo * multiplesOfThree);
};

fs.readFile('day2.txt', 'utf8', fileReader);
