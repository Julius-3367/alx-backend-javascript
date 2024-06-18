const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  let totalStudents = 0;

  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.split('\n').filter(line => line.trim() !== '');

    lines.forEach((line, index) => {
      if (index > 0 && line) {  // Skip header line
        const [firstname, lastname, age, field] = line.split(',');

        if (field) {
          if (!students[field]) {
            students[field] = [];
          }
          students[field].push(firstname);
          totalStudents++;
        }
      }
    });

    console.log(`Number of students: ${totalStudents}`);
    for (const [field, names] of Object.entries(students)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;

