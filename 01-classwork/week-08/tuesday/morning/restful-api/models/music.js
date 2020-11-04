import { promises as fs } from 'fs';

export const getAllMusic = async () => {
  const musicList = await fs.readFile('./data/music.json');
  return musicList;
};

export const getMusicResourceById = async (id) => {
  const musicListFile = await fs.readFile('./data/music.json');
  const { music } = JSON.parse(musicListFile);
  const musicResource = music.find((item) => item.id === id);
  return musicResource;
};
