function calculateGrade(score) {
    switch (true) {
        case (score >= 90 && score <=100 ):
        return "A";
        case (score >= 80 && score < 90 ):
        return "B";
        case (score >= 70 && score < 80 ):
        return "C";
        case (score >= 60 && score < 70 ):
        return "D";
        case (score >= 50 && score < 60 ):
        return "E";
        case (score >= 0 && score < 50 ):
        return "F";
        default:
        return ("Invalid Score");   
    }
    
}
const score = 9;
let result = calculateGrade(score);
console.log(result + " " + "Grade");
