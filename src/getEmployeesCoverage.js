const data = require('../data/zoo_data');

function makeFullObj() {
  let fullObj = {};
  return data.employees.map((employee) => {
    fullObj = {};
    fullObj.id = employee.id;
    fullObj.fullName = `${employee.firstName} ${employee.lastName}`;
    fullObj.species = (employee.responsibleFor.map((animals) => data.species
      .find((escope) => escope.id === animals))).map((type) => type.name);
    fullObj.locations = (employee.responsibleFor.map((anims) => data.species
      .find((ani) => ani.id === anims))).map((local) => local.location);
    return fullObj;
  });
}

function makeNameObj(inputObj) {
  const nameObj = {};
  const manager = data.employees.find((employee) => employee.firstName === inputObj.name
  || employee.lastName === inputObj.name);
  nameObj.id = manager.id;
  nameObj.fullName = `${manager.firstName} ${manager.lastName}`;
  nameObj.species = (manager.responsibleFor.map((specie) => data.species
    .find((type) => type.id === specie)))
    .map((item) => item.name);
  nameObj.locations = (manager.responsibleFor
    .map((animal) => data.species
      .find((res) => res.id === animal)))
    .map((local) => local.location);
  return nameObj;
}

function makeIdObj(inputObj) {
  const idObj = {};
  const manager = data.employees
    .find((employee) => employee.id === inputObj.id);
  idObj.id = manager.id;
  idObj.fullName = `${manager.firstName} ${manager.lastName}`;
  idObj.species = (manager.responsibleFor.map((elem) => data.species
    .find((ids) => ids.id === elem)))
    .map((item) => item.name);
  idObj.locations = (manager.responsibleFor
    .map((specie) => data.species
      .find((ids) => ids.id === specie)))
    .map((local) => local.location);
  return idObj;
}

function getEmployeesCoverage(inputObj) {
  try {
    if (!inputObj) {
      return makeFullObj();
    }
    if (Object.keys(inputObj)[0] === 'name') {
      return makeNameObj(inputObj);
    }
    if (Object.keys(inputObj)[0] === 'id') {
      return makeIdObj(inputObj);
    }
  } catch (e) {
    throw new Error('Informações inválidas');
  }
}

module.exports = getEmployeesCoverage;
