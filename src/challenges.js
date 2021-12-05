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
function fizzBuzz(fizzBuzzArray) {
  let fizzBuzzSentence = [];
  for (let i = 0; i < fizzBuzzArray.length; i += 1) {
    if (fizzBuzzArray[i] % 3 === 0 && fizzBuzzArray[i] % 5 === 0) {
      fizzBuzzSentence.push('fizzBuzz');
    } else if (fizzBuzzArray[i] % 5 === 0) {
      fizzBuzzSentence.push('buzz');
    } else if (fizzBuzzArray[i] % 3 === 0) {
      fizzBuzzSentence.push('fizz');
    } else {
      fizzBuzzSentence.push('bug!');
    }
  }
  return fizzBuzzSentence;
}
// Desafio 9
function encode(toEncode) {
  let encoded = '';
  for (let index = 0; index < toEncode.length; index += 1) {
    if (
      toEncode[index] === 'a' ||
      toEncode[index] === 'e' ||
      toEncode[index] === 'i' ||
      toEncode[index] === 'o' ||
      toEncode[index] === 'u'
    ) {
      switch (toEncode[index]) {
        case 'a':
          encoded += '1';
          break;
        case 'e':
          encoded += '2';
          break;
        case 'i':
          encoded += '3';
          break;
        case 'o':
          encoded += '4';
          break;
        case 'u':
          encoded += '5';
          break;
      }
    } else {
      encoded += toEncode[index];
    }
  }
  return encoded;
}
function decode(toDecode) {
  let decoded = '';
  for (let index = 0; index < toDecode.length; index += 1) {
    if (
      toDecode[index] === '1' ||
      toDecode[index] === '2' ||
      toDecode[index] === '3' ||
      toDecode[index] === '4' ||
      toDecode[index] === '5'
    ) {
      switch (toDecode[index]) {
        case '1':
          decoded += 'a';
          break;
        case '2':
          decoded += 'e';
          break;
        case '3':
          decoded += 'i';
          break;
        case '4':
          decoded += 'o';
          break;
        case '5':
          decoded += 'u';
          break;
      }
    } else {
      decoded += toDecode[index];
    }
  }
  return decoded;
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
