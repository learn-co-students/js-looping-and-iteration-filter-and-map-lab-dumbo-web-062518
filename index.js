function driversWithRevenueOver(drivers, revenue){
  return drivers.filter(function (driver){
    return driver.revenue > revenue
  })
};

function driverNamesWithRevenueOver(drivers, revenue){
const newDrivers = driversWithRevenueOver(drivers, revenue)
return newDrivers.map(function (driver){
  return driver.name
})
}

function exactMatch(drivers, object){
  objKey = Object.keys(object)[0]
  objValue = Object.values(object)[0]
  return drivers.filter(function (driver){
    return driver[objKey] === objValue
  })
};

function exactMatchToList(drivers, object){
  const nameObj = exactMatch(drivers, object)
  return nameObj.map((driver) => driver.name.toString())
}
