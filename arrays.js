var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]

function addElementToBeginningOfArray(array, element){
  var newArray = [element, ... array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(arra, element){
  return arra.push(element)
}