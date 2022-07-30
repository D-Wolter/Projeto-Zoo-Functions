const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const listaZoo = data.species.find((nome) => nome.name === animal);
  return listaZoo.residents.every((infoIndi) => infoIndi.age >= age);
}

module.exports = getAnimalsOlderThan;
