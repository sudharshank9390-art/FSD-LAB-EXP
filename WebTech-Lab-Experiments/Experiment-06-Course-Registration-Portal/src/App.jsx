import { NavLink, Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const availableCourses = [
  'Web Development',
  'Data Structures',
  'Database Management',
  'Cloud Computing',
  'Artificial Intelligence',
];

function HomePage() {
  return (
    <div className="page-card">
      <h2>Welcome to the College Portal</h2>
      <p>Choose a course, register your details, and confirm your seat securely.</p>
      <NavLink to="/courses" className="primary-link">View Courses</NavLink>
    </div>
  );
}

function CoursesPage() {
  return (
    <div className="page-card">
      <h2>Available Courses</h2>
      <ul className="course-list">
        {availableCourses.map((course) => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <NavLink to="/registration" className="primary-link">Register Now</NavLink>
    </div>
  );
}

function RegistrationPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    studentName: '',
    email: '',
    rollNumber: '',
    phone: '',
    course: availableCourses[0],
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const nextErrors = {};
    if (!form.studentName.trim()) nextErrors.studentName = 'Student name is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.';
    if (!form.rollNumber.trim()) nextErrors.rollNumber = 'Roll number is required.';
    if (!/^\d{10}$/.test(form.phone)) nextErrors.phone = 'Phone number must be 10 digits.';
    if (!form.course) nextErrors.course = 'Select a course.';
    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    setTimeout(() => {
      sessionStorage.setItem('registrationData', JSON.stringify(form));
      setSubmitting(false);
      navigate('/success');
    }, 800);
  };

  return (
    <div className="page-card">
      <h2>Register for a Course</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <label>Student Name</label>
          <input name="studentName" value={form.studentName} onChange={handleChange} />
          {errors.studentName && <small>{errors.studentName}</small>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input name="email" value={form.email} onChange={handleChange} />
          {errors.email && <small>{errors.email}</small>}
        </div>

        <div className="form-group">
          <label>Roll Number</label>
          <input name="rollNumber" value={form.rollNumber} onChange={handleChange} />
          {errors.rollNumber && <small>{errors.rollNumber}</small>}
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input name="phone" value={form.phone} onChange={handleChange} />
          {errors.phone && <small>{errors.phone}</small>}
        </div>

        <div className="form-group">
          <label>Course</label>
          <select name="course" value={form.course} onChange={handleChange}>
            {availableCourses.map((course) => (
              <option key={course} value={course}>{course}</option>
            ))}
          </select>
          {errors.course && <small>{errors.course}</small>}
        </div>

        <button type="submit" disabled={submitting}>{submitting ? 'Submitting...' : 'Submit Registration'}</button>
      </form>
    </div>
  );
}

function SuccessPage() {
  const registration = JSON.parse(sessionStorage.getItem('registrationData') || '{}');

  return (
    <div className="page-card success-card">
      <h2>Registration Successful</h2>
      <p><strong>Name:</strong> {registration.studentName}</p>
      <p><strong>Email:</strong> {registration.email}</p>
      <p><strong>Roll Number:</strong> {registration.rollNumber}</p>
      <p><strong>Phone:</strong> {registration.phone}</p>
      <p><strong>Course:</strong> {registration.course}</p>
      <NavLink to="/courses" className="primary-link">Back to Courses</NavLink>
      <NavLink to="/" className="secondary-link">Home</NavLink>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <nav className="nav-bar">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Home</NavLink>
        <NavLink to="/courses" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Courses</NavLink>
        <NavLink to="/registration" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>Registration</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </div>
  );
}
