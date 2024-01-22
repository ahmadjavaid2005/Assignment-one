// Question No 1  :  Grading Program
function gradeStudents(marks) {
     if (marks > 90) {
          return "A Grade";
     } else if (marks >= 70 && marks <= 90) {
          return "B Grade";
     } else if (marks >= 50 && marks < 70) {
          return "C Grade";
     } else {
          return "F Grade";
     }
}

// Example usage:
const studentMarks = 75;
const result = gradeStudents(studentMarks);
console.log(`For ${studentMarks} marks: ${result}`);
