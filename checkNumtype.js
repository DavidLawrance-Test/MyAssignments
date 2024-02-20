function checkNumberType(number)
{
    if(number>0){
return "number is greater than 0";
    }
    else if (number<0) {
        return "numbers is lesser than 0";
        }
        else {
            return "number is zero"
        }
}
let number = 0;
let result = checkNumberType(number);
console.log(result);
