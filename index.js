function hasTargetSum(array, target) {
  let hasMatch = false
  // Write your algorithm here
  array.forEach((number, index) => {
    array.forEach((subNumber, subIndex) => {
      if(subIndex > index ){
        const sum = number + subNumber
        if(sum == target) {
            hasMatch = true
        }
      }
    })
  });
  return hasMatch 
}

/* 
  Write the Big O time complexity of your function here
  The big O notation is O(n*n)
*/

/* 
  Add your pseudocode here
  for number in array 
    for other number in array 
      if number + other number is equal to the target 
        then target has a match 
*/

/*
  Add written explanation of your solution here
  expanation; has targate is function that takes two parameters.
  the first pramater is an arrary of numbers, the second parameter is 
  sum of the two of the items in the arrary. We create a const called has match, 
  by default we set false; then we create a foreEach loop to itterate of 
  every number in the arrary, we also keep track of the index. We create
  another forEach loop inside the first forEach loop so that we can compare
  the current index to all of the other indexes. In the second forEach loop
  we check to see if the second indext is the greater the first index, and 
  if it is then we check if the sum  is equal to the target, and if it does
  we have return a has match. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  console.log('')
  console.log("Expecting: false")
  console.log("=>", hasTargetSum([], 100))
}

module.exports = hasTargetSum;
