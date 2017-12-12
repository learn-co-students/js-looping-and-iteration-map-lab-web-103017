function lowerCaseDrivers(array){
	return array.map(function(driver){ return driver.toLowerCase() })
}

function nameToAttributes(array){
	return array.map(function(driver) {
	  const nameArray = driver.split(" ");
		return Object.assign({}, {firstName: nameArray[0]}, {lastName: nameArray[1]})
	})
}

function attributesToPhrase(array){
	return array.map(function(driver) {
		return `${driver.name} is from ${driver.hometown}`;
	})
}


// attributesToPhrase - this function takes an array of drivers as JavaScript objects and returns a string saying "<NAME OF DRIVER> is from <HOMETOWN>" for each JavaScript object in the array. Note that between the < and > we are looking for the value stored in the name and hometown object attributes, not the strings "DRIVER" or "HOMETOWN".
