import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStudent } from '../../lib/api';
import StudentItem from '../../components/student/item';

const ShowStudent = () => {
  const { id } = useParams();

  const [student, setStudent] = useState({});

  const fetchStudent = async (id) => {
    const studentData = await getStudent(id);
    setStudent(studentData);
  };

  useEffect(() => {
    fetchStudent(id);
  }, [id]);

  return (
    <main className="page show">
      <h2>Show Student {id}</h2>
      <StudentItem studentData={student} view="show" />
    </main>
  );
};

export default ShowStudent;
