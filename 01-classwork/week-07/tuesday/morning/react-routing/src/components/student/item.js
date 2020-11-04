import React from 'react';
import { Link } from 'react-router-dom';

const StudentItem = ({ studentData, view }) => {
  console.log(view);
  const { _id, name, location, githubUsername } = studentData;

  const buttonToRender = () => {
    let link;
    switch (view) {
      case 'list':
        link = <Link to={`/students/${_id}`}>show</Link>;
        break;

      case 'show':
        link = <Link to={`/students/${_id}/edit`}>edit</Link>;
        break;

      default:
        link = <></>;
        break;
    }
    return link;
  };

  return (
    <article className="student">
      {buttonToRender()}
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
