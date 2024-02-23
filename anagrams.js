/*Example 3: 
Write a function to check if two strings are anagrams.
 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
*/
// function AnagramTest() {
// let str1 = "Listen";
// let str2 = "Silent";
// if (str1.length != str2.length){
//     console.log("Not Anagram");
// }
//  let word1 = str1.toLowerCase().split("").sort().join()
//  let word2 = str2.toLowerCase().split("").sort().join()
// console.log(word1);
// console.log(word2);
// if(word1 === word2){
// console.log("It is An Anagram");
// }
//  else 
//  {  
//      console.log("Not Anagram");
// }
// }
// AnagramTest()

function AnagramTest(str1, str2) {
    if (str1.length != str2.length){
return false;
    }
     let word1 = str1.toLowerCase().split("").sort().join()
     let word2 = str2.toLowerCase().split("").sort().join()
    if(word1 === word2){
    return true;
    }
     else  {  
     return false;    
} }
    console.log(AnagramTest("Listen","silent"));
    console.log(AnagramTest('hello', 'world'));
     
