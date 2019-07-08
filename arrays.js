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

function destructivelyAddElementToBeginningOfArray(array, element){
  return array.unshift(element)
}

function addElementToEndOfArray(array, element){
  newArray = [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element)
}

function accessElementInArray(array, index){
  return array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift()
}

function removeElementFromBeginningOfArray(array){
  newArray = array.slice(1)
  return newArray
}

function destructivelyRemoveElementFromEndOfArray(array){
  return array.pop()
}

function removeElementFromEndOfArray(array){
  newArray = array.slice(0, array.length -1)
  return newArray
}