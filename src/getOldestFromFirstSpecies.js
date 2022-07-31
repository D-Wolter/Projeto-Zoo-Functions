const data = require('../data/zoo_data');

const { species, employees } = data;
const employee = (id) => employees.find((element) => element.id === id);
const specie = (id) => species.find((element) => element.id === id);

function getOldestFromFirstSpecies(id) {
  const employerAdm = employee(id).responsibleFor;
  const adm = specie(employerAdm[0]);
  const olds = adm.residents.reduce((acc, elem) => (acc.age > elem.age ? acc : elem));
  return [olds.name, olds.sex, olds.age];
}

module.exports = getOldestFromFirstSpecies;
