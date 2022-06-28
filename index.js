function reverse(word) {
  //const wordArr = word.split("");
  //const reverseWordArr = wordArr.reverse();
  //const reversedWord = reverseWordArr.join("");
  return word.split("").reverse().join("")
}

function isPalindrome(word) {
  // Write your algorithm here
  const reversedWord = reverse(word)

  if(word === reversedWord) {
    return true
  } else {
    return false
  }


}

/* 
  Add your pseudocode here

  reverse the input string 

  if the passed in string is the same as the string in reverse
    return true

    else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log()
}

module.exports = isPalindrome;
