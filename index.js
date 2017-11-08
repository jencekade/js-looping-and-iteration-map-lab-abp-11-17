// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let loweredCaseDrivers1 = drivers.map(function(eachDrivers) {
    return eachDrivers.toLowerCase();
  });
  return loweredCaseDrivers1;
}

function nameToAttributes(drivers) {
  let namedToAtrributes1 = drivers.map(function(eachDrivers) {
    let fullName = eachDrivers.split(" ", 2);
    return {
      firstName: fullName[0],
      lastName: fullName[1]
    };
  });
  return namedToAttributes1;
}

function attributesToPhrase(drivers) {
  let attributedToPhrase1 = drivers.map(function(eachDriver) {
    return `${eachDriver.name} is from ${eachDriver.hometown}`;
    //return eachDriver.name + " is from " + eachDriver.hometown;
  });
  return attributedToPhrase1;
}