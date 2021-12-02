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
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
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
