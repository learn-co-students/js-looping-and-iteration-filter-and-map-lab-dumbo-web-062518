// Code your solution here:
 function driversWithRevenueOver(drivers, revenue){
   return drivers.filter(function(driver){
     return driver.revenue > revenue
   })
 };

 function driverNamesWithRevenueOver(drivers, revenue){
   const newDrivers = driversWithRevenueOver(drivers, revenue)
   return newDrivers.map(function(driver){
     return driver.name
   })
 // return drivers.filter(function(driver){
 //     if (driver.revenue > revenue){
 //       return driver.name
 //     }
 //   })
 };

function exactMatch(drivers, object){
  objKey = Object.keys(object)[0]
	objValue = Object.values(object)[0]
	return drivers.filter((driver) => driver[objKey] === objValue)
  // return drivers.filter(function(driver){
  //   if (drivers.revenue === object.revenue){
  //   return driver;
  // }
  // })
};

function exactMatchToList(drivers, object){
  const exactMatchList = exactMatch(drivers, object);
  return exactMatchList.map(function(driver){
    return driver.name
  })
}
