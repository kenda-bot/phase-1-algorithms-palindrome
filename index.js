function isPalindrome(word) {
  // Write your algorithm here
  const newStringArray = word.split('');
  const reversedArray = newStringArray.reverse();
  const reversedString = reversedArray.join('');

  if(word === reversedString){
    return true;
  }
  else{
    return false;
  }

  }
  console.log(isPalindrome("ab"))
  



/* 
  Add your pseudocode here
  create a function that checks if the string  input can be spelled the same backwards
  define the reversed string and array
*/

/*
  Add written explanation of your solution here
This function is supposed to  return true if  a word is spelled the same in reverse order as in the right order
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("racecar");

  console.log("");

  console.log("Expecting: false");
  console.log("robot");
}

module.exports = isPalindrome;
