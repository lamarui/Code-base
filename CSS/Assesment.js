const students = {
    John: {
        score: 0
    },

    Tiffany: {
        score: 0
    },

    Benjamin:{
        score: 0
    }
};

function increaseScore(studentName) {
    if (!students[studentName]) {
        console.log(`Error: ${studentName} does not exist.`);
        return;
    } 

    students[studentName].score += 2;
    console.log(`${studentName} score has been increased by two and now the student'score is ${students[studentName].score}`)
}

function decreaseScore(studentName) {
    if (!students[studentName]) {
        console.log(`Error!: ${studentName} does not exist`)
        return;
    } else if (students[studentName].score === 0) {
        console.log(`Error: ${studentName} cannot go below 0`)
        return;
    }
    else{
        students[studentName].score -= 2;
        console.log(`${studentName} score has been decreased by 2 and now is ${students[studentName].score}`)
    }
}

increaseScore("John");