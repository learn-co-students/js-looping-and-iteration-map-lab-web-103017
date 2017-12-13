// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let result = drivers.map(function(d){ return d.toLowerCase()})
  return result
}



function nameToAttributes(drivers) {
  let result = drivers.map(function(d){
    let name = d.split(" ");

    return Object.assign({}, {firstName: name[0], lastName: name[1]});
    // return newobj;
  })
  return result
}

function attributesToPhrase(drivers) {

  let result = drivers.map(function(d){
    return `${d.name} is from ${d.hometown}`
  })
  console.log(result)
  return result
}
