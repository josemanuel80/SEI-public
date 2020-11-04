import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>SEI-ES Estudiantes</h1>
      <nav>
        <ul>
          <li>
            <Link to="/students">All</Link>
          </li>
          <li>
            <Link to="/students/new">New</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default withRouter(Header);
