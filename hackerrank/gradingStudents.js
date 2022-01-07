function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] <= 37) {
      grades[i] = grades[i];
    } else if (5 - (grades[i] % 5) < 3) {
      grades[i] = grades[i] + (5 - (grades[i] % 5));
    } else {
      grades[i] = grades[i];
    }
  }

  return grades;
}

const grades = [84, 29, 57];

console.log(gradingStudents(grades));
