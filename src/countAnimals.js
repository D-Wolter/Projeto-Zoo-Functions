const data = require('../data/zoo_data');

function countAnimals(obj) {
  // if (obj === undefined) {
  //   return data.species.reduce((newobj, elemento) => {
  //     newobj[elemento.name] = elemento.residents.length;
  //     return newobj;
  //   }, {});
  // }
  // if (obj.sex === 'female' || obj.sex === 'male') {
  //   return data.species.reduce((newobj2, elemento2) => {
  //     if (obj.specie === elemento2.name) {
  //       console.log(obj.specie, elemento2.name, elemento2.residents.length);
  //       newobj2[elemento2.name] = elemento2.residents.length;
  //       return newobj2;
  //     }
  //   }, {});
  // }
}

module.exports = countAnimals;
// return data.species.filter((animal) => ids.find((id) => id === animal.id));

// console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));
