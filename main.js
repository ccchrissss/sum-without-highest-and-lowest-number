function sumArray(array) {
  
  if (array === null || array === undefined || array.length <= 2) { return 0 }

  let sortedArr = array.sort( (a,b) => a - b)
  // console.log(sortedArr)
  
  sortedArr.shift()
  sortedArr.pop()
  // console.log(sortedArr)

  let sum = sortedArr.reduce( (a, c) => a+= c )

  return sum
}

// console.log(sumArray([4, 2, 3, 7, 1]))
console.log(sumArray([6, 2, 1, 8, 10]))

// parameters: array    // a list of numbers
// return: sumWithoutMaxAndMin    // a number
// e.g. sumArray([4, 2, 3, 7, 1])
// results in 9

// declare a variable called 
// sort sumArray into ascending order
// shift and pop the array to remove the first and last elements
// use reduce method to sum the array
// return this value