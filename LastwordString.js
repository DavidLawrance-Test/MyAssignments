/*
Given a string s consisting of words and spaces, return the length of the last word in the string.
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
*/
let Myname = "my name is David Lawrance"
let convertarray = Myname.split(" "); // split() will be convert string to array
console.log(convertarray);   // slice() temperory remove  // split() permantent remove from string
let Lastname = convertarray.pop(); // pop() will be delete the last array value
console.log(Lastname);
let namelength = Lastname.length
console.log(namelength);

/* Example 2: 
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4. */

let s = "   fly me   to   the moon  "
let trimming = s.trimEnd()
let ConArray = trimming.split(" ");
console.log(ConArray);
let result = ConArray.pop();
console.log(result);
let Lastlength = result.length
console.log(Lastlength);

