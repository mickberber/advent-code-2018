var fs = require('fs');

var idList = [];
var multiplesOfTwo = 0;
var multiplesOfThree = 0;

function valueCounter(acc, val, index) {
  acc[val] = acc[val] || 0;
  acc[val]++;
  return acc;
};

function stringValidator(countLib) {
  var multiplesOfTwoCounted = false;
  var multiplesOfThreeCounted = false;

  for (var key in countLib) {
    if (!multiplesOfTwoCounted && countLib[key] === 2) {
      multiplesOfTwo++;
      multiplesOfTwoCounted = true;
      return true;
    }

    if (!multiplesOfThreeCounted && countLib[key] === 3) {
      multiplesOfThree++;
      multiplesOfThreeCounted = true;
      return true;
    }
  }

  return false;
};

function stringSplitter(string) {
  var stringArray = string.split('');
  if (!stringArray.length) {
    return;
  }

  var countLib = stringArray.reduce(valueCounter, {});
  if (stringValidator(countLib)) {
    idList.push(string);
  }
};

function stringComparer(stringOne, stringTwo) {
  for (var index = 0; index < stringOne.length; index++) {
    var slicedStringOne = stringOne.slice(0, index) + stringOne.slice(index + 1);
    var slicedStringTwo = stringTwo.slice(0, index) + stringTwo.slice(index + 1);
    if (slicedStringOne === slicedStringTwo) {
      return slicedStringOne;
    }
  }
};

function fileReader(err, data) {
  var dataArray = data.split('\n');
  dataArray.forEach(stringSplitter);
  var checksum = multiplesOfTwo * multiplesOfThree;
  console.log(checksum);
  
  idList.forEach(function(stringOne, indexOne) {
    idList.forEach(function(stringTwo, indexTwo) {
      if (indexOne !== indexTwo) {
        var validLetters = stringComparer(stringOne, stringTwo);
        if (validLetters) {
          console.log(validLetters);
          return;
        }
      }
    });
  });
};

fs.readFile('day2.txt', 'utf8', fileReader);
