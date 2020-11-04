// const fs = require('fs').promises;
import { promises as fs } from 'fs';

const writeFileOnDisk = async (path, data) => {
  await fs.writeFile(path, data, {
    encoding: 'utf8',
  });
};

const readFileOnDisk = async (path) => {
  const fileContents = await fs.readFile(path, {
    encoding: 'utf8',
  });

  console.log({
    fileContents,
  });

  return fileContents;
};

const updateOnDisk = async (path) => {
  const fileContentsBeforeUpdate = await readFileOnDisk(path);

  console.log({
    fileContentsBeforeUpdate,
  });

  const updatedMovies = `${fileContentsBeforeUpdate}
    LOTR: The Return of the King
  `;

  await writeFileOnDisk(path, updatedMovies);

  const fileContentsAfterUpdate = await readFileOnDisk(path);

  console.log({
    fileContentsAfterUpdate,
  });
};

const deleteOnDisk = async (path) => {
  console.log(`Deleting file from ${path}`);

  await fs.unlink(path);

  console.log(`File on ${path} was deleted`);
};

const start = async () => {
  // TODO: CRUD
  // Create
  await writeFileOnDisk('./data/test-1.txt', 'Hola SEI');
  // Read
  await readFileOnDisk('./data/text-file-to-read.txt');
  // Update
  await updateOnDisk('./data/text-file-to-update.txt');
  // Delete
  await deleteOnDisk('./data/test-1.txt');
};

start()
  .then(() => console.log('Running app'))
  .catch((error) => console.error('An error ocurred, ', error));
