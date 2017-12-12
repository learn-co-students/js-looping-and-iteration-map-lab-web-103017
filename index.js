// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(name){
    return name.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function(firstlast){
    const firstname = firstlast.split(" ")[0]
    const lastname = firstlast.split(" ")[1]
      return {firstName: firstname, lastName: lastname}
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  });
}
