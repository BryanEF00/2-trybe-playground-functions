// Desafio 1
function compareTrue(p1, p2) {
  if (p1 === true && p2 === true) {
    return true;
  } else {
    return false;
  }
}
// Desafio 2
function calcArea(base, height) {
  let resultado = (base * height) / 2;
  return resultado;
}
// Desafio 3
function splitSentence(toSplit) {
  let string = toSplit;
  let word = '';
  let array = [];

  for (let i = 0; i < string.length; i += 1) {
    if (string.charAt(i) !== ' ') {
      word += string.charAt(i);
    } else {
      array.push(word);
      word = '';
    }
  }
  array.push(word);
  word = '';

  return array;
}
// Desafio 4
function concatName(arrayString) {
  let lastFirst = arrayString[arrayString.length - 1] + ', ' + arrayString[0];

  return lastFirst;
}
// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = wins * 3 + ties;

  return totalPoints;
}
// Desafio 6
function highestCount(arrayNumbers) {
  let highestNumber = arrayNumbers[0];
  let counter = 0;

  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] > highestNumber) {
      highestNumber = arrayNumbers[i];
      counter = 0;
    }
    if (arrayNumbers[i] === highestNumber) {
      counter += 1;
    }
  }

  return counter;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = cat1;
  let distance2 = cat2;
  let distanceMouse = mouse;

  if (
    Math.abs(distanceMouse - distance1) < Math.abs(distanceMouse - distance2)
  ) {
    return 'cat1';
  }
  if (
    Math.abs(distanceMouse - distance1) > Math.abs(distanceMouse - distance2)
  ) {
    return 'cat2';
  }
  if (
    Math.abs(distanceMouse - distance1) === Math.abs(distanceMouse - distance2)
  ) {
    return 'os gatos trombam e o rato foge';
  }
}
// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};
