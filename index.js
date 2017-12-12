// Code your solution in this file.
function lowerCaseDrivers(array) {
  return array.map(function (driver) {
    return driver.toLowerCase()
  })
}

function nameToAttributes(array) {
  return array.map(function (name) {
    let brokenName = name.split(' ')
    return {firstName: brokenName[0], lastName: brokenName[1]}
  })
}

function attributesToPhrase(array) {
  return array.map(function (obj) {
    return `${obj.name} is from ${obj.hometown}`
  })
}
