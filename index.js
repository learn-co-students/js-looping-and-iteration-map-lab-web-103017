// Code your solution in this file.
function lowerCaseDrivers(drivers){
  return drivers.map(function(driver){return driver.toLowerCase()})
}

function nameToAttributes(driversObj){
  return driversObj.map(function(driver){
    let newobj = {}
    newobj.firstName = driver.split(" ")[0]
    newobj.lastName = driver.split(" ")[1]
    return newobj
  })
}

function attributesToPhrase(drivers){
  return drivers.map(function (driver){return `${driver.name} is from ${driver.hometown}`})
}
