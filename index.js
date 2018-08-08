// Code your solution here:
const driversWithRevenueOver = (drivers, revenue) => {
  return drivers.filter(driver =>
    driver.revenue > revenue
  )
}

const driverNamesWithRevenueOver = (drivers, revenue) => {
  return driversWithRevenueOver(drivers, revenue).map(driver =>
    driver.name
  )
}

const exactMatch = (drivers, obj) => {
  return drivers.filter(driver =>
    driver.name === obj.name || driver.revenue === obj.revenue
  )
}

const exactMatchToList = (drivers, obj) => {
  return exactMatch(drivers, obj).map(driver => driver.name)
}
