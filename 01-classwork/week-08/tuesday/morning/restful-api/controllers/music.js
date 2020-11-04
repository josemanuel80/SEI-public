import { getAllMusic, getMusicResourceById } from '../models/music.js';

export const listMusic = async (request, response, next) => {
  const musicList = await getAllMusic();
  const music = JSON.parse(musicList);

  response.setHeader('Content-type', 'application/json');
  response.statusCode = 200;
  response.send(JSON.stringify(music));
};

export const getMusicById = async (request, response, next) => {
  const {
    params: { id },
  } = request;

  const musicResource = await getMusicResourceById(id);

  if (musicResource) {
    response.setHeader('Content-type', 'application/json');
    response.statusCode = 200;
    return response.send(JSON.stringify(musicResource));
  } else {
    response.setHeader('Content-type', 'application/json');
    response.statusCode = 404;
    return response.send(
      JSON.stringify({
        message: 'Error: Music resource not found.',
      }),
    );
  }
};
