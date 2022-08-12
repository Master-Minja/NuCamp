function getStudentGrade(finalExamPoints, assignmentsPoints) {
    const percent = ((finalExamPoints + assignmentsPoints) / 300) * 100; 
    let grade = "Unknown";
    if (percent >= 90) {
      grade = "A";
    }
    if (percent >= 80) {
      grade =  "B";
    } 
    if (percent >= 70) {
      grade =  "C";
    } 
    if (percent >= 60) {
      grade =  "D";
    } 
    if (percent < 60) {
      grade =  "F";
    }
    return grade;
  }
  console.log(getStudentGrade(70, 180)); // this should console.log "B"