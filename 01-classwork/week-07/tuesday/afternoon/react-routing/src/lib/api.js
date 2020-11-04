const BASE_URL = 'https://crudcrud.com/api';
const UNIQUE_RESOURCE = '64f80fccb0c94730ace48b5ed8fd9e5b';
const URL = `${BASE_URL}/${UNIQUE_RESOURCE}`;

export const getAllStudents = async () => {
  const response = await fetch(`${URL}/students`);
  const data = await response.json();
  return data;
};

export const getStudent = async (id) => {
  const response = await fetch(`${URL}/students/${id}`);
  const data = await response.json();
  return data;
};

export const createStudent = async ({ name, location, githubUsername }) => {
  const response = await fetch(`${URL}/students`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      location,
      githubUsername,
    }),
  });
  const data = await response.json();
  return data;
};

export const updateStudent = async ({ name, location, githubUsername, id }) => {
  const response = await fetch(`${URL}/students/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      location,
      githubUsername,
    }),
  });
  return response;
};

export const deleteStudent = async (id) => {
  const response = await fetch(`${URL}/students/${id}`, {
    method: 'DELETE',
  });
  return response;
};
