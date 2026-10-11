const gradeForm = document.getElementById('gradeForm');
const clearButton = document.getElementById('clearButton');
const resultBox = document.getElementById('result');
const studentDetails = document.getElementById('studentDetails');
const summaryTable = document.getElementById('summaryTable');

const gradeCriteria = {
  A: 90,
  B: 75,
  C: 60,
  D: 50,
  F: 0,
};

const calculateGrade = (average) => {
  if (average >= gradeCriteria.A) return 'A';
  if (average >= gradeCriteria.B) return 'B';
  if (average >= gradeCriteria.C) return 'C';
  if (average >= gradeCriteria.D) return 'D';
  return 'F';
};

const validateMark = (mark) => {
  if (mark === '' || mark === null || mark === undefined) {
    throw new Error('All marks are required.');
  }

  const numericMark = Number(mark);
  if (Number.isNaN(numericMark)) {
    throw new Error('Marks must be numeric values.');
  }
  if (numericMark < 0) {
    throw new Error('Marks cannot be negative.');
  }
  if (numericMark > 100) {
    throw new Error('Marks must be between 0 and 100.');
  }

  return numericMark;
};

const getSubjectMarks = () => {
  const inputs = [...document.querySelectorAll('[data-subject]')];
  const marks = {};
  inputs.forEach((element) => {
    const subject = element.dataset.subject;
    const mark = validateMark(element.value);
    marks[subject] = mark;
  });
  return marks;
};

const renderResult = (studentName, marks) => {
  const subjectEntries = Object.entries(marks);
  const total = subjectEntries.reduce((sum, [_, mark]) => sum + mark, 0);
  const average = total / subjectEntries.length;
  const grade = calculateGrade(average);
  const status = average >= 40 ? 'Pass' : 'Fail';

  studentDetails.innerHTML = `
    <p><strong>Student Name:</strong> ${studentName}</p>
    <p><strong>Total Marks:</strong> ${total}</p>
    <p><strong>Average:</strong> ${average.toFixed(2)}</p>
    <p><strong>Grade:</strong> ${grade}</p>
    <p class="${status === 'Pass' ? 'success' : 'error'}"><strong>Result:</strong> ${status}</p>
  `;

  const rows = subjectEntries
    .map(([subject, mark]) => `<tr><td>${subject}</td><td>${mark}</td></tr>`)
    .join('');

  summaryTable.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Marks</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;

  resultBox.classList.remove('hidden');
};

gradeForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(gradeForm);
  const studentName = (formData.get('studentName') ?? '').trim();

  try {
    if (!studentName) {
      throw new Error('Student name is required.');
    }

    const marks = getSubjectMarks();
    renderResult(studentName, marks);
  } catch (error) {
    resultBox.classList.remove('hidden');
    studentDetails.innerHTML = `<p class="error">${error.message}</p>`;
    summaryTable.innerHTML = '';
  }
});

clearButton.addEventListener('click', () => {
  gradeForm.reset();
  resultBox.classList.add('hidden');
  studentDetails.innerHTML = '';
  summaryTable.innerHTML = '';
});
