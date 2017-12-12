// Code your solution in this file.

function lowerCaseDrivers(drivers){
  let output = drivers.map(driver=> driver.toLowerCase())
  return output
}

function nameToAttributes(drivers){
  return drivers.map(function (driver) {
     return {firstName: driver.split(' ')['0'], lastName: driver.split(' ')['1']}
   });
 }

function attributesToPhrase(drivers){
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  });

}
