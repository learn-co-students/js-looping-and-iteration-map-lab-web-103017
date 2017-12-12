// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(dr) {return dr.toLowerCase(); });
}

function nameToAttributes(drivers) {
  return drivers.map(function(dr) {
    const first = dr.split(" ")[0];
    const last = dr.split(" ")[1];
    return {firstName: first, lastName: last};
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(dr) {
    return `${dr.name} is from ${dr.hometown}`;
  });
}
