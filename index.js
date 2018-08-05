// Code your solution here:
function driversWithRevenueOver(drivers, rev){
	return drivers.filter((driver) => driver.revenue > rev)
}

function driverNamesWithRevenueOver(drivers, rev){
	const objectsArray = driversWithRevenueOver(drivers, rev)
	return objectsArray.map((driver) => driver.name)
}

function exactMatch(drivers, obj){
	objKey = Object.keys(obj)[0]
	objValue = Object.values(obj)[0]
	// debugger
	return drivers.filter((driver) => driver[objKey] === objValue)
}

function exactMatchToList(drivers, obj){
	const objArray = exactMatch(drivers, obj)
	return objArray.map((driver) => driver.name)
}