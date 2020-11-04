import React, { useEffect, useState } from 'react';
import { getAllStudents } from '../../lib/api';
import StudentItem from '../../components/student/item';

const ListStudents = () => {
  const [students, setStudents] = useState([]);

  const fetchAllStudents = async () => {
    const studentData = await getAllStudents();
    setStudents(studentData);
  };

  useEffect(() => {
    fetchAllStudents();
  }, []);

  return (
    <main className="page list">
      <h2>List of Students</h2>

      <div className="students">
        {students.map((student) => (
          <StudentItem studentData={student} key={student._key} view="list" />
        ))}
      </div>
    </main>
  );
};

export default ListStudents;
