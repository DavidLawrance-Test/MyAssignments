/*
If the given string and reverse string is same --> palindrome
Objective: If the given string is palindrome
hints:
1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false

*/

let person = 
{
    name : "level",
    number : 98989,
    check : function() {
        // let msg = `my name is ${this.name}, my number is, ${this.number}`;
        // console.log(msg);
        let palin = this.name.split("").reverse().join("");
        console.log(palin + " " + "is a palindrom");
        let palinnum = this.number.toString().split("").reverse().join("");
        console.log(palinnum + " " + "is a palindrom");
       if(palin === this.name && this.number == palinnum) {
        console.log(true);
       } 
else{
    console.log(false);
}   
}
}
person.check()