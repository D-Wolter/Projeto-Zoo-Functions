const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (typeof employeeName === 'undefined') {
    return {};
  }
  return data.employees.find((elment) =>
    [elment.firstName, elment.lastName].includes(employeeName));
}

module.exports = getEmployeeByName;
