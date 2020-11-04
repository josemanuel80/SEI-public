import React from 'react';
import { Link } from 'react-router-dom';

const StudentItem = ({ studentData }) => {
  const { _id, name, location, githubUsername } = studentData;
  return (
    <article key={_id} className="student">
      <Link to={`/students/${_id}`}>show</Link>
      <h3>{name}</h3>
      <dl>
        <dt>Location</dt>
        <dd>{location}</dd>
        <dt>GitHub username</dt>
        <dd>{githubUsername}</dd>
      </dl>
    </article>
  );
};

export default StudentItem;
