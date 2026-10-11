import { useEffect, useState } from 'react';

const defaultStudent = {
  name: 'Aarav Sharma',
  rollNumber: '21CS101',
  email: 'aarav@college.edu',
  department: 'Computer Science',
  year: '3rd Year',
  skills: ['React', 'JavaScript', 'Node.js', 'UI Design'],
};

function ProfileField({ label, value, onChange }) {
  return (
    <div className="field-row">
      <label>{label}</label>
      <input value={value} onChange={onChange} />
    </div>
  );
}

export default function App() {
  const [student, setStudent] = useState(defaultStudent);
  const [newSkill, setNewSkill] = useState('');

  useEffect(() => {
    const savedStudent = localStorage.getItem('student-profile');
    if (savedStudent) {
      setStudent(JSON.parse(savedStudent));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('student-profile', JSON.stringify(student));
  }, [student]);

  const updateField = (field) => (event) => {
    setStudent({ ...student, [field]: event.target.value });
  };

  const addSkill = () => {
    if (!newSkill.trim()) return;
    setStudent({ ...student, skills: [...student.skills, newSkill.trim()] });
    setNewSkill('');
  };

  const removeSkill = (skillToRemove) => {
    setStudent({
      ...student,
      skills: student.skills.filter((skill) => skill !== skillToRemove),
    });
  };

  return (
    <div className="dashboard">
      <aside className="profile-panel">
        <h1>Student Profile</h1>
        <div className="avatar">{student.name.charAt(0)}</div>
        <ProfileField label="Name" value={student.name} onChange={updateField('name')} />
        <ProfileField label="Roll Number" value={student.rollNumber} onChange={updateField('rollNumber')} />
        <ProfileField label="Email" value={student.email} onChange={updateField('email')} />
        <ProfileField label="Department" value={student.department} onChange={updateField('department')} />
        <ProfileField label="Year" value={student.year} onChange={updateField('year')} />
      </aside>

      <main className="content-panel">
        <h2>Skills</h2>
        <div className="skill-list">
          {student.skills.map((skill) => (
            <span className="skill-tag" key={skill}>
              {skill}
              <button type="button" onClick={() => removeSkill(skill)}>×</button>
            </span>
          ))}
        </div>

        <div className="skill-form">
          <input
            value={newSkill}
            onChange={(event) => setNewSkill(event.target.value)}
            placeholder="Add a skill"
          />
          <button type="button" onClick={addSkill}>Add Skill</button>
        </div>

        <div className="summary-card">
          <h3>Academic Summary</h3>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Roll No:</strong> {student.rollNumber}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Department:</strong> {student.department}</p>
          <p><strong>Year:</strong> {student.year}</p>
        </div>
      </main>
    </div>
  );
}
