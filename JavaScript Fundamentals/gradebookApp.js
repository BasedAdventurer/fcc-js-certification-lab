// Build a Gradebook App

// Objective: Fulfill the user stories below and get all the tests to pass to complete the lab.

// User Stories:

// 1. You should have a function named getAverage that takes an array of test scores 
//    as a parameter and returns the average score.
// 2. You should have a function named getGrade that takes a student score as a parameter 
//    and returns a string representing a letter grade based on the score. Here are the scores 
//    and their corresponding letter grades:

//    | Score Range | Grade |
//    |     100 	|  "A+" |
//    |   90 - 99 	|  "A"  |
//    |   80 - 89 	|  "B"  |
//    |   70 - 79 	|  "C"  |
//    |   60 - 69 	|  "D"  |
//    |    0 - 59 	|  "F"  |

// 3. You should have a function named hasPassingGrade that takes a score as a parameter 
//    and returns either true or false depending on if the score corresponds to a passing grade.
// 4. The hasPassingGrade function should use the getGrade function to get the letter grade, 
//    and use it to determine if the grade is passing. A passing grade is anything different from "F".
// 5. You should have a function named studentMsg that takes an array of scores and a student score 
//    as the parameters. The function should return a string with the format:
//      - "Class average: average-goes-here. Your grade: grade-goes-here. You passed the course.", if the student passed the course.
//      - "Class average: average-goes-here. Your grade: grade-goes-here. You failed the course.", if the student failed the course.
//    Replace average-goes-here with the average of total scores and grade-goes-here 
//    with the student's grade. Use getAverage to get the average score and getGrade to get the student's grade.

function getAverage(testScores) {
    if (testScores.length === 0) return NaN;
    return testScores.reduce((sum, score) => sum + score, 0) / testScores.length;
}

function getGrade(score) {
    if (score === 100) return "A+";
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

function hasPassingGrade(score) {
    return getGrade(score) !== "F";
}

function studentMsg(classScore, studentScore) {
    const classAvg = getAverage(classScore);
    const studentGrade = getGrade(studentScore);

    if (hasPassingGrade(studentScore)) {
        return `Class average: ${classAvg}. Your grade: ${studentGrade}. You passed the course.`;
    } else {
        return `Class average: ${classAvg}. Your grade: ${studentGrade}. You failed the course.`;
    }
}

// Test Output
console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));     // return 71.7
console.log(getGrade(80));                                              // return B
console.log(hasPassingGrade(80));                                       // return true
console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100)); // return Class average: 50.8. Your grade: A+. You passed the course.