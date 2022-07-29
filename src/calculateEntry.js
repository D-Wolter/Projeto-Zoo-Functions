const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce(
    (acc, pessoas) => {
      if (pessoas.age < 18) {
        acc.child += 1;
      } else if (pessoas.age >= 18 && pessoas.age < 50) {
        acc.adult += 1;
      } else {
        acc.senior += 1;
      }
      return acc;
    },
    { child: 0, adult: 0, senior: 0 },

  );
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) return 0;
  const { child, adult, senior } = countEntrants(entrants);
  return (data.prices.child * child) + (data.prices.adult * adult) + (data.prices.senior * senior);
}

module.exports = { calculateEntry, countEntrants };
