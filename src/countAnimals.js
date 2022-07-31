const data = require("../data/zoo_data");

function entrada(animal) {
  if (Object.values(animal).length === 2) {
    return data.species
      .filter((especie) => especie.name === Object.values(animal)[0])
      .map((elem) =>
        elem.residents.filter((s) => s.sex === Object.values(animal)[1])
      )
      .reduce((cont, resultado) => cont + resultado.length, 0);
  }
  return data.species
    .filter((especie) => especie.name === Object.values(animal)[0])
    .reduce((cont, resultado) => cont + resultado.residents.length, 0);
}

function countAnimals(obj) {
  const newObj = {};
  if (obj === undefined) {
    data.species.forEach((item) => {
      newObj[item.name] = item.residents.length;
    });
    return newObj;
  }
  return entrada(obj);
}

module.exports = countAnimals;

// countAnimals({ specie: 'penguins' })
