document.addEventListener('DOMContentLoaded', () => {
    const updateForm = document.getElementById('updateForm');
    const studentsList = document.getElementById('studentsList');

    // Example student data with course names
    const students = [
        { id: 'John Doe', marks: 85, attendance: 'Present', course: 'Physics' },
        { id: 'Jane Smith', marks: 92, attendance: 'Absent', course: 'Python' },
        { id: 'Alice Johnson', marks: 78, attendance: 'Present', course: 'English' },
        { id: 'Bob Brown', marks: 88, attendance: 'Present', course: 'Web Design' },
        // Add more students as needed
    ];

    const createStudentListItem = (student) => {
        const li = document.createElement('li');
        li.textContent = `${student.id} - Course: ${student.course}, Marks: ${student.marks}, Attendance: ${student.attendance}`;
        return li;
    };

    const renderStudentsList = () => {
        studentsList.innerHTML = '';
        students.forEach(student => {
            studentsList.appendChild(createStudentListItem(student));
        });
    };

    updateForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const studentID = document.getElementById('studentID').value;
        const marks = document.getElementById('marks').value;
        const attendance = document.getElementById('attendance').value;
        const course = document.getElementById('course').value;

        const student = students.find(s => s.name === studentID && s.course === course);
        if (student) {
            student.marks = marks;
            student.attendance = attendance;
        } else {
            students.push({ name: studentID, marks: marks, attendance: attendance, course: course });
        }

        renderStudentsList();
        updateForm.reset();
    });

    // Initial render of students list
    renderStudentsList();
});