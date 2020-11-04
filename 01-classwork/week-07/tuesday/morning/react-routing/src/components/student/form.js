import React from 'react';

const StudentForm = ({ student, handleSubmit, handleChange }) => {
  return (
    <form method="post" action="/" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Student full name"
          value={student.name}
          onChange={handleChange}
          name="name"
        />
      </div>

      <div>
        <label htmlFor="location">Location</label>
        <input
          id="location"
          type="text"
          placeholder="Student location"
          value={student.location}
          onChange={handleChange}
          name="location"
        />
      </div>

      <div>
        <label htmlFor="username">GitHub username</label>
        <input
          id="username"
          type="text"
          placeholder="Student GitHub username"
          name="githubUsername"
          value={student.githubUsername}
          onChange={handleChange}
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default StudentForm;
