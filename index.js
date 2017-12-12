// Code your solution in this file.

function lowerCaseDrivers(drivers){
  output = drivers.map(function(driver) {
    return driver.toLowerCase();
  })
  return output
}

function nameToAttributes(drivers){
  output = drivers.map(function(driver){
    names = driver.split(" ")
    return {firstName: names[0], lastName: names[1]}
  })
  return output
}

function attributesToPhrase(drivers){
  output = drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  })
  return output
}
