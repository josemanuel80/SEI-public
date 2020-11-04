import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createStudent } from '../../lib/api';
import StudentForm from '../../components/student/form';

const NewStudent = () => {
  const [student, setStudent] = useState({
    name: '',
    location: '',
    githubUsername: '',
  });

  const history = useHistory();

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log({
      student,
    });

    const { name, location, githubUsername } = student;

    try {
      const newStudent = await createStudent({
        name,
        location,
        githubUsername,
      });

      if (newStudent) {
        history.push(`/students/${newStudent._id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="page new">
      <h2>New Student</h2>

      <StudentForm
        student={student}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </main>
  );
};

export default NewStudent;
