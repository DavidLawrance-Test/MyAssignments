function checkOddOrEven(number) {
    if (number % 2 ===0){
        return "It is even number"
    }
    else{
        return "It is not an even number"
    }
}
let number = 41;
let result = checkOddOrEven(number);
console.log(result);    