// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {
    return driver.toLowerCase();
  })
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    first = driver.split(" ")[0];
    last = driver.split(" ")[1];

    return Object.assign({}, {firstName: first, lastName: last});

  });
}


function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`
  })
}
