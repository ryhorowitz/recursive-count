function recursiveCount(num = 0) {
  // type your code here
  console.log(num)
  if (num === 9) return
  recursiveCount(++num)
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
