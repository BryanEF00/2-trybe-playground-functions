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
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
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
