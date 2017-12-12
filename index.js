function lowerCaseDrivers(drivers) {
  const lowercase = drivers.map(function(el) { return el.toLowerCase()});
  return lowercase;
}

function nameToAttributes(drivers) {
  let format = [];
  drivers.map(function(el) { 
    let x = el.split(" ");
    let y = new Object();
    y.firstName = x[0];
    y.lastName = x[1];
    format.push(y) })
  return format;
}

function attributesToPhrase(drivers) {
  const phr = drivers.map(function(el) { return `${el.name} is from ${el.hometown}`});
  return phr;
}