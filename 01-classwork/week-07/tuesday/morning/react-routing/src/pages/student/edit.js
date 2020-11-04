import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { getStudent, updateStudent } from '../../lib/api';
import StudentForm from '../../components/student/form';

const EditStudent = () => {
  const { id } = useParams();
  const history = useHistory();

  const [student, setStudent] = useState({
    name: '',
    location: '',
    githubUsername: '',
  });

  const fetchStudent = async (id) => {
    const studentData = await getStudent(id);
    setStudent(studentData);
  };

  useEffect(() => {
    fetchStudent(id);
  }, [id]);

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;
    setStudent({ ...student, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, location, githubUsername } = student;

    try {
      const updateResponse = await updateStudent({
        name,
        location,
        githubUsername,
        id,
      });

      if (updateResponse.ok) {
        history.push(`/students/${id}`);
      }
    } catch (error) {
      console.error('Error en peticion de update.', error);
    }
  };

  return (
    <main className="page edit">
      <h2>Edit Student {student.name}</h2>

      <StudentForm
        student={student}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </main>
  );
};

export default EditStudent;
