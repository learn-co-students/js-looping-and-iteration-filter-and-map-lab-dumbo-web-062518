// Code your solution here:
function driversWithRevenueOver(arr, price){
  const newArr = [...arr]

  return newArr.filter(function(element){
    return element.revenue >= price
  })
}

function driverNamesWithRevenueOver(arr, price){

  const newArr = arr.filter(function(element){
    return element.revenue >= price
  })

  if(newArr.length > 0){
    return newArr.map(function(element){return element.name})
  }
  else{
    return newArr
  }

}

function exactMatch(arr, search){

  return arr.filter(function(element){return element[Object.keys(search)] === search[Object.keys(search)]})

}

function exactMatchToList(arr, search){
  return exactMatch(arr, search).map(function(element){return element.name})
}
