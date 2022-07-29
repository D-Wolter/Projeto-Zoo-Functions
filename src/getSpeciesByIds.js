
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.filter((animal) => {
    return ids.find((id) => {
      return id === animal.id
    })
  })
    
  }


module.exports = getSpeciesByIds;



