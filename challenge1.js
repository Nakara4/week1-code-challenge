function getStudentGrade() {// Promot the user for marks
    let marks = prompt("Enter the student's marks (0-100):");
    
    // Convert the input to a number
    marks = Number(markes);
    
    // Validate the input
    if (isNaN(marks) || marks < 0 || marks > 100) {
        alart("Invalid input. Please enter a number between 0 and 100.");
        return;
    
    }

}
