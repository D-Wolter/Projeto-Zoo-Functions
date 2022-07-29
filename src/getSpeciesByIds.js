const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((animal) => ids.find((id) => id === animal.id));
}

module.exports = getSpeciesByIds;
