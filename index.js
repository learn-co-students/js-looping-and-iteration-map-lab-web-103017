// Code your solution in this file.
function lowerCaseDrivers(array) {
  let arr = [];
  for (const driver of array) {
    arr.push(driver.toLowerCase())
  };
  return arr
};

function nameToAttributes(array) {
  let arrFirst = []
  let arrLast = []
  let arr = []
  for (const driver of array) {
     first = driver.split(" ")[0]
     last = driver.split(" ")[1]
    arrFirst.push(first)
    arrLast.push(last)
  };
  for (var i = 0; i < arrFirst.length; i++) {
    let obj = {}
    obj["firstName"] = arrFirst[i]
    obj["lastName"] = arrLast[i]
    arr.push(obj)

  };
  return arr
};

function attributesToPhrase(drivers) {
  let arr = []
  for (let driver of drivers) {
    arr.push(`${driver.name} is from ${driver.hometown}`)
  };
  return arr
};
