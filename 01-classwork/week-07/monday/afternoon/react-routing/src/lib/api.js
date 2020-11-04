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
