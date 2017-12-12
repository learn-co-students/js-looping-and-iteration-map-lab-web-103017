// Code your solution in this file.
function lowerCaseDrivers (drivers) {
  let lowerCasedDrivers = drivers.map(driver => driver.toLowerCase());
  return lowerCasedDrivers;
}

function nameToAttributes (drivers) {
  return newDrivers = drivers.map(function (driver) {
    return Object.assign({}, {firstName: driver.split(' ')['0'], lastName: driver.split(' ')['1']})
  });
}

function attributesToPhrase (drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
}
