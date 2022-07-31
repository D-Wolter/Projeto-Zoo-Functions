const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  let manager = false;
  employees.forEach((employee) => {
    if (employee.managers.some((managerId) => managerId === id)) {
      manager = true;
    }
  });
  return manager;
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.reduce((acc, employee) => {
    if (employee.managers.some((id) => id === managerId)) {
      acc.push(`${employee.firstName} ${employee.lastName}`);
    }
    return acc;
  }, []);
}

module.exports = { isManager, getRelatedEmployees };
