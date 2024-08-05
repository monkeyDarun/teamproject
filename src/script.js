document.addEventListener('DOMContentLoaded', () => {
    const studentForm = document.getElementById('student-form');
    const studentTable = document.getElementById('student-table').getElementsByTagName('tbody')[0];

    studentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addStudent();
    });

    function addStudent() {
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const grade = document.getElementById('grade').value;

        if (name && age && grade) {
            const row = studentTable.insertRow();
            const cellName = row.insertCell(0);
            const cellAge = row.insertCell(1);
            const cellGrade = row.insertCell(2);
            const cellAction = row.insertCell(3);

            cellName.innerText = name;
            cellAge.innerText = age;
            cellGrade.innerText = grade;
            cellAction.innerHTML = '<button onclick="deleteStudent(this)" class="d">Delete</button>';

            studentForm.reset();
        }
    }

    window.deleteStudent = function(button) {
        const row = button.parentElement.parentElement;
        row.remove();
    }
});
