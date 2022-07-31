const data = require('../data/zoo_data');

const { species, hours } = data;

function getAnimal(animal) {
  const specie = species.find((pet) => pet.name === animal);
  if (!specie) return false;
  return specie;
}

function isDayOfWeek(day) {
  const DAYS_OF_WEEK = Object.keys(hours);
  if (DAYS_OF_WEEK.includes(day)) return true;
  return false;
}

function getAnimalByDay(day) {
  return species
    .filter((specie) => specie.availability.includes(day))
    .map((specie) => specie.name);
}

function getFullSchedule() {
  const DAYS_OF_WEEK = Object.keys(hours);
  return DAYS_OF_WEEK.reduce((acc, day) => {
    if (day === 'Monday') {
      acc[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      acc[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: getAnimalByDay(day),
      };
    }
    return acc;
  }, {});
}

function getSchedule(scheduleTarget) {
  const specie = getAnimal(scheduleTarget);
  if (specie) {
    return specie.availability;
  }

  if (isDayOfWeek(scheduleTarget)) {
    return { [scheduleTarget]: getFullSchedule()[scheduleTarget] };
  }

  return getFullSchedule();
}
module.exports = getSchedule;
