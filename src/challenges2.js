// Desafio 10
function techList(techName, name) {
  techName.sort();
  arrayLength = techName.length;
  objectList = [];

  if (arrayLength === 0) {
    return 'Vazio!';
  } else {
    for (let i = 0; i < arrayLength; i += 1) {
      objectList.push({ tech: techName[i], name: name });
    }
  }
  return objectList;
}
// Desafio 11
function generatePhoneNumber(numberArray) {
  //Length Check
  if (numberArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  //Number Check
  for (let i = 0; i < 11; i += 1) {
    if (numberArray[i] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else if (numberArray[i] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  //Repeat Check
  let numberRepeat = 0;
  for (let i = 0; i < 11; i += 1) {
    if (numberRepeat >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    } else {
      numberRepeat = 0;
      for (let index = 0; index < 11; index += 1) {
        if (numberArray[i] !== numberArray[index]) {
          numberRepeat += 0;
        } else {
          numberRepeat += 1;
        }
      }
    }
  }
  //Generator
  let phoneNumber = '';
  for (let i = 0; i <= 14; i += 1) {
    if (i === 0) {
      phoneNumber += '(';
    } else if (i > 0 && i < 3) {
      phoneNumber += numberArray[i - 1];
    } else if (i === 3) {
      phoneNumber += ')';
    } else if (i === 4) {
      phoneNumber += ' ';
    } else if (i > 4 && i < 10) {
      phoneNumber += numberArray[i - 3];
    } else if (i === 10) {
      phoneNumber += '-';
    } else {
      phoneNumber += numberArray[i - 4];
    }
  }
  return phoneNumber;
}
// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
