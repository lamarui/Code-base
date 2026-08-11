const students = [
     {
       name: 'John',
        score: 0
    },

     {
       name: 'Tiffany',
        score: 0
    },

    {
       name: 'Benjamin',
        score: 0
    },

    {
        name: 'Vincent',
        score: 90
    }
];

function increaseScore(index) {
    if (!students[index]) {
        console.log(`Error: Student does not exist.`);
        return;
    } 

    if (students[index].score > 100 ) {
        alert(`${students[index].name} score is invalid`)
    }

    students[index].score += 2;
    console.log(`${students[index].name}score has been increased by 2 and now the student'score is ${students[index].score}`)

    displayStudents();
}

function decreaseScore(index) { 

    
    if (!students[index]) {
        console.log(`Error!: Student does not exist`)
        return;
    } else if (students[index].score === 0) {
        console.log(`Error: Score cannot go below 0`)
        return;
    }
    else{
        students[index].score -= 2;
        console.log(`${students[index].score} score has been decreased by 2 and now is ${students[index].score}`)

        displayStudents();
    }
}

function deleteStudent(index) {
    students.splice(index, 1)
    displayStudents();
}

function addStudent(params) {
    const name = prompt('Enter student name:')
    const score = Number(prompt('Enter student score'))

    students.push({
        name: name,
        score: score
    });

    displayStudents();
}

function displayStudents() {
    let studentHTML ='';
    students.forEach(
        (student, index) => {
            studentHTML += `
            <div class="student-card">

             <div class="student-info">
                <h3>${student.name}</h3>
                <p>Score: <strong>${student.score}</strong></p>
                </div>

                <div class="student-control">
                    <button class="increase-button" onclick="increaseScore(${index})">+2</button>
                    <button class="decrease-button" onclick="decreaseScore(${index})">-2</button>
                    <button class="delete-button" onclick="deleteStudent(${index})">>Delete</button>
                </div>
            </div>
            `

                    console.log(students.name, index)
        });    
        
        document.querySelector('.student-list').innerHTML = studentHTML



}
displayStudents();